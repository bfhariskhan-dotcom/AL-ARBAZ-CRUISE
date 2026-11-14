export type ActivePage = 'home' | 'about' | 'experience' | 'packages' | 'gallery' | 'contact';

export interface HeroSlide {
  id: number;
  tagline: string;
  heading: string;
  subheading?: string;
  description: string;
  ctaText: string;
  ctaTarget: string;
  image: string;
}

export interface CruisePackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  location: string;
  capacity: string;
  adultPrice: number;
  kidsPrice: number;
  underFourPrice: string;
  inclusions: string[];
  schedule: string;
  image: string;
  badge?: string;
}

export interface ExperienceFeature {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface MenuItem {
  name: string;
  category?: string;
  description?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Luxury Cruise' | 'Yacht Experience' | 'Family & Friends' | 'Food & Dining' | 'Fishing Activities' | 'Sunset Views' | 'Cruise Celebrations';
  image: string;
  caption: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  thumbnail: string;
  highlights?: string[];
}

export interface BookingFormData {
  fullName: string;
  whatsappNumber: string;
  selectedPackage: string;
  adultsCount: number;
  kidsCount: number;
  preferredDate: string;
  timeSlot: string;
  specialRequirements: string;
}

export interface HourlyRentalRate {
  hours: number;
  durationLabel: string;
  price: number;
  priceFormatted: string;
  badge?: string;
}

