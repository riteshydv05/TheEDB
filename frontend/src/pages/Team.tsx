import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaStar, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Card } from '../components/ui';

interface TeamMember {
  name: string;
  role: string;
  branch: string;
  year: string;
  image: string;
  description?: string;
  linkedin?: string;
  email?: string;
}

const Team: React.FC = () => {

  const finalYearMembers: TeamMember[] = [
    { 
      name: 'Priyanshu Chaurasia',
      role: 'Chief Technology Officer',
      branch: 'Computer Science',
      year: 'Final Year',
      image: '/team/priyanshu.jpg',
      description: 'Leads technology strategy, oversees all technical development, product architecture, and innovation.',
      linkedin: '#',
      email: 'priyanshu@example.com'
    },
    { 
      name: 'Member Name',
      role: 'Technical Lead',
      branch: 'Electrical Engineering',
      year: 'Final Year',
      image: '/team/member2.jpg',
      description: 'Manages technical operations and development.',
    },
    { 
      name: 'Member Name',
      role: 'Design Head',
      branch: 'Mechanical Engineering',
      year: 'Final Year',
      image: '/team/member3.jpg',
      description: 'Leads creative design and visual content.',
    },
  ];

  const preFinalYearMembers: TeamMember[] = [
    { 
      name: 'Member Name',
      role: 'Content Manager',
      branch: 'Computer Science',
      year: 'Pre-Final Year',
      image: '/team/member6.jpg',
      description: 'Manages content creation and editorial processes.',
    },
    { 
      name: 'Member Name',
      role: 'Marketing Lead',
      branch: 'Electronics Engineering',
      year: 'Pre-Final Year',
      image: '/team/member7.jpg',
      description: 'Oversees marketing and outreach initiatives.',
    },
  ];

  const sophomoreMembers: TeamMember[] = [
    { 
      name: 'Ritesh Yadav',
      role: 'Developer',
      branch: 'Computer Science',
      year: 'Sophomore',
      image: '/team/ritesh.jpg',
      description: 'Contributes to technical development and innovation.',
    },
    { 
      name: 'Member Name',
      role: 'Content Writer',
      branch: 'Electrical Engineering',
      year: 'Sophomore',
      image: '/team/member12.jpg',
      description: 'Creates engaging content for publications.',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28 overflow-hidden">
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

      {/* Final Year Team */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <FaStar className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-orange-400">
              Final Year Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {finalYearMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white font-playfair">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400">
                      {member.branch} • {member.year}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="flex gap-3 pt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 transition-colors"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 transition-colors"
                        >
                          <FaEnvelope className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pre-Final Year Team */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
              <FaGraduationCap className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-yellow-400">
              Pre-Final Year Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {preFinalYearMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white font-playfair">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400">
                      {member.branch} • {member.year}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="flex gap-3 pt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 transition-colors"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 transition-colors"
                        >
                          <FaEnvelope className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sophomore Team */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <FaUsers className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-blue-400">
              Sophomore Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sophomoreMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white font-playfair">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400">
                      {member.branch} • {member.year}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="flex gap-3 pt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                        >
                          <FaEnvelope className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Team CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900" />
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
            className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;

