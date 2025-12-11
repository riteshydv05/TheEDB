# Team Page Setup Guide

## Overview
The team page now uses a professional card-based layout with three sections:
- **Final Year Team** (Orange theme)
- **Pre-Final Year Team** (Yellow theme)
- **Sophomore Team** (Blue theme)

## Card Design Features
Each team member card includes:
- Square profile photo with hover scale effect
- Name in bold Playfair Display font
- Role with gradient text (matches section color)
- Branch & Year information
- Description/Bio
- Social media links (LinkedIn & Email)

## Adding Team Members

### 1. Add Profile Photos
Place team member photos in `/frontend/public/team/` directory:
```
public/
  team/
    final-year/
      member1.jpg
      member2.jpg
    pre-final/
      member1.jpg
      member2.jpg
    sophomores/
      member1.jpg
      member2.jpg
```

**Photo Requirements:**
- Format: JPG, PNG, or WebP
- Aspect Ratio: Square (1:1) recommended
- Resolution: 800x800px minimum
- Size: Under 500KB each
- Professional headshot or portrait style
- Good lighting and clear face visibility

### 2. Update Team.tsx Data

Edit `/frontend/src/pages/Team.tsx` and update the member arrays:

```typescript
const finalYearMembers: TeamMember[] = [
  {
    name: "Full Name",
    role: "Position Title",
    branch: "Branch Name",
    year: "4th Year",
    description: "A brief bio or description about the team member's role and contributions.",
    image: "/team/final-year/name.jpg",
    linkedin: "https://linkedin.com/in/username",
    email: "email@example.com"
  },
  // Add more members...
];
```

### 3. Color Themes by Section

**Final Year (Orange)**
- Icon: Star
- Gradient: Orange to Red (`from-orange-400 to-red-500`)
- Hover: Orange border

**Pre-Final Year (Yellow)**
- Icon: Graduation Cap
- Gradient: Yellow to Amber (`from-yellow-400 to-amber-500`)
- Hover: Yellow border

**Sophomores (Blue)**
- Icon: Users
- Gradient: Blue to Cyan (`from-blue-400 to-cyan-500`)
- Hover: Blue border

## Card Layout Structure

```tsx
<Card>
  <div className="aspect-square">
    <img /> // Square profile photo
  </div>
  <div className="p-6">
    <h3>Name</h3> // White, bold, Playfair
    <p>Role</p>   // Gradient text
    <p>Branch • Year</p> // Gray
    <p>Description</p>   // Light gray
    <div>Social Links</div> // Icons
  </div>
</Card>
```

## Responsive Design
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## Animation Features
- Cards fade in on scroll
- Staggered appearance (0.1s delay between cards)
- Hover: Lift up (-8px) and scale (1.02)
- Image scales to 110% on card hover
- Border color changes on hover

## Optional Fields
- `linkedin`: If not provided, LinkedIn icon won't show
- `email`: If not provided, Email icon won't show
- `description`: Can be brief or detailed

## Best Practices

1. **Consistent Photography**
   - Use same background style for all photos
   - Similar lighting conditions
   - Same crop/framing style
   - Professional attire

2. **Role Names**
   - Keep concise (2-4 words)
   - Use proper title case
   - Examples: "Editor-in-Chief", "Chief Technology Officer"

3. **Descriptions**
   - 2-3 sentences maximum
   - Focus on role and expertise
   - Avoid overly technical jargon
   - Keep positive and professional

4. **Branch Names**
   - Use standard abbreviations: CSE, ECE, ME, etc.
   - Or full names: Computer Science & Engineering

5. **Social Links**
   - Use full URLs
   - Test all links before committing
   - Use professional email addresses

## Example Complete Entry

```typescript
{
  name: "Priyanshu Chaurasia",
  role: "Chief Technology Officer",
  branch: "Computer Science & Engineering",
  year: "4th Year",
  description: "Leading the technical infrastructure and digital innovation at The Editorial Board. Passionate about building scalable solutions and mentoring junior developers.",
  image: "/team/final-year/priyanshu.jpg",
  linkedin: "https://linkedin.com/in/priyanshu-chaurasia",
  email: "priyanshu@editorialboard.com"
}
```

## Testing Checklist

- [ ] All images load correctly
- [ ] No broken placeholder images
- [ ] All LinkedIn links open in new tab
- [ ] Email links trigger mail client
- [ ] Cards display in correct order
- [ ] Hover effects work smoothly
- [ ] Responsive on mobile/tablet
- [ ] Text is readable on all screen sizes
- [ ] Gradient text displays correctly
- [ ] Social icons have proper spacing

## Troubleshooting

**Images not showing:**
- Check file path is correct
- Ensure image exists in public folder
- Verify file extension matches (jpg vs jpeg)

**LinkedIn/Email not showing:**
- Check field name is correct (`linkedin`, `email`)
- Ensure URL/email is provided
- Look for TypeScript errors

**Layout issues:**
- Check Card component import
- Verify Tailwind classes are correct
- Test in different browsers

## Future Enhancements

Consider adding:
- Search/filter functionality
- Alumni section with past members
- Department/role filtering
- "Meet the Team" video section
- Individual member detail pages
