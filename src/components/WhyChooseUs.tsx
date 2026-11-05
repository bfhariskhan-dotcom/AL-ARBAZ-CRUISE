import { Clock, Heart, Utensils, Fish, Sunset, Users } from 'lucide-react';
import { WHY_CHOOSE_US, BRAND_INFO } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

export default function WhyChooseUs() {
  const icons = [
    <Clock className="w-5 h-5" />,
    <Heart className="w-5 h-5" />,
    <Utensils className="w-5 h-5" />,
    <Fish className="w-5 h-5" />,
    <Sunset className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <WhatsAppIcon className="w-5 h-5 fill-current" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#020716] via-[#05173A] to-[#030C22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-center mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              THE AL ARBAZ DISTINCTION
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            WHY CHOOSE AL ARBAZ CRUISE
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            With over a decade of dedicated service on Karachi waters, we deliver trusted
            hospitality, delicious dining, and safety for every passenger.
          </p>
        </div>

        {/* 7 Verified Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.number}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#073B82]/80 to-[#061B49]/90 border-[#D6B56D]/60 shadow-xl'
                    : 'bg-[#040E26] border-slate-800 hover:border-[#073B82] hover:bg-[#061B49]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`p-3 rounded-xl transition-colors ${
                        isFeatured
                          ? 'bg-[#D6B56D] text-[#061B49]'
                          : 'bg-[#073B82]/40 text-[#D6B56D] group-hover:bg-[#073B82]'
                      }`}
                    >
                      {icons[index]}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#D6B56D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-[#D6B56D]">
                  <span className="uppercase tracking-wider font-semibold">Verified Feature</span>
                  <span className="text-slate-500 font-mono">Kemari Port</span>
                </div>
              </div>
            );
          })}

          {/* Quick Booking CTA card in 7th/8th slot */}
          <div className="p-6 sm:p-7 rounded-2xl border border-dashed border-[#D6B56D]/50 bg-[#061B49]/30 flex flex-col justify-between text-center md:col-span-2 lg:col-span-2">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] block mb-2">
                Start Planning
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3">
                Ready to Sail This Weekend?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light mb-6">
                Connect with our reservation desk directly. We confirm dates, guest numbers,
                and dining arrangements promptly on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                  'Assalamualaikum Al Arbaz Cruise! I would like to reserve seats for an upcoming weekend cruise.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                Booking WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
