import { motion } from "motion/react";
import { Star, Ticket, CheckCircle, MapPin, CalendarCheck } from "lucide-react";

export default function Tickets() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl signature-gradient p-12 lg:p-20 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 z-10">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-primary leading-tight tracking-tight mb-6">Grab Your Ticket</h1>
            <p className="text-on-primary/90 text-lg md:text-xl max-w-xl leading-relaxed">
              Join the most influential tech gathering in the Niger Delta. Secure your spot and be part of the future of innovation in Port Harcourt.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <motion.div 
              animate={{ rotate: [3, 0, 3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAblhsz2QnAZARQuTOXIXGR-d6WCy_UnSYmwwkdz3PqcvQ5YRcn7w43uKyB5iltJjX5YL97zk_xK7BEQalOZudZ0Ij5xMWSAcINHx6b1vkWaJXtiCX4s_Da8yhuw3u0k838JGHsSEWf5KJj0D9awd6Iz1bjaJgtoR-S9OM7r2qFhbR3upi9zOddzsqICUeqHiT4IxkQYlF5u7HPYJ5CYTIskvsTnornasavDOSM8tIjZxAVbM07rFqgPLRTatIE-EOCfqRVIoAT7kse" 
                alt="Tech conference stage" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Ticket Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Premium Ticket */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="group relative flex flex-col bg-surface-container-lowest rounded-3xl p-1 ambient-shadow transition-all duration-300"
        >
          <div className="absolute top-6 right-6">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Featured</span>
          </div>
          <div className="p-8 md:p-12 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl signature-gradient flex items-center justify-center">
                <Star className="text-white" size={24} fill="white" />
              </div>
              <h2 className="font-headline text-3xl font-extrabold">Premium Ticket</h2>
            </div>
            <div className="mb-10">
              <span className="text-5xl font-black font-headline text-primary">5K</span>
              <span className="text-on-surface-variant font-medium ml-2">/ per person</span>
            </div>
            <ul className="space-y-6 mb-12 flex-grow">
              {[
                "Access to Breakout session",
                "Event Certificate",
                "Swags & Refreshment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant">
                  <CheckCircle className="text-primary" size={24} />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full signature-gradient text-on-primary py-5 rounded-full font-bold text-lg active:scale-95 duration-200 shadow-xl transition-shadow hover:shadow-primary/20">
              Register Now
            </button>
          </div>
        </motion.div>

        {/* Basic Ticket */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="flex flex-col bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 md:p-12 transition-all hover:bg-surface-container-high duration-300"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
              <Ticket className="text-on-surface-variant" size={24} />
            </div>
            <h2 className="font-headline text-3xl font-extrabold text-on-surface-variant">Basic Ticket</h2>
          </div>
          <div className="mb-10 flex flex-col gap-1">
            <span className="text-5xl font-black font-headline text-on-surface-variant">Free</span>
            <span className="text-primary font-bold text-sm uppercase tracking-tighter">Ticket Coming soon</span>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            {[
              "Access to Breakout session",
              "Networking"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-on-surface-variant/70">
                <CheckCircle className="text-outline-variant" size={24} />
                <span className="font-medium text-lg italic">{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-surface-container-highest text-on-surface-variant py-5 rounded-full font-bold text-lg cursor-not-allowed opacity-60" disabled>
            Coming Soon
          </button>
        </motion.div>
      </section>

      {/* Info Grid */}
      <section className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-surface-container rounded-3xl p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-110 transition-transform duration-700">
              <img 
                src="https://picsum.photos/seed/ph-city/1200/600" 
                alt="Port Harcourt City" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="z-10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={24} />
                <h3 className="font-headline text-3xl font-bold">Location: The Arena</h3>
              </div>
              <p className="text-on-surface-variant font-medium">Join us at the heart of Port Harcourt's innovation hub. Ample parking and premium security guaranteed.</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-primary rounded-3xl p-10 flex flex-col items-center justify-center text-center text-on-primary"
          >
            <CalendarCheck className="text-on-primary text-6xl mb-6" size={60} />
            <h3 className="font-headline text-2xl font-bold mb-2">Save the Date</h3>
            <p className="opacity-80 font-medium">November 24th, 2024</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
