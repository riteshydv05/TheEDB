// Publications Service - Manages publications data

export interface Publication {
  id: number | string;
  title: string;
  subtitle?: string;
  authors: string;
  date: string;
  category: string;
  image: string;
  description?: string;
  isFeatured?: boolean;
  pdfUrl?: string;
  pdfPublicId?: string;
  downloads?: number;
  views?: number;
}

export interface PublicationCategory {
  id: string;
  label: string;
  icon: string;
}

// Static publications data (can be replaced with API call)
export const getPublications = async (): Promise<Publication[]> => {
  // This can be replaced with an actual API call
  return [
    {
      id: 1,
      title: 'TIRESIA',
      subtitle: 'Volume 16, Issue 2 - Eclectic Essence',
      authors: 'The Editorial Board, MMMUT',
      date: 'May 2024',
      category: 'Magazine',
      image: '/image.png',
      description: 'The May Issue of TIRESIA brings you a collection of thought-provoking articles, creative pieces, and insights from our university community. Featuring interviews, campus buzz, tech insights, and much more.',
      isFeatured: true,
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765314794/vol_16_issue_2_xocsqk.pdf',
    },
    {
      id: 2,
      title: 'TIRESIA',
      subtitle: 'Volume 16, Issue 3',
      authors: 'The Editorial Board, MMMUT',
      date: 'November 2024',
      category: 'Magazine',
      image: '/image.png',
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765354562/vol_16_issue3_n8sdyz.pdf',
    },
    {
      id: 3,
      title: 'TIRESIA',
      subtitle: 'Volume 16, Issue 1',
      authors: 'The Editorial Board, MMMUT',
      date: 'January 2024',
      category: 'Magazine',
      image: '/image.png',
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765354706/vol_16_issue_1_krslh5.pdf',
    },
    {
      id: 4,
      title: 'Sustainable Engineering Practices',
      authors: 'Prof. Aditya Gupta, Dr. Priya Sharma',
      date: 'September 2024',
      category: 'Research',
      image: '🔧',
      description: 'Exploring sustainable practices in modern engineering.',
    },
    {
      id: 5,
      title: 'Biodiversity and Conservation',
      authors: 'Dr. Neha Verma, Dr. Rajesh Kumar',
      date: 'August 2024',
      category: 'Research',
      image: '🌿',
      description: 'A comprehensive study on biodiversity conservation efforts.',
    },
    {
      id: 6,
      title: 'Novel Approaches in Mathematics',
      authors: 'Prof. Vikram Patel',
      date: 'July 2024',
      category: 'Research',
      image: '📐',
      description: 'New mathematical approaches and methodologies.',
    },
  ];
};

// Get featured publication
export const getFeaturedPublication = async (): Promise<Publication | null> => {
  const publications = await getPublications();
  return publications.find(p => p.isFeatured) || publications[0] || null;
};

// Get publications by category
export const getPublicationsByCategory = async (category: string): Promise<Publication[]> => {
  const publications = await getPublications();
  if (category === 'all') return publications;
  return publications.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

// Get publication categories
export const getCategories = (): PublicationCategory[] => [
  { id: 'all', label: 'All', icon: '📚' },
  { id: 'magazine', label: 'Magazine', icon: '📰' },
  { id: 'newsletter', label: 'Newsletter', icon: '📋' },
  { id: 'research', label: 'Research', icon: '🔬' },
];

// Track PDF view
export const trackPdfView = async (publicationId: string | number): Promise<void> => {
  // Analytics tracking - can be connected to actual analytics service
  console.log(`PDF viewed: ${publicationId}`);
};

// Track PDF download
export const trackPdfDownload = async (publicationId: string | number): Promise<void> => {
  // Analytics tracking - can be connected to actual analytics service
  console.log(`PDF downloaded: ${publicationId}`);
};

// Download PDF
export const downloadPdf = (pdfUrl: string, fileName: string): void => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = fileName;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Get PDF URL with Cloudinary transformations for preview
export const getPdfPreviewUrl = (pdfUrl: string): string => {
  if (!pdfUrl.includes('cloudinary')) return pdfUrl;
  
  // For Cloudinary PDFs, return as-is for now
  // Can add transformations for preview generation
  return pdfUrl;
};
