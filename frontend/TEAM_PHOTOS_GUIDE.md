# 📸 Team Photos Setup Guide

## Quick Steps to Add Real Team Member Photos

### 1️⃣ Prepare Your Photos
- **Format**: JPG or PNG
- **Recommended Size**: 600x600 pixels (square)
- **Quality**: Clear, professional headshots work best
- **File Names**: Use descriptive names (e.g., `john-doe.jpg`, `jane-smith.png`)

### 2️⃣ Create Team Folder
Create a `team` folder inside the `public` directory:

```
frontend/
  public/
    team/              ← Create this folder
      member1.jpg
      member2.jpg
      member3.jpg
      ...etc
```

### 3️⃣ Add Your Photos
Place all team member photos in `/frontend/public/team/`

### 4️⃣ Update Team.tsx
Edit `/frontend/src/pages/Team.tsx` and update each member's information:

**Example:**
```tsx
const finalYearMembers = [
  { 
    image: '/team/john-doe.jpg',                    // ← Your photo path
    text: 'John Doe\nBranch: Computer Science\nFinal Year'  // ← Name & Branch
  },
  { 
    image: '/team/jane-smith.jpg', 
    text: 'Jane Smith\nBranch: Electrical Engineering\nFinal Year' 
  },
  // Add more members...
];
```

### 5️⃣ Text Format
The `text` field uses `\n` for line breaks:
- **Line 1**: Member's Name
- **Line 2**: Branch: [Department Name]
- **Line 3**: Year (Final Year, Pre-Final Year, Sophomore)

**Example:**
```tsx
text: 'Amit Patel\nBranch: Mechanical Engineering\nPre-Final Year'
```

## 📋 Complete Example

```tsx
const finalYearMembers = [
  { 
    image: '/team/amit-patel.jpg', 
    text: 'Amit Patel\nBranch: Computer Science\nFinal Year' 
  },
  { 
    image: '/team/priya-sharma.jpg', 
    text: 'Priya Sharma\nBranch: Electrical Engineering\nFinal Year' 
  },
  { 
    image: '/team/rahul-verma.jpg', 
    text: 'Rahul Verma\nBranch: Mechanical Engineering\nFinal Year' 
  },
];

const preFinalYearMembers = [
  { 
    image: '/team/sneha-reddy.jpg', 
    text: 'Sneha Reddy\nBranch: Civil Engineering\nPre-Final Year' 
  },
  // Add more...
];

const sophomoreMembers = [
  { 
    image: '/team/arjun-kumar.jpg', 
    text: 'Arjun Kumar\nBranch: Chemical Engineering\nSophomore' 
  },
  // Add more...
];
```

## 🎨 Photo Tips
- Use good lighting
- Keep backgrounds simple or professional
- Ensure faces are clearly visible
- Maintain consistent style across all photos
- Crop to square format before uploading

## ✅ Checklist
- [ ] Created `/frontend/public/team/` folder
- [ ] Added all team photos to the folder
- [ ] Renamed photos with clear names
- [ ] Updated `Team.tsx` with actual names
- [ ] Updated `Team.tsx` with actual branches
- [ ] Updated image paths to match your photo filenames
- [ ] Tested the page in the browser

## 🔄 How to Test
1. Save your changes
2. Run `npm run dev` in the frontend folder
3. Visit `http://localhost:5173/team`
4. Check if photos and names appear correctly

## ❓ Troubleshooting

**Photo not showing?**
- Check file path is correct (case-sensitive)
- Ensure photo is in `/frontend/public/team/` folder
- Verify photo file extension matches (jpg vs jpeg)

**Photo appears distorted?**
- Use square images (same width and height)
- Try 600x600 or 800x800 pixels

**Need to add/remove members?**
- Just add or remove entries from the array
- Follow the same format as existing members
