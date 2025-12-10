import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Card from '../components/Common/Card';
import { FaCamera, FaImages, FaCalendarAlt, FaHeart, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

const Gallery: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    { id: 1, title: 'Annual Conference 2024', category: 'Events', image: '🎤', description: 'Our flagship annual conference bringing together scholars and researchers.' },
    { id: 2, title: 'Research Workshop', category: 'Workshop', image: '🔬', description: 'Hands-on workshop exploring advanced research methodologies.' },
    { id: 3, title: 'Team Meeting', category: 'Team', image: '👥', description: 'Strategic planning session with our editorial team.' },
    { id: 4, title: 'Publishing Ceremony', category: 'Publications', image: '📖', description: 'Celebrating the launch of our latest publication.' },
    { id: 5, title: 'Campus Visit', category: 'Campus', image: '🏫', description: 'Exploring the beautiful MMMUT campus.' },
    { id: 6, title: 'Networking Event', category: 'Events', image: '🤝', description: 'Building connections with industry professionals.' },
    { id: 7, title: 'Seminar Session', category: 'Workshop', image: '🎓', description: 'Knowledge sharing session on emerging trends.' },
    { id: 8, title: 'Alumni Reunion', category: 'Alumni', image: '🎉', description: 'Reconnecting with our talented alumni network.' },
    { id: 9, title: 'Lab Demonstration', category: 'Research', image: '🧪', description: 'Showcasing innovative research experiments.' },
    { id: 10, title: 'Award Ceremony', category: 'Awards', image: '🏆', description: 'Recognizing excellence in academic achievement.' },
    { id: 11, title: 'Collaboration Meeting', category: 'Partnership', image: '📝', description: 'Strategic partnerships for academic growth.' },
    { id: 12, title: 'Youth Forum', category: 'Forum', image: '💭', description: 'Platform for young minds to share ideas.' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Events', 'Workshop', 'Team', 'Research', 'Alumni', 'Campus'];

  const filteredImages =
    selectedCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const stats = [
    { icon: FaImages, value: galleryImages.length, label: 'Photos', color: 'text-orange-500' },
    { icon: FaCalendarAlt, value: '50+', label: 'Events Captured', color: 'text-blue-500' },
    { icon: FaHeart, value: '1000+', label: 'Total Memories', color: 'text-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <FaCamera className="w-4 h-4" />
              <span>Photo Gallery</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair tracking-tight">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Explore memorable moments from our events, conferences, and activities at The Editorial Board.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-6 border-b border-gray-100 sticky top-[60px] z-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <Card className="cursor-pointer overflow-hidden group h-64 flex items-center justify-center bg-gradient-to-br from-white to-slate-50 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div 
                        className="text-8xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {img.image}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end text-white p-6">
                        <h3 className="font-bold text-center mb-2 text-lg">{img.title}</h3>
                        <span className="text-xs bg-orange-500/90 px-3 py-1 rounded-full">{img.category}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-12 min-h-[300px]">
                  <span className="text-[150px]">{selectedImage.image}</span>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4 w-fit">
                    {selectedImage.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    currentIndex === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaChevronLeft />
                </button>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <button
                  onClick={handleNext}
                  disabled={currentIndex === filteredImages.length - 1}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    currentIndex === filteredImages.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              Our Visual Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Capturing the essence of our academic community through memorable moments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4`} />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
