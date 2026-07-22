import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

const PlaceholderCard = ({ color, title }: { color?: string; title: string }) => (
  <div
    className={`w-full h-full bg-gradient-to-br ${color ?? "from-zinc-800 to-zinc-900"} flex items-center justify-center relative overflow-hidden`}
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
    <span className="font-display text-8xl font-bold text-white/15 select-none relative z-10">
      {title.substring(0, 2).toUpperCase()}
    </span>
  </div>
);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <AnimatedBackground />
      <Header />

      <main className="flex-grow pt-28">
        {/* Page Header */}
        <div className="px-6 md:px-12 pt-16 pb-16">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-[10vw] font-bold text-foreground m-0 leading-none uppercase tracking-tight"
          >
            All <span className="text-primary">Works.</span>
          </motion.h1>
        </div>

        {/* Projects Grid */}
        <div className="px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Placeholder Image */}
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                  <PlaceholderCard color={project.color} title={project.title} />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                      <ArrowUpRight className="w-6 h-6 text-background" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex items-start justify-between gap-4 mt-4">
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-xs font-display uppercase tracking-[0.2em] mb-1">
                      {project.category ?? project.tags[0]} / {project.year ?? "2024"}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Projects;
