import { motion } from "motion/react";
import { Calendar, Mic, MessagesSquare, Brain, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low text-primary font-bold text-sm mb-6 uppercase tracking-widest">
              <Calendar size={16} />
              12th July, 2025 • 9AM WAT
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface editorial-text leading-[0.9] mb-8">
              Level <span className="text-primary">Up</span><br />Port Harcourt.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed font-sans">
              A gathering of tech enthusiasts in Port Harcourt, creating a welcoming space to learn, connect, and curate the future of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-extrabold shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                Register Now
              </button>
              <button className="border border-outline-variant/30 px-10 py-5 rounded-full text-lg font-bold hover:bg-surface-container transition-colors">
                View Agenda
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-5 relative"
          >
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-primary-container/20">
              <img 
                src="https://picsum.photos/seed/tech-event/800/800" 
                alt="Tech community event" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container rounded-2xl -z-10 -rotate-12 opacity-50 blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-surface-container-low py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">The Mission</h2>
          <p className="text-3xl md:text-4xl font-headline font-bold text-on-surface leading-tight">
            "ATC Africa is more than a meetup. It’s a <span className="text-primary-container">digital sanctuary</span> for creators, thinkers, and builders in the garden city to level up their craft."
          </p>
        </motion.div>
      </section>

      {/* Event Highlights */}
      <section className="py-32 px-6 bg-surface max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4">Event Highlights</h2>
          <div className="w-20 h-2 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-primary p-10 rounded-[2rem] text-on-primary flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <Mic className="text-4xl mb-6" size={40} />
              <h3 className="text-4xl font-bold mb-4">Keynote Session</h3>
              <p className="opacity-80 text-lg leading-relaxed">Inspiring talks from industry veterans defining the next decade of African technology.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-tl-full group-hover:scale-150 transition-transform duration-500"></div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] ambient-shadow border border-outline-variant/10 group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                <MessagesSquare size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Panel Session</h3>
                <p className="text-on-surface-variant">Deep dives into the local ecosystem challenges and opportunities.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-surface-container-high p-8 rounded-[2rem] flex flex-col justify-between"
          >
            <Brain className="text-primary" size={40} />
            <div>
              <h3 className="text-xl font-bold mt-8">Breakout Sessions</h3>
              <p className="text-sm text-on-surface-variant mt-2">Hands-on workshops for practical skill building.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-primary-container p-8 rounded-[2rem] text-on-surface flex flex-col justify-between"
          >
            <Users size={40} />
            <div>
              <h3 className="text-xl font-bold mt-8 text-on-surface">Networking Session</h3>
              <p className="text-sm opacity-80 mt-2">Connecting the brightest minds in Port Harcourt.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-[#000] text-on-primarys px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-16 editorial-text">Who is this Meetup<br /><span className="text-primary-container">designed for?</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Developers", desc: "From junior to senior level engineers." },
              { id: "02", title: "Designers", desc: "UI/UX, Product, and Visual designers." },
              { id: "03", title: "Founders", desc: "Entrepreneurs building local solutions." },
              { id: "04", title: "Enthusiasts", desc: "Anyone curious about the tech space." }
            ].map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="p-6 border-l-2 border-primary-container/30 bg-white/5 backdrop-blur-sm rounded-r-xl"
              >
                <span className="text-primary-container font-black text-2xl block mb-2">{item.id}</span>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-on-surface-variant text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-on-surface">Community & Strategic Partners</h2>
              <p className="text-on-surface-variant mt-4">Working together to build a robust ecosystem in the south-south.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-12 items-center">
              {[
                "GDG Port Harcourt",
                "Friends of Figma PH",
                "Pyale WorkHub"
              ].map((partner, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-full h-24 bg-surface-container rounded-2xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                    <span className="font-bold text-on-surface-variant text-center px-4">{partner}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-[#4b1979] p-12 md:p-24 text-center text-on-primary relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black editorial-text mb-8">Ready to Level Up?</h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-12">Secure your spot today and join hundreds of techies at the biggest gathering in Port Harcourt.</p>
            <button className="bg-surface text-primary px-12 py-6 rounded-full text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all">
              Get Your Ticket Now
            </button>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 border-[32px] border-white/10 rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[48px] border-white/5 rounded-full"></div>
        </motion.div>
      </section>
    </div>
  );
}
