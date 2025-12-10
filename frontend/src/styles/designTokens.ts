export const designTokens = {
  colors: {
    primary: {
      gradient: 'bg-gradient-to-r from-orange-500 to-amber-500',
      gradientHover: 'from-orange-600 to-amber-600',
      light: 'bg-orange-50',
      dark: 'bg-orange-900',
      text: 'text-orange-500',
    },
    secondary: {
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      light: 'bg-blue-50',
      text: 'text-blue-500',
    },
    background: {
      primary: 'bg-gradient-to-b from-slate-50 to-white',
      dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      card: 'bg-white',
      cardHover: 'bg-gradient-to-br from-white to-slate-50',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      light: 'text-white',
    }
  },
  spacing: {
    section: 'py-20 md:py-28',
    sectionSmall: 'py-12 md:py-16',
    sectionTiny: 'py-8 md:py-12',
    container: 'container mx-auto px-4 sm:px-6 lg:px-8',
    containerNarrow: 'max-w-4xl mx-auto px-4 sm:px-6',
    containerWide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  borderRadius: {
    card: 'rounded-2xl',
    button: 'rounded-xl',
    input: 'rounded-lg',
    badge: 'rounded-full',
  },
  shadows: {
    card: 'shadow-lg shadow-gray-200/50',
    cardHover: 'shadow-xl shadow-gray-300/50',
    button: 'shadow-lg shadow-orange-500/25',
    buttonHover: 'shadow-xl shadow-orange-500/30',
  },
  transitions: {
    fast: 'transition-all duration-200',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },
  typography: {
    display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair',
    heading1: 'text-3xl sm:text-4xl md:text-5xl font-bold font-playfair',
    heading2: 'text-2xl sm:text-3xl md:text-4xl font-bold font-playfair',
    heading3: 'text-xl sm:text-2xl md:text-3xl font-semibold',
    bodyLarge: 'text-lg sm:text-xl leading-relaxed',
    body: 'text-base leading-relaxed',
    bodySmall: 'text-sm leading-relaxed',
  }
};
