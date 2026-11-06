import HeroSlider from '../components/HeroSlider';
import LuxuryMarquee from '../components/LuxuryMarquee';
import LuxuryCouplePackage from '../components/LuxuryCouplePackage';
import FeaturedPackage from '../components/FeaturedPackage';
import ExperienceFeatures from '../components/ExperienceFeatures';
import DiningExperience from '../components/DiningExperience';
import VideoSection from '../components/VideoSection';
import WhyChooseUs from '../components/WhyChooseUs';
import BookingSection from '../components/BookingSection';
import { ActivePage } from '../types/cruise';

interface HomePageProps {
  onOpenBookingModal: (pkgName?: string) => void;
  onNavigate: (page: ActivePage) => void;
}

export default function HomePage({ onOpenBookingModal, onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Cinematic Hero Slider */}
      <HeroSlider onOpenBookingModal={onOpenBookingModal} onNavigate={onNavigate} />

      {/* Moving Luxury Marquee Ticker */}
      <LuxuryMarquee />

      {/* Luxury Couple Package for 02 Guests on Private Cruise (Right after Banner) */}
      <LuxuryCouplePackage onOpenBookingModal={onOpenBookingModal} />

      {/* Featured Weekend Social Cruise Package with Fare Calculator */}
      <FeaturedPackage onOpenBookingModal={onOpenBookingModal} />

      {/* Five Signature Cruise Experiences */}
      <ExperienceFeatures onOpenBookingModal={onOpenBookingModal} />

      {/* Food & Dining Showcase: Hi-Tea & Grand Buffet */}
      <DiningExperience onOpenBookingModal={onOpenBookingModal} />

      {/* Real Cruise Video Experience */}
      <VideoSection />

      {/* Why Choose Al Arbaz Cruise */}
      <WhyChooseUs />

      {/* Quick Booking Reservation Form */}
      <BookingSection />
    </div>
  );
}
