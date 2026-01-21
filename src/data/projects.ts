export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "secure-auth-system",
    title: "Secure Auth System",
    description: "A robust authentication system with multi-factor authentication and OAuth integration.",
    longDescription: "Built a comprehensive authentication system featuring JWT-based sessions, multi-factor authentication via TOTP, OAuth 2.0 integration with major providers, and secure password hashing using bcrypt. Implemented rate limiting and brute force protection to ensure maximum security.",
    tags: ["Node.js", "Express", "JWT", "OAuth", "Security"],
    githubUrl: "https://github.com",
  },
  {
    id: "network-monitor",
    title: "Network Monitor Dashboard",
    description: "Real-time network monitoring dashboard with threat detection capabilities.",
    longDescription: "Developed a comprehensive network monitoring solution that provides real-time visibility into network traffic, automated threat detection using machine learning algorithms, and instant alerting for suspicious activities. Features include traffic analysis, bandwidth monitoring, and detailed security reports.",
    tags: ["Python", "React", "TensorFlow", "WebSocket"],
    githubUrl: "https://github.com",
  },
  {
    id: "cloud-deploy-platform",
    title: "Cloud Deploy Platform",
    description: "Automated deployment platform with container orchestration and CI/CD pipelines.",
    longDescription: "Created a full-featured deployment platform that automates the entire software delivery pipeline. Supports Docker containerization, Kubernetes orchestration, automated testing, and blue-green deployments. Includes comprehensive logging, monitoring, and rollback capabilities.",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    githubUrl: "https://github.com",
  },
  {
    id: "vulnerability-scanner",
    title: "Vulnerability Scanner",
    description: "Automated security scanner for identifying vulnerabilities in web applications.",
    longDescription: "Built an automated vulnerability assessment tool that scans web applications for common security issues including SQL injection, XSS, CSRF, and misconfigurations. Generates detailed reports with remediation recommendations and severity ratings according to CVSS standards.",
    tags: ["Python", "Security", "OWASP", "Automation"],
    githubUrl: "https://github.com",
  },
];
