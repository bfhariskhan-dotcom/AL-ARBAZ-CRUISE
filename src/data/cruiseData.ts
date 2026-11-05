import {
  HeroSlide,
  CruisePackage,
  ExperienceFeature,
  MenuItem,
  GalleryItem,
  VideoItem,
} from '../types/cruise';

export const BRAND_INFO = {
  name: 'AL ARBAZ CRUISE',
  tagline: 'Make Your Weekends Unforgettable!',
  description: 'Luxury Cruise Tour and Trips Since 2013.',
  foundedYear: '2013',
  location: 'Kemari Port, Karachi, Pakistan',
  locationDetails: 'Gate 2, Kemari Harbour Terminal, Karachi',
  email: 'alarbazcruise.best@gmail.com',
  phoneDisplay: '0309-3611116',
  phoneInternational: '+923093611116',
  whatsappNumberRaw: '923093611116',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61578834463306',
  instagramUrl: 'https://www.instagram.com/al_arbaz_cruise/',
  logoUrl: 'https://i.postimg.cc/zBxtgj5N/Al-Arbaz-Luxury-Cruise-Logo.png',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Kemari+Port+Karachi+Pakistan',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.225574341905!2d66.97451241151608!3d24.819192931189445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dcd87b4ee07%3A0xe96cbb24294d12eb!2sKemari%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1709600000000!5m2!1sen!2s',
};

// High-fidelity image assets generated for Al Arbaz Cruise
export const CRUISE_IMAGES = {
  heroSunset: '/src/assets/images/hero_cruise_sunset_1793864382496.jpg',
  heroDeck: '/src/assets/images/hero_cruise_deck_1793864383894.jpg',
  diningBuffet: '/src/assets/images/dining_buffet_spread_1793864384357.jpg',
  fishingSunset: '/src/assets/images/fishing_sunset_moment_1793864385381.jpg',
  nightLights: '/src/assets/images/cruise_night_lights_1793864385426.jpg',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tagline: 'PREMIUM LUXURY HOSPITALITY',
    heading: 'AL ARBAZ CRUISE',
    subheading: 'Make Your Weekends Unforgettable!',
    description: 'Discover an unforgettable luxury cruise experience with your family and friends at Kemari Port, Karachi. Sail the Arabian Sea in comfort with live dining, music, and sunset views.',
    ctaText: 'View Packages',
    ctaTarget: '#packages',
    image: CRUISE_IMAGES.heroSunset,
  },
  {
    id: 2,
    tagline: 'ARABIAN SEA EXPEDITION',
    heading: 'EXPERIENCE THE BEAUTY OF THE SEA',
    description: 'Enjoy spectacular ocean views, delicious dining, fishing, music, and beautiful sunset moments aboard our luxury passenger vessels designed for comfort and celebration.',
    ctaText: 'View Full',
    ctaTarget: '#experience',
    image: CRUISE_IMAGES.heroDeck,
  },
  {
    id: 3,
    tagline: 'WEEKEND LUXURY ESCAPE',
    heading: 'YOUR PERFECT WEEKEND ESCAPE',
    description: 'Create unforgettable memories aboard Al Arbaz Cruise with your loved ones. Serving families, corporate groups, and private charters since 2013.',
    ctaText: 'Booking',
    ctaTarget: '#booking',
    image: CRUISE_IMAGES.nightLights,
  },
];

export const FEATURED_PACKAGE: CruisePackage = {
  id: 'weekend-social-cruise',
  name: 'WEEKEND SOCIAL CRUISE PACKAGE',
  tagline: 'Our Most Popular Weekend Gathering',
  description: 'Looking for a perfect weekend getaway with your family and friends? Enjoy an unforgettable experience with AL ARBAZ Cruise featuring cruising, gourmet dining, fishing, and sunset splendor.',
  duration: '03 Hours',
  location: 'Kemari Port, Karachi',
  capacity: '30–60 Persons',
  adultPrice: 5999,
  kidsPrice: 2999,
  underFourPrice: 'FREE',
  schedule: 'Saturday & Sunday Evenings (Sunset Cruise)',
  image: CRUISE_IMAGES.heroSunset,
  inclusions: [
    '03-Hour Scenic Cruise on Arabian Sea',
    'Lavish Hi-Tea & Welcome Drinks',
    'Gourmet Multi-Course Pakistani Buffet Dinner',
    'Complimentary Fishing Equipment & Bait Assistance',
    'On-board Music System & Family Entertainment',
    'Open-Deck Panoramic Sunset Observation',
    'Full Maritime Safety Jackets & Trained Crew Assistance',
    'Dedicated Family & Group Seating Areas',
  ],
};

