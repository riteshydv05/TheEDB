// Device Detection Hook
import { useState, useEffect, useCallback } from 'react';
import { BREAKPOINTS } from '../config/constants';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface ViewportSize {
  width: number;
  height: number;
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const getDeviceType = (width: number): DeviceType => {
  if (width < BREAKPOINTS.tablet) return 'mobile';
  if (width < BREAKPOINTS.laptop) return 'tablet';
  return 'desktop';
};

export const useDevice = (): ViewportSize => {
  const [viewport, setViewport] = useState<ViewportSize>(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : BREAKPOINTS.desktop;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    const device = getDeviceType(width);
    
    return {
      width,
      height,
      device,
      isMobile: device === 'mobile',
      isTablet: device === 'tablet',
      isDesktop: device === 'desktop',
    };
  });

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const device = getDeviceType(width);
    
    setViewport({
      width,
      height,
      device,
      isMobile: device === 'mobile',
      isTablet: device === 'tablet',
      isDesktop: device === 'desktop',
    });
  }, []);

  useEffect(() => {
    // Set initial value
    handleResize();
    
    // Add debounced resize listener
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return viewport;
};

// Convenience hooks
export const useIsMobile = (): boolean => {
  const { isMobile } = useDevice();
  return isMobile;
};

export const useIsTablet = (): boolean => {
  const { isTablet } = useDevice();
  return isTablet;
};

export const useIsDesktop = (): boolean => {
  const { isDesktop } = useDevice();
  return isDesktop;
};
