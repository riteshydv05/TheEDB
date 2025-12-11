import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Card from '../components/common/Card';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowRight, FaBell, FaUsers, FaCheck } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'conference' | 'workshop' | 'networking' | 'launch';
}

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'conference', label: 'Conferences' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'networking', label: 'Networking' },
  ];

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Annual Academic Conference 2024',
      date: 'December 15-17, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'MMM University Auditorium',
      description: 'Join us for our flagship annual conference featuring keynote presentations from leading researchers.',
      image: '🎤',
      category: 'conference',
    },
    {
      id: 2,
      title: 'Research Methodology Workshop',
      date: 'December 20, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Campus Hall',
      description: 'Learn advanced research methodologies and best practices from experienced researchers.',
      image: '🔬',
      category: 'workshop',
    },
    {
      id: 3,
      title: 'Alumni Networking Meet',
      date: 'December 25, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'University Club',
      description: 'Reconnect with alumni and share your professional journey with fellow scholars.',
      image: '🤝',
      category: 'networking',
    },
    {
      id: 4,
      title: 'Publication Launch Event',
      date: 'January 10, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Library Auditorium',
      description: 'Celebrate the launch of our latest publications and meet the contributing authors.',
      image: '📖',
      category: 'launch',
    },
    {
      id: 5,
      title: 'Student Research Symposium',
      date: 'January 15, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Convention Center',
      description: 'Showcase student research and foster intellectual exchange among young scholars.',
      image: '🎓',
      category: 'conference',
    },
    {
      id: 6,
      title: 'Interdisciplinary Roundtable',
      date: 'January 22, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Seminar Room',
      description: 'Engage in discussions on emerging trends across multiple academic disciplines.',
      image: '💡',
      category: 'workshop',
    },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter);

  const handleRegister = (eventId: number) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardHoverVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8, transition: { duration: 0.3 } }
  };

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
              <FaCalendarAlt className="w-4 h-4" />
              <span>Upcoming Events</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair tracking-tight">
              Events & Conferences
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Stay connected with our upcoming events, workshops, and conferences. Join us in celebrating knowledge and community.
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
                <FaCalendarAlt className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{upcomingEvents.length}</p>
                <p className="text-sm text-gray-400">Upcoming</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <FaUsers className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-400">Attendees</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 border-b border-gray-100 sticky top-[60px] z-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  layout
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div variants={cardHoverVariants}>
                    <Card className="flex flex-col h-full bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-orange-200 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl">{event.image}</div>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium capitalize">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex-grow font-playfair">{event.title}</h3>
                      
                      <div className="space-y-3 border-t border-gray-100 pt-4 mb-4">
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                            <FaCalendarAlt className="text-orange-500 w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                            <FaClock className="text-blue-500 w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                            <FaMapMarkerAlt className="text-green-500 w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{event.description}</p>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleRegister(event.id)}
                        disabled={registeredEvents.includes(event.id)}
                        className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                          registeredEvents.includes(event.id)
                            ? 'bg-green-100 text-green-700 cursor-default'
                            : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
                        }`}
                      >
                        {registeredEvents.includes(event.id) ? (
                          <>
                            <FaCheck className="w-4 h-4" />
                            <span>Registered</span>
                          </>
                        ) : (
                          <>
                            <span>Register Now</span>
                            <FaArrowRight className="w-3 h-3" />
                          </>
                        )}
                      </motion.button>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaBell className="w-4 h-4" />
              <span>Stay Updated</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-playfair">
              Never Miss an Event
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Subscribe to our newsletter to receive updates about upcoming events and conferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-white text-orange-600 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Events;
