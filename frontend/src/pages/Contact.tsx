import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaPaperPlane, FaClock, FaCheckCircle } from 'react-icons/fa';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: FaPhone, title: 'Phone', value: '+91 (123) 456-7890', color: 'from-green-400 to-emerald-500' },
    { icon: FaEnvelope, title: 'Email', value: 'info@editorialboard.edu', color: 'from-blue-400 to-indigo-500' },
    { icon: FaMapMarkerAlt, title: 'Address', value: 'MMMUT, Gorakhpur, UP, India', color: 'from-orange-400 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative bg-primary-dark text-white py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent-orange rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide mb-6">
              💬 Get in Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Contact <span className="text-accent-orange">Us</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Have a question, suggestion, or want to collaborate? We'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-1">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.value}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <FadeIn direction="left">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you soon.</p>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <FaCheckCircle className="text-green-500 text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thank you for reaching out. We'll respond soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2.5 text-xs bg-white px-2 text-accent-orange font-semibold' 
                          : 'top-3.5 text-gray-400'
                      }`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2.5 text-xs bg-white px-2 text-accent-orange font-semibold' 
                          : 'top-3.5 text-gray-400'
                      }`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="publication">📚 Publication Inquiry</option>
                        <option value="event">🎉 Event Information</option>
                        <option value="collaboration">🤝 Collaboration Opportunity</option>
                        <option value="feedback">💬 Feedback</option>
                        <option value="other">📝 Other</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs bg-white px-2 text-accent-orange font-semibold' 
                          : 'top-3.5 text-gray-400'
                      }`}>
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-accent-orange transition-colors bg-gray-50 focus:bg-white resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-accent-orange to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info Panel */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary-dark to-gray-900 rounded-3xl p-8 md:p-10 text-white">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <FaClock className="text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Hours</h3>
                        <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-300 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-400 text-sm">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <FaEnvelope className="text-accent-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Quick Response</h3>
                        <p className="text-gray-300 text-sm">We typically respond within 24 hours on business days.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      {[
                        { icon: FaFacebook, url: 'https://facebook.com', bg: 'bg-blue-600 hover:bg-blue-700' },
                        { icon: FaTwitter, url: 'https://twitter.com', bg: 'bg-sky-500 hover:bg-sky-600' },
                        { icon: FaInstagram, url: 'https://instagram.com', bg: 'bg-pink-600 hover:bg-pink-700' },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-11 h-11 rounded-xl ${social.bg} flex items-center justify-center transition-colors`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="text-lg" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-3xl h-64 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-4xl mx-auto mb-2 text-accent-orange" />
                      <p className="font-medium">MMMUT, Gorakhpur</p>
                      <p className="text-sm">Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
