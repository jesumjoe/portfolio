import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Header />

      <main className="flex-grow pt-28">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 md:px-12 pt-8 mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </motion.div>

        {/* Project Title */}
        <div className="px-6 md:px-12 border-b border-white/10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-white/20 text-sm text-muted-foreground uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-[8vw] font-bold text-foreground m-0 leading-none uppercase tracking-tight"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-3xl text-muted-foreground max-w-4xl font-light leading-relaxed mt-8 uppercase tracking-wide"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Project Visual Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[21/9] bg-secondary flex items-center justify-center relative overflow-hidden border-b border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <span className="font-display text-[20vw] font-bold text-white/5 select-none">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        </motion.div>

        {/* Content */}
        <div className="px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-4xl font-bold text-foreground mb-8 uppercase tracking-tight">
                About This Project
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light text-2xl">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Sidebar Links & Tech */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-12"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 uppercase tracking-tight">
                  Links
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    <Github className="w-6 h-6 group-hover:text-background transition-colors" />
                    <span className="font-display uppercase tracking-widest text-sm group-hover:text-background transition-colors">
                      View on GitHub
                    </span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-primary hover:bg-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-6 h-6 text-background" />
                      <span className="font-display uppercase tracking-widest text-sm text-background">
                        Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 uppercase tracking-tight">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 border border-white/20 text-sm text-muted-foreground uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
