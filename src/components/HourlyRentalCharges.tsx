import { useState } from 'react';
import {
  Clock,
  Users,
  Anchor,
  Compass,
  Fish,
  Phone,
  Check,
  Eye,
  X,
  Palette,
} from 'lucide-react';
import {
  BRAND_INFO,
  HOURLY_RENTAL_CHARGES,
  HOURLY_RENTAL_NOTES,
  HOURLY_RENTAL_IMAGE,
} from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

interface HourlyRentalChargesProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function HourlyRentalCharges({ onOpenBookingModal }: HourlyRentalChargesProps) {
  const [selectedHours, setSelectedHours] = useState<number>(3);
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  const selectedRate =
    HOURLY_RENTAL_CHARGES.find((r) => r.hours === selectedHours) || HOURLY_RENTAL_CHARGES[1];

  const noteIcons = [
    <Users key="users" className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />,
    <Fish key="fish" className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />,
    <Anchor key="anchor" className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />,
    <Palette key="palette" className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />,
    <Compass key="compass" className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />,
  ];

  const whatsappMessage = `Assalamualaikum Al Arbaz Cruise!
I would like to book a Private Cruise Charter under Hourly Rental Charges:

- Duration: ${selectedRate.durationLabel}
- Rental Charges: Rs. ${selectedRate.priceFormatted}/-
- Departure: Kemari Harbour (Captain's Weather Route)
- Guest Capacity: Up to 70 Guests

Please confirm vessel availability and reservation procedure.`;

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="hourly-rental"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#030C22] via-[#061B45] to-[#020716] relative overflow-hidden border-t border-b border-[#073B82]/50"
    >
      {/* Subtle Ambient Gold & Marine Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-radial from-[#D6B56D]/10 via-[#073B82]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              PRIVATE VESSEL CHARTER RATES
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            HOURLY RENTAL CHARGES
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Reserve the entire Al Arbaz Cruise vessel exclusively for your family, corporate event,
            or private celebration. Select your preferred charter duration below for transparent rates.
          </p>
        </div>

        {/* Main Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (7 cols): Interactive Official Rate Table */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#061E4F]/90 via-[#04122C]/95 to-[#020818] border-2 border-[#D6B56D]/60 shadow-[0_20px_50px_rgba(0,0,0,0.65)] overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#04122C] via-[#073B82] to-[#04122C] border-b border-[#D6B56D]/50 px-4 sm:px-8 py-4 grid grid-cols-12 items-center">
              <div className="col-span-6 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D6B56D]" />
                <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider uppercase text-[#F3E5C8]">
                  Duration
                </span>
              </div>
              <div className="col-span-6 text-right">
                <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider uppercase text-[#F3E5C8]">
                  Charges (PKR)
                </span>
              </div>
            </div>

            {/* Interactive Rate Rows (2 hours to 10 hours) */}
            <div className="divide-y divide-[#073B82]/40">
              {HOURLY_RENTAL_CHARGES.map((rate) => {
                const isSelected = rate.hours === selectedHours;
                return (
                  <button
                    key={rate.hours}
                    type="button"
                    onClick={() => setSelectedHours(rate.hours)}
                    className={`w-full px-4 sm:px-8 py-3.5 sm:py-4 grid grid-cols-12 items-center text-left transition-all duration-200 cursor-pointer group ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#D6B56D]/20 via-[#073B82]/50 to-[#D6B56D]/15 border-l-4 border-l-[#D6B56D]'
                        : 'hover:bg-[#073B82]/25 border-l-4 border-l-transparent'
                    }`}
                  >
                    {/* Duration Column */}
                    <div className="col-span-7 sm:col-span-6 flex items-center gap-2.5 sm:gap-3">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
                          isSelected
                            ? 'bg-[#D6B56D] border-[#D6B56D] text-[#061B49]'
                            : 'border-slate-600 text-transparent group-hover:border-[#D6B56D]/60'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>

                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
                        <span
                          className={`font-cinzel text-base sm:text-lg font-bold tracking-wide transition-colors ${
                            isSelected ? 'text-[#F3E5C8]' : 'text-white group-hover:text-[#F3E5C8]'
                          }`}
                        >
                          {rate.hours} hours
                        </span>
                        {rate.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D6B56D]/15 text-[#D6B56D] border border-[#D6B56D]/40">
                            {rate.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Charges Column */}
                    <div className="col-span-5 sm:col-span-6 text-right flex items-center justify-end gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400 hidden xs:inline">
                        Rs.
                      </span>
                      <span
                        className={`font-cinzel text-lg sm:text-xl font-bold tabular-nums transition-colors ${
                          isSelected ? 'text-[#D6B56D]' : 'text-slate-100 group-hover:text-[#D6B56D]'
                        }`}
                      >
                        {rate.priceFormatted}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Notice Bar Inside Table Card */}
            <div className="px-4 sm:px-8 py-3.5 bg-[#020818] border-t border-[#D6B56D]/30 flex flex-col xs:flex-row items-center justify-between gap-2 text-xs text-slate-400">
              <span>Tap any duration row to select &amp; book</span>
              <button
                type="button"
                onClick={() => setShowFlyerModal(true)}
                className="inline-flex items-center gap-1.5 text-[#D6B56D] hover:text-[#F3E5C8] font-semibold transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Rate Card</span>
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Selected Summary, Key Guidelines & Instant Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Selected Charter Summary Card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#061B49]/90 to-[#030B1C] border border-[#D6B56D]/60 p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D6B56D] block">
                    Selected Charter Plan
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {selectedRate.durationLabel} Private Cruise
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Total Rental
                  </span>
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#D6B56D] tabular-nums">
                    Rs. {selectedRate.priceFormatted}
                  </span>
                </div>
              </div>

              {/* Compact Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#040E26] border border-slate-800 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#D6B56D] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Capacity</span>
                    <span className="text-xs font-bold text-white">Max 70 Guests</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#040E26] border border-slate-800 flex items-center gap-2.5">
                  <Anchor className="w-4 h-4 text-[#D6B56D] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Departure</span>
                    <span className="text-xs font-bold text-white">Kemari Harbour</span>
                  </div>
                </div>
              </div>

              {/* Compact Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] hover:shadow-lg transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() =>
                    onOpenBookingModal(
                      `Hourly Charter (${selectedRate.durationLabel} · Rs. ${selectedRate.priceFormatted}/-)`
                    )
                  }
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-[#073B82]/60 hover:bg-[#073B82] border border-[#087CC5]/50 transition-colors cursor-pointer"
                >
                  Booking
                </button>
              </div>
            </div>

            {/* Charter Terms & Inclusions Box (Exact 5 Points from Poster) */}
            <div className="rounded-2xl bg-[#030B1C]/95 border border-[#073B82] p-6 sm:p-7 shadow-xl">
              <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#F3E5C8] mb-4 flex items-center gap-2">
                <Anchor className="w-4 h-4 text-[#D6B56D]" />
                Important Charter Details
              </h4>

              <ul className="space-y-3.5">
                {HOURLY_RENTAL_NOTES.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {noteIcons[idx]}
                    <span>{note}</span>
                  </li>
                ))}
              </ul>

              {/* Official Contact Footer inside Card */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-400">Direct Charter Desk:</span>
                <a
                  href={`tel:${BRAND_INFO.phoneDisplay}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#040E26] border border-[#D6B56D]/40 text-[#D6B56D] hover:text-white hover:border-[#D6B56D] transition-colors text-xs font-bold tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Rate Card Lightbox Modal */}
      {showFlyerModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowFlyerModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#040E26] border border-[#D6B56D]/60 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowFlyerModal(false)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/75 text-white hover:bg-[#073B82] transition-colors cursor-pointer"
              aria-label="Close rate card preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={HOURLY_RENTAL_IMAGE}
              alt="Al Arbaz Cruise Official Hourly Rental Charges Card"
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
