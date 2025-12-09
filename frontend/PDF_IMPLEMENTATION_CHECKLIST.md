# PDF Implementation Checklist ✅

## Prerequisites Setup

### 1. Cloudinary Account Setup
- [ ] Go to https://cloudinary.com/users/register_free
- [ ] Create free account
- [ ] Verify email address
- [ ] Login to dashboard

### 2. Get Your Credentials
- [ ] Copy **Cloud Name** from dashboard (top left)
- [ ] Go to **Settings** → **Upload**
- [ ] Create new upload preset:
  - Name: `editorial_board_pdfs`
  - Signing Mode: **Unsigned** (important!)
  - Resource type: **Raw** (for PDFs)
- [ ] Save the upload preset

### 3. Configure Environment Variables
- [ ] Open `.env` file in your project root
- [ ] Replace `your_cloud_name_here` with actual Cloud Name
- [ ] Replace `your_upload_preset_here` with `editorial_board_pdfs`
- [ ] Save the file

**Your .env should look like:**
```env
VITE_CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=editorial_board_pdfs
```

### 4. Restart Development Server
- [ ] Stop current dev server (Ctrl+C)
- [ ] Run `npm run dev` again
- [ ] Verify server starts without errors

---

## Testing Upload Functionality

### 5. Access Admin Upload Page
- [ ] Navigate to http://localhost:5174/admin/upload (or your port)
- [ ] Verify page loads with upload form

### 6. Upload Your First PDF
- [ ] Drag and drop a PDF file OR click to select
- [ ] Watch upload progress bar
- [ ] Wait for "Upload Complete!" message
- [ ] Verify secure URL appears in green box

### 7. Copy PDF URL
- [ ] Click "Copy URL" button
- [ ] Verify "Copied!" confirmation appears
- [ ] Paste URL somewhere to save it temporarily

---

## Adding PDF to Publications

### 8. Update Publications Data
- [ ] Open `src/pages/Publications.tsx`
- [ ] Find the publication you want to add PDF to
- [ ] Add `pdfUrl: 'YOUR_COPIED_URL_HERE'` field

**Example:**
```typescript
{
  id: 1,
  title: 'TIRESIA Magazine',
  description: 'Our flagship publication',
  category: 'Magazine',
  year: 2024,
  coverImage: '/image.png',
  featured: true,
  pdfUrl: 'https://res.cloudinary.com/your-cloud/raw/upload/v1234567890/editorial_board_pdfs/tiresia.pdf',
},
```

### 9. Test on Publications Page
- [ ] Navigate to http://localhost:5174/publications
- [ ] Verify "View PDF" and "Download" buttons appear
- [ ] Click "View PDF" button
- [ ] Verify PDF viewer opens with your PDF

### 10. Test PDF Viewer Features
- [ ] Test zoom in/out buttons
- [ ] Test page navigation (if multi-page PDF)
- [ ] Test download button
- [ ] Test close button (X)
- [ ] Verify PDF displays correctly

---

## Production Deployment Checklist

### 11. Environment Variables for Production
- [ ] Add Cloudinary credentials to your hosting platform:
  - **Vercel**: Project Settings → Environment Variables
  - **Netlify**: Site Settings → Build & Deploy → Environment
  - **Other**: Add to your deployment configuration

### 12. Build and Deploy
- [ ] Run `npm run build` locally to test
- [ ] Fix any build errors
- [ ] Deploy to production
- [ ] Test PDF upload on production site
- [ ] Test PDF viewing on production site

---

## Additional PDFs

### 13. Upload More PDFs
- [ ] Go to /admin/upload page
- [ ] Upload additional PDFs
- [ ] Copy each PDF's secure URL
- [ ] Add each URL to corresponding publication in Publications.tsx

### 14. Organize Your PDFs
- [ ] Keep track of uploaded PDF URLs in a document
- [ ] Use descriptive filenames when uploading
- [ ] Optional: Create folders in Cloudinary for organization

---

## Troubleshooting Reference

### Common Issues

**❌ "Upload failed: Configuration error"**
- Check `.env` file exists in root directory
- Verify Cloud Name is correct (no spaces)
- Verify upload preset name matches exactly
- Restart dev server after .env changes

**❌ "Upload failed: Invalid upload preset"**
- Check upload preset signing mode is **Unsigned**
- Verify preset name is spelled correctly
- Make sure preset is active (not disabled)

**❌ PDF viewer shows blank/loading forever**
- Check PDF URL is accessible (paste in browser)
- Verify PDF URL starts with `https://`
- Check browser console for errors
- Try a different PDF file

**❌ Environment variables not working**
- Must start with `VITE_` prefix
- No quotes around values in .env
- Restart dev server after changes
- Check for typos in variable names

---

## Quick Reference

### URLs
- **Admin Upload**: http://localhost:5174/admin/upload
- **Publications Page**: http://localhost:5174/publications
- **Cloudinary Dashboard**: https://cloudinary.com/console

### Key Files
- `.env` - Environment variables
- `src/pages/Publications.tsx` - Publication data
- `src/pages/AdminUpload.tsx` - Upload interface
- `src/components/Publications/PDFViewer.tsx` - PDF viewer
- `src/components/Publications/PDFUpload.tsx` - Upload component

### Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## Done! 🎉

Once you've completed all checkboxes:
- ✅ Your PDF upload system is fully functional
- ✅ Publications can display viewable PDFs
- ✅ Users can download publications
- ✅ System is ready for production deployment

For detailed troubleshooting, see `PDF_SETUP_GUIDE.md`
For quick reference, see `QUICK_START_PDF.md`
