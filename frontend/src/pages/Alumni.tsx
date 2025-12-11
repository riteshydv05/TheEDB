import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Card from '../components/common/Card';
import HeroAlumni from './HeroAlumni';
import { FaUsers, FaRocket, FaFileAlt, FaTrophy, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Alumni: React.FC = () => {
  const batchData = [
    {
      id: 1,
      year: '2023-2024',
      count: 45,
      achievements: 'Founded 5 startups, 3 research papers published',
    },
    {
      id: 2,
      year: '2022-2023',
      count: 38,
      achievements: 'Notable placements in top tech companies',
    },
    {
      id: 3,
      year: '2021-2022',
      count: 52,
      achievements: '12 PhD admissions, numerous publications',
    },
    {
      id: 4,
      year: '2020-2021',
      count: 41,
      achievements: 'Industry leaders and entrepreneurs',
    },
    {
      id: 5,
      year: '2019-2020',
      count: 48,
      achievements: 'International research collaborations',
    },
    {
      id: 6,
      year: '2018-2019',
      count: 43,
      achievements: 'Awards and recognitions worldwide',
    },
  ];

  const successStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      batch: '2015-2016',
      role: 'Founder & CEO, TechVision',
      story:
        'Started with a simple idea during his research at the Editorial Board, now leading a company with 500+ employees.',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      batch: '2012-2013',
      role: 'Research Scientist, Global AI Lab',
      story:
        'Published 25+ papers and received the prestigious research award for her contributions to machine learning.',
      image: '👩‍🔬',
    },
    {
      id: 3,
      name: 'Aditya Patel',
      batch: '2017-2018',
      role: 'Senior Engineer, Innovation Hub',
      story:
        'Developed groundbreaking technologies that are now used globally, mentoring the next generation of researchers.',
      image: '👨‍💻',
    },
  ];

  const stats = [
    { icon: FaUsers, value: '500+', label: 'Total Alumni', color: 'text-orange-500' },
    { icon: FaRocket, value: '100+', label: 'Alumni Startups', color: 'text-amber-500' },
    { icon: FaFileAlt, value: '1000+', label: 'Published Papers', color: 'text-blue-500' },
    { icon: FaTrophy, value: '50+', label: 'Awards Won', color: 'text-cyan-500' },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardHoverVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="min-h-screen overflow-hidden">
        <HeroAlumni />
      </div>

      {/* Archive Section */}
      <section className="py-16 md:py-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Batch Archive
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {batchData.map((batch) => (
              <motion.div
                key={batch.id}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-orange-500 font-playfair">{batch.year}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl md:text-4xl font-bold text-gray-900">{batch.count}</span>
                        <FaUsers className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Members</p>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Highlights</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{batch.achievements}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 w-full px-4 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:from-gray-800 hover:to-gray-700 transition-all shadow-sm"
                    >
                      <span>View Members</span>
                      <FaArrowRight className="w-3 h-3" />
                    </motion.button>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              Inspiring Journeys
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {successStories.map((story) => (
              <motion.div
                key={story.id}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="h-full bg-gradient-to-br from-white to-slate-50 border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl flex-shrink-0">{story.image}</div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                          <p className="text-sm text-orange-500 font-medium">{story.role}</p>
                          <p className="text-xs text-gray-400 mt-1">Batch {story.batch}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{story.story}</p>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium"
                      >
                        <FaLinkedin className="w-4 h-4" />
                        <span>Connect</span>
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
              Our Impact
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and the achievements of our alumni network.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className={`text-3xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
            Join the Alumni Network
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Stay connected with your batch mates, access exclusive resources, and be part of the ever-growing Editorial Board community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-colors"
            >
              Join Network
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Alumni;
