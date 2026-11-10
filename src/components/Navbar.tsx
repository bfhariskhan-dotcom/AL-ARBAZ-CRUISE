import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { BRAND_INFO } from '../data/cruiseData';
import { ActivePage } from '../types/cruise';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

interface NavbarProps {
  currentPage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function Navbar({ currentPage, onNavigate, onOpenBookingModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Cruise Experience', page: 'experience' },
    { label: 'Packages & Pricing', page: 'packages' },
    { label: 'Gallery & Videos', page: 'gallery' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWhatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    'Assalamualaikum Al Arbaz Cruise! I would like to inquire about booking a luxury cruise.'
  )}`;

  return (
    <>
      {/* White Background Header (Non-sticky as requested) */}
      <header className="relative z-40 bg-white shadow-sm border-b border-slate-200 py-2 sm:py-2.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-6">
            {/* Left: BRAND LOGO + Website Name (ONLY in mobile header as requested) */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 xs:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#073B82] rounded cursor-pointer shrink-0"
              aria-label="Al Arbaz Cruise Home"
            >
              <img
                src={BRAND_INFO.logoUrl}
                alt="AL ARBAZ CRUISE Logo"
                referrerPolicy="no-referrer"
                className="h-18 xs:h-22 sm:h-24 lg:h-24 w-auto max-w-[85px] xs:max-w-[110px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm shrink-0"
              />

              {/* Website Name: 2 Lines, Grand & Prominently Sized for Mobile Header */}
              <div className="flex flex-col text-left lg:hidden justify-center select-none pl-1">
                <span className="font-cinzel text-xl xs:text-2xl sm:text-3xl font-black tracking-wide text-[#061B49] uppercase leading-none drop-shadow-xs">
                  AL ARBAZ
                </span>
                <span className="font-cinzel text-xs xs:text-sm sm:text-base font-extrabold tracking-[0.26em] text-[#B89243] uppercase mt-1 leading-none">
                  CRUISE
                </span>
              </div>
            </button>

            {/* Center: Desktop Navigation Across Pages (Dark text for white navbar) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    type="button"
                    onClick={() => handleNavClick(item.page)}
                    className={`text-xs uppercase tracking-wider transition-all duration-200 relative py-1.5 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#073B82] font-bold'
                        : 'text-slate-700 hover:text-[#073B82] font-semibold'
                    }`}
                  >
                    {item.label}
                    {/* Active Indicator Bar */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#073B82] transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right: ONLY ONE CLEAN BUTTON "Booking" on Desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:from-[#F3E5C8] hover:to-[#D6B56D] transition-all duration-200 shadow-md shadow-amber-950/10 cursor-pointer whitespace-nowrap border border-[#D6B56D]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                Booking
              </a>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger Button */}
            <div className="flex lg:hidden items-center gap-1.5 xs:gap-2 shrink-0">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] rounded-lg shadow-sm"
                aria-label="Booking via WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-800 hover:text-[#073B82] bg-slate-100 border border-slate-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Luxury Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-gradient-to-b from-[#040E26] via-[#061B49] to-[#030B1C] border-l border-[#073B82] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header with ONLY LOGO (No text name) */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <button
                  type="button"
                  onClick={() => handleNavClick('home')}
                  className="focus:outline-none"
                >
                  <img
                    src={BRAND_INFO.logoUrl}
                    alt="AL ARBAZ CRUISE Logo"
                    referrerPolicy="no-referrer"
                    className="h-24 sm:h-28 w-auto object-contain drop-shadow-sm"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700 focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items (Pages) */}
              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.page;
                  return (
                    <button
                      key={item.page}
                      type="button"
                      onClick={() => handleNavClick(item.page)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#073B82] to-[#061B49] text-[#D6B56D] font-bold border border-[#D6B56D]/50 shadow-md'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className="tracking-wide uppercase text-xs">{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#D6B56D] translate-x-1' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] text-[#061B49] font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                Booking
              </a>

              <a
                href={`tel:${BRAND_INFO.phoneDisplay}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#073B82]/60 hover:bg-[#073B82] text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider border border-[#087CC5]/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B56D]" />
                Call Desk
              </a>

              {/* Social Media Channels: Only Crisp SVG Icons, No Text Names */}
              <div className="pt-2 flex items-center justify-center gap-4">
                <a
                  href={BRAND_INFO.facebookUrl}
                  onClick={(e) => {
                    if (BRAND_INFO.facebookUrl === '#') e.preventDefault();
                  }}
                  className="p-2.5 rounded-full bg-[#073B82]/40 text-[#D6B56D] hover:text-white hover:bg-[#073B82] border border-[#073B82] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={BRAND_INFO.instagramUrl}
                  onClick={(e) => {
                    if (BRAND_INFO.instagramUrl === '#') e.preventDefault();
                  }}
                  className="p-2.5 rounded-full bg-[#073B82]/40 text-[#D6B56D] hover:text-white hover:bg-[#073B82] border border-[#073B82] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#073B82]/40 text-[#D6B56D] hover:text-white hover:bg-[#073B82] border border-[#073B82] transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-currentColor" />
                </a>
              </div>

              <p className="text-[11px] text-center text-slate-400 mt-1">
                Kemari Port, Karachi · Since 2013
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
