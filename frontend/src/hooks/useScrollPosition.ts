// Scroll Position Hook
import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  isScrolled: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollProgress: number;
}

export const useScrollPosition = (threshold: number = 50): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    isScrolled: false,
    isAtTop: true,
    isAtBottom: false,
    scrollDirection: null,
    scrollProgress: 0,
  });

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    
    setScrollPosition({
      x: scrollX,
      y: scrollY,
      isScrolled: scrollY > threshold,
      isAtTop: scrollY < 10,
      isAtBottom: scrollY >= docHeight - 10,
      scrollDirection: scrollY > lastScrollY ? 'down' : 'up',
      scrollProgress,
    });
    
    setLastScrollY(scrollY);
  }, [threshold, lastScrollY]);

  useEffect(() => {
    // Initial call
    handleScroll();

    // Throttled scroll listener
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  return scrollPosition;
};
