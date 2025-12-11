# The Editorial Board Website

A modern, fully responsive website for the Editorial Board of MMM University of Technology, built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Color Scheme**: Inspired by the Editorial Board logo
  - Primary Dark Navy: `#1a1a2e`, `#16213e`
  - Accent Orange: `#ff6b35`
  - Accent Yellow: `#f4d04a`
  - Accent Blue: `#0099ff`, `#00d4ff`
  - Gold gradient for premium touches

- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Accessible**: Built with accessibility best practices

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Common/          # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── Layout/          # Layout components
│   │       ├── Header.tsx   # Navigation bar
│   │       └── Footer.tsx   # Footer with links
│   ├── pages/               # Main pages
│   │   ├── Home.tsx         # Landing page
│   │   ├── Team.tsx         # Board members
│   │   ├── Events.tsx       # Events & conferences
│   │   ├── Publications.tsx # Published research
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Gallery.tsx      # Photo gallery
│   │   ├── Alumni.tsx       # Alumni archive
│   │   └── Canvas.tsx       # Member reflections
│   ├── App.tsx              # Main app with routing
│   └── main.tsx             # App entry point
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📄 Pages

### 1. Home
- Hero section with call-to-action buttons
- Features showcase (Team, Events, Publications, Excellence)
- Statistics section
- Call-to-action sections

### 2. Team
- Grid display of board members
- Member profiles with social links
- Team mission statement

### 3. Events
- Upcoming events with details
- Event categories and filtering
- Newsletter subscription

### 4. Publications
- Research papers grid
- Category filtering
- Download functionality
- Submit paper CTA

### 5. Contact
- Contact form with validation
- Contact information cards
- Office hours and social links

### 6. Gallery
- Photo gallery with category filters
- Hover effects on images
- Statistics section

### 7. Alumni
- Batch archive with achievements
- Success stories showcase
- Alumni statistics
- Join network CTA

### 8. Canvas
- Member testimonials and reflections
- Featured stories
- Share your story CTA

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Icons** - Icon library
- **Vite** - Build tool

## 🎨 Color Palette

The website uses a consistent color scheme extracted from the Editorial Board logo:

```css
Primary Colors:
- Dark Navy: #1a1a2e, #16213e
- Orange: #ff6b35
- Yellow: #f4d04a
- Blue: #0099ff
- Cyan: #00d4ff
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features

- ✅ Smooth page transitions
- ✅ Mobile-first responsive design
- ✅ SEO-friendly structure
- ✅ Fast loading times
- ✅ Accessible navigation
- ✅ Icon integration
- ✅ Form validation
- ✅ Interactive UI elements

## 📝 Future Enhancements

- Backend integration
- User authentication
- Admin dashboard
- Database integration
- Real-time updates
- Advanced search functionality
- Multi-language support

## 📄 License

Copyright © 2024 The Editorial Board, MMM University of Technology. All rights reserved.

## 👥 Contributors

Built by the Editorial Board Team

---

**Motto**: योगः कर्मसु कौशलम् (Excellence in Action)
