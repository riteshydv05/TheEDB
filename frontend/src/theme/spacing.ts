// Spacing and Layout System

export const spacing = {
  // Section padding
  section: {
    default: 'py-20 md:py-28',
    small: 'py-12 md:py-16',
    large: 'py-24 md:py-32',
    tiny: 'py-8 md:py-12',
  },
  
  // Container widths
  container: {
    default: 'container mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6',
    wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  },
  
  // Card padding
  card: {
    default: 'p-6',
    small: 'p-4',
    large: 'p-8',
  },
  
  // Gap utilities
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
  
  // Stack spacing (vertical)
  stack: {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12',
  },
  
  // Inline spacing (horizontal)
  inline: {
    xs: 'space-x-2',
    sm: 'space-x-4',
    md: 'space-x-6',
    lg: 'space-x-8',
    xl: 'space-x-12',
  },
};

// Border radius
export const borderRadius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  default: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

// Shadows
export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  default: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  
  // Colored shadows
  primary: 'shadow-lg shadow-orange-500/25',
  primaryHover: 'shadow-xl shadow-orange-500/30',
  secondary: 'shadow-lg shadow-blue-500/25',
  card: 'shadow-lg shadow-gray-200/50',
  cardHover: 'shadow-xl shadow-gray-300/50',
};

// Grid layouts
export const grid = {
  // Common grid layouts
  two: 'grid md:grid-cols-2 gap-8',
  three: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
  four: 'grid grid-cols-2 md:grid-cols-4 gap-6',
  six: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4',
  
  // Auto-fit grids
  autoFit: 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6',
  autoFitSmall: 'grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4',
};

// Flex layouts
export const flex = {
  // Common flex patterns
  center: 'flex items-center justify-center',
  between: 'flex items-center justify-between',
  start: 'flex items-center justify-start',
  end: 'flex items-center justify-end',
  col: 'flex flex-col',
  colCenter: 'flex flex-col items-center justify-center',
  wrap: 'flex flex-wrap',
};

// Z-index layers
export const zIndex = {
  base: 'z-0',
  above: 'z-10',
  nav: 'z-40',
  modal: 'z-50',
  tooltip: 'z-60',
  top: 'z-[100]',
};
