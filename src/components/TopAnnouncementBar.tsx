import { Phone, Calendar, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/cruiseData';

export default function TopAnnouncementBar() {
  const announcements = [
    'Luxury Cruise Experience at Kemari Port, Karachi',
    'Make Your Weekends Unforgettable!',
    'Family & Friends Weekend Cruise Packages Available',
    'Book Your Luxury Cruise Experience Today with Al Arbaz Cruise',
  ];

  return (
    <div className="bg-[#030B1C] border-b border-[#073B82]/40 text-xs text-slate-300 py-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left marquee ticker - clean luxury text, zero emojis */}
        <div className="flex-1 overflow-hidden relative">
          <div className="inline-flex items-center gap-8 whitespace-nowrap animate-marquee">
            {announcements.map((item, index) => (
              <span key={index} className="inline-flex items-center gap-2">
                <span className="text-[#D6B56D] font-medium tracking-wider uppercase text-[11px]">{item}</span>
                <span className="text-[#D6B56D]/40 font-bold">·</span>
              </span>
            ))}
            {announcements.map((item, index) => (
              <span key={`dup-${index}`} className="inline-flex items-center gap-2" aria-hidden="true">
                <span className="text-[#D6B56D] font-medium tracking-wider uppercase text-[11px]">{item}</span>
                <span className="text-[#D6B56D]/40 font-bold">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right quick contact info */}
        <div className="hidden lg:flex items-center gap-5 shrink-0 text-slate-300">
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#D6B56D]" />
            <span>Since 2013</span>
          </span>
          <span className="text-slate-600">|</span>
          <a
            href={`tel:${BRAND_INFO.phoneDisplay}`}
            className="inline-flex items-center gap-1.5 hover:text-[#D6B56D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D6B56D]" />
            <span className="tabular-nums">{BRAND_INFO.phoneDisplay}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 text-[#D6B56D] hover:underline"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Weekend Reservations</span>
          </a>
        </div>
      </div>
    </div>
  );
}
