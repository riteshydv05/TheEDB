// Cloudinary Configuration
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dwdx4kjgx',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'editorial_board_pdfs',
  
  // Cloudinary URLs
  baseUrl: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dwdx4kjgx'}`,
  
  // File URLs
  getImageUrl: (publicId: string, options?: { width?: number; height?: number; quality?: string }) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dwdx4kjgx';
    const transformations: string[] = [];
    
    if (options?.width) transformations.push(`w_${options.width}`);
    if (options?.height) transformations.push(`h_${options.height}`);
    if (options?.quality) transformations.push(`q_${options.quality}`);
    
    const transformString = transformations.length > 0 
      ? `/image/upload/${transformations.join(',')}` 
      : '/image/upload';
    
    return `https://res.cloudinary.com/${cloudName}${transformString}/${publicId}`;
  },
  
  getPdfUrl: (publicId: string) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dwdx4kjgx';
    return `https://res.cloudinary.com/${cloudName}/raw/upload/${publicId}`;
  },
  
  // Upload widget config
  uploadWidgetConfig: {
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'editorial_board_pdfs',
    sources: ['local', 'url'],
    multiple: false,
    maxFileSize: 50000000, // 50MB
    resourceType: 'auto',
    folder: 'editorial_board',
  },
};

// Environment check
export const isCloudinaryConfigured = () => {
  return !!(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME && import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
};
