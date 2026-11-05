import PageHeader from '../components/PageHeader';
import LuxuryMarquee from '../components/LuxuryMarquee';
import FeaturedPackage from '../components/FeaturedPackage';
import FAQSection from '../components/FAQSection';
import { CRUISE_IMAGES, BRAND_INFO } from '../data/cruiseData';
import { Users, Clock, Anchor, Check, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

interface PackagesPageProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function PackagesPage({ onOpenBookingModal }: PackagesPageProps) {
  const privateCharterDetails = [
    {
      title: 'Private Family Yacht Charter',
      tagline: 'Exclusive Vessel for Your Family',
      capacity: 'Up to 50 Guests',
      duration: '03 to 04 Hours',
      features: [
        'Exclusive vessel reserved solely for your family or guests',
        'Custom departure timing from Kemari Port',
        'Customized Hi-Tea and Buffet dinner arrangements',
        'Dedicated nautical crew and private service staff',
        'Personal sound playlist and milestone celebration setup',
      ],
    },
    {
      title: 'Corporate & Milestone Celebrations',
      tagline: 'Annual Dinners, Birthdays & Anniversaries',
      capacity: '30 to 60 Persons',
      duration: '03 Hours',
      features: [
        'Branded corporate reception on board',
        'Multi-course hot Pakistani buffet & live barbecue',
        'Open-air presentation & celebration space on deck',
        'Hands-on fishing competition with crew guidance',
        'Complete sound setup for speeches and music',
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        title="CRUISE PACKAGES & PRICING"
        tagline="Transparent Per-Person Rates"
        subtitle="Explore our flagship Weekend Social Cruise Package alongside exclusive private family charters and corporate bookings."
        bgImage={CRUISE_IMAGES.heroSunset}
      />

      <LuxuryMarquee />

      {/* Flagship Featured Package with Live Calculator */}
      <FeaturedPackage onOpenBookingModal={onOpenBookingModal} />

      {/* Additional Private & Group Charter Options */}
      <section className="py-20 bg-[#040E26] border-t border-[#073B82]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] block mb-2">
              Exclusive Options
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
              Private Yacht Charters & Celebrations
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Looking to reserve the entire vessel exclusively for your family reunion,
              wedding celebration, or corporate retreat? We tailor every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privateCharterDetails.map((pkg, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#030B1C] border border-[#073B82] hover:border-[#D6B56D] transition-colors flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-mono text-[#D6B56D] font-bold">
                      {pkg.tagline}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                      Kemari Port
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl font-bold text-white mb-4">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-6 text-xs text-slate-300 pb-4 mb-4 border-b border-slate-800">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D6B56D]" />
                      <span>{pkg.duration}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#D6B56D]" />
                      <span>{pkg.capacity}</span>
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                      `Assalamualaikum Al Arbaz Cruise, I would like to inquire about rates and availability for: ${pkg.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                    Booking WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(pkg.title)}
                    className="w-full sm:w-auto py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 cursor-pointer"
                  >
                    Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passenger FAQs Accordion */}
      <FAQSection />
    </div>
  );
}
