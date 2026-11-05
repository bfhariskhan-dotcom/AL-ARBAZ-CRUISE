import PageHeader from '../components/PageHeader';
import LuxuryMarquee from '../components/LuxuryMarquee';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import { CRUISE_IMAGES } from '../data/cruiseData';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="CONTACT & RESERVATIONS"
        tagline="Reservations & Inquiries"
        subtitle="Reserve your cruise seats or contact our maritime team directly for custom charters and weekend schedules."
        bgImage={CRUISE_IMAGES.heroDeck}
      />

      <LuxuryMarquee />

      {/* Main Booking Form */}
      <BookingSection />

      {/* Contact Cards, Social Icons & Google Maps */}
      <ContactSection />

      {/* Passenger FAQs */}
      <FAQSection />
    </div>
  );
}
