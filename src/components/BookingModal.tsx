import { useState, FormEvent } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, FEATURED_PACKAGE } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedPackage = 'Weekend Social Cruise Package',
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const estimatedTotal =
    adults * FEATURED_PACKAGE.adultPrice + kids * FEATURED_PACKAGE.kidsPrice;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `Assalamualaikum Al Arbaz Cruise!

I would like to inquire about a cruise booking.

Name: ${name.trim()}
WhatsApp: ${phone.trim()}
Package: ${preselectedPackage}
Adults: ${adults}
Kids: ${kids}
Preferred Date: ${date || 'Upcoming Weekend'}
Special Requirements: ${notes.trim() || 'None'}

Please share availability and reservation information.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encoded}`;

    setWhatsappUrl(url);
    setIsSuccess(true);
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#040E26] border border-[#073B82] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6 text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] font-bold block mb-1">
                RESERVE YOUR CRUISE
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                Weekend Luxury Escape
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Package: <span className="text-[#D6B56D] font-semibold">{preselectedPackage}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#030B1C] border border-slate-700 text-white text-sm focus:border-[#D6B56D] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0300-1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#030B1C] border border-slate-700 text-white text-sm focus:border-[#D6B56D] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Adults (Rs 5,999)
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-white tabular-nums w-6 text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Kids 4–12 (Rs 2,999)
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setKids(Math.max(0, kids - 1))}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-white tabular-nums w-6 text-center">{kids}</span>
                    <button
                      type="button"
                      onClick={() => setKids(kids + 1)}
                      className="w-8 h-8 rounded bg-slate-800 text-white font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Preferred Weekend Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#030B1C] border border-slate-700 text-white text-sm focus:border-[#D6B56D] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Special Notes / Occasion
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday, anniversary, family gathering"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#030B1C] border border-slate-700 text-white text-sm focus:border-[#D6B56D] outline-none"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#030B1C] border border-slate-800 text-xs">
                <span className="text-slate-400">Estimated Total:</span>
                <span className="font-bold text-[#D6B56D] font-cinzel text-base">
                  Rs. {estimatedTotal.toLocaleString()}
                </span>
              </div>

              {/* Submit button - Sleek compact */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                Booking WhatsApp
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#073B82] text-[#D6B56D] mx-auto flex items-center justify-center border border-[#D6B56D]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-cinzel text-xl font-bold text-white">
              Inquiry Dispatched!
            </h4>
            <p className="text-xs text-slate-300">
              Your inquiry has been formulated. If WhatsApp did not open automatically, tap below:
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase text-[#061B49] bg-[#D6B56D]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
              Open WhatsApp Chat
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
