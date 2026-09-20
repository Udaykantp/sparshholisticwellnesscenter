import {
  ClinicLocation,
  WellnessService,
  HealthConditionCategory,
  WorkshopItem,
  EducationArticle,
  InstagramPostItem,
  GalleryItem,
  TestimonialItem
} from '../types';

export interface ClinicConfig {
  name: string;
  tagline: string;
  subtitle: string;
  instagram: string;
  instagramUrl: string;
  phone: string;
  displayPhone: string;
  whatsappUrl: string;
  email: string;
  hours: string;
  locations: ClinicLocation[];
  services: WellnessService[];
  conditions: HealthConditionCategory[];
  workshops: WorkshopItem[];
  educationArticles: EducationArticle[];
  instagramFeed: InstagramPostItem[];
  testimonials: TestimonialItem[];
  gallery: GalleryItem[];
  socialLinks: {
    instagram: string;
    whatsapp: string;
    facebook: string;
    youtube: string;
  };
}

export const clinic: ClinicConfig = {
  name: "Sparsh Holistic Health And Wellness Center",
  tagline: "Reconnect With Your Natural Wellbeing",
  subtitle: "Holistic health and wellness care designed around your individual needs, lifestyle and wellbeing.",
  instagram: "@sparshspinecenter",
  instagramUrl: "https://www.instagram.com/sparshspinecenter",
  phone: "96231 00222",
  displayPhone: "96231 00222",
  whatsappUrl: "https://wa.me/919623100222?text=Hello%20Sparsh%20Wellness%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
  email: "care@sparshwellness.in",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: By Appointment",
  
  locations: [
    {
      id: "ahilyanagar",
      name: "Ahilyanagar",
      tagline: "Spine & Holistic Care Center",
      addressPlaceholder: "Sparsh Wellness Center, Ahilyanagar Center, Maharashtra",
      phone: "96231 00222",
      displayPhone: "96231 00222",
      mapsQuery: "Sparsh Spine Center Ahilyanagar",
      isPrimary: true
    },
    {
      id: "nashik",
      name: "Nashik",
      tagline: "Holistic Wellness & Spine Consultation",
      addressPlaceholder: "Sparsh Holistic Center, Nashik, Maharashtra",
      phone: "96231 00222",
      displayPhone: "96231 00222",
      mapsQuery: "Sparsh Spine Center Nashik"
    },
    {
      id: "pune",
      name: "Pune",
      tagline: "Integrative Wellness Consultation Suite",
      addressPlaceholder: "Sparsh Holistic Wellness, Pune, Maharashtra",
      phone: "96231 00222",
      displayPhone: "96231 00222",
      mapsQuery: "Sparsh Spine Center Pune"
    },
    {
      id: "delhi",
      name: "Delhi",
      tagline: "Holistic Care & Workshops Hub",
      addressPlaceholder: "Sparsh Holistic Wellness Consultation Center, New Delhi",
      phone: "96231 00222",
      displayPhone: "96231 00222",
      mapsQuery: "Sparsh Holistic Wellness Delhi"
    },
    {
      id: "mumbai",
      name: "Mumbai",
      tagline: "Comprehensive Spine & Holistic Center",
      addressPlaceholder: "Sparsh Holistic Care, Mumbai, Maharashtra",
      phone: "96231 00222",
      displayPhone: "96231 00222",
      mapsQuery: "Sparsh Spine Center Mumbai"
    }
  ],

  // Configurable services: explicitly marked for administrator updates as per instructions
  services: [
    {
      id: "holistic-consultation",
      title: "Holistic Wellness Consultation",
      category: "Assessment & Strategy",
      shortDescription: "In-depth personalized evaluation taking into account your physical health, posture, lifestyle routines, and wellness goals.",
      fullDescription: "Our holistic wellness consultation assesses posture, movement patterns, daily ergonomic strain, and natural balance. Rather than isolating symptoms, we look at the whole person to formulate a tailored wellness blueprint.",
      focusAreas: ["Comprehensive lifestyle review", "Movement & postural balance", "Nutritional & daily rhythm guidance"],
      benefits: ["Clear personal health roadmap", "Root-cause awareness", "Non-invasive guidance"],
      durationPlaceholder: "45–60 Minutes",
      iconName: "Compass",
      isConfigurableNotice: true
    },
    {
      id: "naturopathy",
      title: "Naturopathy",
      category: "Natural Therapeutics",
      shortDescription: "Harmonizing natural therapeutic principles to support the body’s innate restorative capacity and vital energy.",
      fullDescription: "Naturopathy embraces nature’s self-regulatory mechanisms. Through natural elements, herbal compresses, thermal hydro-principles, and gentle routine adjustments, we help restore harmony to your constitution.",
      focusAreas: ["Elemental therapy principles", "Digestive & metabolic harmony", "Natural detoxification support"],
      benefits: ["Supports internal healing", "Zero synthetic side-effects", "Sustainable long-term balance"],
      durationPlaceholder: "Customized Sessions",
      iconName: "Leaf",
      isConfigurableNotice: true
    },
    {
      id: "wellness-therapies",
      title: "Wellness Therapies",
      category: "Therapeutic Modalities",
      shortDescription: "Non-invasive holistic therapies focused on relaxation, joint mobility, muscular harmony, and nervous system recalibration.",
      fullDescription: "A selection of soothing, structured therapies designed to alleviate somatic tension, enhance peripheral circulation, and soothe over-stimulated nervous systems.",
      focusAreas: ["Tension release & muscular ease", "Circulatory stimulation", "Somatic calming"],
      benefits: ["Deep restorative calm", "Relief from daily fatigue", "Enhanced bodily ease"],
      durationPlaceholder: "45–75 Minutes",
      iconName: "Sparkles",
      isConfigurableNotice: true
    },
    {
      id: "pain-spine-wellness",
      title: "Pain & Spine Wellness",
      category: "Spine & Posture",
      shortDescription: "Specialized, non-surgical approaches to foster spine strength, structural alignment, and long-term back health.",
      fullDescription: "Inspired by Sparsh’s core spine awareness, this service focuses on understanding spine biomechanics, relieving mechanical back tension, and restoring functional range of motion safely.",
      focusAreas: ["Spine biomechanics education", "Gentle vertebral decompression exercises", "Core stability ergonomics"],
      benefits: ["Better spine posture", "Reduced daily discomfort", "Empowered movement"],
      durationPlaceholder: "Structured Programs",
      iconName: "Activity",
      isConfigurableNotice: true
    },
    {
      id: "lifestyle-guidance",
      title: "Lifestyle Guidance",
      category: "Behavioral Wellbeing",
      shortDescription: "Practical, sustainable modifications for your sleep hygiene, workday ergonomics, and mental stillness.",
      fullDescription: "Health happens in the daily choices between clinic visits. We provide structured guidance on circadian rhythms, screen ergonomics, stress mitigation, and mindful living practices.",
      focusAreas: ["Desk & workstation setup", "Circadian sleep alignment", "Stress response management"],
      benefits: ["Consistent daily energy", "Fewer stress flare-ups", "Enhanced quality of life"],
      durationPlaceholder: "Continuous Support",
      iconName: "Sun",
      isConfigurableNotice: true
    },
    {
      id: "rehabilitation-recovery",
      title: "Rehabilitation & Recovery",
      category: "Functional Restitution",
      shortDescription: "Gentle restorative movement conditioning designed to rebuild confidence, stability, and everyday mobility.",
      fullDescription: "Graduated restorative regimens tailored to individuals recovering from postural strain, repetitive occupational fatigue, or physical stagnation.",
      focusAreas: ["Gradual flexibility conditioning", "Joint mobility maintenance", "Kinesthetic coordination"],
      benefits: ["Renewed physical confidence", "Safer daily ergonomics", "Injury prevention"],
      durationPlaceholder: "Session-based Plan",
      iconName: "RefreshCw",
      isConfigurableNotice: true
    },
    {
      id: "health-education",
      title: "Health Education",
      category: "Empowerment",
      shortDescription: "Structured awareness sessions demystifying body mechanics, chronic tension triggers, and self-care techniques.",
      fullDescription: "Knowledge is the foundation of preventive wellness. We equip individuals and families with scientific yet accessible understandings of how the spine and body function.",
      focusAreas: ["Anatomy & posture workshops", "Ergonomic self-correction", "Preventive wellness habits"],
      benefits: ["Lifelong health literacy", "Independent self-care skills", "Preventive mindset"],
      durationPlaceholder: "Individual & Group",
      iconName: "BookOpen",
      isConfigurableNotice: true
    },
    {
      id: "workshops-training",
      title: "Workshops & Training",
      category: "Group Immersion",
      shortDescription: "Interactive community and corporate wellness seminars bringing holistic health principles to everyday life.",
      fullDescription: "Engaging, practical workshops conducted across Ahilyanagar, Nashik, Pune, Delhi, and Mumbai to teach practical spine care, breathwork, and natural vitality.",
      focusAreas: ["Practical posture clinics", "Breathwork & calming rituals", "Corporate wellness routines"],
      benefits: ["Collective learning", "Hands-on technique correction", "Community support"],
      durationPlaceholder: "Half-Day / Full-Day",
      iconName: "Users",
      isConfigurableNotice: true
    }
  ],

  // Conditions supported with education (no cure promises, purely educational & supportive)
  conditions: [
    {
      id: "spine-back",
      title: "Spine & Back Wellness",
      description: "Supporting spinal alignment, neck ease, and lower back comfort through posture awareness and holistic habits.",
      educationalNotes: [
        "Sedentary desk hours and forward head posture create chronic axial strain on cervical and lumbar discs.",
        "Gentle daily axial lengthening exercises support natural intervertebral fluid exchange.",
        "Holistic spine care combines ergonomic consciousness with core muscular balance."
      ],
      lifestyleTips: [
        "Position computer monitor top at eye level to prevent neck extension.",
        "Take a 90-second posture reset every 45 minutes of seated work.",
        "Practice gentle diaphragmatic breathing to release tense spinal erectors."
      ],
      iconName: "Activity"
    },
    {
      id: "pain-management",
      title: "Pain Management & Ease",
      description: "Non-pharmacological approaches to soothe chronic muscular tension, joint stiffness, and postural strain.",
      educationalNotes: [
        "Pain is often a signal of chronic biomechanical imbalance rather than isolated localized injury.",
        "Nervous system sensitivity plays a major role in how muscular tightness is sustained.",
        "Gentle natural therapies help down-regulate the nervous system's tension threshold."
      ],
      lifestyleTips: [
        "Apply warm herbal or saline compresses to soothe reactive muscles.",
        "Avoid aggressive stretching when muscles are acutely inflamed.",
        "Maintain adequate hydration to support fascia glide and flexibility."
      ],
      iconName: "ShieldAlert"
    },
    {
      id: "lifestyle-wellness",
      title: "Lifestyle Wellness",
      description: "Cultivating daily rhythms that nurture natural vitality, digestion, restful sleep, and mental clarity.",
      educationalNotes: [
        "Your body's biological clock governs hormone cycles, digestive efficiency, and cellular repair.",
        "Inconsistent meal timings and late blue light exposure elevate systemic tension.",
        "Natural health principles restore harmony between circadian timing and physical activity."
      ],
      lifestyleTips: [
        "Expose eyes to natural morning sunlight within 30 minutes of waking.",
        "Eat dinner at least 2.5 hours prior to bedtime.",
        "Incorporate a 15-minute digital sunset before sleep."
      ],
      iconName: "Clock"
    },
    {
      id: "stress-relaxation",
      title: "Stress & Relaxation",
      description: "Techniques and natural therapies that guide the body from fight-or-flight into restorative parasympathetic rest.",
      educationalNotes: [
        "Chronic stress keeps spinal muscles braced and shallow breathing locked into the upper chest.",
        "The vagus nerve can be activated through intentional slow exhalations and mindful posture.",
        "Holistic relaxation nurtures both mental calmness and deep somatic release."
      ],
      lifestyleTips: [
        "Practice 4-7-8 rhythmic breathing twice daily for 5 cycles.",
        "Take short barefoot walks on natural earth or grass when possible.",
        "Spend 10 minutes in restorative silence without screens."
      ],
      iconName: "Heart"
    },
    {
      id: "general-wellbeing",
      title: "General Wellbeing",
      description: "Fostering everyday resilience, balanced vitality, healthy energy levels, and bodily comfort.",
      educationalNotes: [
        "True wellness is not simply the absence of discomfort, but a vibrant state of energy and ease.",
        "Naturopathic principles honor the interconnectedness of nutrition, movement, and mindset.",
        "Regular self-assessment helps prevent minor imbalances from becoming persistent."
      ],
      lifestyleTips: [
        "Consume seasonal whole foods rich in natural fiber and micronutrients.",
        "Include low-impact functional movements like mindful walking every day.",
        "Listen attentively to early bodily signals of fatigue."
      ],
      iconName: "Smile"
    },
    {
      id: "preventive-wellness",
      title: "Preventive Wellness",
      description: "Proactive care strategies to protect your spine, joints, and vitality before chronic patterns develop.",
      educationalNotes: [
        "Preventive care saves years of discomfort by correcting micro-habits early.",
        "Periodic postural reviews help identify asymmetrical load bearing.",
        "Education empowers individuals to take charge of their own long-term health."
      ],
      lifestyleTips: [
        "Schedule regular periodic posture checkups.",
        "Wear footwear that supports natural foot arches without excessive elevation.",
        "Keep spine and core conditioning as a lifelong daily habit."
      ],
      iconName: "CheckCircle"
    }
  ],

  // Workshops architecture (clearly marked as configurable in code)
  workshops: [
    {
      id: "spine-posture-masterclass",
      title: "Spine & Posture Awareness Workshop",
      category: "Postural Health",
      shortDescription: "Practical interactive session on identifying ergonomic stress, spine alignment, and corrective micro-practices.",
      fullDescription: "Designed for professionals, students, and homemakers, this workshop provides hands-on posture analysis, workspace optimization drills, and gentle spine decompression movements.",
      location: "Pune & Ahilyanagar Centers",
      schedule: "Upcoming Weekend Batch",
      mode: "In-Person",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      learningOutcomes: [
        "Understanding your spinal curvature and pressure zones",
        "Setting up your work desk to eliminate neck strain",
        "5 daily restorative spine movements to do at home"
      ],
      isConfigurableNotice: true
    },
    {
      id: "natural-living-principles",
      title: "Natural Living & Naturopathy Immersion",
      category: "Holistic Lifestyle",
      shortDescription: "Exploring natural rhythms, seasonal dietary harmony, and everyday natural health principles for the family.",
      fullDescription: "A comprehensive guided seminar exploring how ancient naturopathic principles meet modern lifestyle constraints. Participants learn natural digestive support, sleep hygiene, and home care.",
      location: "Nashik & Mumbai Centers",
      schedule: "Monthly Saturday Session",
      mode: "Hybrid",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      learningOutcomes: [
        "Circadian rhythm alignment for deep restorative sleep",
        "Home natural therapies for common fatigue and stiffness",
        "Building a natural wellness routine for the whole family"
      ],
      isConfigurableNotice: true
    },
    {
      id: "ergonomics-desk-health",
      title: "Desk Health & Chronic Strain Prevention",
      category: "Corporate & Ergonomics",
      shortDescription: "Interactive workshop for remote and corporate teams to combat screen fatigue, lumbar slump, and repetitive strain.",
      fullDescription: "A dynamic group training session that can be hosted at offices or our wellness hubs. Covers dynamic seating, active breaks, eye relief, and thoracic mobilization.",
      location: "Delhi & Pune Centers",
      schedule: "Corporate Booking Available",
      mode: "Interactive Session",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      learningOutcomes: [
        "Ergonomic checklist for laptops and dual monitors",
        "Micro-movements to activate glutes and spine stabilizers",
        "Stress de-escalation breathing techniques during intense work"
      ],
      isConfigurableNotice: true
    }
  ],

  // Health education articles (editorial structure for blog/Instagram insights)
  educationArticles: [
    {
      id: "understanding-your-body",
      category: "Body Literacy",
      title: "Understanding Your Body: Listening To Early Tension Signals",
      readTime: "4 min read",
      shortDescription: "Before pain becomes persistent, your body communicates through subtle stiffness and postural compensation.",
      content: [
        "Most people notice spinal or muscular discomfort only when it interrupts sleep or daily tasks. However, the body invariably whispers before it speaks loudly.",
        "Subtle signs such as habitual shoulder shrugging during focused work, shifting weight exclusively to one leg when standing, or stiffness upon waking are early invitations for self-care.",
        "By developing body awareness, you can address biomechanical tightness with gentle corrective habits before structural strain escalates."
      ],
      takeaways: [
        "Check your shoulder tension every hour.",
        "Notice whether you hold your breath when typing.",
        "Take early stiffness as an invitation to move gently."
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "spine-posture-awareness",
      category: "Spine Care",
      title: "Spine & Posture Awareness: The Foundation Of Daily Comfort",
      readTime: "5 min read",
      shortDescription: "Why the natural curves of your spine are designed for shock absorption, and how modern seating alters that balance.",
      content: [
        "The human spine has three natural curves: cervical, thoracic, and lumbar. Together, they act like a coiled spring, distributing the load of movement and gravity.",
        "When we slump over screens or slouch in soft sofas, the lumbar curve flattens and the head drifts forward, multiplying the mechanical weight on neck vertebrae.",
        "Spine care at Sparsh emphasizes preserving these natural curvatures through conscious positioning and supportive lifestyle habits."
      ],
      takeaways: [
        "Keep your ears aligned over your shoulders.",
        "Use lumbar support to maintain the natural lower back arch.",
        "Stand up and walk for 60 seconds every half hour."
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "everyday-wellness-practices",
      category: "Daily Rituals",
      title: "Everyday Wellness Practices: Small Habits With Compounding Benefits",
      readTime: "3 min read",
      shortDescription: "Simple, realistic naturopathic habits you can integrate into a busy routine without overhaul.",
      content: [
        "Holistic wellness is not an all-or-nothing pursuit. Sustainable vitality is built on tiny micro-habits repeated with consistency.",
        "Starting your morning with warm hydration, taking three conscious deep breaths before responding to an urgent email, and unplugging devices 30 minutes before bed create profound physiological dividends.",
        "Natural healthcare encourages working with your body's natural biorhythms rather than resisting them."
      ],
      takeaways: [
        "Hydrate mindfully before coffee or tea in the morning.",
        "Incorporate a 5-minute evening leg elevation to aid circulation.",
        "Anchor your meal times to consistent daily windows."
      ],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "healthy-lifestyle-education",
      category: "Preventive Living",
      title: "Healthy Lifestyle Education: Creating An Ergonomic Living Space",
      readTime: "4 min read",
      shortDescription: "How your physical environment shapes your posture, spinal health, and energy levels throughout the day.",
      content: [
        "We spend over 8 hours daily interacting with chairs, beds, keyboards, and mobile screens. If the environment enforces poor mechanics, fatigue is inevitable.",
        "A holistic audit of your home and workspace helps uncover hidden strain generators: insufficient desk height, glare causing squinting, or soft mattresses lacking spinal support.",
        "Simple adjustments can transform your daily surroundings into an environment that nurtures alignment."
      ],
      takeaways: [
        "Ensure feet are flat on the floor or on a firm footrest.",
        "Adjust room lighting to reduce eye strain and forward neck craning.",
        "Choose a mattress that supports neutral spine alignment."
      ],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Social feed reflecting the Instagram identity @sparshspinecenter
  instagramFeed: [
    {
      id: "ig-1",
      type: "highlight",
      title: "Spine & Posture Tips",
      caption: "Simple seated adjustments to protect your cervical spine during long desk hours. #SparshWellness #SpineHealth #PostureCare",
      category: "Health Education",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      likesPlaceholder: "2.4k"
    },
    {
      id: "ig-2",
      type: "post",
      title: "Holistic Workshop Glimpses",
      caption: "Hands-on spine alignment and natural therapies workshop at our center. Empowering patients with self-care knowledge. #SparshWorkshops",
      category: "Workshops",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      likesPlaceholder: "1.8k"
    },
    {
      id: "ig-3",
      type: "highlight",
      title: "Natural Therapies & Naturopathy",
      caption: "Gentle natural therapeutic modalities supporting your body's restorative energy. Reconnect with nature. #HolisticHealth",
      category: "Wellness",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      likesPlaceholder: "3.1k"
    },
    {
      id: "ig-4",
      type: "post",
      title: "Mindful Living & Routine",
      caption: "Small shifts create lasting vitality. How did you support your posture today? Share in the comments. #SparshDaily",
      category: "Lifestyle",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      likesPlaceholder: "1.5k"
    },
    {
      id: "ig-5",
      type: "highlight",
      title: "Patient Feedback Highlight",
      caption: "Reflections from community members experiencing renewed ease and postural awareness through personalized guidance.",
      category: "Feedback",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      likesPlaceholder: "2.9k"
    },
    {
      id: "ig-6",
      type: "post",
      title: "Ahilyanagar • Nashik • Pune • Delhi • Mumbai",
      caption: "Dedicated to holistic healthcare and patient-first wellness across all Sparsh centers. Schedule your consultation today.",
      category: "Centers",
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
      likesPlaceholder: "2.2k"
    }
  ],

  // Real testimonials ONLY when provided. Empty array as instructed so we show the elegant placeholder!
  testimonials: [],

  // Gallery items for the masonry gallery
  gallery: [
    {
      id: "gal-1",
      title: "Consultation & Clinical Assessment Suite",
      category: "Clinic",
      description: "Quiet, welcoming environment designed for attentive, individualized consultation without rush.",
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Naturopathy & Natural Herbal Therapy Setup",
      category: "Wellness",
      description: "Natural preparations, botanical oils, and herbal compresses used in holistic wellness sessions.",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Interactive Spine Health Workshop",
      category: "Workshops",
      description: "Participants learning spine biomechanics, postural alignment, and everyday desk ergonomics.",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Health Education Seminar & Group Learning",
      category: "Education",
      description: "Community health awareness sessions demystifying body mechanics and non-invasive wellness.",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Postural Rehabilitation & Movement Zone",
      category: "Patient Care",
      description: "Dedicated space for functional mobility guidance, balance retraining, and gentle spine decompression.",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Calm Reception & Wellness Lounge",
      category: "Clinic",
      description: "Natural wooden textures, soft warm lighting, and a tranquil atmosphere free from sterile hospital anxiety.",
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-7",
      title: "Holistic Wellness Community Event",
      category: "Events",
      description: "Spreading natural health awareness and preventive lifestyle practices across our locations.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-8",
      title: "Gentle Restorative Therapy Room",
      category: "Wellness",
      description: "Serene space designed for restorative therapies and down-regulating accumulated mental and physical stress.",
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    }
  ],

  socialLinks: {
    instagram: "https://www.instagram.com/sparshspinecenter",
    whatsapp: "https://wa.me/919623100222?text=Hello%20Sparsh%20Wellness%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
    facebook: "https://www.facebook.com/sparshspinecenter",
    youtube: "https://www.youtube.com/@sparshspinecenter"
  }
};
