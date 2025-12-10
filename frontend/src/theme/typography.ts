// Typography System

export const typography = {
  // Font families
  fonts: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    display: "'Montserrat', 'Inter', sans-serif",
  },
  
  // Font sizes with responsive scaling
  sizes: {
    xs: 'text-xs',           // 12px
    sm: 'text-sm',           // 14px
    base: 'text-base',       // 16px
    lg: 'text-lg',           // 18px
    xl: 'text-xl',           // 20px
    '2xl': 'text-2xl',       // 24px
    '3xl': 'text-3xl',       // 30px
    '4xl': 'text-4xl',       // 36px
    '5xl': 'text-5xl',       // 48px
    '6xl': 'text-6xl',       // 60px
    '7xl': 'text-7xl',       // 72px
  },
  
  // Font weights
  weights: {
    normal: 'font-normal',    // 400
    medium: 'font-medium',    // 500
    semibold: 'font-semibold', // 600
    bold: 'font-bold',        // 700
    extrabold: 'font-extrabold', // 800
  },
  
  // Preset text styles
  styles: {
    // Display text - Hero sections
    display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair tracking-tight',
    
    // Headings
    h1: 'text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight',
    h2: 'text-2xl sm:text-3xl md:text-4xl font-bold font-playfair tracking-tight',
    h3: 'text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight',
    h4: 'text-lg sm:text-xl font-semibold',
    h5: 'text-base sm:text-lg font-semibold',
    h6: 'text-sm sm:text-base font-semibold',
    
    // Body text
    bodyLarge: 'text-lg sm:text-xl leading-relaxed',
    body: 'text-base leading-relaxed',
    bodySmall: 'text-sm leading-relaxed',
    
    // Special text
    caption: 'text-xs text-gray-500',
    label: 'text-sm font-medium uppercase tracking-wider',
    badge: 'text-xs font-bold uppercase tracking-wider',
    
    // Navigation
    nav: 'text-sm font-medium tracking-wide',
    
    // Button text
    button: 'text-sm font-semibold',
    buttonLarge: 'text-base font-semibold',
  },
  
  // Text colors
  colors: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    light: 'text-white',
    accent: 'text-accent-orange',
    link: 'text-accent-blue hover:text-blue-600',
  },
};

// Heading component classes
export const headingClasses = {
  page: `${typography.styles.display} ${typography.colors.primary}`,
  section: `${typography.styles.h2} ${typography.colors.primary}`,
  subsection: `${typography.styles.h3} ${typography.colors.primary}`,
  card: `${typography.styles.h4} ${typography.colors.primary}`,
};

// Body text component classes
export const bodyClasses = {
  large: `${typography.styles.bodyLarge} ${typography.colors.secondary}`,
  default: `${typography.styles.body} ${typography.colors.secondary}`,
  small: `${typography.styles.bodySmall} ${typography.colors.muted}`,
};
