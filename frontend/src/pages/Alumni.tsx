import React from 'react';
import Card from '../components/Common/Card';

const Alumni: React.FC = () => {
  const batchData = [
    {
      id: 1,
      year: '2023-2024',
      count: 45,
      achievements: 'Founded 5 startups, 3 research papers published',
    },
    {
      id: 2,
      year: '2022-2023',
      count: 38,
      achievements: 'Notable placements in top tech companies',
    },
    {
      id: 3,
      year: '2021-2022',
      count: 52,
      achievements: '12 PhD admissions, numerous publications',
    },
    {
      id: 4,
      year: '2020-2021',
      count: 41,
      achievements: 'Industry leaders and entrepreneurs',
    },
    {
      id: 5,
      year: '2019-2020',
      count: 48,
      achievements: 'International research collaborations',
    },
    {
      id: 6,
      year: '2018-2019',
      count: 43,
      achievements: 'Awards and recognitions worldwide',
    },
  ];

  const successStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      batch: '2015-2016',
      role: 'Founder & CEO, TechVision',
      story:
        'Started with a simple idea during his research at the Editorial Board, now leading a company with 500+ employees.',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      batch: '2012-2013',
      role: 'Research Scientist, Global AI Lab',
      story:
        'Published 25+ papers and received the prestigious research award for her contributions to machine learning.',
      image: '👩‍🔬',
    },
    {
      id: 3,
      name: 'Aditya Patel',
      batch: '2017-2018',
      role: 'Senior Engineer, Innovation Hub',
      story:
        'Developed groundbreaking technologies that are now used globally, mentoring the next generation of researchers.',
      image: '👨‍💻',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni & Archive</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Celebrating the achievements and contributions of our alumni across the years.
          </p>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-2 text-center">Batch Archive</h2>
          <div className="w-24 h-1 bg-gradient-logo mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batchData.map((batch) => (
              <Card key={batch.id} className="hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-accent-orange">{batch.year}</h3>
                  <div className="text-3xl font-bold text-primary-dark">{batch.count}</div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Members</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-700 font-semibold">Highlights:</p>
                  <p className="text-sm text-gray-600 mt-2">{batch.achievements}</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-orange transition-colors w-full font-semibold">
                  View Members
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-2 text-center">Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-logo mx-auto mb-12"></div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story) => (
              <Card key={story.id} className="flex items-start gap-6 hover:shadow-2xl">
                <div className="text-6xl flex-shrink-0">{story.image}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-dark">{story.name}</h3>
                  <p className="text-sm text-accent-orange font-semibold mb-2">{story.role}</p>
                  <p className="text-xs text-gray-500 mb-3">Batch {story.batch}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{story.story}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-orange">500+</div>
              <p className="text-gray-300">Total Alumni</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow">100+</div>
              <p className="text-gray-300">Alumni Startups</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-blue">1000+</div>
              <p className="text-gray-300">Published Papers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-cyan">50+</div>
              <p className="text-gray-300">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-accent-orange to-accent-yellow text-primary-dark py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Alumni Network</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join our thriving network of alumni and stay connected with your batch mates and the Editorial Board community.
          </p>
          <button className="px-8 py-3 bg-primary-dark text-white rounded-lg font-semibold hover:bg-primary-light transition-colors">
            Join Alumni Network
          </button>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
