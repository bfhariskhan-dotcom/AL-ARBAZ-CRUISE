import { useState } from 'react';
import { Ship, UtensilsCrossed, Fish, Music, Sunset, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE_FEATURES, BRAND_INFO } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

interface ExperienceFeaturesProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function ExperienceFeatures({ onOpenBookingModal }: ExperienceFeaturesProps) {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCE_FEATURES[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Ship: <Ship className="w-6 h-6" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
    Fish: <Fish className="w-6 h-6" />,
    Music: <Music className="w-6 h-6" />,
    Sunset: <Sunset className="w-6 h-6" />,
  };

  const activeIndex = EXPERIENCE_FEATURES.findIndex((f) => f.id === selectedExpId);
  const activeFeature = EXPERIENCE_FEATURES[activeIndex !== -1 ? activeIndex : 0];

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % EXPERIENCE_FEATURES.length;
    setSelectedExpId(EXPERIENCE_FEATURES[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + EXPERIENCE_FEATURES.length) % EXPERIENCE_FEATURES.length;
    setSelectedExpId(EXPERIENCE_FEATURES[prevIdx].id);
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-gradient-to-b from-[#030C22] via-[#061B45] to-[#020716] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Single Centered Kicker (No side-by-side headings, no small icon) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              SIGNATURE CRUISE EXPERIENCES
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Five Signature Cruise Experiences
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Each Al Arbaz voyage blends relaxation, delicious culinary craftsmanship, sport,
            and Arabian Sea scenery into one harmonious weekend journey.
          </p>
        </div>

        {/* Feature Selector Carousel Bar with Navigation & Scroll Cue as requested */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs uppercase font-mono tracking-wider text-[#D6B56D] font-semibold">
              Select or Slide an Experience:
            </span>

            {/* Scroll indicator prompt with right arrow as requested */}
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <span className="hidden sm:inline">Scroll to explore all 5 experiences</span>
              <span className="sm:hidden">Swipe or Slide</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6B56D] animate-pulse" />
            </div>
          </div>

          {/* Cards Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {EXPERIENCE_FEATURES.map((feature) => {
              const isSelected = feature.id === selectedExpId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setSelectedExpId(feature.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#073B82] to-[#061B49] border-[#D6B56D] shadow-lg shadow-blue-950/50'
                      : 'bg-[#030B1C]/80 border-slate-800 hover:border-[#073B82] hover:bg-[#061B49]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`p-2.5 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-[#D6B56D] text-[#061B49]'
                          : 'bg-[#073B82]/40 text-[#D6B56D] group-hover:bg-[#073B82]'
                      }`}
                    >
                      {iconMap[feature.iconName]}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      {feature.number}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                      {feature.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Previous / Next Slide Controls */}
          <div className="flex items-center justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-lg bg-[#030B1C] border border-slate-800 hover:border-[#D6B56D] text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Experience"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-2">
              0{activeIndex + 1} / 05
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-lg bg-[#030B1C] border border-slate-800 hover:border-[#D6B56D] text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Next Experience"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Feature Deep Dive Showcase */}
        <div className="bg-[#030B1C] border border-[#073B82]/80 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Media Column (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[460px]">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030B1C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#030B1C]" />

              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-[#040E26]/85 backdrop-blur-md border border-slate-700 text-xs font-semibold text-[#D6B56D]">
                Feature {activeFeature.number} · Arabian Sea Experience
              </div>
            </div>

            {/* Right Details Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-center sm:text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6B56D] block mb-2">
                  Feature {activeFeature.number} of 05
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
                  {activeFeature.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {activeFeature.fullDesc}
                </p>

                {/* Highlights */}
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Signature Highlights
                </h4>
                <div className="space-y-2.5 mb-8 text-center sm:text-left">
                  {activeFeature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D6B56D] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action - Sleek Compact Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                    `Assalamualaikum Al Arbaz Cruise, I am interested in experiencing the ${activeFeature.title} on your weekend tour.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking
                </a>

                <button
                  type="button"
                  onClick={() => onOpenBookingModal()}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-[#073B82]/40 hover:bg-[#073B82] border border-slate-700 hover:border-[#D6B56D]/50 transition-colors cursor-pointer"
                >
                  View Full
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
