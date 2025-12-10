// Publication Card Component
import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaUser, FaCalendar } from 'react-icons/fa';
import type { Publication } from '../../../services/publicationsService';

interface PublicationCardProps {
  publication: Publication;
  onView: (pdfUrl: string, title: string) => void;
  onDownload: (pdfUrl: string, fileName: string) => void;
}

export const PublicationCard = memo(({ publication, onView, onDownload }: PublicationCardProps) => {
  const hasImage = publication.image.startsWith('http') || publication.image.startsWith('/');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 flex flex-col group"
    >
      {/* Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
        {hasImage ? (
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
            {publication.image}
          </span>
        )}
        
        {/* Category Badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {publication.category}
        </span>
        
        {/* Hover Overlay */}
        {publication.pdfUrl && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onView(publication.pdfUrl!, publication.title)}
              className="px-4 py-2 bg-white/90 hover:bg-white text-primary-dark rounded-lg font-medium flex items-center gap-2 text-sm"
            >
              <FaEye /> Preview
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onDownload(publication.pdfUrl!, `${publication.title}.pdf`)}
              className="px-4 py-2 bg-accent-orange hover:bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2 text-sm"
            >
              <FaDownload /> Download
            </motion.button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-orange transition-colors">
          {publication.title}
        </h3>
        
        {publication.subtitle && (
          <p className="text-sm text-gray-500 mb-3 italic">{publication.subtitle}</p>
        )}
        
        {publication.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
            {publication.description}
          </p>
        )}
        
        {/* Meta Info */}
        <div className="space-y-2 text-sm text-gray-500 mt-auto">
          <div className="flex items-center gap-2">
            <FaUser className="text-accent-orange" size={12} />
            <span className="line-clamp-1">{publication.authors}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendar className="text-accent-orange" size={12} />
            <span>{publication.date}</span>
          </div>
        </div>

        {/* Action Button (Mobile) */}
        {publication.pdfUrl && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onDownload(publication.pdfUrl!, `${publication.title}.pdf`)}
            className="mt-4 w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 sm:hidden"
          >
            <FaDownload /> Download PDF
          </motion.button>
        )}
      </div>
    </motion.div>
  );
});

PublicationCard.displayName = 'PublicationCard';
