import React from 'react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Academic Conference 2024',
      date: 'December 15-17, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'MMM University Auditorium',
      description: 'Join us for our flagship annual conference featuring keynote presentations from leading researchers.',
      image: '🎤',
    },
    {
      id: 2,
      title: 'Research Methodology Workshop',
      date: 'December 20, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Campus Hall',
      description: 'Learn advanced research methodologies and best practices from experienced researchers.',
      image: '🔬',
    },
    {
      id: 3,
      title: 'Alumni Networking Meet',
      date: 'December 25, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'University Club',
      description: 'Reconnect with alumni and share your professional journey with fellow scholars.',
      image: '🤝',
    },
    {
      id: 4,
      title: 'Publication Launch Event',
      date: 'January 10, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Library Auditorium',
      description: 'Celebrate the launch of our latest publications and meet the contributing authors.',
      image: '📖',
    },
    {
      id: 5,
      title: 'Student Research Symposium',
      date: 'January 15, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Convention Center',
      description: 'Showcase student research and foster intellectual exchange among young scholars.',
      image: '🎓',
    },
    {
      id: 6,
      title: 'Interdisciplinary Roundtable',
      date: 'January 22, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Seminar Room',
      description: 'Engage in discussions on emerging trends across multiple academic disciplines.',
      image: '💡',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Conferences</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Stay connected with our upcoming events, workshops, and conferences.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex flex-col hover:shadow-2xl">
                <div className="text-5xl mb-4">{event.image}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-4 flex-grow">{event.title}</h3>
                
                <div className="space-y-3 border-t border-gray-200 pt-4 mb-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaCalendarAlt className="text-accent-orange flex-shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaClock className="text-accent-orange flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-accent-orange flex-shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-grow">{event.description}</p>
                
                <Button className="w-full">Register Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-accent-orange to-accent-yellow text-primary-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
            <p className="text-lg">Subscribe to our newsletter to receive updates about upcoming events and conferences.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
