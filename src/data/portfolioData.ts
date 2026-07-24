import { ServiceItem, PortfolioItem, PricingPackage, ProcessStep, StatItem } from '../types';
import founderImg from '../assets/images/founder_portrait_1784929267161.jpg';
import heroBgImg from '../assets/images/hero_bg_1784929281558.jpg';

export { founderImg, heroBgImg };

export const BRAND_INFO = {
  name: "Adesola Creatives",
  founder: "Adesola Oluwatosin Samuel",
  title: "Multi-Disciplinary Creative Director, Mobile Cinematographer & Media Personality",
  tagline: "Your Story. Our Lens. Bold Content That Converts.",
  bio: `I am Adesola Oluwatosin Samuel, a Lagos-based creative director, mobile cinematographer, photographer, brand designer, social media strategist, and media personality. Guided by pure passion for visual storytelling and artistic direction, I collaborate with forward-thinking brands and visionary entrepreneurs to craft content that commands attention and drives real growth.`,
  mission: "To empower visionary brands, creators, and companies globally with world-class, high-converting visual media and social media growth strategies.",
  location: "Lagos, Nigeria (Available Worldwide)",
  phones: ["09074018013", "08059122946"],
  whatsappPrimary: "2349074018013",
  whatsappSecondary: "2348059122946",
  email: "samueladesola95@gmail.com",
  instagram: "@adesolacreatives",
  instagramUrl: "https://instagram.com/adesolacreatives",
  tiktok: "@adesola_creatives",
  tiktokUrl: "https://www.tiktok.com/@adesola_creatives?_r=1&_t=ZS-98JJNIrpemS",
  linkedInUrl: "#",
};

