import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Button } from '../components/UI';
import { FaAward, FaUsers, FaCalendar, FaBook, FaUniversity, FaNewspaper, FaPen, FaGlobe, FaArrowRight } from 'react-icons/fa';

const Home: React.FC = () => {
  const features = [
    {
      icon: FaNewspaper,
      title: 'Publications',
      description: 'TIRESIA magazine and research papers published regularly',
    },
    {
      icon: FaUsers,
      title: 'Creative Team',
      description: 'Talented writers, editors, and designers working together',
    },
    {
      icon: FaCalendar,
      title: 'Events',
      description: 'Literary events, workshops, and competitions',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Recognized for outstanding contributions to campus literature',
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { value: '16+', label: 'Magazine Volumes', color: 'text-orange-500' },
    { value: '1000+', label: 'Students Reached', color: 'text-amber-500' },
    { value: '50+', label: 'Events Organized', color: 'text-blue-500' },
    { value: '100+', label: 'Published Articles', color: 'text-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white text-primary-dark overflow-hidden min-h-[85vh] flex items-center">
        {/* University Building Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/university-building.jpg" 
            alt="" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Official Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-medium border border-white/20">
                <FaUniversity className="text-orange-400" />
                Official Publishing Body of MMMUT
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              <span className="font-semibold text-white">The Editorial Board</span> is the official publishing body of 
              Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. 
              We foster excellence in academic research, creative writing, and scholarly discourse 
              within our vibrant university community.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link to="/team">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="md" className="w-full sm:w-auto group">
                    <span>Meet Our Team</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/publications">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" size="md" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-dark">
                    <FaBook className="mr-2" /> View Publications
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">
              About The Editorial Board
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Established as the premier literary and publishing organization of MMMUT, 
                The Editorial Board has been the cornerstone of creative and academic expression 
                on campus. We publish <span className="font-semibold text-orange-500">TIRESIA</span>, 
                our flagship magazine that showcases the best of student writing, artwork, and research.
              </p>
              <p>
                Our mission is to provide a platform for students to express their ideas, 
                share their research, and develop their writing skills while contributing to 
                the intellectual growth of our university community.
              </p>
            </div>
            
            {/* Key Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { icon: FaPen, label: 'Creative Writing' },
                { icon: FaBook, label: 'Research Papers' },
                { icon: FaGlobe, label: 'Campus News' },
                { icon: FaAward, label: 'Competitions' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors"
                >
                  <item.icon className="text-3xl text-orange-500 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair tracking-tight">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From publishing magazines to organizing literary events, we're dedicated to 
              fostering a culture of creativity and academic excellence.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-amber-500 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="text-2xl text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-playfair">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <img 
                src="/editorial-board-text.png" 
                alt="The Editorial Board" 
                className="h-10 md:h-12 object-contain"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-playfair tracking-tight">
              Join Our Creative Community
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Be part of MMMUT's official publishing body. Whether you're a writer, designer, 
              photographer, or simply passionate about literature, there's a place for you here.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button size="md" className="group">
                  <span>Get in Touch</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
