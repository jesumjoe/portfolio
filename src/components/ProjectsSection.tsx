import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { projects } from "@/data/projects";

// Gradient placeholder for each project
const PlaceholderCard = ({ color, title }: { color?: string; title: string }) => (
  <div
    className={`w-full h-full bg-gradient-to-br ${color ?? "from-zinc-800 to-zinc-900"} flex flex-col items-center justify-center relative overflow-hidden`}
  >
    {/* Subtle grid texture */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Large initials */}
    <span className="font-display text-8xl font-bold text-white/15 select-none relative z-10">
      {title.substring(0, 2).toUpperCase()}
    </span>
  </div>
);

const ProjectCard = ({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) => (
  <div className="group cursor-pointer w-full" onClick={onClick}>
    {/* Image / Placeholder */}
    <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
      <PlaceholderCard color={project.color} title={project.title} />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1]">
          <ArrowUpRight className="w-6 h-6 text-background" />
        </div>
      </div>
    </div>

    {/* Info */}
    <div className="flex items-start justify-between gap-3 mt-4 px-1">
      <div className="min-w-0">
        <p className="text-muted-foreground text-xs font-display uppercase tracking-[0.15em] mb-1">
          {project.category ?? project.tags[0]} / {project.year ?? "2024"}
        </p>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
      </div>
      <div className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 mt-1">
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors duration-500" />
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  // Each card rotates as the section scrolls into view
  const r1 = useTransform(scrollYProgress, [0, 1], [-6, 2]);
  const r2 = useTransform(scrollYProgress, [0, 1], [7, -1]);
  const r3 = useTransform(scrollYProgress, [0, 1], [-4, 2]);

  return (
    <section id="projects" ref={sectionRef} className="bg-transparent relative pt-32 pb-24">
      <div className="w-full px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-8xl font-bold text-foreground m-0 leading-none uppercase tracking-tight"
          >
            Selected <br />
            <span className="text-primary">Works.</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => navigate("/projects")}
            className="group inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 shrink-0"
          >
            All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/*
          Staggered layout:
          - Card 1: left-aligned (max-width 40%), slightly negative rotation
          - Card 2: right-aligned, pushed down with margin-top, slightly positive rotation
          - Card 3: left-aligned with indent, pushed down, slight negative rotation
          All in normal flow — no absolute positioning → no overflow issues.
        */}
        <div className="flex flex-col gap-16 md:gap-0">

          {/* Card 1 — left, tilted left */}
          <motion.div
            style={{ rotate: r1 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-[40%] self-start origin-bottom-right"
          >
            <ProjectCard
              project={featuredProjects[0]}
              onClick={() => navigate(`/project/${featuredProjects[0].id}`)}
            />
          </motion.div>

          {/* Card 2 — right, shifted down, tilted right */}
          <motion.div
            style={{ rotate: r2 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-[40%] self-end origin-bottom-left md:mt-[-28%]"
          >
            <ProjectCard
              project={featuredProjects[1]}
              onClick={() => navigate(`/project/${featuredProjects[1].id}`)}
            />
          </motion.div>

          {/* Card 3 — left with indent, shifted down, tilted left */}
          <motion.div
            style={{ rotate: r3 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-[40%] md:ml-[12%] origin-bottom-right md:mt-[-22%]"
          >
            <ProjectCard
              project={featuredProjects[2]}
              onClick={() => navigate(`/project/${featuredProjects[2].id}`)}
            />
          </motion.div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-end"
        >
          <button
            onClick={() => navigate("/projects")}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-display text-xl uppercase tracking-widest text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              All Projects
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
