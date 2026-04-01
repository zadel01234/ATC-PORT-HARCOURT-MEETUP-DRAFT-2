import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      {/* Hero Section / About Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block py-1 px-4 rounded-full bg-primary-container text-on-surface text-xs font-bold uppercase tracking-widest">About the Movement</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              ATC Africa: A powerhouse of change-makers shaping the future of technology ecosystem in Africa.
            </h1>
          </div>
          <div className="border-l-4 border-primary pl-8 py-2">
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light italic">
              "We are not just organizing events; we are architecting the next decade of innovation in the Garden City and beyond."
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 pt-4">
            <div className="flex-1 space-y-3">
              <h3 className="font-headline font-bold text-lg text-primary">Nurturing Local Talent</h3>
              <p className="text-on-surface-variant leading-relaxed">By providing direct access to global networks and local mentorship, we bridge the gap between curiosity and career-defining mastery.</p>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="font-headline font-bold text-lg text-primary">Fostering Innovation</h3>
              <p className="text-on-surface-variant leading-relaxed">Our cross-sector collaborations ensure that technology isn't siloed, but acts as a catalyst for agriculture, energy, and creative industries.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-container rounded-2xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/atc-about/800/1000" 
              alt="Tech ecosystem gathering" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs ambient-shadow">
            <div className="flex items-center gap-4 mb-2">
              <MapPin className="text-primary" size={20} />
              <span className="font-bold text-sm tracking-widest uppercase">Port Harcourt</span>
            </div>
            <p className="text-on-surface text-sm leading-relaxed">The heart of the Niger Delta's digital transformation, where energy meets intelligence.</p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary p-12 md:p-20 rounded-3xl text-on-primary grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        {[
          { label: "Developers", value: "5K+" },
          { label: "Startups", value: "120+" },
          { label: "Corporate Partners", value: "45+" },
          { label: "Tech Capital", value: "24M" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="space-y-2 relative"
          >
            <div className="text-5xl font-black font-headline tracking-tighter">{stat.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-on-primary/60">{stat.label}</div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
