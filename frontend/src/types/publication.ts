// Publication Types
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

export interface PublicationFilter {
  category?: string;
  search?: string;
  year?: number;
  sortBy?: 'date' | 'title' | 'downloads';
  sortOrder?: 'asc' | 'desc';
}
