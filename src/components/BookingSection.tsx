import { useState, FormEvent } from 'react';
import { Send, Calendar, Users, CheckCircle2, Clock, MapPin, Calculator } from 'lucide-react';
import { BRAND_INFO, FEATURED_PACKAGE } from '../data/cruiseData';
import { BookingFormData } from '../types/cruise';
import { WhatsAppIcon } from './SocialIcons';

export default function BookingSection() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    whatsappNumber: '',
    selectedPackage: 'Weekend Social Cruise Package (03 Hours)',
    adultsCount: 2,
    kidsCount: 0,
    preferredDate: '',
    timeSlot: 'Sunset Cruise (Evening 4:30 PM - 7:30 PM)',
    specialRequirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Calculate live estimate
  const estimatedCost =
    formData.adultsCount * FEATURED_PACKAGE.adultPrice +
    formData.kidsCount * FEATURED_PACKAGE.kidsPrice;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.whatsappNumber.trim()) {
      return;
    }

    // Build the exact WhatsApp message specified in user requirements:
    const message = `Assalamualaikum Al Arbaz Cruise!

I would like to inquire about a cruise booking.

Name: ${formData.fullName.trim()}
WhatsApp: ${formData.whatsappNumber.trim()}
Package: ${formData.selectedPackage}
Adults: ${formData.adultsCount}
Kids: ${formData.kidsCount}
Preferred Date: ${formData.preferredDate || 'Upcoming Weekend'}
Time Slot: ${formData.timeSlot}
Estimated Fare: Rs. ${estimatedCost.toLocaleString()}
Special Requirements: ${formData.specialRequirements.trim() || 'None'}

Please share availability and reservation information.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encoded}`;

    setGeneratedWhatsAppUrl(url);
    setSubmitted(true);

    // Automatically trigger WhatsApp in a new tab
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-gradient-to-b from-[#030C22] via-[#06183B] to-[#020716] relative overflow-hidden">
      {/* Background nautical accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-radial from-[#073B82]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-center mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              INSTANT RESERVATION INQUIRIES
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            READY TO EXPERIENCE THE SEA?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Make your weekends unforgettable with Al Arbaz Cruise. Contact us today to reserve your cruise experience.
          </p>
        </div>

        {/* Booking Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#030B1C] border border-[#073B82] rounded-2xl p-6 sm:p-10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#040E26] border border-slate-700 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label
                      htmlFor="whatsappNumber"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      id="whatsappNumber"
                      type="tel"
                      required
                      placeholder="0300-1234567 or +92..."
                      value={formData.whatsappNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsappNumber: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#040E26] border border-slate-700 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Selected Package */}
                  <div>
                    <label
                      htmlFor="package"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Selected Cruise Package
                    </label>
                    <select
                      id="package"
                      value={formData.selectedPackage}
                      onChange={(e) =>
                        setFormData({ ...formData, selectedPackage: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#040E26] border border-slate-700 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D] text-white text-sm outline-none transition-colors"
                    >
                      <option value="Weekend Social Cruise Package (03 Hours)">
                        Weekend Social Cruise Package (03 Hours)
                      </option>
                      <option value="Private Family Yacht Charter (Custom)">
                        Private Family Yacht Charter (Custom)
                      </option>
                      <option value="Corporate / Group Event Cruise">
                        Corporate / Group Event Cruise (30–60 Pax)
                      </option>
                      <option value="Birthday / Celebration Cruise">
                        Birthday / Celebration Cruise
                      </option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Preferred Weekend Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#040E26] border border-slate-700 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Adults and Kids Counts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 rounded-xl bg-[#040E26] border border-slate-800">
                  <div>
                    <label
                      htmlFor="adultsCount"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                    >
                      Number of Adults (Rs. 5,999)
                    </label>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            adultsCount: Math.max(1, formData.adultsCount - 1),
                          })
                        }
                        className="w-9 h-9 rounded bg-slate-800 text-white font-bold hover:bg-[#073B82] transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-white text-base tabular-nums w-8 text-center">
                        {formData.adultsCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, adultsCount: formData.adultsCount + 1 })
                        }
                        className="w-9 h-9 rounded bg-slate-800 text-white font-bold hover:bg-[#073B82] transition-colors cursor-pointer"
                      >
                        +
                      </button>
                      <span className="text-xs text-slate-400">guests</span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="kidsCount"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                    >
                      Number of Kids 4–12 (Rs. 2,999)
                    </label>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            kidsCount: Math.max(0, formData.kidsCount - 1),
                          })
                        }
                        className="w-9 h-9 rounded bg-slate-800 text-white font-bold hover:bg-[#073B82] transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-white text-base tabular-nums w-8 text-center">
                        {formData.kidsCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, kidsCount: formData.kidsCount + 1 })
                        }
                        className="w-9 h-9 rounded bg-slate-800 text-white font-bold hover:bg-[#073B82] transition-colors cursor-pointer"
                      >
                        +
                      </button>
                      <span className="text-[11px] text-slate-400">(Under 4 Free)</span>
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label
                    htmlFor="specialRequirements"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    id="specialRequirements"
                    rows={3}
                    placeholder="e.g. Birthday cake arrangement, private seating, dietary preferences, corporate booking..."
                    value={formData.specialRequirements}
                    onChange={(e) =>
                      setFormData({ ...formData, specialRequirements: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#040E26] border border-slate-700 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D] text-white text-sm outline-none transition-colors"
                  />
                </div>

                {/* Estimated total preview */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#073B82]/40 to-[#061B49]/60 border border-[#073B82]">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-300 block">
                      Estimated Inquiry Total:
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Hi-Tea + Grand Buffet + 3hr Cruise + Fishing + Music Included
                    </span>
                  </div>
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#D6B56D] tabular-nums">
                    Rs. {estimatedCost.toLocaleString()}
                  </span>
                </div>

                {/* Submit button - Sleek compact */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking WhatsApp
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Submitting directly sends your formatted booking request to our official WhatsApp reservation desk.
                </p>
              </form>
            ) : (
              /* Success / WhatsApp Opened Confirmation View - Pure gold/navy, zero green */
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#073B82] text-[#D6B56D] mx-auto flex items-center justify-center border border-[#D6B56D]/40">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                    Inquiry Generated Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    We have generated your inquiry for{' '}
                    <strong className="text-white">{formData.fullName}</strong> for{' '}
                    <strong className="text-[#D6B56D]">
                      {formData.adultsCount} Adults, {formData.kidsCount} Kids
                    </strong>
                    . If WhatsApp didn't open automatically, click below to open your chat.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#040E26] border border-slate-800 text-left max-w-md mx-auto text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed">
                  {`Package: ${formData.selectedPackage}
Guests: ${formData.adultsCount} Adults, ${formData.kidsCount} Kids
Estimated Total: Rs. ${estimatedCost.toLocaleString()}
Destination: Kemari Port, Karachi`}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-lg transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                    Open WhatsApp Chat Now
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 cursor-pointer"
                  >
                    Edit Inquiry Details
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Reservation Information & Peace of Mind (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#030B1C] border border-[#073B82] rounded-2xl p-6 sm:p-8">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] block mb-2">
                Booking Information
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                How Reservations Work
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#D6B56D] font-mono text-base">01.</span>
                  <div>
                    <strong className="text-white block font-medium">Send Inquiry</strong>
                    <span>Submit the form or click any WhatsApp button with your desired date and guest counts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#D6B56D] font-mono text-base">02.</span>
                  <div>
                    <strong className="text-white block font-medium">Instant Availability Check</strong>
                    <span>Our reservation desk confirms seat availability and boarding slot for that weekend.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#D6B56D] font-mono text-base">03.</span>
                  <div>
                    <strong className="text-white block font-medium">Confirmation & Boarding Pass</strong>
                    <span>Receive exact Kemari port gate arrival directions, crew contact, and boarding schedule.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#030B1C] border border-slate-800 rounded-2xl p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 fill-[#D6B56D]" />
                Direct Desk Contact
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Prefer speaking directly to our team before filling out details?
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300 py-1.5 border-b border-slate-800/80">
                  <span>WhatsApp:</span>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#D6B56D] hover:underline"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-300 py-1.5 border-b border-slate-800/80">
                  <span>International:</span>
                  <span className="text-slate-200 tabular-nums">{BRAND_INFO.phoneInternational}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 py-1.5">
                  <span>Boarding Port:</span>
                  <span className="text-slate-200">Kemari, Karachi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
