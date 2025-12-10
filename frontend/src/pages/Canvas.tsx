import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaHeart, FaQuoteLeft, FaImage, FaTimes, FaPaperPlane, FaLightbulb, FaRocket, FaGlobe, FaPlus } from 'react-icons/fa';
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '../components/Motion';

interface Thought {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string | null;
  avatar: string;
  date: string;
  likes: number;
  isLiked: boolean;
}

const Canvas: React.FC = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [thoughts, setThoughts] = useState<Thought[]>([
    {
      id: 1,
      name: 'Dr. Vikram Gupta',
      role: 'Former Board Member',
      text: 'The Editorial Board has been instrumental in shaping my career. The collaborative environment and access to cutting-edge research has been invaluable.',
      image: null,
      avatar: '👨‍🎓',
      date: 'October 2024',
      likes: 24,
      isLiked: false,
    },
    {
      id: 2,
      name: 'Prof. Anjali Verma',
      role: 'Active Contributor',
      text: 'Publishing through this board gave my research the visibility it deserved. The editorial team is professional and supportive throughout the process.',
      image: null,
      avatar: '👩‍🏫',
      date: 'September 2024',
      likes: 18,
      isLiked: false,
    },
    {
      id: 3,
      name: 'Rohan Sharma',
      role: 'Early Career Researcher',
      text: 'As a young researcher, this board opened doors I never imagined. The mentorship and networking opportunities are truly exceptional.',
      image: null,
      avatar: '👨‍💼',
      date: 'August 2024',
      likes: 32,
      isLiked: false,
    },
    {
      id: 4,
      name: 'Dr. Neha Kapoor',
      role: 'Industry Partner',
      text: 'Our collaboration with the Editorial Board has been fruitful. We appreciate their commitment to bridging academia and industry.',
      image: null,
      avatar: '👩‍💻',
      date: 'July 2024',
      likes: 15,
      isLiked: false,
    },
    {
      id: 5,
      name: 'Prof. Suresh Kumar',
      role: 'International Collaborator',
      text: 'Working with this editorial team on international research initiatives has been a highlight of my career. Truly world-class professionals.',
      image: null,
      avatar: '🧑‍🔬',
      date: 'June 2024',
      likes: 21,
      isLiked: false,
    },
    {
      id: 6,
      name: 'Dr. Pooja Singh',
      role: 'Student Mentee',
      text: 'The canvas section provides such valuable insights from experienced professionals. It has significantly influenced my research direction.',
      image: null,
      avatar: '👩‍🎓',
      date: 'May 2024',
      likes: 27,
      isLiked: false,
    },
  ]);

  const [newThought, setNewThought] = useState({
    name: '',
    role: '',
    text: '',
    image: null as string | null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLike = (id: number) => {
    setThoughts(prev => prev.map(thought => 
      thought.id === id 
        ? { ...thought, likes: thought.isLiked ? thought.likes - 1 : thought.likes + 1, isLiked: !thought.isLiked }
        : thought
    ));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewThought(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThought.name || !newThought.text) return;

    const newEntry: Thought = {
      id: thoughts.length + 1,
      name: newThought.name,
      role: newThought.role || 'Community Member',
      text: newThought.text,
      image: newThought.image,
      avatar: '✨',
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      likes: 0,
      isLiked: false,
    };

    setThoughts(prev => [newEntry, ...prev]);
    setNewThought({ name: '', role: '', text: '', image: null });
    setShowSubmitForm(false);
  };

  const featuredStories = [
    { icon: FaRocket, title: 'Career Growth', desc: 'Inspiring journeys of remarkable success', color: 'from-purple-500 to-indigo-600' },
    { icon: FaLightbulb, title: 'Research Breakthroughs', desc: 'Groundbreaking discoveries worldwide', color: 'from-amber-500 to-orange-600' },
    { icon: FaGlobe, title: 'Global Impact', desc: 'Making a difference through innovation', color: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative bg-primary-dark text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent-orange rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide mb-6">
              🎨 Canvas
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Drop Your <span className="text-accent-orange">Thoughts</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              Share your experiences, insights, and reflections with our vibrant community. Every thought matters.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <motion.button
              onClick={() => setShowSubmitForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange hover:bg-orange-600 rounded-xl font-semibold transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlus /> Share Your Thought
            </motion.button>
          </FadeIn>
        </div>
      </section>

      {/* Submit Thought Modal */}
      <AnimatePresence>
        {showSubmitForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSubmitForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary-dark">Share Your Thought</h2>
                <button 
                  onClick={() => setShowSubmitForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmitThought} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={newThought.name}
                    onChange={e => setNewThought(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role / Title</label>
                  <input
                    type="text"
                    value={newThought.role}
                    onChange={e => setNewThought(prev => ({ ...prev, role: e.target.value }))}
                    placeholder="e.g., Student, Alumni, Researcher"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Thought *</label>
                  <textarea
                    value={newThought.text}
                    onChange={e => setNewThought(prev => ({ ...prev, text: e.target.value }))}
                    placeholder="Share your experience, insight, or reflection..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors resize-none"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Add an Image (Optional)</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  {newThought.image ? (
                    <div className="relative rounded-xl overflow-hidden">
                      <img src={newThought.image} alt="Preview" className="w-full h-40 object-cover" />
                      <button
                        type="button"
                        onClick={() => setNewThought(prev => ({ ...prev, image: null }))}
                        className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-accent-orange transition-colors flex flex-col items-center gap-2 text-gray-500 hover:text-accent-orange"
                    >
                      <FaImage size={24} />
                      <span className="text-sm">Click to upload an image</span>
                    </button>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-accent-orange to-orange-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <FaPaperPlane /> Submit Thought
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thoughts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Community Reflections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Inspiring thoughts and experiences shared by our vibrant community members.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thoughts.map((thought) => (
              <StaggerItem key={thought.id}>
                <HoverScale>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                    {/* Quote Icon */}
                    <FaQuoteLeft className="text-2xl text-accent-orange/30 mb-4" />
                    
                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{thought.text}</p>
                    
                    {/* Image if exists */}
                    {thought.image && (
                      <div className="mb-4 rounded-xl overflow-hidden">
                        <img src={thought.image} alt="Thought" className="w-full h-40 object-cover" />
                      </div>
                    )}
                    
                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{thought.avatar}</span>
                        <div>
                          <p className="font-semibold text-primary-dark text-sm">{thought.name}</p>
                          <p className="text-xs text-gray-500">{thought.role}</p>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => handleLike(thought.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${
                          thought.isLiked 
                            ? 'bg-red-100 text-red-500' 
                            : 'bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-400'
                        }`}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaHeart className={thought.isLiked ? 'animate-pulse' : ''} />
                        <span>{thought.likes}</span>
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                      <FaCalendar />
                      <span>{thought.date}</span>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 md:py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore curated stories of success, innovation, and impact from our community.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredStories.map((story, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${story.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <story.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{story.desc}</p>
                  <span className="text-accent-orange text-sm font-semibold">Read Stories →</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-accent-orange to-orange-500 rounded-3xl p-10 md:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Story to Share?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Your experience could inspire others. Drop your thought and become part of our growing community.
              </p>
              <motion.button
                onClick={() => setShowSubmitForm(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-orange font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Share Your Thought
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Canvas;
