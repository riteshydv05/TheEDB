// Section Component
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  size?: 'default' | 'small' | 'large' | 'tiny';
  background?: 'white' | 'light' | 'dark' | 'gradient';
  className?: string;
  animate?: boolean;
  id?: string;
}

const sectionSizes = {
  tiny: 'py-8 md:py-12',
  small: 'py-12 md:py-16',
  default: 'py-20 md:py-28',
  large: 'py-24 md:py-32',
};

const sectionBackgrounds = {
  white: 'bg-white',
  light: 'bg-gradient-to-b from-gray-50 to-white',
  dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white',
  gradient: 'bg-gradient-to-br from-orange-50 via-white to-amber-50',
};

export const Section = memo(({
  children,
  size = 'default',
  background = 'white',
  className,
  animate = true,
  id,
}: SectionProps) => {
  const sectionClasses = cn(
    sectionSizes[size],
    sectionBackgrounds[background],
    'relative overflow-hidden',
    className
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={sectionClasses}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

// Section Header component
export const SectionHeader = memo(({
  badge,
  title,
  description,
  align = 'center',
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) => (
  <div className={cn(
    'mb-12 md:mb-16',
    align === 'center' && 'text-center',
    className
  )}>
    {badge && (
      <span className="inline-block px-4 py-1.5 bg-orange-100 text-accent-orange rounded-full text-sm font-medium mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair tracking-tight">
      {title}
    </h2>
    {description && (
      <p className={cn(
        'text-gray-600 text-lg leading-relaxed',
        align === 'center' && 'max-w-2xl mx-auto'
      )}>
        {description}
      </p>
    )}
  </div>
));
SectionHeader.displayName = 'SectionHeader';
