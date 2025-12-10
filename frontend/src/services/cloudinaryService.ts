// Cloudinary Service for PDF and Image management
import { cloudinaryConfig } from '../config/cloudinary';

export interface CloudinaryUploadResponse {
  public_id: string;
  secure_url: string;
  url: string;
  resource_type: string;
  format: string;
  bytes: number;
  created_at: string;
  original_filename: string;
}

export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  width?: number;
  height?: number;
  context?: {
    custom?: {
      title?: string;
      description?: string;
      category?: string;
      author?: string;
      date?: string;
    };
  };
}

// Upload file to Cloudinary
export const uploadToCloudinary = async (
  file: File,
  options?: {
    folder?: string;
    tags?: string[];
    context?: Record<string, string>;
  }
): Promise<CloudinaryUploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);
  
  if (options?.folder) {
    formData.append('folder', options.folder);
  }
  
  if (options?.tags) {
    formData.append('tags', options.tags.join(','));
  }
  
  if (options?.context) {
    const contextString = Object.entries(options.context)
      .map(([key, value]) => `${key}=${value}`)
      .join('|');
    formData.append('context', contextString);
  }

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/auto/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Upload failed');
  }

  return response.json();
};

// Upload PDF specifically
export const uploadPDF = async (
  file: File,
  metadata: {
    title: string;
    description?: string;
    category?: string;
    author?: string;
    date?: string;
  }
): Promise<CloudinaryUploadResponse> => {
  return uploadToCloudinary(file, {
    folder: 'editorial_board/publications',
    tags: ['publication', 'pdf', metadata.category || 'general'],
    context: {
      title: metadata.title,
      description: metadata.description || '',
      category: metadata.category || 'Magazine',
      author: metadata.author || 'The Editorial Board',
      date: metadata.date || new Date().toISOString(),
    },
  });
};

// Get direct PDF download URL
export const getPdfDownloadUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/raw/upload/fl_attachment/${publicId}`;
};

// Get optimized image URL
export const getOptimizedImageUrl = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: 'auto' | 'low' | 'eco' | 'good' | 'best';
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
    crop?: 'fill' | 'fit' | 'scale' | 'thumb';
  }
): string => {
  const transforms: string[] = [];
  
  if (options?.width) transforms.push(`w_${options.width}`);
  if (options?.height) transforms.push(`h_${options.height}`);
  if (options?.quality) transforms.push(`q_${options.quality}`);
  if (options?.format) transforms.push(`f_${options.format}`);
  if (options?.crop) transforms.push(`c_${options.crop}`);
  
  const transformString = transforms.length > 0 ? transforms.join(',') + '/' : '';
  
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformString}${publicId}`;
};

// Check if a URL is a Cloudinary URL
export const isCloudinaryUrl = (url: string): boolean => {
  return url.includes('res.cloudinary.com');
};

// Extract public ID from Cloudinary URL
export const extractPublicId = (url: string): string => {
  const regex = /\/(?:v\d+\/)?([^/]+(?:\/[^/]+)*)(?:\.[a-z]+)?$/i;
  const match = url.match(regex);
  return match ? match[1] : url;
};
