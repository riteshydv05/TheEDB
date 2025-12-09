import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaDownload, FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker - using CDN with https
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('PDF URL:', pdfUrl);
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    console.log('PDF loaded successfully, pages:', numPages);
    setNumPages(numPages);
    setError(null);
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF Load Error:', error);
    setError(error.message);
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      {/* Header */}
      <div className="bg-primary-dark text-white p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold truncate max-w-md">{title}</h2>
        <div className="flex items-center gap-4">
          <a
            href={pdfUrl}
            download
            className="px-4 py-2 bg-accent-orange hover:bg-orange-600 rounded-lg flex items-center gap-2 transition-colors text-sm"
          >
            <FaDownload /> Download
          </a>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close viewer"
          >
            <FaTimes size={24} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 text-white p-3 flex items-center justify-center gap-4">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </button>
        
        <span className="text-sm">
          Page {pageNumber} of {numPages || '--'}
        </span>
        
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= (numPages || 1)}
          className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <FaChevronRight />
        </button>

        <div className="w-px h-6 bg-gray-600 mx-2"></div>

        <button
          onClick={zoomOut}
          disabled={scale <= 0.5}
          className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Zoom out"
        >
          <FaSearchMinus />
        </button>
        
        <span className="text-sm min-w-[60px] text-center">
          {Math.round(scale * 100)}%
        </span>
        
        <button
          onClick={zoomIn}
          disabled={scale >= 2.0}
          className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Zoom in"
        >
          <FaSearchPlus />
        </button>
      </div>

      {/* PDF Document */}
      <div className="flex-1 overflow-auto bg-gray-900 p-4 flex justify-center items-start">
        <div className="w-full flex justify-center">
          {loading && !error && (
            <div className="flex flex-col items-center justify-center p-8 text-white min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-orange mb-4"></div>
              <p className="text-sm">Loading PDF...</p>
            </div>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            error={
              <div className="text-white text-center p-8 max-w-md mx-auto">
                <div className="bg-red-500/20 rounded-lg p-6">
                  <p className="text-lg font-semibold mb-2">Failed to load PDF</p>
                  <p className="text-sm text-gray-300 mb-4">
                    {error || 'Unable to load the PDF file'}
                  </p>
                  <div className="text-xs text-left bg-black/30 p-3 rounded mb-4">
                    <p className="font-semibold mb-2">Troubleshooting:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>Check if the PDF URL is accessible</li>
                      <li>Verify Cloudinary URL is correct</li>
                      <li>Try opening the URL directly in browser</li>
                      <li>Check browser console for errors</li>
                    </ul>
                  </div>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-accent-orange hover:bg-orange-600 rounded text-sm transition-colors"
                  >
                    Open PDF in New Tab
                  </a>
                </div>
              </div>
            }
          >
            {!loading && numPages && (
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="shadow-2xl"
              />
            )}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
