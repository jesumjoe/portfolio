import { motion } from "framer-motion";
import { Shield, Code, Globe, Lock } from "lucide-react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Languages" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Penetration Testing", category: "Security" },
  { name: "Network Security", category: "Security" },
];

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building scalable web applications from frontend to backend",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Implementing robust security measures and best practices",
  },
  {
    icon: Lock,
    title: "Secure Code",
    description: "Writing secure, maintainable, and efficient code",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Deploying and managing cloud infrastructure",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating secure, efficient, and user-friendly digital solutions.
            Combining development expertise with cybersecurity knowledge to build robust applications.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border card-hover group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Contact Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 text-muted-foreground">
            <a
              href="mailto:jesumaria@example.com"
              className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jesumaria@example.com
            </a>
            <span className="text-border">|</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              GitHub
            </a>
            <span className="text-border">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
