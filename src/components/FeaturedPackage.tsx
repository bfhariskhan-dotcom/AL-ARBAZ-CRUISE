import { useState } from 'react';
import { Clock, MapPin, Users, Check, Calculator, ShieldCheck } from 'lucide-react';
import { FEATURED_PACKAGE, BRAND_INFO } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

interface FeaturedPackageProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function FeaturedPackage({ onOpenBookingModal }: FeaturedPackageProps) {
  const [calcAdults, setCalcAdults] = useState<number>(2);
  const [calcKids, setCalcKids] = useState<number>(1);
  const [calcInfants, setCalcInfants] = useState<number>(0);

  const totalEstimate =
    calcAdults * FEATURED_PACKAGE.adultPrice +
    calcKids * FEATURED_PACKAGE.kidsPrice;

  const calculatedWhatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    `Assalamualaikum Al Arbaz Cruise! I would like to reserve the Weekend Social Cruise Package for ${calcAdults} Adults, ${calcKids} Kids (4-12 yrs), and ${calcInfants} Infants (Under 4). Total Estimate: Rs. ${totalEstimate.toLocaleString()}. Please confirm available weekend dates.`
  )}`;

  return (
    <section id="packages" className="py-20 lg:py-28 bg-gradient-to-b from-[#020716] via-[#05173A] to-[#030C22] relative overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-[#073B82]/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Single Centered Kicker (No side-by-side headings, no small icon as requested) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              FEATURED WEEKEND OFFERING
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {FEATURED_PACKAGE.name}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {FEATURED_PACKAGE.description}
          </p>
        </div>

        {/* Main Package Showcase Card */}
        <div className="bg-gradient-to-b from-[#061B49]/90 to-[#040E26]/95 border border-[#073B82] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Visual Media & Key Logistics (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8 bg-[#061B49]/60">
              <img
                src={FEATURED_PACKAGE.image}
                alt="Weekend Social Cruise on Arabian Sea"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040E26] via-[#061B49]/70 to-[#040E26]/40" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded bg-[#D6B56D] text-[#061B49] text-xs font-bold uppercase tracking-wider shadow">
                  Most Popular
                </span>
                <span className="text-xs font-semibold text-slate-200 bg-[#040E26]/80 px-3 py-1 rounded border border-slate-700 backdrop-blur-sm">
                  Every Weekend
                </span>
              </div>

              {/* Bottom Logistics Strip */}
              <div className="relative z-10 mt-auto pt-16">
                <div className="bg-[#040E26]/90 backdrop-blur-md rounded-xl p-4 border border-[#073B82] space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <Clock className="w-4 h-4 text-[#D6B56D] shrink-0" />
                    <span className="font-medium text-white">Duration:</span>
                    <span>03 Hours Scenic Sea Voyage</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <MapPin className="w-4 h-4 text-[#D6B56D] shrink-0" />
                    <span className="font-medium text-white">Location:</span>
                    <span>Kemari Port, Karachi</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <Users className="w-4 h-4 text-[#D6B56D] shrink-0" />
                    <span className="font-medium text-white">Capacity:</span>
                    <span>30–60 Persons per Tour</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing, Inclusions, and Live Calculator (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              {/* Pricing Cards - Vertical Stack on Mobile (grid-cols-1), 3-col on sm/lg */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                  {/* Adults */}
                  <div className="p-4 rounded-xl bg-[#030B1C] border border-[#073B82] text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Adults
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-white font-cinzel">
                      Rs. 5,999
                    </div>
                    <span className="text-[11px] text-[#D6B56D] font-medium block mt-1">
                      per person
                    </span>
                  </div>

                  {/* Kids */}
                  <div className="p-4 rounded-xl bg-[#030B1C] border border-[#073B82] text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Kids (4–12 Years)
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#D6B56D] font-cinzel">
                      Rs. 2,999
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium block mt-1">
                      50% off per child
                    </span>
                  </div>

                  {/* Under 4 */}
                  <div className="p-4 rounded-xl bg-[#030B1C] border border-[#073B82] text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Kids Under 4
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#D6B56D] font-cinzel">
                      FREE
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium block mt-1">
                      Complimentary entry
                    </span>
                  </div>
                </div>

                {/* Package Inclusions Checklist */}
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 mb-3 flex items-center justify-center sm:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D6B56D]" />
                  Everything Included in Your Ticket
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-center sm:text-left">
                  {FEATURED_PACKAGE.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="p-0.5 rounded-full bg-[#073B82] text-[#D6B56D] mt-0.5 shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Fare Estimator - Spacious Vertical Layout on Mobile */}
                <div className="p-5 rounded-xl bg-[#040E26] border border-[#073B82]/80 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-center sm:text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B56D] flex items-center gap-2">
                      <Calculator className="w-4 h-4" />
                      Instant Fare Estimator
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Customize your family / group size
                    </span>
                  </div>

                  {/* Stack vertically on mobile, 3-col on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-center mb-4">
                    <div className="p-3 rounded-lg bg-[#030B1C] border border-slate-800">
                      <span className="text-xs text-slate-300 font-medium block mb-1.5">Adults (Rs 5,999)</span>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setCalcAdults(Math.max(1, calcAdults - 1))}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-[#073B82] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold text-white text-base tabular-nums w-6">{calcAdults}</span>
                        <button
                          type="button"
                          onClick={() => setCalcAdults(calcAdults + 1)}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-[#073B82] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#030B1C] border border-slate-800">
                      <span className="text-xs text-slate-300 font-medium block mb-1.5">Kids 4-12 (Rs 2,999)</span>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setCalcKids(Math.max(0, calcKids - 1))}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-[#073B82] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold text-white text-base tabular-nums w-6">{calcKids}</span>
                        <button
                          type="button"
                          onClick={() => setCalcKids(calcKids + 1)}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-[#073B82] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#030B1C] border border-slate-800">
                      <span className="text-xs text-slate-300 font-medium block mb-1.5">Under 4 (Free)</span>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setCalcInfants(Math.max(0, calcInfants - 1))}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-[#073B82] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold text-white text-base tabular-nums w-6">{calcInfants}</span>
                        <button
                          type="button"
                          onClick={() => setCalcInfants(calcInfants + 1)}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-[#073B82] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-slate-800 text-xs sm:text-sm text-center sm:text-left gap-1">
                    <span className="text-slate-300">
                      Total for {calcAdults + calcKids + calcInfants} guests:
                    </span>
                    <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#D6B56D] tabular-nums">
                      Rs. {totalEstimate.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Centered and cleanly styled */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <a
                  href={calculatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] hover:shadow-md transition-all duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => onOpenBookingModal(FEATURED_PACKAGE.name)}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-[#073B82]/50 hover:bg-[#073B82] border border-[#087CC5]/50 transition-all duration-200 cursor-pointer"
                >
                  Booking
                </button>
              </div>

              {/* Notice */}
              <p className="text-[11px] text-slate-400 text-center sm:text-left mt-3">
                Clicking opens official WhatsApp with pre-filled package inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
