import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt, FaTimes, FaFilePdf, FaCheckCircle } from 'react-icons/fa';

interface UploadedFile {
  publicId: string;
  url: string;
  secureUrl: string;
  fileName: string;
  format: string;
  bytes: number;
}

interface PDFUploadProps {
  onUploadComplete?: (file: UploadedFile) => void;
  onClose?: () => void;
}

const PDFUpload: React.FC<PDFUploadProps> = ({ onUploadComplete, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please select a PDF file');
        return;
      }
      // 100MB limit
      if (file.size > 100 * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        setError(`File size is ${fileSizeMB}MB. Maximum allowed is 100MB.`);
        return;
      }
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      // 100MB limit
      if (file.size > 100 * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        setError(`File size is ${fileSizeMB}MB. Maximum allowed is 100MB.`);
        return;
      }
      setSelectedFile(file);
      setError(null);
    } else {
      setError('Please drop a PDF file');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const uploadToCloudinary = async () => {
    if (!selectedFile) return;

    // Check if environment variables are configured
    if (!cloudName || !uploadPreset) {
      setError('Configuration error: Please check your .env file');
      console.error('Missing Cloudinary configuration:', { cloudName, uploadPreset });
      return;
    }

    setUploading(true);
    setError(null);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', uploadPreset);
    formData.append('resource_type', 'raw');

    try {
      console.log('Uploading to Cloudinary:', {
        cloudName,
        uploadPreset,
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
        fileType: selectedFile.type
      });

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Cloudinary error response:', errorData);
        
        if (response.status === 400) {
          if (errorData.error?.message) {
            const message = errorData.error.message;
            // Check for file size error
            if (message.includes('File size too large')) {
              const fileSizeMB = (selectedFile.size / (1024 * 1024)).toFixed(2);
              throw new Error(`File size is ${fileSizeMB}MB. Please check your Cloudinary plan limits or compress your PDF.`);
            }
            throw new Error(`Upload failed: ${message}`);
          }
          throw new Error('Invalid upload preset. Make sure it allows raw/auto uploads');
        } else if (response.status === 401) {
          throw new Error('Authentication failed. Check your upload preset is Unsigned');
        } else {
          throw new Error(`Upload failed with status ${response.status}`);
        }
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      
      const uploadedFileData: UploadedFile = {
        publicId: data.public_id,
        url: data.url,
        secureUrl: data.secure_url,
        fileName: selectedFile.name,
        format: data.format,
        bytes: data.bytes,
      };

      setUploadedFile(uploadedFileData);
      setUploadProgress(100);
      
      if (onUploadComplete) {
        onUploadComplete(uploadedFileData);
      }

      // Show success message for 2 seconds then reset
      setTimeout(() => {
        setSelectedFile(null);
        setUploadedFile(null);
        setUploadProgress(0);
      }, 3000);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed. Please try again.';
      setError(errorMessage);
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-primary-dark">Upload PDF</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Upload Area */}
      {!uploadedFile && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            selectedFile
              ? 'border-accent-orange bg-orange-50'
              : 'border-gray-300 hover:border-accent-orange hover:bg-gray-50'
          }`}
        >
          {!selectedFile ? (
            <>
              <FaCloudUploadAlt className="text-6xl text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Drag & Drop your PDF here
              </p>
              <p className="text-sm text-gray-500 mb-4">or</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
              >
                Browse Files
              </button>
              <p className="text-xs text-gray-400 mt-4">
                Maximum file size: <span className="font-semibold text-orange-600">100MB</span> • Supported format: PDF
              </p>
            </>
          ) : (
            <>
              <FaFilePdf className="text-6xl text-red-500 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-800 mb-2">
                {selectedFile.name}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {formatFileSize(selectedFile.size)}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={uploadToCloudinary}
                  disabled={uploading}
                  className="px-6 py-3 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Uploading...' : 'Upload to Cloud'}
                </button>
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setError(null);
                  }}
                  disabled={uploading}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Success Message */}
      {uploadedFile && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
          <p className="text-lg font-semibold text-green-800 mb-2">
            Upload Successful!
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Your PDF has been uploaded to Cloudinary
          </p>
          <div className="bg-white rounded p-3 text-left">
            <p className="text-xs text-gray-500 mb-1">Secure URL:</p>
            <p className="text-sm text-gray-800 break-all font-mono bg-gray-50 p-2 rounded">
              {uploadedFile.secureUrl}
            </p>
          </div>
        </div>
      )}

      {/* Upload Progress */}
      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-accent-orange h-full transition-all duration-300 animate-pulse"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-primary-dark mb-2">Instructions:</h4>
        <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
          <li>Select or drag & drop your PDF file</li>
          <li>Click "Upload to Cloud" to start uploading</li>
          <li>Copy the secure URL after successful upload</li>
          <li>Use this URL in your publication data</li>
        </ol>
      </div>
    </div>
  );
};

export default PDFUpload;
