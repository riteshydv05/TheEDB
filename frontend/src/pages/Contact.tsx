import React from 'react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Get in touch with our team. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="text-center">
              <FaPhone className="text-4xl text-accent-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-dark mb-2">Phone</h3>
              <p className="text-gray-600">+91 (123) 456-7890</p>
            </Card>

            <Card className="text-center">
              <FaEnvelope className="text-4xl text-accent-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-dark mb-2">Email</h3>
              <p className="text-gray-600">info@editorialboard.edu</p>
            </Card>

            <Card className="text-center">
              <FaMapMarkerAlt className="text-4xl text-accent-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-dark mb-2">Address</h3>
              <p className="text-gray-600">MMM University of Technology, Haryana, India</p>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <Card>
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="publication">Publication Inquiry</option>
                    <option value="event">Event Information</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-orange resize-none"
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Info */}
            <div>
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-primary-dark mb-2">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-primary-dark mb-2">Quick Response</h3>
                      <p className="text-gray-600">We typically respond within 24 hours on business days.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-primary-dark mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center text-white transition-colors"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center text-white transition-colors"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center text-white transition-colors"
                        >
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
