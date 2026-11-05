import PageHeader from '../components/PageHeader';
import LuxuryMarquee from '../components/LuxuryMarquee';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import { CRUISE_IMAGES, BRAND_INFO } from '../data/cruiseData';
import { ShieldCheck, Anchor, LifeBuoy, Users, Award } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

interface AboutPageProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function AboutPage({ onOpenBookingModal }: AboutPageProps) {
  const safetySpecs = [
    {
      icon: <LifeBuoy className="w-6 h-6 text-[#D6B56D]" />,
      title: 'Certified Life Jackets',
      desc: 'Marine safety vests provided for all adult and children passengers on board.',
    },
    {
      icon: <Anchor className="w-6 h-6 text-[#D6B56D]" />,
      title: 'Licensed Maritime Crew',
      desc: 'Experienced local nautical captains and trained hospitality stewards on every tour.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D6B56D]" />,
      title: 'Family Privacy & Security',
      desc: 'Strictly monitored family-friendly ambiance with private seating clusters.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#D6B56D]" />,
      title: 'Decade of Trusted Operations',
      desc: 'Continuously operating from Kemari Port since 2013 with an impeccable track record.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="ABOUT AL ARBAZ CRUISE"
        tagline="Our Maritime Heritage"
        subtitle="Since 2013, providing memorable luxury cruises, gourmet dining, and sunset sea expeditions at Kemari Port, Karachi."
        bgImage={CRUISE_IMAGES.heroDeck}
      />

      <LuxuryMarquee />

      {/* Main About Presentation */}
      <AboutSection />

      {/* Safety & Vessel Standards Section */}
      <section className="py-20 bg-[#030B1C] border-t border-[#073B82]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] block mb-2">
              Maritime Safety & Standards
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Safety and Comfort Come First
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              We uphold rigorous maritime safety protocols ensuring every family journey across
              the Arabian Sea is joyful, serene, and thoroughly protected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetySpecs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#040E26] border border-[#073B82] flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#073B82]/40 w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-[#D6B56D] font-mono">
                  Verified Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Pillars: Why Choose Al Arbaz */}
      <WhyChooseUs />

      {/* Direct Contact Banner */}
      <section className="py-16 bg-gradient-to-r from-[#061B49] via-[#073B82] to-[#061B49] border-t border-[#D6B56D]/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
            Plan Your Weekend With Al Arbaz Cruise
          </h3>
          <p className="text-slate-200 text-sm max-w-xl mx-auto mb-6">
            Contact our Kemari port reservation desk directly on WhatsApp for weekend schedules and group bookings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                'Assalamualaikum Al Arbaz Cruise, I would like to inquire about cruise booking dates.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
              Booking WhatsApp
            </a>
            <button
              type="button"
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-700 cursor-pointer"
            >
              Booking
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