export const TRUST_STATS: StatItem[] = [
  { value: "150+", label: "Projects Delivered", description: "Mobile video shoots, photography & brand campaigns delivered worldwide" },
  { value: "50+", label: "Global Clients", description: "Visionary brands, event owners, creators & startups" },
  { value: "3.5M+", label: "Organic Views", description: "Combined organic view count generated on Reels & TikTok" },
  { value: "99%", label: "On-Time Delivery", description: "Guaranteed express turnaround for tight campaign & event schedules" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "mobile-cinematography",
    title: "Mobile Cinematography",
    category: "video",
    iconName: "Video",
    shortDesc: "High-impact, 4K mobile video production engineered for Instagram Reels, TikTok, YouTube Shorts, and brand commercials.",
    fullDesc: "We bring cinematic flair to high-end mobile video production. Using advanced gimbals, specialized lenses, wireless microphones, and portable lighting rigs, we shoot crisp 4K vertical and horizontal video content that stops the scroll.",
    features: [
      "4K Vertical & Horizontal Video Capture",
      "Dynamic Camera Movement & Stabilization",
      "Professional On-Location Mobile Lighting & Audio",
      "Fast-Cut Color Graded Reels & TikTok Edits",
      "Trend-Based Sound & Viral Pacing Strategy"
    ],
    startingPrice: "Negotiable / Contact for Quote",
    deliverables: "Color-Graded Reels/TikToks + Raw B-Roll Footage"
  },
  {
    id: "branding-graphic-design",
    title: "Branding & Graphic Design",
    category: "design",
    iconName: "Palette",
    shortDesc: "Bold visual identity design, custom logo marks, promotional banners, event flyers, and high-conversion social media carousels.",
    fullDesc: "Stand out in a noisy marketplace. We craft memorable brand identities, custom typography, promotional campaign flyers, brand guideline decks, and high-converting marketing graphics tailored to your brand's unique ethos.",
    features: [
      "Brand Identity & Logo Design Packages",
      "High-Converting Social Media Flyers & Banners",
      "Multi-Page Instagram Carousel Templates",
      "Billboard, Merchandise & Event Backdrop Graphics",
      "Source Files Included (AI/PSD/PDF)"
    ],
    startingPrice: "Negotiable / Contact for Quote",
    deliverables: "Vector Logos, Brand Guideline Sheet, Custom Social Graphics"
  },
  {
    id: "creative-mobile-photography",
    title: "Creative Mobile Photography",
    category: "photography",
    iconName: "Camera",
    shortDesc: "Sharp, high-resolution mobile photography for events, personal branding, portraits, and commercial product showcases with professional retouching.",
    fullDesc: "Pictures speak louder when framed with intent and creativity. We execute high-end mobile photography for vibrant event coverage, executive personal branding, and product showcases, polished with professional high-grade skin retouching and color grading.",
    features: [
      "High-Resolution Mobile Event & Lifestyle Coverage",
      "Personal Branding & Portrait Mobile Shoots",
      "Commercial Product & E-Commerce Mobile Photography",
      "Professional High-End Skin Retouching & Color Grading",
      "Web-Optimized & Print-Ready High-Res Exports"
    ],
    startingPrice: "Negotiable / Contact for Quote",
    deliverables: "Edited High-Res Retouched Photos + Online Private Gallery"
  },
  {
    id: "social-media-management",
    title: "Social Media Growth & Management",
    category: "social",
    iconName: "TrendingUp",
    shortDesc: "End-to-end growth strategy, content calendar creation, video publishing, community engagement, and organic page scaling.",
    fullDesc: "Take the guesswork out of social growth. We manage your Instagram and TikTok channels — producing mobile content, crafting compelling captions, scheduling posts, monitoring analytics, and engaging your audience worldwide.",
    features: [
      "Monthly Content Calendar & Strategy",
      "On-Site Mobile Content Shooting Days",
      "Caption Writing & Strategic Hashtag Curation",
      "Daily Audience Engagement & Moderation",
      "Monthly Performance & Analytics Report"
    ],
    startingPrice: "Negotiable / Contact for Quote",
    deliverables: "Full Monthly Management + Mobile Videos/Reels + Analytics Deck"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Lagos Fashion Week High-Fashion Reel",
    client: "StyleNaija Magazine",
    category: "video",
    categoryLabel: "Mobile Cinematography",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Dynamic mobile video shoot capturing runway highlights, backstage model prep, and street style aesthetics for Lagos Fashion Week.",
    deliverables: ["1x 60s Main Fashion Reel", "3x 15s Story Teasers", "Raw B-Roll Reel"],
    date: "June 2026"
  },
  {
    id: "p2",
    title: "Eko Tech Founder Personal Branding Shoot",
    client: "Tobi Adebayo (Fintech Leader)",
    category: "photography",
    categoryLabel: "Mobile Photography",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    description: "Executive portraiture shoot in Ikoyi, Lagos, blending corporate authority with approachable style, enhanced with professional skin retouching.",
    deliverables: ["25 Professionally Retouched Portraits", "High-Res Print & Web Formats"],
    date: "May 2026"
  },
  {
    id: "p3",
    title: "Naija Brand Identity & Social Campaign",
    client: "Urban Grind Cafe",
    category: "design",
    categoryLabel: "Branding & Design",
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    description: "Complete visual redesign including brand guidelines, physical menu cards, promotional instagram carousels, and opening event launch flyers.",
    deliverables: ["Logo Refresh", "Brand Guidelines", "10 Social Media Graphics"],
    date: "April 2026"
  },
  {
    id: "p4",
    title: "Paystack Creator Series 30-Day Reels Campaign",
    client: "Paystack Nigeria",
    category: "social",
    categoryLabel: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Comprehensive social media content creation and mobile video production targeting African creators and entrepreneurs.",
    deliverables: ["12 Mobile Video Reels", "30 Feed Posts & Captions", "Community Growth Strategy"],
    date: "March 2026"
  },
  {
    id: "p5",
    title: "Kuda Bank Community Spotlight Reel",
    client: "Kuda Microfinance Bank",
    category: "video",
    categoryLabel: "Mobile Cinematography",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "High-energy 4K mobile cinematography reel spotlighting young Nigerian creatives and tech entrepreneurs for a national digital campaign.",
    deliverables: ["4K Mobile Commercial Reel", "Social Media Teasers", "Raw B-Roll"],
    date: "February 2026"
  },
  {
    id: "p6",
    title: "Eko Music Festival Live Concert Coverage",
    client: "Eko Music Festival",
    category: "photography",
    categoryLabel: "Mobile Photography",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    description: "High-energy live event mobile photography capturing performer energy, crowd moments, and stage lighting, with express high-grade color grading.",
    deliverables: ["150 Professionally Color-Graded Photos", "Same-Night Press Kit Delivery"],
    date: "January 2026"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discovery & Strategy",
    subtitle: "Understanding Your Vision",
    description: "We start with a quick phone or WhatsApp consultation to map out your brand vision, target demographic, and exact visual aesthetic requirements.",
    details: ["Goal alignment call", "Audience & tone analysis", "Content moodboard approval"]
  },
  {
    stepNumber: "02",
    title: "Creative Concepting",
    subtitle: "Scripts, Angles & Plans",
    description: "I draft a tailored shoot outline, video scripts, shot lists, or branding concepts so you know exactly what to expect before production begins.",
    details: ["Scriptwriting & hook selection", "Shot list & location plan", "Props & wardrobe guidelines"]
  },
  {
    stepNumber: "03",
    title: "Production & Creation",
    subtitle: "Lights, Mobile Camera, Action",
    description: "Execution day! On-site 4K mobile video shooting, creative mobile photography, or brand graphic creation with artistic direction to capture your finest moments.",
    details: ["4K Mobile video setup", "Mobile lighting & wireless audio", "Real-time client playback preview"]
  },
  {
    stepNumber: "04",
    title: "Editing & Delivery",
    subtitle: "Polished Visuals That Convert",
    description: "Post-production magic. Professional skin retouching, color grading, sound design, motion graphics, and fast turnaround delivery ready to launch.",
    details: ["Professional retouching & color polish", "Revisions & client feedback", "Final high-res cloud transfer"]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Content Pack",
    pricingLabel: "Custom Quote / Negotiable",
    tagline: "Essential visual boost for brands and creators looking for high-quality mobile video and photos.",
    popular: false,
    bestFor: "Growing Brands & Creators",
    turnaround: "3 to 5 Days",
    features: [
      "1 On-site Mobile Shoot Session",
      "4 Color-Graded 4K Mobile Video Reels / TikToks",
      "10 Professionally Retouched High-Res Photos",
      "Custom Graphic Cover Frames",
      "Licensed Trending Audio Selection",
      "1 Round of Editing Revisions"
    ]
  },
  {
    id: "growth",
    name: "Growth Brand Pack",
    pricingLabel: "Custom Quote / Negotiable",
    tagline: "Our most popular package for active brands aiming to dominate social channels.",
    popular: true,
    bestFor: "Established Businesses & E-Commerce Brands",
    turnaround: "5 to 7 Days",
    features: [
      "Full On-Site Mobile Shoot Session",
      "8 Cinematic 4K Mobile Video Reels / TikToks",
      "25 Professionally Retouched High-Res Photos",
      "4 Custom Promotional / Event Banners",
      "Scriptwriting & Hook Strategy Included",
      "Raw B-Roll Video Access Provided",
      "2 Rounds of Revisions",
      "Direct WhatsApp Strategy Support"
    ]
  },
  {
    id: "premium",
    name: "Full Studio Retainer",
    pricingLabel: "Custom Quote / Negotiable",
    tagline: "Complete content production & full social media growth management.",
    popular: false,
    bestFor: "High-Growth Brands & Companies",
    turnaround: "Monthly Ongoing",
    features: [
      "Dedicated Shoot Days Per Month",
      "16 High-Converting Mobile Video Reels / TikToks",
      "50 Retouched Photos & Brand Assets",
      "10 Custom Graphic Banners & Identity Assets",
      "Full Instagram & TikTok Account Management",
      "Audience Engagement & Strategy Execution",
      "Monthly Analytics & Performance Insights",
      "Priority VIP Turnaround & Direct Phone Access"
    ]
  }
];

export const FAQS = [
  {
    q: "Why choose Creative Mobile Cinematography?",
    a: "Mobile cinematography delivers ultra-sharp 4K footage engineered specifically for modern mobile feeds (Instagram Reels, TikTok) with faster turnaround, authentic presence, and cinema-grade color grading!"
  },
  {
    q: "Are you available for projects outside of Lagos?",
    a: "Yes! While Adesola Creatives is based in Lagos, Nigeria, I travel for events, corporate shoots, and brand campaigns across Nigeria and international locations upon request."
  },
  {
    q: "How fast will I get my completed videos and photos?",
    a: "Standard turnaround time is 3 to 5 business days. Express 24-hour turnaround is also available for urgent event coverage and press announcements."
  },
  {
    q: "How do we discuss pricing and start working together?",
    a: "Simple! Click any 'Book a Session' or 'Chat on WhatsApp' button to share your project details. Every project quote is customizable and negotiable to fit your exact campaign goals."
  }
];
