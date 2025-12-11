// Layout Component - Main wrapper
import { memo } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../../common/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
});

Layout.displayName = 'Layout';
