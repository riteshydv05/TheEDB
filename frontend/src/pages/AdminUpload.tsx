import React, { useState } from 'react';
import { PDFUpload } from '../components/Publications';
import { FaCopy, FaCheckCircle } from 'react-icons/fa';

interface UploadedPDF {
  publicId: string;
  url: string;
  secureUrl: string;
  fileName: string;
}

const AdminUpload: React.FC = () => {
  const [uploadedPDFs, setUploadedPDFs] = useState<UploadedPDF[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleUploadComplete = (file: any) => {
    const newPDF: UploadedPDF = {
      publicId: file.publicId,
      url: file.url,
      secureUrl: file.secureUrl,
      fileName: file.fileName,
    };
    setUploadedPDFs(prev => [newPDF, ...prev]);
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">PDF Upload Center</h1>
          <p className="text-gray-600">
            Upload PDFs to Cloudinary and get URLs for your publications
          </p>
        </div>

        {/* Upload Component */}
        <div className="max-w-3xl mx-auto mb-12">
          <PDFUpload onUploadComplete={handleUploadComplete} />
        </div>

        {/* Uploaded PDFs History */}
        {uploadedPDFs.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Recently Uploaded PDFs</h2>
            <div className="space-y-4">
              {uploadedPDFs.map((pdf, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark mb-1">
                        {pdf.fileName}
                      </h3>
                      <p className="text-sm text-gray-500">Public ID: {pdf.publicId}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Uploaded
                    </span>
                  </div>

                  {/* Secure URL */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Secure URL (Use this in Publications):
                      </label>
                      <button
                        onClick={() => copyToClipboard(pdf.secureUrl)}
                        className="flex items-center gap-2 px-3 py-1 bg-accent-orange hover:bg-orange-600 text-white rounded text-sm transition-colors"
                      >
                        {copiedUrl === pdf.secureUrl ? (
                          <>
                            <FaCheckCircle /> Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy /> Copy URL
                          </>
                        )}
                      </button>
                    </div>
                    <code className="block bg-white p-3 rounded text-sm text-gray-800 break-all border border-gray-200">
                      {pdf.secureUrl}
                    </code>
                  </div>

                  {/* Usage Example */}
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-2">
                      📝 Add to Publications.tsx:
                    </p>
                    <pre className="text-xs bg-white p-3 rounded overflow-x-auto border border-blue-200">
{`{
  id: 1,
  title: 'Your Publication Title',
  // ... other fields ...
  pdfUrl: '${pdf.secureUrl}',
}`}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        {uploadedPDFs.length === 0 && (
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-primary-dark mb-4">How to Use:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span>Upload your PDF file using the form above</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span>After upload, copy the secure URL that appears</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span>Add the URL to your publication data in <code className="bg-gray-100 px-2 py-1 rounded">src/pages/Publications.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <span>The PDF will be viewable and downloadable on your Publications page</span>
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUpload;
