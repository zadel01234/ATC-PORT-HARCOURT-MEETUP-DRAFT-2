import { motion } from "motion/react";
import { Star, Ticket, CheckCircle, MapPin, CalendarCheck } from "lucide-react";

export default function Tickets() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="mb-16 sm:mb-20">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl signature-gradient p-8 sm:p-12 lg:p-20 flex flex-col md:flex-row items-center gap-10 sm:gap-12"
        >
          <div className="flex-1 z-10">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold text-on-primary leading-tight tracking-tight mb-4 sm:mb-6">
              Grab Your Ticket
            </h1>
            <p className="text-on-primary/90 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              Join the most influential tech gathering in the Niger Delta. Secure your spot and be part of the future of innovation in Port Harcourt.
            </p>
          </div>

          <div className="flex-1 relative w-full">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              animate={{ rotate: [2, 0, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAblhsz2QnAZARQuTOXIXGR-d6WCy_UnSYmwwkdz3PqcvQ5YRcn7w43uKyB5iltJjX5YL97zk_xK7BEQalOZudZ0Ij5xMWSAcINHx6b1vkWaJXtiCX4s_Da8yhuw3u0k838JGHsSEWf5KJj0D9awd6Iz1bjaJgtoR-S9OM7r2qFhbR3upi9zOddzsqICUeqHiT4IxkQYlF5u7HPYJ5CYTIskvsTnornasavDOSM8tIjZxAVbM07rFqgPLRTatIE-EOCfqRVIoAT7kse"
                alt="Port Harcourt Meetup"
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </motion.div> */}
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

      {/* Ticket Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">

        {/* Premium Ticket */}
        <motion.div
          whileHover={{ y: -8 }}
          className="group relative flex flex-col bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-1 ambient-shadow transition-all duration-300"
        >
          <div className="absolute top-5 sm:top-6 right-5 sm:right-6 z-10">
            <span className="bg-primary/10 text-primary px-3 sm:px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Featured
            </span>
          </div>
          <div className="p-6 sm:p-8 md:p-12 flex flex-col h-full">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl signature-gradient flex items-center justify-center shrink-0">
                <Star className="text-white" size={20} fill="white" />
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold">Premium Ticket</h2>
            </div>

            <div className="mb-8 sm:mb-10">
              <span className="text-4xl sm:text-5xl font-black font-headline text-primary">₦5,000</span>
              <span className="text-on-surface-variant font-medium ml-2 text-sm sm:text-base">/ per person</span>
            </div>

            <ul className="space-y-4 sm:space-y-6 mb-10 sm:mb-12 flex-grow">
              {[
                "Access to all Breakout Sessions",
                "Event Certificate",
                "Swags & Refreshment",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 sm:gap-4 text-on-surface-variant">
                  <CheckCircle className="text-primary shrink-0" size={22} />
                  <span className="font-medium text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://flutterwave.com/pay/meetup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full signature-gradient text-on-primary py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg active:scale-95 duration-200 shadow-xl hover:shadow-primary/30 transition-all text-center block"
            >
              Register Now
            </a>
          </div>
        </motion.div>

        {/* Basic Ticket */}
        <motion.div
          whileHover={{ y: -8 }}
          className="flex flex-col bg-surface-container-low border border-outline-variant/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 transition-all hover:bg-surface-container duration-300"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
              <Ticket className="text-on-surface-variant" size={22} />
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface-variant">
              Basic Ticket
            </h2>
          </div>

          <div className="mb-8 sm:mb-10 flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl font-black font-headline text-on-surface-variant">Free</span>
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest">
              Ticket Coming Soon
            </span>
          </div>

          <ul className="space-y-4 sm:space-y-6 mb-10 sm:mb-12 flex-grow">
            {["Access to Breakout Sessions", "Networking"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 sm:gap-4 text-on-surface-variant/70">
                <CheckCircle className="text-outline-variant shrink-0" size={22} />
                <span className="font-medium text-base sm:text-lg italic">{item}</span>
              </li>
            ))}
          </ul>

          <button
            disabled
            className="w-full bg-surface-container-high text-on-surface-variant py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg cursor-not-allowed opacity-50"
          >
            Coming Soon
          </button>
        </motion.div>
      </section>

      {/* Info Grid */}
      <section className="mt-20 sm:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-surface-container rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-end min-h-[260px] sm:min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/DSC_1159.jpg"
                alt="Port Harcourt venue"
                className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-surface-container/50 to-transparent" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <MapPin className="text-primary shrink-0" size={22} />
                <h3 className="font-headline text-2xl sm:text-3xl font-bold">Location: The Arena</h3>
              </div>
              <p className="text-on-surface-variant font-medium text-sm sm:text-base">
                Join us at the heart of Port Harcourt's innovation hub. Ample parking and premium security guaranteed.
              </p>
            </div>
          </motion.div>

          {/* Date Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center text-on-primary min-h-[200px]"
          >
            <CalendarCheck size={52} className="mb-4 sm:mb-6" />
            <h3 className="font-headline text-xl sm:text-2xl font-bold mb-2">Save the Date</h3>
            <p className="opacity-80 font-medium text-sm sm:text-base">July 12th, 2025</p>
            <p className="opacity-60 text-xs mt-1">9:00 AM WAT</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
