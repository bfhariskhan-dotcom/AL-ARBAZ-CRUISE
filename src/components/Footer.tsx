import { Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/cruiseData';
import { ActivePage } from '../types/cruise';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

interface FooterProps {
  onNavigate?: (page: ActivePage) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Cruise Experience', page: 'experience' },
    { label: 'Packages & Pricing', page: 'packages' },
    { label: 'Gallery & Videos', page: 'gallery' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleLinkClick = (page: ActivePage) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    'Assalamualaikum Al Arbaz Cruise, I would like to inquire about cruise reservations.'
  )}`;

  return (
    /* White Background Footer with Deep Blue / Dark Text */
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 text-center md:text-left">
          {/* Column 1: ONLY BRAND LOGO (No name text or descriptor beside/below logo as requested) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start space-y-4">
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className="focus:outline-none cursor-pointer"
            >
              <img
                src={BRAND_INFO.logoUrl}
                alt="AL ARBAZ CRUISE Logo"
                referrerPolicy="no-referrer"
                className="h-24 sm:h-28 lg:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-md"
              />
            </button>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm pt-2">
              Luxury Cruise Tour and Trips Since 2013. Operating weekly sunset cruises,
              dining banquets, fishing activities, and private yacht charters at Kemari Port, Karachi.
            </p>

            {/* Social Media Channels: Only Pure SVG Icons (No text names) */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-100 text-[#073B82] hover:text-white hover:bg-[#073B82] border border-slate-300 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-100 text-[#073B82] hover:text-white hover:bg-[#073B82] border border-slate-300 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-100 text-[#073B82] hover:text-white hover:bg-[#073B82] border border-slate-300 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-currentColor" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#061B49] tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 flex flex-col items-center md:items-start">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.page)}
                    className="hover:text-[#073B82] text-slate-700 font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#073B82]">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Experience (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#061B49] tracking-wider uppercase mb-4">
              Experiences
            </h4>
            <ul className="space-y-2.5 flex flex-col items-center md:items-start">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('experience')}
                  className="hover:text-[#073B82] text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  Cruise Ride
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('experience')}
                  className="hover:text-[#073B82] text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  Live Food & Buffet
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('experience')}
                  className="hover:text-[#073B82] text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  Fishing Activities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('experience')}
                  className="hover:text-[#073B82] text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  Music On Board
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('experience')}
                  className="hover:text-[#073B82] text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  Sunset View
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Port (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#061B49] tracking-wider uppercase mb-4">
              Contact & Port
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-[#073B82] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-700">
                <Phone className="w-4 h-4 text-[#073B82] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.phoneDisplay}`}
                  className="hover:text-[#073B82] font-semibold tabular-nums"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-700">
                <WhatsAppIcon className="w-4 h-4 fill-[#073B82] shrink-0" />
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#073B82] font-semibold"
                >
                  WhatsApp Booking Desk
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-700">
                <Mail className="w-4 h-4 text-[#073B82] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-[#073B82] break-all font-medium"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright (Updated to 2013 as requested) & Tagline */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center">
          <p>© 2013 AL ARBAZ CRUISE. All Rights Reserved.</p>
          <p className="font-serif italic text-slate-600 text-xs">
            "{BRAND_INFO.tagline}"
          </p>
          <p>
            Kemari Port, Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
