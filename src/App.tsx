import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { LayoutGroup } from "framer-motion";

const queryClient = new QueryClient();


const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('appLoaded');
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('appLoaded', 'true');
  };

  return (
    <LayoutGroup>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </LayoutGroup>
  );
};

export default App;