export const EXPERIENCE_FEATURES: ExperienceFeature[] = [
  {
    id: 'cruise-ride',
    number: '01',
    title: 'CRUISE RIDE',
    shortDesc: 'Enjoy a relaxing and memorable cruise journey across the beautiful sea.',
    fullDesc: 'Glise smoothly through the tranquil waters of Karachi harbor into the Arabian Sea. Feel the refreshing sea breeze, take in coastal sights, and relax with your family and friends on our spacious passenger decks.',
    iconName: 'Ship',
    image: CRUISE_IMAGES.heroDeck,
    highlights: ['Spacious upper observation deck', 'Smooth sailing in Arabian Sea', 'Scenic views of Kemari harbor', 'Comfortable cushioned lounge seating'],
  },
  {
    id: 'live-food',
    number: '02',
    title: 'LIVE FOOD & DINING',
    shortDesc: 'Enjoy delicious food and refreshments during your cruise experience.',
    fullDesc: 'Savor an exceptional culinary voyage prepared fresh for our guests. From welcoming Hi-Tea refreshments to an authentic multi-dish Pakistani buffet including Chicken Biryani, sizzling Foil Tikka, Karahi, and traditional desserts.',
    iconName: 'UtensilsCrossed',
    image: CRUISE_IMAGES.diningBuffet,
    highlights: ['Welcome drinks & hot tea', 'Fresh hot Chicken Biryani', 'Sizzling foil tikka & fried fish', 'Traditional sweet Gulab Jamun'],
  },
  {
    id: 'fishing',
    number: '03',
    title: 'FISHING ACTIVITIES',
    shortDesc: 'Experience fishing activities and enjoy special moments at sea.',
    fullDesc: 'Try your hand at deep-water fishing with hands-on support from our experienced local maritime crew. Rods, tackle, and bait are provided for both beginners, children, and fishing enthusiasts.',
    iconName: 'Fish',
    image: CRUISE_IMAGES.fishingSunset,
    highlights: ['Complimentary fishing gear provided', 'Guided crew assistance for beginners', 'Exciting activity for children & adults', 'Memorable photo opportunities'],
  },
  {
    id: 'music',
    number: '04',
    title: 'MUSIC & ENTERTAINMENT',
    shortDesc: 'Enjoy music and create unforgettable memories with your family and friends.',
    fullDesc: 'Enhance your voyage with curated melodic tunes and sound entertainment. Whether celebrating a birthday, anniversary, or enjoying quality weekend time, our sound system sets the perfect festive backdrop.',
    iconName: 'Music',
    image: CRUISE_IMAGES.nightLights,
    highlights: ['Premium marine sound system', 'Family-friendly celebration atmosphere', 'Dedicated celebration dance space', 'Custom playlist support for private groups'],
  },
  {
    id: 'sunset-view',
    number: '05',
    title: 'SUNSET VIEW',
    shortDesc: 'Witness beautiful sunset views over the Arabian Sea.',
    fullDesc: 'Watch the sun descend into the Arabian Sea horizon, painting the sky in deep shades of gold, amber, and violet. Unmatched backdrop for photography and tranquil family contemplation.',
    iconName: 'Sunset',
    image: CRUISE_IMAGES.heroSunset,
    highlights: ['Golden hour photography opportunities', 'Unobstructed 360-degree horizon', 'Magical dusk skyline reflection', 'Tranquil sea breeze at twilight'],
  },
];

