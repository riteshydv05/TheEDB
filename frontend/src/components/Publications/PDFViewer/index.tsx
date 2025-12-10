// Enhanced PDF Viewer Component
import { useState, useEffect, memo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaDownload, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearchPlus, 
  FaSearchMinus,
  FaExpand,
  FaCompress,
  FaSpinner
} from 'react-icons/fa';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export const PDFViewer = memo(({ pdfUrl, title, onClose }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when viewer is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF Load Error:', error);
    setError(error.message);
    setLoading(false);
  };

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex items-center justify-between shadow-lg"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold truncate max-w-[200px] md:max-w-md">{title}</h2>
            {numPages && (
              <span className="hidden sm:inline text-sm text-gray-400">
                {numPages} pages
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-3 py-2 md:px-4 bg-accent-orange hover:bg-orange-600 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
            >
              <FaDownload /> <span className="hidden sm:inline">Download</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close viewer"
            >
              <FaTimes size={24} />
            </motion.button>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="bg-gray-800 text-white p-3 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          {/* Page Navigation */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </motion.button>
            
            <span className="text-sm px-3 py-1 bg-gray-700 rounded">
              {pageNumber} / {numPages || '--'}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNextPage}
              disabled={pageNumber >= (numPages || 1)}
              className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <FaChevronRight />
            </motion.button>
          </div>

          <div className="w-px h-6 bg-gray-600 hidden sm:block" />

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom out"
            >
              <FaSearchMinus />
            </motion.button>
            
            <span className="text-sm min-w-[60px] text-center px-2 py-1 bg-gray-700 rounded">
              {Math.round(scale * 100)}%
            </span>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={zoomIn}
              disabled={scale >= 3.0}
              className="p-2 hover:bg-white/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom in"
            >
              <FaSearchPlus />
            </motion.button>
          </div>

          <div className="w-px h-6 bg-gray-600 hidden sm:block" />

          {/* Fullscreen */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFullscreen}
            className="p-2 hover:bg-white/10 rounded transition-colors hidden sm:block"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </motion.button>
        </div>

        {/* PDF Document */}
        <div className="flex-1 overflow-auto bg-gray-900 p-4 flex justify-center items-start">
          <div className="w-full flex justify-center">
            {loading && !error && (
              <div className="flex flex-col items-center justify-center p-8 text-white min-h-[400px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="mb-4"
                >
                  <FaSpinner className="text-4xl text-accent-orange" />
                </motion.div>
                <p className="text-sm text-gray-400">Loading PDF...</p>
              </div>
            )}
            
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={null}
              error={
                <div className="text-white text-center p-8 max-w-md mx-auto">
                  <div className="bg-red-500/20 rounded-xl p-6">
                    <p className="text-lg font-semibold mb-2">Failed to load PDF</p>
                    <p className="text-sm text-gray-300 mb-4">
                      {error || 'Unable to load the PDF file'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-accent-orange hover:bg-orange-600 rounded-lg text-sm transition-colors text-center"
                      >
                        Open in New Tab
                      </a>
                      <button
                        onClick={handleDownload}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                      >
                        Download PDF
                      </button>
                    </div>
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
                  className="shadow-2xl rounded-lg overflow-hidden"
                />
              )}
            </Document>
          </div>
        </div>

        {/* Mobile Page Navigation */}
        <div className="sm:hidden bg-gray-800 p-4 flex justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="flex-1 py-3 bg-gray-700 rounded-lg disabled:opacity-50 font-medium"
          >
            Previous
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
            className="flex-1 py-3 bg-accent-orange rounded-lg disabled:opacity-50 font-medium"
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

PDFViewer.displayName = 'PDFViewer';
