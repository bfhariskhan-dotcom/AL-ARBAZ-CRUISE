import { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Utensils, 
  Music, 
  Check, 
  Award
} from 'lucide-react';
import { BRAND_INFO, CRUISE_IMAGES } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

interface LuxuryCouplePackageProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function LuxuryCouplePackage({ onOpenBookingModal }: LuxuryCouplePackageProps) {
  const [selectedMeal, setSelectedMeal] = useState<'Lunch' | 'Dinner' | 'Hi-Tea'>('Dinner');

  const inclusions = [
    {
      title: 'A Licensed Captain',
      desc: 'Expert nautical navigation ensuring a smooth, safe deep-sea voyage.',
    },
    {
      title: 'Dedicated Attendant',
      desc: 'Personal private steward catering exclusively to your service throughout.',
    },
    {
      title: 'Certified Life Jackets',
      desc: 'Top-tier marine safety vests provided for both passengers on board.',
    },
    {
      title: 'On-Board Refrigerator',
      desc: 'Chilled drinks, fresh fruit, and beverage cooling at your convenience.',
    },
    {
      title: 'Bluetooth Speakers for Music',
      desc: 'Stream your own curated romantic or celebratory playlist across the deck.',
    },
    {
      title: 'Luxury Private Washroom',
      desc: 'Immaculately maintained, sanitary, and fully equipped private facility.',
    },
  ];

  const whatsappMessage = `Assalamualaikum Al Arbaz Cruise!
I would like to inquire about booking the:
Luxury Couple Package for 02 Guests on Private Cruise (Rs. 75,000/-)

- Selected Dining Preference: ${selectedMeal}
- Departure: Kemari Harbor (Coast Guard Jetty)
- Duration: 2.5 Hours Deep Sea Ride

Please confirm availability and booking procedure.`;

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="couple-package" className="py-20 lg:py-28 bg-gradient-to-b from-[#020716] via-[#051B45] to-[#02091A] relative overflow-hidden border-b border-[#073B82]/50">
      {/* Ambient luxury light aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-radial from-[#D6B56D]/15 via-[#073B82]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Single Centered Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-center mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              EXCLUSIVE PRIVATE CRUISE
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            LUXURY COUPLE PACKAGE
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            An ultra-exclusive private cruise experience designed for 02 guests. Sail the deep open sea from Kemari Coast Guard Jetty with total privacy, personalized hospitality, and gourmet dining.
          </p>
        </div>

        {/* Main Package Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#061E4F]/90 via-[#04122C]/95 to-[#020818] border-2 border-[#D6B56D]/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
          
          {/* Top Gold Ribbon / Header Bar */}
          <div className="bg-gradient-to-r from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#061B49]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider text-[#061B49]">
                Private Luxury Vessel Charter · For 02 Guests
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#061B49] text-[#F3E5C8] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-inner">
              <span>All-Inclusive Package</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Visual & Price Hero (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#D6B56D]/50 shadow-2xl group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={CRUISE_IMAGES.photographyMoments}
                      alt="Luxury Couple Private Cruise"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  {/* Floating Price Tag on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#040E26]/95 backdrop-blur-md p-4 rounded-xl border border-[#D6B56D]/50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Total Package Price
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#D6B56D]">
                          Rs. 75,000/-
                        </span>
                      </div>
                    </div>
                    <span className="text-right text-[11px] font-semibold text-slate-300 bg-[#073B82]/80 px-2.5 py-1 rounded-md border border-[#087CC5]/50">
                      02 Guests Included
                    </span>
                  </div>
                </div>

                {/* Duration & Route Highlight */}
                <div className="p-4 rounded-xl bg-[#030B1C]/90 border border-slate-800 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Clock className="w-4 h-4 text-[#D6B56D] shrink-0" />
                    <span className="font-semibold text-white">2.5 Hours Deep Sea Ride</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Departs from <strong className="text-white">Kemari Harbor Karachi (Coast Guard Jetty — not general jetty)</strong> towards deep open sea. Captain decides route based on weather conditions.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Inclusions & Meal Choice (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
                    Luxury Couple Package for 02 Guest on Private Cruise
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    This Package includes a 2.5 Hours Deep Sea ride with your choice of delicious dining. Complete boat reserved exclusively for you and your companion with dedicated crew hospitality.
                  </p>
                </div>

                {/* Meal Option Selector */}
                <div className="p-4 rounded-xl bg-[#030A1A] border border-[#073B82]/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#D6B56D] font-bold">
                      Choice of Delicious Meal Included:
                    </span>
                    <span className="text-[11px] text-slate-400">Select preference:</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                    {(['Lunch', 'Dinner', 'Hi-Tea'] as const).map((meal) => {
                      const isSelected = selectedMeal === meal;
                      return (
                        <button
                          key={meal}
                          type="button"
                          onClick={() => setSelectedMeal(meal)}
                          className={`py-2 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] text-[#061B49] shadow-md border border-[#D6B56D]'
                              : 'bg-[#040E26] text-slate-300 hover:text-white hover:bg-[#073B82] border border-slate-800'
                          }`}
                        >
                          <Utensils className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>{meal}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* This Trip Includes Grid (6 Verified items) */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    This Trip Includes:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inclusions.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#030B1C]/80 border border-slate-800/80 hover:border-[#D6B56D]/40 transition-colors"
                      >
                        <span className="p-1 rounded-full bg-[#D6B56D]/20 text-[#D6B56D] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <span className="text-xs font-bold text-white block">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-slate-400 font-light leading-snug">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality & Hygiene Guarantee Banner */}
                <div className="p-3.5 rounded-xl bg-[#073B82]/30 border border-[#D6B56D]/40 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D6B56D] shrink-0" />
                  <p className="text-[11px] sm:text-xs text-slate-200 font-medium leading-relaxed">
                    <strong>Quality Assurance:</strong> Please note that we have no compromise on Food Quality/Quantity, Personal Hygiene, and Sanitization.
                  </p>
                </div>

                {/* Compact Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] hover:shadow-lg transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                    Booking WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenBookingModal('Luxury Couple Package for 02 Guest on Private Cruise (Rs. 75,000/-)')}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-[#073B82]/60 hover:bg-[#073B82] border border-[#087CC5]/50 transition-colors cursor-pointer"
                  >
                    Booking
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
