import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-24 sm:space-y-32">

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 sm:space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block py-1 px-4 rounded-full bg-primary-container text-on-surface text-xs font-bold uppercase tracking-widest">
              About the Movement
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              ATC Africa: A powerhouse of change-makers shaping the future of Africa's technology ecosystem.
            </h1>
          </div>
          <div className="border-l-4 border-primary pl-6 sm:pl-8 py-2">
            <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light italic">
              "We are not just organizing events; we are architecting the next decade of innovation in the Garden City and beyond."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="flex-1 space-y-3">
              <h3 className="font-headline font-bold text-base sm:text-lg text-primary">Nurturing Local Talent</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                By providing direct access to global networks and local mentorship, we bridge the gap between curiosity and career-defining mastery.
              </p>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="font-headline font-bold text-base sm:text-lg text-primary">Fostering Innovation</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                Our cross-sector collaborations ensure that technology isn't siloed, but acts as a catalyst for agriculture, energy, and creative industries.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative group mt-8 lg:mt-0"
        >
          <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-primary-container rounded-2xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/previousmeetlagos.jpg"
              alt="Tech ecosystem gathering"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-4 bg-surface-container-lowest p-5 sm:p-8 rounded-xl shadow-xl max-w-[220px] sm:max-w-xs">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <MapPin className="text-primary shrink-0" size={18} />
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">Port Harcourt</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
              The heart of the Niger Delta's digital transformation, where energy meets intelligence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 sm:gap-12">
        {/* Image */}
        <div className="w-full md:w-7/12 relative group overflow-hidden rounded-xl">
          <img
            src="/previousmeetibadan.jpg"
            alt="Our Mission"
            className="w-full aspect-[16/9] object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
          />
          {/* Hover overlay animation */}
          <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 rounded-xl transition-all duration-500 pointer-events-none" />
        </div>
        {/* Text */}
        <div className="w-full md:w-5/12">
          <h2 className="font-headline font-bold text-4xl sm:text-5xl mb-4 sm:mb-6">OUR MISSION</h2>
          <p className="text-on-surface-variant text-lg sm:text-2xl mb-6 sm:mb-8 leading-relaxed">
            To be a community of change makers who will partake in shaping the future of technology
          </p>
          <div className="flex flex-wrap gap-2">
            {["Community", "Change", "Tech"].map((tag) => (
              <span key={tag} className="bg-surface-container-low text-primary px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 sm:gap-12">
        {/* Image */}
        <div className="w-full md:w-7/12 relative group overflow-hidden rounded-xl">
          <img
            src="/previousmeetabuja.jpg"
            alt="Our Vision"
            className="w-full aspect-[16/9] object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 rounded-xl transition-all duration-500 pointer-events-none" />
        </div>
        {/* Text */}
        <div className="w-full md:w-5/12">
          <h2 className="font-headline font-bold text-4xl sm:text-5xl mb-4 sm:mb-6">OUR VISION</h2>
          <p className="text-on-surface-variant text-lg sm:text-2xl mb-6 sm:mb-8 leading-relaxed">
            Our goal is to build a quality and comprehensive community for technology infrastructure
          </p>
          <div className="flex flex-wrap gap-2">
            {["Build", "Infrastructure", "Community"].map((tag) => (
              <span key={tag} className="bg-surface-container-low text-primary px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary p-10 sm:p-16 md:p-20 rounded-3xl text-on-primary grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
        {[
          { label: "Developers", value: "5K+" },
          { label: "Startups", value: "120+" },
          { label: "Partners", value: "45+" },
          { label: "Tech Capital", value: "24M" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl sm:text-5xl font-black">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest opacity-70 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
