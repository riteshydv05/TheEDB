import { useState, useEffect, useRef } from 'react';
import CardSwap, { Card } from '../components/Common/CardSwap';
import RotatingText, { RotatingTextRef } from '../components/Common/RotatingText';


function HeroAlumni() {
  const [syncKey, setSyncKey] = useState(0);
  const rotatingTextRef = useRef<RotatingTextRef>(null);

  // Alumni data - each batch corresponds to an image
  const alumniData = [
    { batch: "2024", image: "/vishusir.JPG" },
    { batch: "2023", image: "/vishusir.JPG" },
    { batch: "2022", image: "/vishusir.JPG" },
    { batch: "2021", image: "/vishusir.JPG" }
  ];

  const batchTexts = alumniData.map(data => data.batch);
  const syncInterval = 5000;

  // Force complete remount on each cycle to stay in sync
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSyncKey(prev => prev + 1);
    }, syncInterval);

    return () => clearInterval(intervalId);
  }, [syncInterval]);

  return (
    <div className="w-full py-8 bg-gradient-to-br from-gray-50 to-white">
      {/* Section Heading */}
      <div className="py-6 px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Alumni & Archive
        </h1>
        <p className="text-base text-gray-600 max-w-2xl">
          Celebrating the achievements and the contributions of our alumni across the years.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="px-6 md:px-12 lg:px-20 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left column - Content with rotating batch */}
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
                    key={`rotating-${syncKey}`}
                    ref={rotatingTextRef}
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
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                Crafted in Alba's bold strokes, preserved in Papyrus's ancient elegance, our alumni's voices echo through every draft, every edition, and every story yet to be told.
              </p>
            </div>
          </div>

          {/* Right column - Synced CardSwap */}
          <div className="relative w-full h-[500px]">
            <CardSwap
              key={`cardswap-${syncKey}`}
              cardDistance={100}
              verticalDistance={70}
              delay={syncInterval}
              pauseOnHover={false}
            >
              <Card>
                <img 
                  src="/vishusir.JPG" 
                  alt="Batch 2024" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </Card>

              <Card>
                <img 
                  src="/vishusir.JPG" 
                  alt="Batch 2023" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </Card>

              <Card>
                <img 
                  src="/vishusir.JPG" 
                  alt="Batch 2022" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </Card>

              <Card>
                <img 
                  src="/vishusir.JPG" 
                  alt="Batch 2021" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HeroAlumni;
export { HeroAlumni };
