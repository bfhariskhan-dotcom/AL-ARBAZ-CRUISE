import { useState, useEffect, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { HERO_SLIDES, BRAND_INFO } from '../data/cruiseData';
import { ActivePage } from '../types/cruise';
import { WhatsAppIcon } from './SocialIcons';

interface HeroSliderProps {
  onOpenBookingModal: (pkgName?: string) => void;
  onNavigate?: (page: ActivePage) => void;
}

export default function HeroSlider({ onOpenBookingModal, onNavigate }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance slides every 6.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleCtaClick = (target: string) => {
    if (onNavigate) {
      if (target.includes('packages')) onNavigate('packages');
      else if (target.includes('experience')) onNavigate('experience');
      else if (target.includes('booking') || target.includes('contact')) onNavigate('contact');
      else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      aria-label="Cinematic Hero Showcase"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#040E26]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Cross-Fade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic Gradient Scrim: Deep marine overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040E26] via-[#040E26]/60 to-[#040E26]/40" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#040E26]/30 to-[#040E26]/80" />
          </div>
        );
      })}

      {/* Hero Content Container - Generous Bottom Padding to separate from dots & scroll */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pb-32 text-center flex flex-col items-center">
        {/* Single Centered Subtitle (No side-by-side headings, no small icon as requested) */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#D6B56D] uppercase">
            {activeSlideData.tagline}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight max-w-4xl text-balance">
          {activeSlideData.heading}
        </h1>

        {/* Subheading if provided */}
        {activeSlideData.subheading && (
          <p className="font-serif italic text-xl sm:text-2xl text-[#D6B56D] mb-4 font-normal">
            "{activeSlideData.subheading}"
          </p>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-8">
          {activeSlideData.description}
        </p>

        {/* CTA Button Group - Compact, Centered on Mobile */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleCtaClick(activeSlideData.ctaTarget)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] via-[#F3E5C8] to-[#D6B56D] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            {activeSlideData.ctaText}
          </button>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
              'Assalamualaikum, I would like to inquire about booking a luxury cruise package with Al Arbaz Cruise.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#073B82]/80 hover:bg-[#073B82] border border-[#087CC5]/60 hover:border-[#D6B56D] backdrop-blur-sm transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 fill-currentColor text-[#D6B56D]" />
            Booking WhatsApp
          </a>
        </div>

        {/* Verified Quick Highlights - Clean and Centered */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-300">
          <span>Since 2013</span>
          <span className="text-[#D6B56D]">·</span>
          <span>3-Hour Ocean Tour</span>
          <span className="text-[#D6B56D]">·</span>
          <span>Full Hi-Tea & Buffet</span>
          <span className="text-[#D6B56D]">·</span>
          <span>Live Fishing & Sunset</span>
        </div>
      </div>

      {/* Slider Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#040E26]/75 hover:bg-[#073B82] text-white border border-slate-700 hover:border-[#D6B56D] backdrop-blur-md transition-all duration-200 focus:outline-none cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#040E26]/75 hover:bg-[#073B82] text-white border border-slate-700 hover:border-[#D6B56D] backdrop-blur-md transition-all duration-200 focus:outline-none cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination Indicators - Placed in Bottom-Right Corner as requested to avoid colliding with scroll */}
      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-8 z-30 flex items-center gap-2 bg-[#040E26]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
              index === currentSlide ? 'w-6 bg-[#D6B56D]' : 'w-2 bg-slate-500/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator - Ample Spacing at bottom center */}
      <button
        type="button"
        onClick={() => handleCtaClick('#packages')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-slate-400 hover:text-[#D6B56D] transition-colors flex flex-col items-center gap-1 focus:outline-none animate-bounce cursor-pointer"
        aria-label="Scroll Down"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
}
