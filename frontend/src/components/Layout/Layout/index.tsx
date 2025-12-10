// Layout Component - Main wrapper
import { memo, Suspense } from 'react';
import { Navbar } from '../Navbar';
import Footer from '../../Footer/Footer';
import { PageLoader } from '../../shared/Loader';
import ScrollToTop from '../../Common/ScrollToTop';

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
          <Suspense fallback={<PageLoader />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
});

Layout.displayName = 'Layout';
