import { motion } from "framer-motion";
import { ArrowLeft, Maximize2, RotateCw } from "lucide-react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { useState } from "react";

const ProjectPreview = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fallback if project is missing or doesn't have a liveUrl
  if (!project || !project.liveUrl) {
    return <Navigate to={`/project/${id}`} replace />;
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500); // Small delay to trigger iframe reload effect
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col p-4 md:p-8">
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-widest text-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Project
        </button>
        <div className="font-display text-sm tracking-widest uppercase text-foreground/50">
          Live Preview
        </div>
      </motion.div>

      {/* Browser Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow flex flex-col w-full max-w-7xl mx-auto bg-zinc-950 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Browser Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/10 select-none">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          {/* Address Bar */}
          <div className="flex items-center justify-center flex-grow px-4">
            <div className="flex items-center gap-2 bg-zinc-950 border border-white/5 rounded-md px-3 py-1.5 w-full max-w-md mx-auto text-xs font-mono text-muted-foreground">
              <span className="text-white/30">https://</span>
              <span className="truncate">{project.id}.jesumjoe.dev</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <button onClick={handleRefresh} className="hover:text-white transition-colors">
              <RotateCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-primary" : ""}`} />
            </button>
            <button className="hover:text-white transition-colors hidden sm:block">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Browser Content (Iframe) */}
        <div className="flex-grow relative bg-background">
          {!isRefreshing ? (
            <iframe
              src={project.liveUrl}
              title={`${project.title} Preview`}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
              <RotateCw className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPreview;
