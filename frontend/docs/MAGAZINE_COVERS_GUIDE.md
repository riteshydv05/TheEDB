# 📚 Magazine Cover Images Setup

## Quick Guide

I've updated the Publications page to use magazine cover images. Here's what you need to do:

### 1️⃣ Save the Cover Images

Save your magazine cover images to the following location:

```
frontend/
  public/
    magazines/
      june-issue.jpg      ← Save the June Issue (TIRESIA Volume 16, Issue 3) cover here
      january-issue.jpg   ← Save the January Issue (TIRESIA Volume 16, Issue 1) cover here
```

### 2️⃣ File Naming

From the images you shared:
- **June Issue** (with gramophone): Save as `june-issue.jpg`
- **January Issue** (with Indian flag): Save as `january-issue.jpg`
- **May Issue**: Already using `/image.png` (currently in public folder)

### 3️⃣ Image Recommendations

- **Format**: JPG or PNG
- **Aspect Ratio**: 3:4 (portrait orientation - matches magazine covers)
- **Recommended Size**: 800x1066 pixels or similar
- **Quality**: High quality for best display

### 📋 Updated Publications Structure

The publications are now configured as:

1. **Featured** - June Issue (Volume 16, Issue 3)
2. **Past Issues**:
   - May Issue (Volume 16, Issue 2) 
   - January Issue (Volume 16, Issue 1)

### ✨ Visual Improvements

✅ Cards now use **3:4 aspect ratio** (portrait) matching magazine covers
✅ Proper shadow and hover effects
✅ Magazine covers display at optimal size
✅ Responsive design for all screen sizes

### 🔄 How to Add More Issues

To add more magazine issues, update `/frontend/src/pages/Publications.tsx`:

```tsx
{
  id: 4,
  title: 'TIRESIA',
  subtitle: 'Volume 15, Issue 3 - December Issue',
  authors: 'The Editorial Board, MMMUT',
  date: 'December 2023',
  category: 'Magazine',
  image: '/magazines/december-2023.jpg',  // Add your cover image path
  pdfUrl: 'YOUR_PDF_URL_HERE',
},
```

## Current Status

- ✅ Publications structure updated
- ✅ Card aspect ratios fixed (3:4 portrait)
- ✅ Image paths configured
- ⏳ Waiting for cover images to be placed in `/frontend/public/magazines/`

Once you save the images in the correct location, they will automatically display on the Publications page!
