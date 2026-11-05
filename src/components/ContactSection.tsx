import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/cruiseData';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function ContactSection() {
  const directWhatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    'Assalamualaikum Al Arbaz Cruise, I would like to get in touch regarding cruise timings and location.'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-[#020716] via-[#05173A] to-[#030C22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-center mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
              CONNECT & VISIT
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            CONTACT AL ARBAZ CRUISE
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            We are here to assist with your reservations, group inquiries, and weekend schedules.
            Reach out through WhatsApp, telephone, or visit us at Kemari Port.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#040E26] border border-[#073B82] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                AL ARBAZ CRUISE
              </h3>
              <p className="text-xs text-[#D6B56D] uppercase tracking-wider font-semibold">
                Luxury Cruise Tour and Trips Since 2013
              </p>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start gap-3.5 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-[#073B82]/40 text-[#D6B56D] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">
                      Departure & Boarding Location
                    </span>
                    <span className="text-sm font-medium text-white">
                      {BRAND_INFO.location}
                    </span>
                    <a
                      href={BRAND_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#D6B56D] hover:underline mt-1 block"
                    >
                      <span>Open Directions in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-[#073B82]/40 text-[#D6B56D] shrink-0 mt-0.5">
                    <WhatsAppIcon className="w-5 h-5 fill-[#D6B56D]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">
                      Official WhatsApp & Booking
                    </span>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-[#D6B56D] transition-colors tabular-nums"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Int'l: {BRAND_INFO.phoneInternational}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-[#073B82]/40 text-[#D6B56D] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-medium text-white hover:text-[#D6B56D] transition-colors break-all"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons (No phone number in button labels) */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-[#061B49] bg-gradient-to-r from-[#D6B56D] to-[#F3E5C8] hover:shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#061B49]" />
                  Booking WhatsApp
                </a>

                <a
                  href={`tel:${BRAND_INFO.phoneDisplay}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#073B82] hover:bg-[#087CC5] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D6B56D]" />
                  Call Desk
                </a>
              </div>
            </div>

            {/* Social Channels - ONLY PURE ICONS (No text names written as requested) */}
            <div className="p-5 rounded-xl bg-[#040E26] border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300">Official Social Channels:</span>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#073B82]/40 text-[#D6B56D] hover:text-white hover:bg-[#073B82] border border-[#073B82] transition-colors"
                  aria-label="Official Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#073B82]/40 text-[#D6B56D] hover:text-white hover:bg-[#073B82] border border-[#073B82] transition-colors"
                  aria-label="Official Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#073B82]/40 text-[#D6B56D] hover:text-white hover:bg-[#073B82] border border-[#073B82] transition-colors"
                  aria-label="Official WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-currentColor" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 bg-[#040E26] border border-[#073B82] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between min-h-[420px]">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#030B1C]">
              <div>
                <h4 className="font-cinzel text-base font-bold text-white">
                  Kemari Port, Karachi
                </h4>
                <p className="text-xs text-slate-400">
                  Boarding Point for All Al Arbaz Cruise Departures
                </p>
              </div>
              <a
                href={BRAND_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#073B82] text-xs font-semibold text-white hover:bg-[#087CC5] transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[350px] w-full bg-slate-900">
              <iframe
                src={BRAND_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Kemari Port Karachi"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
