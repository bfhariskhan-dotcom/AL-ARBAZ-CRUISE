import PageHeader from '../components/PageHeader';
import LuxuryMarquee from '../components/LuxuryMarquee';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import { CRUISE_IMAGES, BRAND_INFO } from '../data/cruiseData';
import { WhatsAppIcon } from '../components/SocialIcons';

interface GalleryPageProps {
  onOpenBookingModal: (pkgName?: string) => void;
}

export default function GalleryPage({ onOpenBookingModal }: GalleryPageProps) {
  return (
    <div>
      <PageHeader
        title="GALLERY & VIDEO SHOWCASE"
        tagline="Visual Chronicle"
        subtitle="Experience genuine moments at sea aboard Al Arbaz Cruise through our authentic videos and photography collection."
        bgImage={CRUISE_IMAGES.nightLights}
      />

      <LuxuryMarquee />

      {/* Official Video Showcase: 3 Authentic MP4 Cruise Reels */}
      <VideoSection />

      {/* Premium Image Gallery with Lightbox */}
      <GallerySection />

      {/* Booking Prompt */}
      <section className="py-16 bg-[#030B1C] border-t border-[#073B82]/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to Be Part of the Next Voyage?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Reserve your seats for our upcoming weekend sunset cruise. Hi-Tea, Grand Buffet, fishing, and sunset views are all included.
          </p>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
              'Assalamualaikum Al Arbaz Cruise, I would like to book a weekend sunset cruise.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
            Booking WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
