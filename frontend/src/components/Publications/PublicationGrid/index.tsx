// Publication Grid Component
import { memo } from 'react';
import { motion } from 'framer-motion';
import { PublicationCard } from '../PublicationCard';
import type { Publication } from '../../../services/publicationsService';

interface PublicationGridProps {
  publications: Publication[];
  onView: (pdfUrl: string, title: string) => void;
  onDownload: (pdfUrl: string, fileName: string) => void;
}

export const PublicationGrid = memo(({ publications, onView, onDownload }: PublicationGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {publications.map((pub, index) => (
        <motion.div
          key={pub.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <PublicationCard
            publication={pub}
            onView={onView}
            onDownload={onDownload}
          />
        </motion.div>
      ))}
    </motion.div>
  );
});

PublicationGrid.displayName = 'PublicationGrid';
