# Component Usage Guide

## Color Classes

Based on the Editorial Board logo color scheme:

### Background Colors
- `bg-primary-dark` - Dark navy (#1a1a2e)
- `bg-primary-light` - Deep blue (#16213e)
- `bg-accent-orange` - Orange (#ff6b35)
- `bg-accent-yellow` - Yellow (#f4d04a)
- `bg-accent-blue` - Bright blue (#0099ff)
- `bg-accent-cyan` - Cyan (#00d4ff)
- `bg-gradient-logo` - Logo gradient (orange → yellow → blue)

### Text Colors
- `text-primary-dark` - Dark navy text
- `text-accent-orange` - Orange text
- `text-accent-yellow` - Yellow text
- `text-accent-blue` - Blue text

### Border Colors
- `border-accent-orange` - Orange border
- `border-accent-yellow` - Yellow border
- `border-accent-blue` - Blue border

## Button Component

```tsx
import Button from '../components/Common/Button';

// Primary button (orange)
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Secondary button (yellow)
<Button variant="secondary" size="lg">
  Secondary Action
</Button>

// Outline button (blue)
<Button variant="outline" size="sm">
  Outlined
</Button>

// Disabled button
<Button disabled>
  Disabled
</Button>
```

### Props
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `onClick`: () => void
- `disabled`: boolean
- `type`: 'button' | 'submit' | 'reset'
- `className`: string (for additional custom classes)

## Card Component

```tsx
import Card from '../components/Common/Card';

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Clickable card
<Card onClick={handleClick}>
  <p>This card is clickable</p>
</Card>

// Card with custom styling
<Card className="border-l-4 border-l-accent-orange">
  <p>Card with left border accent</p>
</Card>
```

### Props
- `children`: ReactNode
- `className`: string (for additional custom classes)
- `onClick`: () => void (makes card clickable)

## Header Component

Navigation bar with responsive menu and logo. Automatically highlights active page.

```tsx
import Header from '../components/Layout/Header';

<Header />
```

Features:
- Sticky navigation
- Mobile hamburger menu
- Active page highlighting
- Logo with gradient background

## Footer Component

Footer with quick links, social media icons, and copyright info.

```tsx
import Footer from '../components/Layout/Footer';

<Footer />
```

Features:
- 4-column grid layout on desktop
- Responsive on mobile
- Social media links
- Quick navigation links

## Page Layout Pattern

```tsx
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

function YourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Title</h1>
          <p className="text-lg text-gray-200">Page description</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Your content here */}
        </div>
      </section>
    </div>
  );
}
```

## Common Patterns

### Section Title with Underline
```tsx
<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-dark">
  Section Title
</h2>
<div className="w-24 h-1 bg-gradient-logo mx-auto mb-12"></div>
```

### Gradient Background
```tsx
<div className="bg-gradient-to-r from-primary-dark via-primary-light to-primary-dark">
  {/* Content */}
</div>

<div className="bg-gradient-to-r from-accent-orange to-accent-yellow">
  {/* Content */}
</div>
```

### Icon with Gradient Background
```tsx
<div className="w-16 h-16 rounded-full bg-gradient-logo flex items-center justify-center">
  <IconComponent className="text-white text-2xl" />
</div>
```

### Responsive Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

### Hover Effects
```tsx
<Card className="hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  {/* Card content */}
</Card>
```

## Icons Usage

```tsx
import { FaUser, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

<FaUser className="text-accent-orange" />
<FaCalendar className="text-accent-yellow" size={20} />
<FaMapMarkerAlt className="text-accent-blue text-xl" />
```

## Responsive Design Breakpoints

- `sm:` - Small devices (≥640px)
- `md:` - Medium devices (≥768px)
- `lg:` - Large devices (≥1024px)
- `xl:` - Extra large devices (≥1280px)
- `2xl:` - 2X large devices (≥1536px)

Example:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Forms

```tsx
<input
  type="text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange"
  placeholder="Enter text"
/>

<textarea
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange resize-none"
  rows={5}
></textarea>

<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```
