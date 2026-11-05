import { useState, useEffect } from 'react';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { ActivePage } from './types/cruise';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPackage, setModalPackage] = useState<string>('Weekend Social Cruise Package');

  // Sync with URL Hash for seamless browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = ['home', 'about', 'experience', 'packages', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (pkgName?: string) => {
    if (pkgName) {
      setModalPackage(pkgName);
    }
    setIsModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020716] via-[#04122C] to-[#020716] text-white flex flex-col selection:bg-[#D6B56D] selection:text-[#061B49] relative">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Desktop Custom Animated Cursor */}
      <CustomCursor />

      {/* Animated Top Announcement Bar (Zero Emojis, Pure Luxury Text) */}
      <TopAnnouncementBar />

      {/* Sticky Luxury Navigation Header (ONLY Logo, Multi-Page Navigation) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* 5 Distinct Luxury Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenBookingModal={handleOpenBookingModal}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'experience' && (
          <ExperiencePage onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'packages' && (
          <PackagesPage onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Luxury Multi-Column Footer with Crisp SVG Social Icons */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBookingModal}
        preselectedPackage={modalPackage}
      />
    </div>
  );
}
