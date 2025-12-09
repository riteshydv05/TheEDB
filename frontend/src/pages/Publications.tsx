import React from 'react';
import Card from '../components/Common/Card';
import { FaDownload, FaUser, FaCalendar, FaTag } from 'react-icons/fa';

const Publications: React.FC = () => {
  const publications = [
    {
      id: 1,
      title: 'Advanced Machine Learning Algorithms',
      authors: 'Dr. Rajesh Kumar, Prof. Anjali Singh',
      date: 'November 2024',
      category: 'Computer Science',
      image: '📄',
    },
    {
      id: 2,
      title: 'Quantum Computing: Future Prospects',
      authors: 'Dr. Vikram Patel, Dr. Neha Verma',
      date: 'October 2024',
      category: 'Physics',
      image: '📊',
    },
    {
      id: 3,
      title: 'Sustainable Engineering Practices',
      authors: 'Prof. Aditya Gupta, Dr. Priya Sharma',
      date: 'September 2024',
      category: 'Engineering',
      image: '🔧',
    },
    {
      id: 4,
      title: 'Biodiversity and Conservation',
      authors: 'Dr. Neha Verma, Dr. Rajesh Kumar',
      date: 'August 2024',
      category: 'Biology',
      image: '🌿',
    },
    {
      id: 5,
      title: 'Novel Approaches in Mathematics',
      authors: 'Prof. Vikram Patel',
      date: 'July 2024',
      category: 'Mathematics',
      image: '📐',
    },
    {
      id: 6,
      title: 'Nanotechnology Applications',
      authors: 'Dr. Priya Sharma, Prof. Aditya Gupta',
      date: 'June 2024',
      category: 'Chemistry',
      image: '⚗️',
    },
    {
      id: 7,
      title: 'Artificial Intelligence in Healthcare',
      authors: 'Dr. Rajesh Kumar, Dr. Neha Verma',
      date: 'May 2024',
      category: 'Technology',
      image: '🏥',
    },
    {
      id: 8,
      title: 'Climate Change Mitigation',
      authors: 'Prof. Anjali Singh, Dr. Vikram Patel',
      date: 'April 2024',
      category: 'Environmental Science',
      image: '🌍',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Explore our collection of published research and academic papers.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-accent-orange text-white rounded-full hover:bg-orange-600 transition-colors">
              All
            </button>
            <button className="px-4 py-2 bg-gray-200 text-primary-dark rounded-full hover:bg-gray-300 transition-colors">
              Computer Science
            </button>
            <button className="px-4 py-2 bg-gray-200 text-primary-dark rounded-full hover:bg-gray-300 transition-colors">
              Engineering
            </button>
            <button className="px-4 py-2 bg-gray-200 text-primary-dark rounded-full hover:bg-gray-300 transition-colors">
              Science
            </button>
            <button className="px-4 py-2 bg-gray-200 text-primary-dark rounded-full hover:bg-gray-300 transition-colors">
              Technology
            </button>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <Card key={pub.id} className="flex flex-col hover:shadow-2xl">
                <div className="text-5xl mb-4">{pub.image}</div>
                
                <h3 className="text-lg font-bold text-primary-dark mb-4 flex-grow">{pub.title}</h3>

                <div className="space-y-3 border-t border-gray-200 pt-4 mb-4">
                  <div className="flex items-start gap-3 text-gray-600">
                    <FaUser className="text-accent-orange flex-shrink-0 mt-1" size={14} />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaCalendar className="text-accent-orange flex-shrink-0" size={14} />
                    <span className="text-sm">{pub.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaTag className="text-accent-orange flex-shrink-0" size={14} />
                    <span className="text-sm bg-accent-yellow text-primary-dark px-3 py-1 rounded-full font-semibold">
                      {pub.category}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-accent-orange text-white py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 font-semibold">
                  <FaDownload /> Download
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Share Your Research</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have you conducted groundbreaking research? We'd love to publish your work. Submit your paper today!
          </p>
          <button className="px-8 py-3 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
            Submit Paper
          </button>
        </div>
      </section>
    </div>
  );
};

export default Publications;
