import React, { useState, memo } from 'react';
import { Card } from '../UI';
import { FaDownload, FaUser, FaCalendar, FaTag, FaEye } from 'react-icons/fa';

export interface Publication {
  id: number;
  title: string;
  subtitle?: string;
  authors: string;
  date: string;
  category: string;
  image: string;
  description?: string;
  isFeatured?: boolean;
}

interface MagazineCardProps {
  publications: Publication[];
}

const MagazineCard: React.FC<MagazineCardProps> = memo(({ publications }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Separate featured publication from others
  const featuredPub = publications.find(pub => pub.isFeatured);
  const otherPubs = publications.filter(pub => !pub.isFeatured);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Featured Magazine Section */}
        {featuredPub && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-accent-orange rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark tracking-tight">
                Featured Publication
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg">
              {/* Magazine Cover Image */}
              <div className="flex justify-center">
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredId(featuredPub.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Magazine Shadow Effect */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/20 blur-xl rounded-full"></div>
                  
                  <img
                    src={featuredPub.image}
                    alt={featuredPub.title}
                    className="relative max-w-full h-auto max-h-[500px] rounded-lg shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-rotate-1"
                    loading="eager"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg flex items-end justify-center pb-8 transition-all duration-300 ${
                    hoveredId === featuredPub.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex gap-3">
                      <button className="px-5 py-2.5 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm">
                        <FaDownload /> Download
                      </button>
                      <button className="px-5 py-2.5 bg-white/90 hover:bg-white text-primary-dark rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm">
                        <FaEye /> Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Magazine Details */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-accent-orange/10 text-accent-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    Latest Issue
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-dark leading-tight tracking-tight">
                    {featuredPub.title}
                  </h3>
                  {featuredPub.subtitle && (
                    <p className="text-lg text-gray-600 mt-2 italic">{featuredPub.subtitle}</p>
                  )}
                </div>

                {featuredPub.description && (
                  <p className="text-gray-600 leading-relaxed">{featuredPub.description}</p>
                )}

                <div className="space-y-4 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <FaUser className="text-accent-orange" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Published By</p>
                      <p className="text-gray-800 font-medium">{featuredPub.authors}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <FaCalendar className="text-accent-orange" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Release Date</p>
                      <p className="text-gray-800 font-medium">{featuredPub.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <FaTag className="text-accent-orange" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Category</p>
                      <span className="inline-block bg-accent-yellow text-primary-dark px-4 py-1.5 rounded-full font-semibold text-sm mt-1">
                        {featuredPub.category}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-3.5 bg-accent-orange hover:bg-orange-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-base">
                  <FaDownload /> Download Full Issue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Publications Grid */}
        {otherPubs.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-accent-blue rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark tracking-tight">
                Past Issues & Publications
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPubs.map((pub) => (
                <Card key={pub.id} className="flex flex-col group overflow-hidden" hoverable>
                  {/* Publication Image/Icon */}
                  <div className="relative overflow-hidden rounded-xl mb-5 h-52 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                    {pub.image.startsWith('http') || pub.image.startsWith('/') ? (
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-7xl transition-transform duration-300 group-hover:scale-110">
                        {pub.image}
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {pub.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary-dark mb-3 flex-grow leading-snug tracking-tight group-hover:text-accent-orange transition-colors">
                    {pub.title}
                  </h3>

                  <div className="space-y-2.5 border-t border-gray-100 pt-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUser className="text-accent-orange flex-shrink-0" size={12} />
                      <span className="text-sm truncate">{pub.authors}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendar className="text-accent-orange flex-shrink-0" size={12} />
                      <span className="text-sm">{pub.date}</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary-dark text-white py-2.5 rounded-lg hover:bg-accent-orange transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm">
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
});

MagazineCard.displayName = 'MagazineCard';

export default MagazineCard;
