# PDF Upload and Viewer Setup Guide

## Complete Implementation Steps

### 1. Cloudinary Setup

#### Create Account & Get Credentials
1. Go to [Cloudinary](https://cloudinary.com/users/register_free) and sign up
2. After login, go to Dashboard
3. Note down your credentials:
   - **Cloud Name**: Found at the top of dashboard
   - **API Key**: Found in dashboard
   - **API Secret**: Keep this secret, don't use in frontend

#### Create Upload Preset (Important!)
1. Go to Settings → Upload
2. Scroll to "Upload presets"
3. Click "Add upload preset"
4. Configure:
   - **Preset name**: `editorial_board_pdfs` (or your choice)
   - **Signing Mode**: Select "Unsigned" (important for frontend uploads)
   - **Folder**: `publications/pdfs` (optional, for organization)
   - **Resource type**: Select "Raw" (for PDFs)
   - **Access mode**: Select "Public"
5. Save the preset

### 2. Environment Configuration

Update your `.env` file with your Cloudinary credentials:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
VITE_CLOUDINARY_API_KEY=your_api_key_here
VITE_CLOUDINARY_UPLOAD_PRESET=editorial_board_pdfs
```

**Important**: Replace `your_cloud_name_here` and `editorial_board_pdfs` with your actual values!

### 3. Update Publications Data

Add PDF URLs to your publications in `Publications.tsx`:

```typescript
const publications: Publication[] = [
  {
    id: 1,
    title: 'TIRESIA',
    subtitle: 'Volume 16, Issue 2 - Eclectic Essence',
    authors: 'The Editorial Board, MMMUT',
    date: 'May 2024',
    category: 'Magazine',
    image: '/image.png',
    description: 'The May Issue of TIRESIA...',
    isFeatured: true,
    pdfUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/publications/pdfs/tiresia-vol16-issue2.pdf',
  },
  // ... other publications
];
```

### 4. How to Upload PDFs

#### Option A: Using the Upload Component (Recommended for Admin)

1. Create an admin page or route
2. Import and use the PDFUpload component:

```typescript
import { PDFUpload } from '../components/Publications';

function AdminPage() {
  const handleUploadComplete = (file: any) => {
    console.log('PDF URL:', file.secureUrl);
    // Copy this URL and add it to your publication data
  };

  return <PDFUpload onUploadComplete={handleUploadComplete} />;
}
```

#### Option B: Using Cloudinary Dashboard

1. Go to Media Library in Cloudinary dashboard
2. Click "Upload"
3. Select your PDF file
4. After upload, click on the file
5. Copy the "Secure URL"
6. Use this URL in your publications data

### 5. Using the PDF Viewer

The PDF viewer automatically works when you add `pdfUrl` to your publications:

- **View Button**: Opens PDF in full-screen viewer
- **Download Button**: Downloads the PDF file
- **Zoom Controls**: +/- buttons to zoom in/out
- **Navigation**: Previous/Next page buttons

### 6. Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to Publications page
3. For publications with `pdfUrl`:
   - Hover over featured publication cover to see Preview/Download buttons
   - Click "View" on any publication card to open PDF viewer
   - Click "Download" to download the PDF

### 7. Sample Publication Data Structure

```typescript
{
  id: 1,
  title: 'TIRESIA Magazine',
  subtitle: 'Volume 16, Issue 2',
  authors: 'The Editorial Board, MMMUT',
  date: 'May 2024',
  category: 'Magazine',
  image: '/image.png', // Cover image
  description: 'Brief description...',
  isFeatured: true, // Shows as featured publication
  pdfUrl: 'https://res.cloudinary.com/.../your-file.pdf' // Add this!
}
```

### 8. Security Best Practices

✅ **DO:**
- Use unsigned upload presets for frontend uploads
- Store only the secure URL in your database
- Set file size limits (10MB by default in component)
- Validate file types (PDF only)

❌ **DON'T:**
- Don't expose API Secret in frontend code
- Don't commit `.env` file to version control
- Don't allow unlimited file sizes

### 9. Cloudinary Features You Can Use

- **Transformations**: Convert PDFs to images for thumbnails
- **Secure URLs**: Use signed URLs for private documents
- **Folder Organization**: Organize by year, category, etc.
- **Analytics**: Track views and downloads
- **CDN**: Fast delivery worldwide

### 10. Troubleshooting

#### PDF Upload Fails
- Check your upload preset is "Unsigned"
- Verify Cloud Name is correct
- Ensure file is actually a PDF
- Check file size is under limit

#### PDF Viewer Shows Error
- Verify PDF URL is accessible
- Check CORS settings in Cloudinary
- Try opening PDF URL directly in browser

#### Environment Variables Not Working
- Restart development server after changing `.env`
- Verify variable names start with `VITE_`
- Check no spaces around `=` in `.env` file

### 11. Next Steps

1. Upload your TIRESIA magazine PDF to Cloudinary
2. Get the secure URL
3. Add it to your featured publication in `Publications.tsx`
4. Test the viewer and download functionality
5. Repeat for other publications

## File Structure

```
frontend/
├── .env                                    # Cloudinary credentials
├── src/
│   ├── components/
│   │   └── Publications/
│   │       ├── MagazineCard.tsx           # Updated with PDF support
│   │       ├── PDFViewer.tsx              # Full-screen PDF viewer
│   │       ├── PDFUpload.tsx              # Admin upload component
│   │       └── index.ts                   # Exports
│   └── pages/
│       └── Publications.tsx               # Publications page
```

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test PDF URL directly in browser
4. Check Cloudinary dashboard for upload status

## Example URLs

After uploading to Cloudinary, your URLs will look like:
```
https://res.cloudinary.com/demo/raw/upload/v1234567890/publications/pdfs/tiresia-vol16.pdf
```

Replace with your actual Cloud Name and file path!
