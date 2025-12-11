import { useState, useEffect } from 'react';
import RotatingText from '../../common/RotatingText';

interface AlumniRotatingBannerProps {
  syncInterval: number;
  onIndexChange?: (index: number) => void;
}

function AlumniRotatingBanner({ syncInterval, onIndexChange }: AlumniRotatingBannerProps) {
  const [, setCurrentIndex] = useState(0);

  const batchTexts = ["2024", "2023", "2022", "2021", "2020", "2019", "2018"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % batchTexts.length;
        if (onIndexChange) onIndexChange(newIndex);
        return newIndex;
      });
    }, syncInterval);

    return () => clearInterval(intervalId);
  }, [syncInterval, batchTexts.length, onIndexChange]);

  return (
    <div className="w-full lg:w-1/2 lg:fixed lg:left-0 lg:top-32 px-6 md:px-12 lg:px-20 py-6">
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span>Legacy of Excellence</span>
        </div>

        {/* Main heading with rotating text */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Celebrating
            <br />
            <span className="inline-flex items-center gap-3 mt-2">
              <span className="text-gray-700">Batch</span>
              <RotatingText
                texts={batchTexts}
                mainClassName="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden rounded-xl inline-block shadow-lg"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={syncInterval}
                auto={true}
              />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            From groundbreaking innovations to inspiring leadership, our alumni continue to shape industries and communities worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 pt-4">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600">500+</div>
            <div className="text-sm text-gray-600 mt-1">Alumni</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600 mt-1">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600">10+</div>
            <div className="text-sm text-gray-600 mt-1">Years</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniRotatingBanner;
