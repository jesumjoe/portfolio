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
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full stack e-commerce platform with real-time inventory, payments, and an admin dashboard.",
    longDescription: "Built a complete e-commerce solution featuring product catalog management, real-time inventory tracking, Stripe payment integration, and a rich admin dashboard. The frontend is built with React and the backend with Node.js/Express backed by PostgreSQL. Includes features like cart persistence, order tracking, and email notifications.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    category: "Full Stack",
    color: "from-blue-900 via-blue-800 to-indigo-900",
    year: "2024",
  },
  {
    id: "design-system",
    title: "Design System & UI Kit",
    description: "A production-ready component library and design system built with React and Storybook.",
    longDescription: "Designed and built a comprehensive design system from scratch, featuring 50+ accessible components, a consistent token-based theming engine, dark/light mode support, and full Storybook documentation. Used by multiple internal projects to ensure UI consistency and speed up development workflows.",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    githubUrl: "https://github.com",
    category: "UI / UX",
    color: "from-emerald-900 via-teal-800 to-cyan-900",
    year: "2024",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "A real-time analytics dashboard with WebSocket-driven charts, user management, and billing.",
    longDescription: "Developed a multi-tenant SaaS dashboard featuring real-time data visualizations powered by WebSockets, role-based user management, Stripe subscription billing, and an API-first backend with rate limiting and caching. Built with Next.js, Prisma, and deployed on AWS with a CI/CD pipeline.",
    tags: ["Next.js", "Prisma", "WebSocket", "AWS"],
    githubUrl: "https://github.com",
    category: "Full Stack",
    color: "from-orange-900 via-red-900 to-rose-900",
    year: "2023",
  },
  {
    id: "api-gateway",
    title: "REST API Gateway",
    description: "A scalable API gateway with auth, rate limiting, caching, and auto-generated docs.",
    longDescription: "Built a production-grade API gateway that handles authentication (JWT + OAuth), request rate limiting, Redis caching, and automatic OpenAPI documentation generation. Designed to sit in front of microservices and unify their interfaces. Includes a developer portal for API key management and usage analytics.",
    tags: ["Node.js", "Redis", "Docker", "OpenAPI"],
    githubUrl: "https://github.com",
    category: "APIs & Databases",
    color: "from-violet-900 via-purple-900 to-fuchsia-900",
    year: "2023",
  },
];
