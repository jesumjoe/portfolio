export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category?: string;
  year?: string;
  color?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "openmfg",
    title: "OpenMFG",
    description: "A full-stack 3D printing marketplace featuring real-time bidding, automated quoting, and in-browser CAD visualization.",
    longDescription: "OpenMFG is a highly complex two-sided SaaS marketplace designed for custom manufacturing. It seamlessly connects customers needing 3D printing or CNC machining with capable manufacturers. The platform features an intelligent, dynamic quoting engine that calculates prices based on uploaded 3D geometry. Customers can view their uploaded STL/STEP files directly in the browser using Three.js, while manufacturers can bid on orders in real-time via Socket.io. Built with React, Node.js, Prisma, and integrating Google's Generative AI for structural validation.",
    tags: ["React", "Three.js", "Node.js", "Prisma", "Socket.io"],
    githubUrl: "https://github.com/jesumjoe/OpenMFG",
    category: "SaaS & 3D",
    color: "from-slate-900 via-zinc-900 to-stone-900",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1000&auto=format&fit=crop", // 3D printing
    featured: true,
  },
  {
    id: "namma-tuition",
    title: "Namma Tuition",
    description: "A lightweight, bilingual SaaS platform for tuition centers with Twilio WhatsApp integration.",
    longDescription: "Namma Tuition is a complete end-to-end SaaS solution designed specifically for small Indian coaching centers. Built heavily on Next.js 14 and Prisma, it provides a thumb-friendly, bilingual interface for tutors to manage student attendance, track fees, and automatically dispatch daily performance digests via the Twilio WhatsApp Business API. It also features a password-less magic link portal for parents to view their child's 30-day performance charts without logging in.",
    tags: ["Next.js", "Prisma", "TypeScript", "Twilio API", "SaaS"],
    githubUrl: "https://github.com/jesumjoe/Namma-Tuition",
    category: "SaaS",
    color: "from-blue-900 via-indigo-900 to-violet-900",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop", // Education
    featured: true,
  },
  {
    id: "mrmoney",
    title: "MrMoney",
    description: "A privacy-first personal finance app featuring on-device AI categorization and automated SMS transaction tracking.",
    longDescription: "MrMoney reimagines personal finance by eliminating the friction of manual data entry. Built with Flutter, it automatically parses banking SMS messages and device notifications to log expenses in real-time. Using on-device machine learning (TensorFlow Lite), it intelligently categorizes transactions locally, ensuring your financial data never leaves your device. Features include interactive analytics, multi-account management, friend loan tracking, and biometric security locks.",
    tags: ["Flutter", "Dart", "TensorFlow Lite", "Hive", "Machine Learning"],
    githubUrl: "https://github.com/jesumjoe/MrMoney",
    category: "Mobile AI",
    color: "from-emerald-900 via-teal-900 to-cyan-900",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop", // Finance
    featured: true,
  },
  {
    id: "mudcups",
    title: "MudCups Cafe OS",
    description: "A modern, real-time ordering and Kitchen Display System (KDS) designed for cafe operations.",
    longDescription: "Designed with a strict 'Visual Stillness' aesthetic, MudCups is an end-to-end cafe operating system. It features a QR-based mobile storefront for dine-in customers to seamlessly place orders, synchronized in real-time with a Kitchen Display System (KDS) for chefs. Built heavily on Next.js 14 and Supabase's Realtime capabilities, it completely digitizes tab management, order priority tracking, and billing.",
    tags: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    githubUrl: "https://github.com/jesumjoe/MudCups",
    category: "SaaS",
    color: "from-amber-900 via-orange-900 to-rose-900",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop", // Cafe
    featured: false,
  },
  {
    id: "biotrap",
    title: "BioTrap",
    description: "An advanced honeypot security application that captures telemetry and performs facial recognition on intruders.",
    longDescription: "BioTrap is an aggressive, proactive cybersecurity honeypot. Written in Python with Flask, it is designed to lure potential attackers and silently extract rich client telemetry, including geolocation, canvas fingerprints, and hardware details. Going beyond standard logging, it attempts to capture webcam images to run facial recognition and liveness detection algorithms via OpenCV and dlib. Intrusion attempts are dynamically scored for risk, and administrators receive instant alerts via a Telegram Bot.",
    tags: ["Python", "Flask", "OpenCV", "SQLite", "Security"],
    githubUrl: "https://github.com/jesumjoe/BioTrap",
    category: "AI Security",
    color: "from-red-900 via-rose-900 to-pink-900",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop", // Cyber
    featured: false,
  },
  {
    id: "learn-serve-tech",
    title: "Learn Serve Tech",
    description: "A collaborative SaaS platform connecting communities with student engineering projects.",
    longDescription: "Learn Serve Tech is a role-based collaborative platform built to manage the entire lifecycle of student innovation projects. Built with React 18 and Supabase, it provides distinct, secure dashboards for Students, Staff, and Administrators. Features include project submission workflows, status tracking, built-in feedback loops, and advanced data visualization with Recharts.",
    tags: ["React 18", "Supabase", "Tailwind CSS", "SaaS"],
    githubUrl: "https://github.com/jesumjoe/Learn-Serve-Tech",
    category: "Platform",
    color: "from-indigo-900 via-purple-900 to-fuchsia-900",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", // Collaboration
    featured: false,
  },
  {
    id: "bellyburn",
    title: "BellyBurn AI",
    description: "A 30-day fitness tracker featuring a client-side AI food scanner powered by Google Gemini.",
    longDescription: "BellyBurn is a localized fitness tracking application designed to run entirely in the browser. Beyond structured 30-day workout plans and macro tracking, it features a unique AI Food Scanner. Users can upload a photo of their meal, and the app leverages the Gemini AI API to instantly estimate portion sizes, calories, and macros—all without requiring a backend server.",
    tags: ["React", "Gemini API", "AI Integration", "SPA"],
    githubUrl: "https://github.com/jesumjoe/BellyBurn",
    category: "AI & Health",
    color: "from-orange-900 via-red-900 to-rose-900",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop", // Fitness
    featured: false,
  },
  {
    id: "collegebud",
    title: "CollegeBud",
    description: "A comprehensive Flutter application for university students featuring automated portal scraping.",
    longDescription: "CollegeBud acts as an automated, mobile-first wrapper around legacy university portals. Built with Flutter, it utilizes complex HTML parsing to securely authenticate users and scrape attendance and grade data. It features background workers for hourly syncs, local notifications for missed classes, and a secure storage vault for credentials.",
    tags: ["Flutter", "Dart", "Web Scraping", "Background Tasks"],
    githubUrl: "https://github.com/jesumjoe/attcalci",
    category: "Mobile",
    color: "from-cyan-900 via-teal-900 to-green-900",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop", // University
    featured: false,
  }
];
