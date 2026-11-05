import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cruiseData';
import { GalleryItem } from '../types/cruise';

type GalleryCategory =
  | 'All'
  | 'Luxury Cruise'
  | 'Yacht Experience'
  | 'Family & Friends'
  | 'Food & Dining'
  | 'Fishing Activities'
  | 'Sunset Views'
  | 'Cruise Celebrations';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    'All',
    'Luxury Cruise',
    'Yacht Experience',
    'Family & Friends',
    'Food & Dining',
    'Fishing Activities',
    'Sunset Views',
    'Cruise Celebrations',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(idx !== -1 ? idx : 0);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [activeLightboxIndex, filteredItems.length]);

  const prevLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, nextLightbox, prevLightbox]);

  const currentLightboxItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-to-b from-[#030C22] via-[#06183B] to-[#020716] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-center mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              VISUAL PORTFOLIOS
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            PREMIUM IMAGE GALLERY
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Take a visual tour through memorable cruise journeys, gourmet dining spreads,
            family fishing moments, and golden sunsets along Kemari Port.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D6B56D] text-[#061B49] font-bold shadow-md'
                  : 'bg-[#030B1C] text-slate-300 hover:text-white hover:bg-[#073B82] border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-xl overflow-hidden bg-[#030B1C] border border-[#073B82]/60 cursor-pointer shadow-lg hover:shadow-cyan-950/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E26] via-[#040E26]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#D6B56D] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-semibold text-white group-hover:text-[#D6B56D] transition-colors mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Box */}
          <div
            className="max-w-4xl w-full bg-[#040E26] border border-[#073B82] rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#030B1C] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#D6B56D] font-semibold">
                    {currentLightboxItem.category}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400 tabular-nums">
                    Image {(activeLightboxIndex ?? 0) + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {currentLightboxItem.caption}
                </p>
              </div>

              <span className="text-[11px] text-slate-400 self-start sm:self-auto">
                Use ← / → keys or swipe
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