export const HI_TEA_MENU: MenuItem[] = [
  { name: 'Welcome Drinks', description: 'Chilled refreshing seasonal fruit mocktail upon boarding', tag: 'Chilled' },
  { name: 'Cheese Roll', description: 'Golden crispy pastry rolls stuffed with savory spiced melted cheese', tag: 'Warm & Crispy' },
  { name: 'French Fries', description: 'Crisp hand-cut potato fries served with spiced dip sauces', tag: 'Fresh Fried' },
  { name: 'Tea (Doodh Patti / Cardamom Tea)', description: 'Traditional aromatic spiced Pakistani milk tea brewed to perfection', tag: 'Freshly Brewed' },
];

export const BUFFET_MENU: MenuItem[] = [
  { name: 'Chicken Biryani', category: 'Main Course', description: 'Aromatic basmati rice cooked with tender marinated chicken and special spices', tag: 'House Special' },
  { name: 'Makhni Handi', category: 'Main Course', description: 'Rich boneless chicken cooked in butter, cream, and gentle mild spices', tag: 'Chef Choice' },
  { name: 'Chicken Karahi', category: 'Main Course', description: 'Traditional Karachi style wok-cooked chicken with fresh tomatoes, ginger, and green chilies', tag: 'Signature' },
  { name: 'Fish Fry', category: 'Seafood', description: 'Fresh Arabian Sea fish fillets marinated in spicy batter and fried golden crisp', tag: 'Fresh Catch' },
  { name: 'Foil Tikka', category: 'Barbecue', description: 'Juicy barbecue spiced chicken chunks wrapped and steamed in foil to lock in tender smoky juices', tag: 'Live Grill' },
  { name: 'Raita', category: 'Sides', description: 'Chilled seasoned yogurt with roasted cumin and fresh mint leaves', tag: 'Cooling' },
  { name: 'Fresh Salad', category: 'Sides', description: 'Crisp cucumbers, tomatoes, onions, and lemon wedges', tag: 'Garden Fresh' },
  { name: 'Roti / Taftan', category: 'Breads', description: 'Fresh warm tandoor breads and saffron-brushed sweet soft taftan', tag: 'Oven Warm' },
  { name: 'Gulab Jamun', category: 'Dessert', description: 'Traditional soft milk dumplings soaked in warm rosewater and cardamom syrup', tag: 'Sweet Classic' },
  { name: 'Soft Drinks', category: 'Beverages', description: 'Assorted chilled carbonated beverages and colas', tag: 'Chilled' },
  { name: 'Mineral Water', category: 'Beverages', description: 'Pure bottled drinking water provided throughout the journey', tag: 'Unlimited' },
];

