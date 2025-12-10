// Magazine Card Component - Featured Publication Display
import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaUser, FaCalendar, FaTag } from 'react-icons/fa';
import { PDFViewer } from '../PDFViewer/index';
import type { Publication } from '../../../services/publicationsService';
import { PublicationCard } from '../PublicationCard/index';

interface MagazineCardProps {
  publications: Publication[];
}

export const MagazineCard = memo(({ publications }: MagazineCardProps) => {
  const [viewingPDF, setViewingPDF] = useState<{ url: string; title: string } | null>(null);

  const featuredPub = publications.find(pub => pub.isFeatured);
  const otherPubs = publications.filter(pub => !pub.isFeatured);

  const handleViewPDF = (pdfUrl: string, title: string) => {
    setViewingPDF({ url: pdfUrl, title });
  };

  const handleClosePDF = () => {
    setViewingPDF(null);
  };

  const handleDownload = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Featured Magazine */}
          {featuredPub && (
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-accent-orange rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark tracking-tight">
                  Featured Publication
                </h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg"
              >
                {/* Magazine Cover */}
                <div className="flex justify-center">
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02, rotate: -1 }}
                  >
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/20 blur-xl rounded-full" />
                    
                    <img
                      src={featuredPub.image}
                      alt={featuredPub.title}
                      className="relative max-w-full h-auto max-h-[450px] rounded-lg shadow-2xl"
                      loading="eager"
                    />
                    
                    {/* Hover Overlay */}
                    {featuredPub.pdfUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleViewPDF(featuredPub.pdfUrl!, featuredPub.title)}
                            className="px-5 py-2.5 bg-white/90 hover:bg-white text-primary-dark rounded-lg font-semibold flex items-center gap-2 text-sm"
                          >
                            <FaEye /> Preview
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDownload(featuredPub.pdfUrl!, `${featuredPub.title}.pdf`)}
                            className="px-5 py-2.5 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-semibold flex items-center gap-2 text-sm"
                          >
                            <FaDownload /> Download
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Magazine Details */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block bg-accent-orange/10 text-accent-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                      Latest Issue
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-dark leading-tight tracking-tight font-playfair">
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

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => featuredPub.pdfUrl && handleDownload(featuredPub.pdfUrl, `${featuredPub.title}.pdf`)}
                    disabled={!featuredPub.pdfUrl}
                    className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaDownload /> Download Full Issue
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Other Publications Grid */}
          {otherPubs.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-accent-blue rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark tracking-tight">
                  Past Issues & Publications
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {otherPubs.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    publication={pub}
                    onView={handleViewPDF}
                    onDownload={handleDownload}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewingPDF && (
        <PDFViewer
          pdfUrl={viewingPDF.url}
          title={viewingPDF.title}
          onClose={handleClosePDF}
        />
      )}
    </>
  );
});

MagazineCard.displayName = 'MagazineCard';
