import PageHeader from '../components/PageHeader';
import LuxuryMarquee from '../components/LuxuryMarquee';
import ExperienceFeatures from '../components/ExperienceFeatures';
import DiningExperience from '../components/DiningExperience';
import { CRUISE_IMAGES, BRAND_INFO } from '../data/cruiseData';
import { Clock, Compass, Anchor, Utensils, Fish, Sunset, Music } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

interface ExperiencePageProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function ExperiencePage({ onOpenBookingModal }: ExperiencePageProps) {
  const timelineSteps = [
    {
      time: '04:30 PM',
      title: 'Kemari Port Arrival & VIP Boarding',
      desc: 'Guest arrival at Kemari Port, greeted by our cruise coordinator and escorted to our luxury vessel.',
      icon: <Anchor className="w-5 h-5 text-[#D6B56D]" />,
    },
    {
      time: '04:45 PM',
      title: 'Welcome Drinks & Hot Hi-Tea',
      desc: 'Chilled welcome mocktails, hot crisp cheese rolls, french fries, and aromatic cardamom tea.',
      icon: <Utensils className="w-5 h-5 text-[#D6B56D]" />,
    },
    {
      time: '05:15 PM',
      title: 'Arabian Sea Cruise & Open-Deck Breeze',
      desc: 'Gliding past harbor channels into the open Arabian Sea with panoramic views of Karachi coast.',
      icon: <Compass className="w-5 h-5 text-[#D6B56D]" />,
    },
    {
      time: '06:00 PM',
      title: 'Golden Sunset Viewing & Live Fishing',
      desc: 'Crew distributes fishing tackle and bait as the sun descends over the horizon in deep gold hues.',
      icon: <Sunset className="w-5 h-5 text-[#D6B56D]" />,
    },
    {
      time: '06:45 PM',
      title: 'Grand Pakistani Dinner Buffet',
      desc: 'Hot Chicken Biryani, Makhni Handi, Karahi, Fish Fry, Foil Tikka, Naan, Taftan, and warm Gulab Jamun.',
      icon: <Utensils className="w-5 h-5 text-[#D6B56D]" />,
    },
    {
      time: '07:30 PM',
      title: 'Music, Celebration & Kemari Return',
      desc: 'Evening melodies on deck, family photo moments, and smooth docking back at Kemari Port.',
      icon: <Music className="w-5 h-5 text-[#D6B56D]" />,
    },
  ];

  return (
    <div>
      <PageHeader
        title="CRUISE EXPERIENCE & DINING"
        tagline="Signature Activities & Cuisine"
        subtitle="Explore our 6 core cruise experiences alongside our sumptuous Hi-Tea and multi-course Pakistani buffet."
        bgImage={CRUISE_IMAGES.diningBuffet}
      />

      <LuxuryMarquee />

      {/* 6 Signature Cruise Experiences */}
      <ExperienceFeatures onOpenBookingModal={onOpenBookingModal} />

      {/* Comprehensive Food & Dining Menus */}
      <DiningExperience onOpenBookingModal={onOpenBookingModal} />

      {/* 3-Hour Sunset Cruise Itinerary Timeline */}
      <section className="py-20 bg-[#040E26] border-t border-[#073B82]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] block mb-2">
              Tour Schedule
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
              03-Hour Sunset Cruise Itinerary
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Every weekend journey is organized for seamless comfort, gourmet refreshments,
              and scenic sunset sightseeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#030B1C] border border-[#073B82] hover:border-[#D6B56D] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-xl bg-[#073B82]/50 text-[#D6B56D]">
                      {step.icon}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#D6B56D] px-2.5 py-1 rounded bg-[#040E26] border border-[#073B82]">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                  Step 0{idx + 1} of 06
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                'Assalamualaikum Al Arbaz Cruise, I would like to inquire about cruise timings and experience details.'
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
      </section>
    </div>
  );
}
