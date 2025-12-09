# Quick Start: PDF Upload to Cloudinary

## 🚀 Quick Steps

### 1. Cloudinary Setup (5 minutes)
1. Sign up at https://cloudinary.com/users/register_free
2. Get your **Cloud Name** from dashboard
3. Create **Upload Preset**:
   - Go to Settings → Upload → Add upload preset
   - Name: `editorial_board_pdfs`
   - Signing Mode: **Unsigned** ✓
   - Save

### 2. Add to .env File
```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=editorial_board_pdfs
```

### 3. Upload Your PDF

**Method 1: Using Component (Easier)**
```typescript
// Create admin page with:
import { PDFUpload } from '../components/Publications';

<PDFUpload onUploadComplete={(file) => {
  console.log('PDF URL:', file.secureUrl);
  // Copy this URL!
}} />
```

**Method 2: Cloudinary Dashboard**
1. Login to Cloudinary
2. Media Library → Upload
3. Upload PDF
4. Copy "Secure URL"

### 4. Add URL to Publications
```typescript
// In src/pages/Publications.tsx
{
  id: 1,
  title: 'TIRESIA',
  // ... other fields ...
  pdfUrl: 'PASTE_YOUR_CLOUDINARY_URL_HERE', // ← Add this!
}
```

### 5. Test
```bash
npm run dev
```
Go to Publications → Click "View" or "Download"

## 📝 Example PDF URL Format
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/v1234567890/publications/pdfs/your-file.pdf
```

## ✅ Features Included
- ✓ Full-screen PDF viewer with zoom
- ✓ Page navigation (next/previous)
- ✓ Download functionality
- ✓ Preview on hover
- ✓ Responsive design
- ✓ Loading states

## 🔧 Components Created
- `PDFViewer.tsx` - Full-screen viewer with controls
- `PDFUpload.tsx` - Drag & drop upload interface  
- `MagazineCard.tsx` - Updated with PDF support

## 📦 Dependencies Installed
- `react-pdf` - PDF rendering
- `pdfjs-dist` - PDF.js library

## 🎯 What to Do Next

1. **Upload TIRESIA Magazine**
   - Use PDFUpload component OR Cloudinary dashboard
   - Get the secure URL

2. **Update Publications Data**
   - Add `pdfUrl` field to your featured publication
   - Test the viewer

3. **Add More PDFs**
   - Repeat for each publication
   - Organize in folders (optional)

## 💡 Pro Tips

- **File Naming**: Use descriptive names like `tiresia-vol16-issue2.pdf`
- **Organization**: Use folders in Cloudinary: `publications/pdfs/2024/`
- **Size Limit**: Current limit is 10MB (configurable in component)
- **Security**: Never commit .env file to git!

## 🐛 Common Issues

**Upload fails?**
- Check upload preset is "Unsigned"
- Verify Cloud Name is correct

**Viewer doesn't work?**
- Restart dev server after .env changes
- Check PDF URL is accessible

**See "Coming Soon" button?**
- PDF URL not added to publication data
- Add `pdfUrl` field

## 📞 Need Help?
Check `PDF_SETUP_GUIDE.md` for detailed instructions!

---

**Remember**: 
1. Create upload preset (Unsigned mode)
2. Add credentials to .env
3. Upload PDF → Get URL
4. Add URL to publication data
5. Test!
