import { Anchor, Compass, Clock, Utensils, Fish, Sunset, ShieldCheck } from 'lucide-react';

export default function LuxuryMarquee() {
  const items = [
    { icon: <Clock className="w-4 h-4 text-[#D6B56D]" />, text: 'ESTABLISHED 2013' },
    { icon: <Compass className="w-4 h-4 text-[#D6B56D]" />, text: 'KEMARI PORT KARACHI' },
    { icon: <Anchor className="w-4 h-4 text-[#D6B56D]" />, text: '03-HOUR LUXURY SEA CRUISE' },
    { icon: <Utensils className="w-4 h-4 text-[#D6B56D]" />, text: 'HI-TEA & GRAND BUFFET INCLUDED' },
    { icon: <Fish className="w-4 h-4 text-[#D6B56D]" />, text: 'LIVE FISHING EQUIPMENT & BAIT' },
    { icon: <Sunset className="w-4 h-4 text-[#D6B56D]" />, text: 'SPECTACULAR ARABIAN SEA SUNSET' },
    { icon: <ShieldCheck className="w-4 h-4 text-[#D6B56D]" />, text: 'FULL MARITIME SAFETY & FAMILY PRIVACY' },
  ];

  return (
    <div className="bg-[#030B1C] border-y border-[#073B82]/50 py-3.5 overflow-hidden relative shadow-inner">
      <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
        {items.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-2.5">
            {item.icon}
            <span className="font-cinzel text-xs font-bold tracking-widest text-slate-200 uppercase">
              {item.text}
            </span>
            <span className="text-[#D6B56D] font-bold mx-2">◆</span>
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="inline-flex items-center gap-2.5" aria-hidden="true">
            {item.icon}
            <span className="font-cinzel text-xs font-bold tracking-widest text-slate-200 uppercase">
              {item.text}
            </span>
            <span className="text-[#D6B56D] font-bold mx-2">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
