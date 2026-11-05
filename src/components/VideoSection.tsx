import { useState } from 'react';
import { Play, Check, Anchor, Sunset, Utensils, Music, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, CRUISE_IMAGES } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

export default function VideoSection() {
  const [isPlayingStreamable, setIsPlayingStreamable] = useState(false);

  return (
    <section id="videos" className="py-20 lg:py-28 bg-gradient-to-b from-[#030A1C] via-[#05173A] to-[#020717] relative overflow-hidden">
      {/* Ambient Maritime Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-radial from-[#073B82]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Single Centered Kicker (No side-by-side, no micro-icons) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-center mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              AUTHENTIC MOMENTS AT SEA
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            WATCH OUR EXCLUSIVE CRUISE REELS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Captured live on the Arabian Sea — discover real cruise vibes, delicious buffet banquets,
            live fishing excitement, and golden sunsets along Kemari Port.
          </p>
        </div>

        {/* 2 Dedicated Vertical Reel Showcases in Proper 9:16 Aspect Ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* REEL 1: Official Weekend Cruise Tour Reel (9:16 Vertical Format) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#061E4F]/80 via-[#04122C]/90 to-[#020717] border border-[#073B82] hover:border-[#D6B56D]/60 p-6 sm:p-7 shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6 group">
            {/* 9:16 Vertical Smartphone Frame */}
            <div className="w-full max-w-[240px] sm:max-w-[260px] aspect-[9/16] shrink-0 rounded-3xl overflow-hidden bg-black border-2 border-[#D6B56D]/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative flex flex-col">
              {/* Top Phone Notch / Camera Bar */}
              <div className="h-5 bg-black/90 w-full flex items-center justify-center shrink-0 z-20">
                <div className="w-16 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Video Player in 9:16 Vertical Frame */}
              <div className="relative flex-1 w-full bg-black overflow-hidden">
                {!isPlayingStreamable ? (
                  <div
                    onClick={() => setIsPlayingStreamable(true)}
                    className="absolute inset-0 cursor-pointer group/play"
                  >
                    <img
                      src={CRUISE_IMAGES.heroSunset}
                      alt="Al Arbaz Cruise Reel Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover/play:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

                    {/* Glowing Golden Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] text-[#061B49] flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-[#061B49] ml-1" />
                      </div>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider mt-3 bg-black/70 px-3 py-1 rounded-full border border-[#D6B56D]/40">
                        Tap to Play Reel
                      </span>
                    </div>

                    {/* Reel Footer Tag */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[10px] font-mono uppercase text-[#D6B56D] font-bold block">
                        Al Arbaz Cruise
                      </span>
                      <p className="text-xs font-semibold text-white drop-shadow">
                        Kemari Port Departure
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://streamable.com/e/ezp0sq?autoplay=1&muted=0&loop=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-full"
                    title="Al Arbaz Cruise Tour Reel"
                  />
                )}
              </div>
            </div>

            {/* Side Content: Headings, Verified Features & Booking CTA */}
            <div className="flex-1 flex flex-col justify-between text-center md:text-left h-full">
              <div>
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#D6B56D] font-bold block mb-1.5">
                  OFFICIAL CRUISE REEL
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#D6B56D] transition-colors">
                  The Full Weekend Voyage
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  Watch our complete weekend journey sailing out from Kemari Port into the open Arabian Sea,
                  featuring open-deck seating, sea breezes, hot welcome tea, and ocean views.
                </p>

                {/* Verified Highlight Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-slate-200">
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>3-Hour Guided Maritime Cruise Ride</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Fresh Hi-Tea & Hot Welcome Refreshments</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Open Observation Deck & Ocean Views</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Licensed Nautical Captain & Safety Vests</span>
                  </li>
                </ul>
              </div>

              {/* Clean Single Compact CTA Button */}
              <div className="pt-4 border-t border-slate-800 flex justify-center md:justify-start">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                    'Assalamualaikum Al Arbaz Cruise! I watched your cruise reel and would like to book a trip.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking
                </a>
              </div>
            </div>
          </div>

          {/* REEL 2: Sunset & Festivities On Board Reel (9:16 Vertical Format) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#061E4F]/80 via-[#04122C]/90 to-[#020717] border border-[#073B82] hover:border-[#D6B56D]/60 p-6 sm:p-7 shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6 group">
            {/* 9:16 Vertical Smartphone Frame */}
            <div className="w-full max-w-[240px] sm:max-w-[260px] aspect-[9/16] shrink-0 rounded-3xl overflow-hidden bg-black border-2 border-[#D6B56D]/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative flex flex-col">
              {/* Top Phone Notch / Camera Bar */}
              <div className="h-5 bg-black/90 w-full flex items-center justify-center shrink-0 z-20">
                <div className="w-16 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Facebook Reel Embed in Native 9:16 Vertical Frame */}
              <div className="relative flex-1 w-full bg-black overflow-hidden flex items-center justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1162064573173241%2F&show_text=false&t=0"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Al Arbaz Cruise Facebook Reel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Side Content: Headings, Verified Features & Booking CTA */}
            <div className="flex-1 flex flex-col justify-between text-center md:text-left h-full">
              <div>
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#D6B56D] font-bold block mb-1.5">
                  OFFICIAL FACEBOOK REEL
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#D6B56D] transition-colors">
                  Sunset & Festivities On Board
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  Witness the golden horizon across the Arabian Sea, our hot 11-item Pakistani dinner banquet,
                  live fishing moments, and joyous deck music.
                </p>

                {/* Verified Highlight Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-slate-200">
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Grand 11-Item Hot Dinner Buffet & Desserts</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Live Fishing Gear, Lines & Expert Guidance</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>High-Fidelity Marine Deck Music System</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Exclusive Family-Friendly Seating Zones</span>
                  </li>
                </ul>
              </div>

              {/* Clean Single Compact CTA Button */}
              <div className="pt-4 border-t border-slate-800 flex justify-center md:justify-start">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                    'Assalamualaikum Al Arbaz Cruise! I would like to reserve seats for the upcoming weekend sunset cruise.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
