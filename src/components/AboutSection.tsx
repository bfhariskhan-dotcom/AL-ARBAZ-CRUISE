import { Anchor, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { BRAND_INFO, CRUISE_IMAGES } from '../data/cruiseData';

export default function AboutSection() {
  const highlights = [
    { title: 'Serving Since 2013', desc: 'Over a decade of maritime hospitality along Karachi coast' },
    { title: 'Memorable Cruise Experiences', desc: 'Pristine ocean journeys across the calm Arabian Sea' },
    { title: 'Family & Friends Gatherings', desc: 'Dedicated private seating and warm hospitable atmosphere' },
    { title: 'Dining & Entertainment', desc: 'Fresh hot buffet dinner, hi-tea, and music system on deck' },
    { title: 'Beautiful Sunset Views', desc: 'Witness the iconic Karachi coastline sunset from the open sea' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-[#030C22] via-[#06183B] to-[#020716] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#073B82] shadow-2xl group">
              <img
                src={CRUISE_IMAGES.heroDeck}
                alt="Al Arbaz Cruise Observation Deck and Guests"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040E26] via-transparent to-transparent" />

              {/* Floating verified trust card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#030B1C]/90 backdrop-blur-md border border-[#D6B56D]/40">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#073B82] text-[#D6B56D]">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#D6B56D] font-bold">
                      Trusted Maritime Hospitality
                    </span>
                    <h4 className="text-white font-cinzel text-base font-bold">
                      Kemari Port, Karachi · Est. 2013
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative secondary image badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-36 h-36 rounded-xl overflow-hidden border-2 border-[#D6B56D] shadow-xl">
              <img
                src={CRUISE_IMAGES.fishingSunset}
                alt="Kemari sunset view"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
                ABOUT OUR HERITAGE
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              EXPERIENCE THE SEA WITH AL ARBAZ CRUISE
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              <p>
                Since 2013, <strong className="text-white font-medium">Al Arbaz Cruise</strong> has been creating
                memorable luxury cruise experiences for families, friends, and groups.
              </p>
              <p>
                Our goal is to make every journey special through comfortable cruise rides, delicious dining,
                fishing activities, music, and breathtaking sunset views.
              </p>
              <p>
                Whether you are planning a family getaway, a friends' gathering, or a special celebration,
                Al Arbaz Cruise offers an unforgettable experience on the beautiful waters of Karachi.
              </p>
            </div>

            {/* 5 Core Pillars */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#030B1C]/80 border border-slate-800/80"
                >
                  <div className="p-1 rounded bg-[#073B82] text-[#D6B56D] mt-0.5 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Location & Direct WhatsApp Contact */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-[#D6B56D]" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Heart className="w-4 h-4 text-[#D6B56D]" />
                <span>Dedicated Family Privacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
