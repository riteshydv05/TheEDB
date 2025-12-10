import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../components/Common/CardSwap';
import RotatingText, { type RotatingTextRef } from '../components/Common/RotatingText';
import { FaGraduationCap, FaStar, FaUsers, FaArrowDown } from 'react-icons/fa';

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

  // Animation variants - using 'as const' for proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  } as const;

  return (
    <div className="w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left column - Content with rotating batch */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium border border-orange-200/50 shadow-sm">
                  <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Legacy of Excellence</span>
                </div>
              </motion.div>

              {/* Section label */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-500">
                  <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Alumni & Archive</span>
                </div>
              </motion.div>

              {/* Main heading with rotating text */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-playfair">
                  Celebrating
                  <br />
                  <span className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                    <span className="text-gray-700">Batch</span>
                    <RotatingText
                      key={`rotating-${syncKey}`}
                      ref={rotatingTextRef}
                      texts={batchTexts}
                      mainClassName="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white overflow-hidden rounded-xl inline-block shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
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
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-serif">
                  Crafted in bold strokes, preserved in timeless elegance, our alumni's voices echo through every draft, every edition, and every story yet to be told.
                </p>
              </motion.div>

              {/* Stats row - Mobile optimized */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="w-4 h-4 text-orange-500" />
                  <span className="text-sm sm:text-base font-medium">500+ Alumni</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaGraduationCap className="w-4 h-4 text-blue-500" />
                  <span className="text-sm sm:text-base font-medium">12+ Batches</span>
                </div>
              </motion.div>

              {/* CTA Button - Mobile optimized */}
              <motion.div variants={itemVariants} className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium text-sm sm:text-base shadow-lg hover:bg-gray-800 transition-colors"
                >
                  <span>Explore Archive</span>
                  <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right column - Synced CardSwap - Mobile optimized */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full order-1 lg:order-2"
            >
              {/* Mobile: Show static image grid, Desktop: Show CardSwap */}
              <div className="hidden md:block relative h-[400px] lg:h-[500px]">
                <CardSwap
                  key={`cardswap-${syncKey}`}
                  cardDistance={80}
                  verticalDistance={50}
                  delay={syncInterval}
                  pauseOnHover={false}
                >
                  <Card>
                    <img 
                      src="/vishusir.JPG" 
                      alt="Batch 2024" 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </Card>

                  <Card>
                    <img 
                      src="/vishusir.JPG" 
                      alt="Batch 2023" 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </Card>

                  <Card>
                    <img 
                      src="/vishusir.JPG" 
                      alt="Batch 2022" 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </Card>

                  <Card>
                    <img 
                      src="/vishusir.JPG" 
                      alt="Batch 2021" 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </Card>
                </CardSwap>
              </div>

              {/* Mobile-optimized image display */}
              <div className="md:hidden relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="/vishusir.JPG" 
                    alt="Editorial Board Alumni" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <span className="px-2 py-1 bg-orange-500/90 rounded-lg font-medium">Batch 2024</span>
                      <span className="text-white/70">& more...</span>
                    </div>
                  </div>
                </motion.div>

                {/* Batch indicators for mobile */}
                <div className="flex justify-center gap-2 mt-4">
                  {batchTexts.map((batch, index) => (
                    <motion.div
                      key={batch}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="w-2 h-2 rounded-full bg-orange-400/60"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
          <FaArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
}


export default HeroAlumni;
export { HeroAlumni };
