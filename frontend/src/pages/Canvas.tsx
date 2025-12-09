import React from 'react';
import Card from '../components/Common/Card';
import { FaUser, FaCalendar, FaHeart } from 'react-icons/fa';

const Canvas: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Vikram Gupta',
      role: 'Former Board Member',
      text: 'The Editorial Board has been instrumental in shaping my career. The collaborative environment and access to cutting-edge research has been invaluable.',
      image: '👨‍🎓',
      date: 'October 2024',
    },
    {
      id: 2,
      name: 'Prof. Anjali Verma',
      role: 'Active Contributor',
      text: 'Publishing through this board gave my research the visibility it deserved. The editorial team is professional and supportive throughout the process.',
      image: '👩‍🏫',
      date: 'September 2024',
    },
    {
      id: 3,
      name: 'Rohan Sharma',
      role: 'Early Career Researcher',
      text: 'As a young researcher, this board opened doors I never imagined. The mentorship and networking opportunities are truly exceptional.',
      image: '👨‍💼',
      date: 'August 2024',
    },
    {
      id: 4,
      name: 'Dr. Neha Kapoor',
      role: 'Industry Partner',
      text: 'Our collaboration with the Editorial Board has been fruitful. We appreciate their commitment to bridging academia and industry.',
      image: '👩‍💻',
      date: 'July 2024',
    },
    {
      id: 5,
      name: 'Prof. Suresh Kumar',
      role: 'International Collaborator',
      text: 'Working with this editorial team on international research initiatives has been a highlight of my career. Truly world-class professionals.',
      image: '🧑‍🔬',
      date: 'June 2024',
    },
    {
      id: 6,
      name: 'Dr. Pooja Singh',
      role: 'Student Mentee',
      text: 'The canvas section provides such valuable insights from experienced professionals. It has significantly influenced my research direction.',
      image: '👩‍🎓',
      date: 'May 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Canvas</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Thoughts, experiences, and insights from alumni and board members about their journey with us.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-2 text-center">Member Reflections</h2>
          <div className="w-24 h-1 bg-gradient-logo mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-l-4 border-l-accent-orange hover:shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <FaHeart className="text-accent-orange text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-grow mb-4">
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-accent-orange text-sm" />
                    <div>
                      <p className="font-bold text-primary-dark text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FaCalendar className="text-accent-orange" />
                    {testimonial.date}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-dark">Share Your Story</h2>
            <p className="text-gray-600 text-lg">
              Have a meaningful experience or insight to share with our community? We'd love to hear from you!
            </p>
            <button className="px-8 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-dark to-primary-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Stories</h2>
          <div className="w-24 h-1 bg-gradient-logo mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-primary-dark text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Career Growth Stories</h3>
              <p className="text-gray-600 mb-4">
                Inspiring journeys of our members who achieved remarkable success in their careers.
              </p>
              <button className="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Read More
              </button>
            </Card>

            <Card className="text-primary-dark text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">Research Breakthroughs</h3>
              <p className="text-gray-600 mb-4">
                Groundbreaking research conducted by our alumni and board members worldwide.
              </p>
              <button className="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Read More
              </button>
            </Card>

            <Card className="text-primary-dark text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-gray-600 mb-4">
                How our community is making a difference globally through research and innovation.
              </p>
              <button className="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Read More
              </button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Canvas;
