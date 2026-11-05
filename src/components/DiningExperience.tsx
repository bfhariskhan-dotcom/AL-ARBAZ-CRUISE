import { useState } from 'react';
import { Coffee, Utensils, HeartHandshake } from 'lucide-react';
import { HI_TEA_MENU, BUFFET_MENU, CRUISE_IMAGES, BRAND_INFO } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

interface DiningExperienceProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function DiningExperience({ onOpenBookingModal }: DiningExperienceProps) {
  const [activeMenuTab, setActiveMenuTab] = useState<'buffet' | 'hitea'>('buffet');

  return (
    <section id="dining" className="py-20 lg:py-28 bg-gradient-to-b from-[#020716] via-[#05173A] to-[#030C22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Single Centered Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              ON-BOARD CULINARY EXCELLENCE
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            A DELIGHTFUL DINING EXPERIENCE
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Enjoy delicious food and refreshments while experiencing the beauty of the sea.
            Every cruise includes both our welcoming Hi-Tea and a multi-course authentic Pakistani buffet.
          </p>
        </div>

        {/* Hero Culinary Banner Split */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-[#073B82] bg-[#061B49]/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Visual Buffet Image (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px]">
              <img
                src={CRUISE_IMAGES.diningBuffet}
                alt="Gourmet Pakistani Luxury Cruise Buffet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030B1C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#061B49]/90" />
              <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-lg bg-[#040E26]/90 backdrop-blur-md border border-[#D6B56D]/40 text-xs font-semibold text-[#D6B56D]">
                Freshly Prepared On-Board Dining Spread
              </div>
            </div>

            {/* Culinary Philosophy (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6B56D] block mb-2">
                Included in Weekend Package
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                Freshly Cooked, Warmly Served
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                From the moment you step aboard Kemari port, you are treated to welcome drinks
                and crispy hot snacks. As the sun dips over the sea, our grand buffet opens with
                aromatic chicken biryani, sizzling foil tikkas, and sweet gulab jamun.
              </p>

              <div className="flex items-center gap-3 text-xs text-slate-300 bg-[#040E26]/80 p-3.5 rounded-xl border border-slate-800">
                <HeartHandshake className="w-4 h-4 text-[#D6B56D] shrink-0" />
                <span>
                  100% Halal Certified & Hygenic Kitchen Standards. Unlimited mineral water provided.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Navigation Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveMenuTab('buffet')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeMenuTab === 'buffet'
                ? 'bg-[#073B82] text-white border border-[#D6B56D] shadow-lg'
                : 'bg-[#040E26] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Utensils className="w-4 h-4 text-[#D6B56D]" />
            Grand Buffet Menu ({BUFFET_MENU.length} Items)
          </button>

          <button
            type="button"
            onClick={() => setActiveMenuTab('hitea')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeMenuTab === 'hitea'
                ? 'bg-[#073B82] text-white border border-[#D6B56D] shadow-lg'
                : 'bg-[#040E26] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Coffee className="w-4 h-4 text-[#D6B56D]" />
            Hi-Tea Menu ({HI_TEA_MENU.length} Items)
          </button>
        </div>

        {/* Two Menu Panels */}
        {activeMenuTab === 'buffet' && (
          <div className="bg-[#040E26] border border-[#073B82] rounded-2xl p-6 sm:p-10 shadow-xl animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D]">
                  Dinner Feast
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  BUFFET MENU
                </h3>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 self-start sm:self-auto">
                Served hot during cruise journey
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BUFFET_MENU.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#030B1C] border border-slate-800 hover:border-[#D6B56D]/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#D6B56D] transition-colors">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#073B82]/50 text-[#D6B56D] border border-[#087CC5]/30">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.category && (
                    <div className="mt-3 pt-2 border-t border-slate-900 text-[11px] font-medium text-slate-400">
                      {item.category}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMenuTab === 'hitea' && (
          <div className="bg-[#040E26] border border-[#073B82] rounded-2xl p-6 sm:p-10 shadow-xl animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D]">
                  Welcome Refreshments
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  HI-TEA MENU
                </h3>
              </div>
              <span className="text-xs text-slate-400 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 self-start sm:self-auto">
                Served immediately upon boarding
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HI_TEA_MENU.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#030B1C] border border-slate-800 hover:border-[#D6B56D]/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#D6B56D] transition-colors">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#073B82]/50 text-[#D6B56D]">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-900 text-[11px] text-[#D6B56D] font-medium">
                    Complimentary for all passengers
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Dining Inquiries CTA */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-3">
            Have special dietary preferences, birthday cake requests, or corporate catering questions?
          </p>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
              'Assalamualaikum Al Arbaz Cruise, I would like to inquire about on-board food catering and dietary options for an upcoming cruise.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6B56D] hover:text-[#F3E5C8] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#D6B56D]" />
            Chat with Catering Team on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
