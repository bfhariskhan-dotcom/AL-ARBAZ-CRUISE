import { useState } from 'react';
import { Play, Check, Film } from 'lucide-react';
import { BRAND_INFO, VIDEO_SHOWCASE } from '../data/cruiseData';
import { WhatsAppIcon } from './SocialIcons';

export default function VideoSection() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 lg:py-28 bg-gradient-to-b from-[#030A1C] via-[#05173A] to-[#020717] relative overflow-hidden">
      {/* Ambient Maritime Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-radial from-[#073B82]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Single Centered Kicker */}
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
            Recorded live aboard Al Arbaz Cruise — real Arabian Sea sunsets, open-deck sailing,
            delicious buffet banquets, live fishing, and joyous celebrations along Kemari Port.
          </p>
        </div>

        {/* 3 Dedicated Vertical Reel Showcases in Proper 9:16 Aspect Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {VIDEO_SHOWCASE.map((video, idx) => {
            const isPlaying = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className="rounded-2xl bg-gradient-to-b from-[#061E4F]/85 via-[#04122C]/90 to-[#020717] border border-[#073B82] hover:border-[#D6B56D]/70 p-5 sm:p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Authentic 9:16 Vertical Smartphone / Reel Frame */}
                  <div className="w-full max-w-[270px] sm:max-w-[290px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden bg-black border-2 border-[#D6B56D]/60 shadow-[0_12px_40px_rgba(0,0,0,0.85)] relative flex flex-col mb-5">
                    {/* Top Phone Speaker Notch */}
                    <div className="h-5 bg-black/95 w-full flex items-center justify-center shrink-0 z-20">
                      <div className="w-16 h-2 rounded-full bg-slate-800" />
                    </div>

                    {/* HTML5 Direct Video Player in 9:16 Vertical Frame */}
                    <div className="relative flex-1 w-full bg-black overflow-hidden flex items-center justify-center">
                      {!isPlaying ? (
                        <div
                          onClick={() => setPlayingVideoId(video.id)}
                          className="absolute inset-0 cursor-pointer group/play"
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-center group-hover/play:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

                          {/* Glowing Golden Play Button */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] text-[#061B49] flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform">
                              <Play className="w-6 h-6 fill-[#061B49] ml-1" />
                            </div>
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider mt-3 bg-black/75 px-3 py-1 rounded-full border border-[#D6B56D]/50 backdrop-blur-sm">
                              Tap to Play Reel
                            </span>
                          </div>

                          {/* Reel Footer Watermark */}
                          <div className="absolute bottom-3 left-3 right-3 text-left">
                            <span className="text-[10px] font-mono uppercase text-[#D6B56D] font-bold block">
                              Al Arbaz Cruise
                            </span>
                            <p className="text-xs font-semibold text-white drop-shadow truncate">
                              Kemari Port Karachi
                            </p>
                          </div>
                        </div>
                      ) : (
                        <video
                          src={video.videoUrl}
                          controls
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover bg-black"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </div>

                  {/* Reel Metadata & Story */}
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <Film className="w-3.5 h-3.5 text-[#D6B56D]" />
                      <span className="text-[11px] uppercase font-mono tracking-widest text-[#D6B56D] font-bold">
                        OFFICIAL REEL 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#D6B56D] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4 line-clamp-3">
                      {video.description}
                    </p>

                    {/* Verified Highlight Bullets */}
                    {video.highlights && (
                      <ul className="space-y-1.5 mb-5 text-xs text-slate-200">
                        {video.highlights.map((point, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 justify-center sm:justify-start">
                            <span className="p-0.5 rounded-full bg-[#D6B56D]/20 text-[#D6B56D] shrink-0">
                              <Check className="w-3 h-3" />
                            </span>
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Compact Single Booking Button */}
                <div className="pt-4 border-t border-slate-800/80 flex justify-center sm:justify-start">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
                      `Assalamualaikum Al Arbaz Cruise! I watched Reel 0${idx + 1} (${video.title}) and would like to book seats for an upcoming weekend trip.`
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
