import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';
import { FaAward, FaUsers, FaCalendar, FaBook } from 'react-icons/fa';

const Home: React.FC = () => {
  const features = [
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Distinguished scholars and researchers',
    },
    {
      icon: FaCalendar,
      title: 'Events',
      description: 'Academic conferences and seminars',
    },
    {
      icon: FaBook,
      title: 'Publications',
      description: 'Groundbreaking research papers',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Academic excellence and innovation',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white text-primary-dark overflow-hidden min-h-[70vh] flex items-center">
        {/* University Building Background with full opacity */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/university-building.jpg" 
            alt="" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-sm md:text-base text-white max-w-2xl mx-auto drop-shadow-lg">
              Fostering excellence in academic research and scholarly discourse at MMM University of Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/team">
                <Button size="sm">Our Team</Button>
              </Link>
              <Link to="/publications">
                <Button variant="secondary" size="sm">
                  Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="text-2xl text-accent-orange mb-2" />
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/editorial-board-text.png" 
              alt="The Editorial Board" 
              className="h-8 md:h-10 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Join Our Academic Community
          </h2>
          <p className="text-sm text-gray-600 mb-5 max-w-2xl mx-auto">
            Be part of a vibrant community of scholars and researchers
          </p>
          <Link to="/contact">
            <Button size="sm">Get in Touch</Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-accent-orange mb-1">50+</div>
              <div className="text-xs text-gray-600">Research Papers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-yellow mb-1">1000+</div>
              <div className="text-xs text-gray-600">Students Reached</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-blue mb-1">500+</div>
              <div className="text-xs text-gray-600">Events Organized</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-cyan mb-1">100+</div>
              <div className="text-xs text-gray-600">Collaborations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
