export type ServiceCategory = 'video' | 'photography' | 'design' | 'social';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  startingPrice?: string;
  deliverables: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: ServiceCategory;
  categoryLabel: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  deliverables: string[];
  results?: string;
  date: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  serviceUsed: string;
  videoPreviewThumb?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  pricingLabel: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
  turnaround: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  packageSelected: string;
  budgetRange: string;
  projectDetails: string;
  preferredContact: 'whatsapp' | 'email' | 'phone';
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}
