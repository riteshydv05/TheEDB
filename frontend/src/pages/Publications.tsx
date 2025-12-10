import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MagazineCard } from '../components/Publications';
import type { Publication } from '../components/Publications';
import { FaBook, FaNewspaper, FaCalendarAlt, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const Publications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All', icon: FaBook },
    { id: 'newsletter', label: 'Newsletter', icon: FaNewspaper },
    { id: 'magazine', label: 'Annual Magazine', icon: FaCalendarAlt },
  ];

  const publications: Publication[] = [
    {
      id: 1,
      title: 'TIRESIA',
      subtitle: 'Volume 16, Issue 2 - Eclectic Essence',
      authors: 'The Editorial Board, MMMUT',
      date: 'May 2024',
      category: 'Magazine',
      image: '/image.png',
      description: 'The May Issue of TIRESIA brings you a collection of thought-provoking articles, creative pieces, and insights from our university community. Featuring interviews, campus buzz, tech insights, and much more.',
      isFeatured: true,
      // Add your Cloudinary PDF URL here after uploading
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765314794/vol_16_issue_2_xocsqk.pdf',
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Algorithms',
      authors: 'Dr. Rajesh Kumar, Prof. Anjali Singh',
      date: 'November 2024',
      category: 'Computer Science',
      image: '📄',
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765354562/vol_16_issue3_n8sdyz.pdf',
    },
    {
      id: 3,
      title: 'Quantum Computing: Future Prospects',
      authors: 'Dr. Vikram Patel, Dr. Neha Verma',
      date: 'October 2024',
      category: 'Physics',
      image: '📊',
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765354706/vol_16_issue_1_krslh5.pdf'
    },
    {
      id: 4,
      title: 'Sustainable Engineering Practices',
      authors: 'Prof. Aditya Gupta, Dr. Priya Sharma',
      date: 'September 2024',
      category: 'Engineering',
      image: '🔧',
      pdfUrl: ''
    },
    {
      id: 5,
      title: 'Biodiversity and Conservation',
      authors: 'Dr. Neha Verma, Dr. Rajesh Kumar',
      date: 'August 2024',
      category: 'Biology',
      image: '🌿',
    },
    {
      id: 6,
      title: 'Novel Approaches in Mathematics',
      authors: 'Prof. Vikram Patel',
      date: 'July 2024',
      category: 'Mathematics',
      image: '📐',
    },
    {
      id: 7,
      title: 'Nanotechnology Applications',
      authors: 'Dr. Priya Sharma, Prof. Aditya Gupta',
      date: 'June 2024',
      category: 'Chemistry',
      image: '⚗️',
    },
    {
      id: 8,
      title: 'Artificial Intelligence in Healthcare',
      authors: 'Dr. Rajesh Kumar, Dr. Neha Verma',
      date: 'May 2024',
      category: 'Technology',
      image: '🏥',
    },
    {
      id: 9,
      title: 'Climate Change Mitigation',
      authors: 'Prof. Anjali Singh, Dr. Vikram Patel',
      date: 'April 2024',
      category: 'Environmental Science',
      image: '🌍',
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl" />
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
              <FaBook className="w-4 h-4" />
              <span>Our Publications</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair tracking-tight">
              Publications
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Explore our collection of magazines, research papers, and academic publications 
              from The Editorial Board, MMMUT.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <FaBook className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">16+</p>
                <p className="text-sm text-gray-400">Volumes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <FaNewspaper className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-400">Articles</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <FaCalendarAlt className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-sm text-gray-400">Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 border-b border-gray-100 sticky top-[60px] z-40">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications Magazine Component */}
      <MagazineCard publications={publications} />

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <FaPaperPlane className="w-4 h-4" />
            <span>Submit Your Work</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair tracking-tight">
            Share Your Research
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Have you conducted groundbreaking research or written something inspiring? 
            We'd love to publish your work. Submit your paper today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              <span>Submit Your Work</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              View Guidelines
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Publications;