export const VIDEO_SHOWCASE: VideoItem[] = [
  {
    id: 'streamable-video',
    title: 'Al Arbaz Cruise Video Experience',
    platform: 'Streamable',
    embedUrl: 'https://streamable.com/e/ezp0sq?autoplay=0&muted=1',
    directUrl: 'https://streamable.com/ezp0sq',
    description: 'Experience the real sights, open sea breeze, guest enjoyment, and evening vibes on board Al Arbaz Cruise at Kemari.',
    thumbnail: CRUISE_IMAGES.heroSunset,
  },
  {
    id: 'facebook-reel',
    title: 'Official Reel – Arabian Sea Journey',
    platform: 'Facebook',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1162064573173241%2F&show_text=false&t=0',
    directUrl: 'https://www.facebook.com/reel/1162064573173241/',
    description: 'Watch our featured Facebook Reel capturing sunset moments, dining, and guests celebrating special occasions.',
    thumbnail: CRUISE_IMAGES.nightLights,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Sunset Cruise Over Arabian Sea',
    category: 'Sunset Views',
    image: CRUISE_IMAGES.heroSunset,
    caption: 'Breathtaking sunset hues casting golden light across the waters of Kemari.',
  },
  {
    id: 'g-2',
    title: 'Observation Upper Deck Seating',
    category: 'Luxury Cruise',
    image: CRUISE_IMAGES.heroDeck,
    caption: 'Comfortable, shaded open-air seating for families and groups.',
  },
  {
    id: 'g-3',
    title: 'Authentic Pakistani Cruise Buffet',
    category: 'Food & Dining',
    image: CRUISE_IMAGES.diningBuffet,
    caption: 'Fresh Chicken Biryani, Foil Tikka, Karahi, Fish Fry, and hot tea.',
  },
  {
    id: 'g-4',
    title: 'Family Fishing Adventure at Sea',
    category: 'Fishing Activities',
    image: CRUISE_IMAGES.fishingSunset,
    caption: 'Children and adults experiencing leisure fishing with crew assistance.',
  },
  {
    id: 'g-5',
    title: 'Illuminated Evening Cruise Celebration',
    category: 'Cruise Celebrations',
    image: CRUISE_IMAGES.nightLights,
    caption: 'Fairy lights and vibrant night cruise ambiance on Karachi waters.',
  },
  {
    id: 'g-6',
    title: 'Family & Friends Gathering at Sea',
    category: 'Family & Friends',
    image: CRUISE_IMAGES.heroDeck,
    caption: 'Quality weekend moments and laughter with loved ones.',
  },
  {
    id: 'g-7',
    title: 'Luxury Yacht Charter Experience',
    category: 'Yacht Experience',
    image: CRUISE_IMAGES.heroSunset,
    caption: 'Spacious vessel layout designed for memorable maritime events.',
  },
  {
    id: 'g-8',
    title: 'Karachi Kemari Coastal Vistas',
    category: 'Sunset Views',
    image: CRUISE_IMAGES.fishingSunset,
    caption: 'Golden reflections over Karachi port coastline as dusk descends.',
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Serving Customers Since 2013',
    description: 'Over a decade of trusted experience hosting families, friends, and corporate gatherings on the waters of Karachi.',
  },
  {
    number: '02',
    title: 'Memorable Family Experiences',
    description: 'Safe, private, and hospitable environment specially curated for families, children, and elders.',
  },
  {
    number: '03',
    title: 'Delicious Hi-Tea and Buffet',
    description: 'Freshly prepared Pakistani delicacies, barbecue items, biryani, and warm tea included in your package.',
  },
  {
    number: '04',
    title: 'Fishing and Entertainment',
    description: 'Hands-on fishing with equipment provided plus on-board music system for cheerful celebrations.',
  },
  {
    number: '05',
    title: 'Beautiful Sunset Views',
    description: 'Front-row seats to spectacular Arabian Sea sunsets away from the bustling city noise.',
  },
  {
    number: '06',
    title: 'Group Cruise Experience',
    description: 'Ideal 30 to 60 person group capacity allowing comfortable socializing, dining, and scenic sightseeing.',
  },
  {
    number: '07',
    title: 'Convenient WhatsApp Booking',
    description: 'Instant reservation inquiry, transparent per-person pricing, and prompt human customer support.',
  },
];

export const FAQS = [
  {
    question: 'Where is the boarding point for Al Arbaz Cruise?',
    answer: 'All cruises depart from Kemari Port, Karachi. Our team guides guests directly upon arrival at the Kemari harbour terminal.',
  },
  {
    question: 'What is included in the Weekend Social Cruise Package?',
    answer: 'The package covers a 3-hour cruise ride, welcome drinks, hi-tea snacks, a multi-course buffet dinner (Chicken Biryani, Karahi, Foil Tikka, Fish Fry, Gulab Jamun), fishing gear, on-board music, and safety jackets.',
  },
  {
    question: 'Is the cruise suitable for families and children?',
    answer: 'Yes! Al Arbaz Cruise is designed with family privacy and comfort as top priority. Kids under 4 join for free, and kids 4–12 enjoy a 50% discounted ticket at Rs. 2,999.',
  },
  {
    question: 'How do I confirm my booking?',
    answer: 'Fill out our booking inquiry form or click any WhatsApp button on this site. Your inquiry is directly sent to our official WhatsApp (+923093611116) with all details for immediate date confirmation.',
  },
];
