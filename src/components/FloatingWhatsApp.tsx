import { useState } from 'react';
import { BRAND_INFO } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    'Assalamualaikum Al Arbaz Cruise! I would like to book a luxury cruise experience. Please share package availability.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip */}
      <div
        className={`mr-3 px-3.5 py-1.5 rounded-lg bg-[#040E26] text-white border border-[#D6B56D] text-xs font-semibold shadow-xl transition-all duration-300 pointer-events-none whitespace-nowrap ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="text-[#D6B56D]">Book Your Cruise</span> · WhatsApp
      </div>

      {/* Floating Button with Gold Pulse Effect (No neon green) */}
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] text-[#061B49] shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#D6B56D]/50 border border-[#D6B56D]"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle pulsing beacon ring in gold */}
        <span className="absolute -inset-1 rounded-full bg-[#D6B56D]/40 animate-ping pointer-events-none group-hover:hidden" />

        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-[#061B49]" />
      </a>
    </div>
  );
}
