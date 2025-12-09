import React from 'react';
import { MagazineCard } from '../components/Publications';
import type { Publication } from '../components/Publications';

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: 'TIRESIA',
      subtitle: 'Volume 16, Issue 2 - Eclectic Essence',
      authors: 'The Editorial Board, MMMUT',
      date: 'May 2024',
      category: 'Magazine',
      image: '/image.png',
      description: 'The May Issue of TIRESIA brings you a collection of thought-provoking articles, creative pieces, and insights from our university community. Featuring interviews, campus buzz, tech insights, and much more.',
      isFeatured: true,
      // Add your Cloudinary PDF URL here after uploading
      pdfUrl: 'https://res.cloudinary.com/dwdx4kjgx/raw/upload/v1765314794/vol_16_issue_2_xocsqk.pdf',
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Algorithms',
      authors: 'Dr. Rajesh Kumar, Prof. Anjali Singh',
      date: 'November 2024',
      category: 'Computer Science',
      image: '📄',
      // pdfUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/raw/upload/...',
    },
    {
      id: 3,
      title: 'Quantum Computing: Future Prospects',
      authors: 'Dr. Vikram Patel, Dr. Neha Verma',
      date: 'October 2024',
      category: 'Physics',
      image: '📊',
    },
    {
      id: 4,
      title: 'Sustainable Engineering Practices',
      authors: 'Prof. Aditya Gupta, Dr. Priya Sharma',
      date: 'September 2024',
      category: 'Engineering',
      image: '🔧',
    },
    {
      id: 5,
      title: 'Biodiversity and Conservation',
      authors: 'Dr. Neha Verma, Dr. Rajesh Kumar',
      date: 'August 2024',
      category: 'Biology',
      image: '🌿',
    },
    {
      id: 6,
      title: 'Novel Approaches in Mathematics',
      authors: 'Prof. Vikram Patel',
      date: 'July 2024',
      category: 'Mathematics',
      image: '📐',
    },
    {
      id: 7,
      title: 'Nanotechnology Applications',
      authors: 'Dr. Priya Sharma, Prof. Aditya Gupta',
      date: 'June 2024',
      category: 'Chemistry',
      image: '⚗️',
    },
    {
      id: 8,
      title: 'Artificial Intelligence in Healthcare',
      authors: 'Dr. Rajesh Kumar, Dr. Neha Verma',
      date: 'May 2024',
      category: 'Technology',
      image: '🏥',
    },
    {
      id: 9,
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
      <section className="bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-white py-16 md:py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/50 rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 tracking-wide">
            📚 Our Publications
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Publications
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Explore our collection of magazines, research papers, and academic publications 
            from The Editorial Board, MMMUT.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 border-b border-gray-200 sticky top-[60px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <button className="px-5 py-2 bg-accent-orange text-white rounded-full hover:bg-orange-600 transition-all duration-300 font-medium text-sm hover:shadow-md">
              All
            </button>
            <button className="px-5 py-2 bg-gray-100 text-primary-dark rounded-full hover:bg-gray-200 transition-all duration-300 font-medium text-sm">
             Newsletter
            </button>
            <button className="px-5 py-2 bg-gray-100 text-primary-dark rounded-full hover:bg-gray-200 transition-all duration-300 font-medium text-sm">
              Annual Magazine
            </button>
           
          </div>
        </div>
      </section>

      {/* Publications Magazine Component */}
      <MagazineCard publications={publications} />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-light to-primary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,...')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Share Your Research</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Have you conducted groundbreaking research or written something inspiring? 
            We'd love to publish your work. Submit your paper today!
          </p>
          <button className="px-8 py-3.5 bg-accent-orange hover:bg-orange-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            Submit Your Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default Publications;
