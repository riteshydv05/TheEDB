import React, { useState } from 'react';
import Card from '../../ui/Card';
import { FaDownload, FaUser, FaCalendar, FaTag } from 'react-icons/fa';

interface Publication {
  id: number;
  title: string;
  authors: string;
  date: string;
  category: string;
  image: string;
  isFeatured?: boolean;
}

interface PublicationsMagazineProps {
  publications: Publication[];
}

const PublicationsMagazine: React.FC<PublicationsMagazineProps> = ({ publications }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Separate featured publication from others
  const featuredPub = publications.find(pub => pub.isFeatured);
  const otherPubs = publications.filter(pub => !pub.isFeatured);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Featured Magazine Section */}
        {featuredPub && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-8">Featured Publication</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Magazine Cover Image */}
              <div className="md:col-span-1 flex justify-center">
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredId(featuredPub.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={featuredPub.image}
                    alt={featuredPub.title}
                    className="max-w-full h-auto rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                  />
                  {hoveredId === featuredPub.id && (
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center transition-all duration-300">
                      <button className="px-6 py-3 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors">
                        <FaDownload /> Download
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Magazine Details */}
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">{featuredPub.title}</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FaUser className="text-accent-orange flex-shrink-0 mt-1" size={16} />
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Authors</p>
                      <p className="text-gray-700">{featuredPub.authors}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCalendar className="text-accent-orange flex-shrink-0 mt-1" size={16} />
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Published</p>
                      <p className="text-gray-700">{featuredPub.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaTag className="text-accent-orange flex-shrink-0 mt-1" size={16} />
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Category</p>
                      <span className="inline-block bg-accent-yellow text-primary-dark px-4 py-2 rounded-full font-semibold text-sm">
                        {featuredPub.category}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                  <FaDownload /> Download Featured Publication
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Publications Grid */}
        {otherPubs.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-8">Other Publications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPubs.map((pub) => (
                <Card key={pub.id} className="flex flex-col hover:shadow-2xl overflow-hidden group">
                  {/* Publication Image/Icon */}
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {pub.image.startsWith('http') || pub.image.startsWith('/') ? (
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl">{pub.image}</div>
                    )}
                  </div>

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
        )}
      </div>
    </section>
  );
};

export default PublicationsMagazine;
