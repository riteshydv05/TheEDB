// PDF Viewer Hook
import { useState, useCallback } from 'react';
import { trackPdfView, trackPdfDownload, downloadPdf } from '../services/publicationsService';

interface PdfViewerState {
  isOpen: boolean;
  pdfUrl: string | null;
  title: string;
}

interface UsePdfViewerReturn {
  viewerState: PdfViewerState;
  openViewer: (pdfUrl: string, title: string) => void;
  closeViewer: () => void;
  downloadCurrentPdf: () => void;
  handleDownload: (pdfUrl: string, fileName: string, publicationId?: string | number) => void;
}

export const usePdfViewer = (): UsePdfViewerReturn => {
  const [viewerState, setViewerState] = useState<PdfViewerState>({
    isOpen: false,
    pdfUrl: null,
    title: '',
  });

  const openViewer = useCallback((pdfUrl: string, title: string) => {
    setViewerState({
      isOpen: true,
      pdfUrl,
      title,
    });
    // Track view
    trackPdfView(pdfUrl);
  }, []);

  const closeViewer = useCallback(() => {
    setViewerState({
      isOpen: false,
      pdfUrl: null,
      title: '',
    });
  }, []);

  const downloadCurrentPdf = useCallback(() => {
    if (viewerState.pdfUrl) {
      downloadPdf(viewerState.pdfUrl, `${viewerState.title}.pdf`);
      trackPdfDownload(viewerState.pdfUrl);
    }
  }, [viewerState]);

  const handleDownload = useCallback((
    pdfUrl: string, 
    fileName: string, 
    publicationId?: string | number
  ) => {
    downloadPdf(pdfUrl, fileName);
    if (publicationId) {
      trackPdfDownload(publicationId);
    }
  }, []);

  return {
    viewerState,
    openViewer,
    closeViewer,
    downloadCurrentPdf,
    handleDownload,
  };
};
