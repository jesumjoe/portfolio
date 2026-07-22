import { motion } from "framer-motion";
import { Code, Palette, Database, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack",
    description: "Building scalable web applications from frontend to backend",
  },
  {
    icon: Palette,
    title: "UI / UX",
    description: "Crafting intuitive, pixel-perfect user interfaces and experiences",
  },
  {
    icon: Database,
    title: "APIs & Databases",
    description: "Designing REST APIs, GraphQL, and robust data architectures",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying, scaling, and automating cloud infrastructure",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-transparent relative pt-32 pb-32 border-t border-white/10">
      <div className="w-full px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-8xl font-bold text-foreground m-0 leading-none uppercase tracking-tight"
          >
            About <br />
            <span className="text-primary">Me.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-muted-foreground max-w-2xl font-light uppercase tracking-tight leading-snug"
          >
            Turning ideas into <span className="text-foreground font-bold">polished products</span> — from pixel-perfect UIs to scalable <span className="text-foreground font-bold">backend systems</span>.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 relative z-10">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 brutal-block group flex flex-col items-start border-[0.5px] border-white/10 hover:bg-primary transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-background rounded-none flex items-center justify-center mb-12 border border-white/10 group-hover:border-background transition-colors duration-500">
                <item.icon className="w-8 h-8 text-foreground group-hover:text-background transition-colors duration-500" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4 uppercase group-hover:text-background transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-background/80 transition-colors duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
