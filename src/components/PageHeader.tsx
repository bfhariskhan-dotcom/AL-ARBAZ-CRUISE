import { CRUISE_IMAGES } from '../data/cruiseData';

interface PageHeaderProps {
  title: string;
  tagline: string;
  subtitle: string;
  bgImage?: string;
}

export default function PageHeader({
  title,
  tagline,
  subtitle,
  bgImage = CRUISE_IMAGES.heroSunset,
}: PageHeaderProps) {
  return (
    <div className="relative py-20 lg:py-24 bg-gradient-to-b from-[#020716] via-[#05173A] to-[#030C22] overflow-hidden border-b border-[#073B82]/60">
      <img
        src={bgImage}
        alt={title}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020716] via-[#04122C]/85 to-[#020716]/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D6B56D]">
            {tagline}
          </span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
