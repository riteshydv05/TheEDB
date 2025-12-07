import React from 'react';
import Card from '../components/Common/Card';

const Gallery: React.FC = () => {
  const galleryImages = [
    { id: 1, title: 'Annual Conference 2024', category: 'Events', image: '🎤' },
    { id: 2, title: 'Research Workshop', category: 'Workshop', image: '🔬' },
    { id: 3, title: 'Team Meeting', category: 'Team', image: '👥' },
    { id: 4, title: 'Publishing Ceremony', category: 'Publications', image: '📖' },
    { id: 5, title: 'Campus Visit', category: 'Campus', image: '🏫' },
    { id: 6, title: 'Networking Event', category: 'Events', image: '🤝' },
    { id: 7, title: 'Seminar Session', category: 'Workshop', image: '🎓' },
    { id: 8, title: 'Alumni Reunion', category: 'Alumni', image: '🎉' },
    { id: 9, title: 'Lab Demonstration', category: 'Research', image: '🧪' },
    { id: 10, title: 'Award Ceremony', category: 'Awards', image: '🏆' },
    { id: 11, title: 'Collaboration Meeting', category: 'Partnership', image: '📝' },
    { id: 12, title: 'Youth Forum', category: 'Forum', image: '💭' },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Events', 'Workshop', 'Team', 'Research', 'Alumni', 'Campus', 'Publications', 'Awards', 'Partnership', 'Forum'];

  const filteredImages =
    selectedCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Explore memorable moments from our events, conferences, and activities.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent-orange text-white'
                    : 'bg-gray-200 text-primary-dark hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((img) => (
              <Card
                key={img.id}
                className="cursor-pointer overflow-hidden group h-64 flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-8xl">{img.image}</div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="font-bold text-center mb-2">{img.title}</h3>
                    <span className="text-sm bg-accent-orange px-3 py-1 rounded-full">{img.category}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-accent-orange to-accent-yellow text-primary-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{filteredImages.length}</div>
              <p className="text-lg">Photos in Gallery</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <p className="text-lg">Events Captured</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1000+</div>
              <p className="text-lg">Total Memories</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
