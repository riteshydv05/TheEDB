import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CircularGallery from '../components/Common/CircularGallery';
import { FaUsers, FaGraduationCap, FaStar } from 'react-icons/fa';

const Team: React.FC = () => {
  const finalYearMembers = [
    { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop', text: 'Priya Sharma\nComputer Science\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop', text: 'Rahul Verma\nElectrical Engineering\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop', text: 'Ananya Reddy\nMechanical Engineering\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop', text: 'Arjun Patel\nCivil Engineering\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', text: 'Vikram Singh\nChemical Engineering\nFinal Year' },
  ];

  const preFinalYearMembers = [
    { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop', text: 'Sneha Desai\nComputer Science\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=600&fit=crop', text: 'Rohan Gupta\nElectronics Engineering\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop', text: 'Kavya Nair\nBiotechnology\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=600&fit=crop', text: 'Aditya Kumar\nInformation Technology\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop', text: 'Ishita Malhotra\nMechanical Engineering\nPre-Final Year' },
  ];

  const sophomoreMembers = [
    { image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop', text: 'Aarav Joshi\nComputer Science\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop', text: 'Diya Rao\nElectrical Engineering\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop', text: 'Riya Bansal\nCivil Engineering\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&h=600&fit=crop', text: 'Karan Mehta\nMechanical Engineering\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop', text: 'Sanya Kapoor\nChemical Engineering\nSophomore' },
  ];

  const teamSections = [
    { title: 'Final Year Members', members: finalYearMembers, color: '#ff6b35', icon: FaStar },
    { title: 'Pre-Final Year Members', members: preFinalYearMembers, color: '#f4d04a', icon: FaGraduationCap },
    { title: 'Sophomore Members', members: sophomoreMembers, color: '#0099ff', icon: FaUsers },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <FaUsers className="w-4 h-4" />
              <span>Our Team</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair tracking-tight">
              Meet the Editorial Board
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our dedicated team ensures the highest standards of academic excellence at The Editorial Board, MMMUT.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <FaStar className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{finalYearMembers.length}</p>
                <p className="text-sm text-gray-400">Final Year</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <FaGraduationCap className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{preFinalYearMembers.length}</p>
                <p className="text-sm text-gray-400">Pre-Final Year</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <FaUsers className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{sophomoreMembers.length}</p>
                <p className="text-sm text-gray-400">Sophomores</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Photo */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="/team-photo.jpg" 
                alt="The Editorial Board Team" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Galleries */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-20"
      >
        {teamSections.map((section) => (
          <motion.section
            key={section.title}
            variants={itemVariants}
            className="mb-16"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${section.color}20` }}
                >
                  <section.icon className="w-5 h-5" style={{ color: section.color }} />
                </div>
                <h2 
                  className="text-2xl md:text-3xl font-bold font-playfair"
                  style={{ color: section.color }}
                >
                  {section.title}
                </h2>
              </div>
            </div>
            <div style={{ height: '700px', position: 'relative' }}>
              <CircularGallery 
                items={section.members}
                bend={0} 
                textColor={section.color} 
                borderRadius={0.05} 
                scrollEase={0.08}
                font="bold 26px 'Playfair Display', serif"
              />
            </div>
          </motion.section>
        ))}
      </motion.div>

      {/* Join Team CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about writing, editing, or design? We're always looking for talented individuals to join The Editorial Board.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;

