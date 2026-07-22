import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative bg-transparent border-t border-white/10">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-display text-5xl md:text-8xl font-bold mb-12 text-foreground m-0 leading-none uppercase tracking-tight">
              Get In <br />
              <span className="text-primary">Touch.</span>
            </h2>
            
            <p className="text-muted-foreground mb-16 max-w-md text-xl font-light leading-relaxed uppercase tracking-wider">
              Interested in working together or have a question? I'm always open to discussing new projects.
            </p>

            <div className="flex flex-col gap-12">
              <div>
                <h4 className="font-display text-2xl uppercase tracking-widest text-primary mb-2">Location</h4>
                <p className="text-foreground text-xl font-light uppercase tracking-wider">Bengaluru, Karnataka, India</p>
              </div>

              <div>
                <h4 className="font-display text-2xl uppercase tracking-widest text-primary mb-2">E-mail</h4>
                <a href="mailto:jesumjoe@gmail.com" className="text-foreground text-xl font-light hover:text-primary transition-colors uppercase tracking-wider">
                  jesumjoe@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors focus:ring-0"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="E-MAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors focus:ring-0"
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="PHONE"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors focus:ring-0"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="MESSAGE"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-white/20 pb-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors focus:ring-0 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="group relative inline-flex items-center justify-center px-12 py-6 font-display text-2xl uppercase tracking-widest text-background bg-primary hover:bg-foreground hover:text-background transition-colors duration-300 self-start mt-4 overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 h-full w-0 bg-foreground group-hover:w-full transition-all duration-300 ease-out z-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
