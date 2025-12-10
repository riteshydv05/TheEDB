// Color Theme - Unified color system for the entire application

export const colors = {
  // Primary - Orange (Main brand color)
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#ff6b35', // Main brand orange
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  
  // Secondary - Blue/Cyan
  secondary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0099ff', // Main secondary
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Accent - Yellow/Gold
  accent: {
    yellow: '#f4d04a',
    gold: '#faa932',
    goldLight: '#fef9f0',
    goldDark: '#9f6100',
  },
  
  // Neutral - Grays
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Special colors
  dark: '#1a1a2e',
  light: '#16213e',
  white: '#ffffff',
  black: '#000000',
  
  // Semantic colors
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
};

// CSS variable mappings
export const cssColors = {
  '--color-primary-dark': colors.dark,
  '--color-primary-light': colors.light,
  '--color-accent-orange': colors.primary[500],
  '--color-accent-yellow': colors.accent.yellow,
  '--color-accent-blue': colors.secondary[500],
  '--color-accent-cyan': '#00d4ff',
};

// Tailwind class mappings
export const colorClasses = {
  primary: {
    bg: 'bg-accent-orange',
    bgGradient: 'bg-gradient-to-r from-orange-500 to-amber-500',
    text: 'text-accent-orange',
    border: 'border-accent-orange',
    hover: 'hover:bg-orange-600',
  },
  secondary: {
    bg: 'bg-accent-blue',
    bgGradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    text: 'text-accent-blue',
    border: 'border-accent-blue',
    hover: 'hover:bg-blue-600',
  },
  dark: {
    bg: 'bg-primary-dark',
    bgGradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    text: 'text-primary-dark',
    border: 'border-primary-dark',
  },
};
