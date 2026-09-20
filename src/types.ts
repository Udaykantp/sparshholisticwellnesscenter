export interface ClinicLocation {
  id: string;
  name: string;
  tagline: string;
  addressPlaceholder: string;
  phone: string;
  displayPhone: string;
  mapsQuery: string;
  isPrimary?: boolean;
}

export interface WellnessService {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  focusAreas: string[];
  benefits: string[];
  durationPlaceholder: string;
  isConfigurableNotice?: boolean;
  iconName: string;
}

export interface HealthConditionCategory {
  id: string;
  title: string;
  description: string;
  educationalNotes: string[];
  lifestyleTips: string[];
  iconName: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  schedule: string;
  mode: 'In-Person' | 'Hybrid' | 'Interactive Session';
  image: string;
  learningOutcomes: string[];
  isConfigurableNotice?: boolean;
}

export interface EducationArticle {
  id: string;
  category: string;
  title: string;
  readTime: string;
  shortDescription: string;
  content: string[];
  takeaways: string[];
  image: string;
}

export interface InstagramPostItem {
  id: string;
  type: 'post' | 'highlight' | 'reel';
  title: string;
  caption: string;
  category: string;
  imageUrl: string;
  likesPlaceholder: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Wellness' | 'Workshops' | 'Events' | 'Education' | 'Patient Care';
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  city: string;
  category: string;
  verified: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredLocation: string;
  preferredDate: string;
  preferredTime: string;
  areaOfConcern: string;
  message: string;
}
