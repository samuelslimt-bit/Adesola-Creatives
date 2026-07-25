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
  email: "ade.adesola023@gmail.com",
  instagram: "@adesola_creatives",
  instagramUrl: "https://instagram.com/adesola_creatives",
  instagramBackup: "@adesolacreatives",
  instagramBackupUrl: "https://instagram.com/adesolacreatives",
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
    imageUrl: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=800&q=80",
    shortDesc: "High-impact, 4K mobile video production engineered for Instagram Reels, TikTok, YouTube Shorts, and brand commercials.",
    fullDesc: "We bring cinematic flair to high-end mobile video production. Using advanced gimbals, specialized lenses, wireless microphones, and portable lighting rigs, we shoot crisp 4K vertical and horizontal video content that stops the scroll.",
    features: [
      "4K Vertical & Horizontal Video Capture",
      "Dynamic Camera Movement & Stabilization",
      "Professional On-Location Mobile Lighting & Audio",
      "Fast-Cut Color Graded Reels & TikTok Edits",
      "Trend-Based Sound & Viral Pacing Strategy"
    ],
    startingPrice: "Tailored Pricing",
    deliverables: "Color-Graded Reels/TikToks + Raw B-Roll Footage"
  },
  {
    id: "branding-graphic-design",
    title: "Branding & Graphic Design",
    category: "design",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Bold visual identity design, custom logo marks, promotional banners, event flyers, and high-conversion social media carousels.",
    fullDesc: "Stand out in a noisy marketplace. We craft memorable brand identities, custom typography, promotional campaign flyers, brand guideline decks, and high-converting marketing graphics tailored to your brand's unique ethos.",
    features: [
      "Brand Identity & Logo Design Packages",
      "High-Converting Social Media Flyers & Banners",
      "Multi-Page Instagram Carousel Templates",
      "Billboard, Merchandise & Event Backdrop Graphics",
      "Source Files Included (AI/PSD/PDF)"
    ],
    startingPrice: "Tailored Pricing",
    deliverables: "Vector Logos, Brand Guideline Sheet, Custom Social Graphics"
  },
  {
    id: "creative-mobile-photography",
    title: "Creative Mobile Photography",
    category: "photography",
    iconName: "Camera",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Sharp, high-resolution mobile photography for events, personal branding, portraits, and commercial product showcases with professional retouching.",
    fullDesc: "Pictures speak louder when framed with intent and creativity. We execute high-end mobile photography for vibrant event coverage, executive personal branding, and product showcases, polished with professional high-grade skin retouching and color grading.",
    features: [
      "High-Resolution Mobile Event & Lifestyle Coverage",
      "Personal Branding & Portrait Mobile Shoots",
      "Commercial Product & E-Commerce Mobile Photography",
      "Professional High-End Skin Retouching & Color Grading",
      "Web-Optimized & Print-Ready High-Res Exports"
    ],
    startingPrice: "Tailored Pricing",
    deliverables: "Edited High-Res Retouched Photos + Online Private Gallery"
  },
  {
    id: "social-media-management",
    title: "Social Media Growth & Management",
    category: "social",
    iconName: "TrendingUp",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    shortDesc: "End-to-end growth strategy, content calendar creation, video publishing, community engagement, and organic page scaling.",
    fullDesc: "Take the guesswork out of social growth. We manage your Instagram and TikTok channels — producing mobile content, crafting compelling captions, scheduling posts, monitoring analytics, and engaging your audience worldwide.",
    features: [
      "Monthly Content Calendar & Strategy",
      "On-Site Mobile Content Shooting Days",
      "Caption Writing & Strategic Hashtag Curation",
      "Daily Audience Engagement & Moderation",
      "Monthly Performance & Analytics Report"
    ],
    startingPrice: "Tailored Pricing",
    deliverables: "Full Monthly Management + Mobile Videos/Reels + Analytics Deck"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "4K Mobile Fashion Reel — Runway Highlights",
    client: "Instagram Showcase",
    category: "video",
    categoryLabel: "Mobile Cinematography",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instagramUrl: "https://instagram.com/adesola_creatives",
    description: "Dynamic 4K mobile video shoot capturing runway highlights, backstage model prep, and street style aesthetics. View full video post on Instagram.",
    deliverables: ["1x 60s Main Fashion Reel", "3x 15s Story Teasers", "Raw B-Roll Reel"],
    date: "June 2026"
  },
  {
    id: "p2",
    title: "Urban Streetwear Commercial Mobile Reel",
    client: "Backup Instagram Showcase",
    category: "video",
    categoryLabel: "Mobile Cinematography",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instagramUrl: "https://instagram.com/adesolacreatives",
    description: "High-energy mobile cinematography reel spotlighting young Nigerian creatives and tech entrepreneurs. View complete video post directly on Instagram.",
    deliverables: ["4K Mobile Commercial Reel", "Social Media Teasers", "Raw B-Roll"],
    date: "May 2026"
  },
  {
    id: "p3",
    title: "High-Conversion Event Flyer & Social Carousel",
    client: "Instagram Showcase",
    category: "design",
    categoryLabel: "Branding & Design",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/adesola_creatives",
    description: "Custom promotional graphics, multi-slide educational carousels, and launch banners crafted for digital channels. View carousel post on Instagram.",
    deliverables: ["Promotional Flyers", "Instagram Carousels", "Event Backdrop Design"],
    date: "April 2026"
  },
  {
    id: "p4",
    title: "Brand Identity & Graphic Design Suite",
    client: "Backup Instagram Showcase",
    category: "design",
    categoryLabel: "Branding & Design",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/adesolacreatives",
    description: "Custom graphic design assets, typography layouts, color swatches, and visual social media banners. View post on Instagram.",
    deliverables: ["Social Media Banners", "Visual Assets", "Brand Graphics"],
    date: "March 2026"
  },
  {
    id: "p5",
    title: "Creative Mobile Photography & Skin Retouching",
    client: "Instagram Showcase",
    category: "photography",
    categoryLabel: "Mobile Photography",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/adesola_creatives",
    description: "Sharp mobile photography session with professional high-end skin retouching and color grading. View original photo set on Instagram.",
    deliverables: ["Retouched High-Res Photos", "Web & Print Ready Exports"],
    date: "February 2026"
  },
  {
    id: "p6",
    title: "Mobile Event & Brand Lifestyle Photography",
    client: "Backup Instagram Showcase",
    category: "photography",
    categoryLabel: "Mobile Photography",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/adesolacreatives",
    description: "Vibrant mobile photography capturing candid brand moments, product framing, and event lighting. View photo gallery on Instagram.",
    deliverables: ["Color-Graded Photos", "Private Online Gallery"],
    date: "January 2026"
  },
  {
    id: "p7",
    title: "Brand Scaling & Social Media Moderation",
    client: "Instagram Showcase",
    category: "social",
    categoryLabel: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/adesola_creatives",
    description: "Strategic account management, publishing schedule, audience engagement, and monthly metric reporting. View campaign highlights on Instagram.",
    deliverables: ["Monthly Content Calendar", "Audience Moderation", "Analytics Dashboard"],
    date: "May 2026"
  },
  {
    id: "p8",
    title: "Social Content Strategy & Organic Growth",
    client: "Backup Instagram Showcase",
    category: "social",
    categoryLabel: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://instagram.com/adesolacreatives",
    description: "Organic growth campaign utilizing mobile video reels, trend curation, and strategic posting. View full breakdown on Instagram.",
    deliverables: ["Organic Growth Strategy", "Content Curation", "Monthly Performance Deck"],
    date: "April 2026"
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
    pricingLabel: "Tailored Pricing",
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
    pricingLabel: "Tailored Pricing",
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
    pricingLabel: "Tailored Pricing",
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
    a: "Simple! Click any 'Book a Session' or 'Chat on WhatsApp' button to share your project details. Every project quote is customizable to fit your exact campaign goals."
  }
];
