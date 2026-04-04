import { motion, AnimatePresence } from "motion/react";
import { Calendar, Mic, ArrowRight, MessagesSquare, Brain, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const carouselImages = [
  { src: "/DSC_0832.JPG", alt: "ATC Meetup event" },
  { src: "/DSC_1156.jpg", alt: "ATC community gathering" },
  { src: "/DSC_1159.jpg", alt: "Tech enthusiasts at ATC" },
  { src: "/I89A0001.jpg", alt: "ATC Port Harcourt meetup" },
  { src: "/I89A0133 (1).jpg", alt: "ATC Port Harcourt meetup" },
  { src: "/IMG_5646 copy.jpg", alt: "ATC Port Harcourt meetup" },
];

// Preload all images immediately
carouselImages.forEach(({ src }) => {
  const img = new Image();
  img.src = src;
});

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % carouselImages.length;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-surface-container">
      {/* Previous image stays visible underneath until new one fully covers it */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={carouselImages[prev].src}
          alt={carouselImages[prev].alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
      )}

      {/* New image fades in on top */}
      <AnimatePresence mode="sync">
        <motion.img
          key={`current-${current}`}
          src={carouselImages[current].src}
          alt={carouselImages[current].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          onAnimationComplete={() => setPrev(null)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 2 }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low text-primary font-bold text-xs sm:text-sm mb-6 uppercase tracking-widest">
              <Calendar size={14} />
              12th July, 2025 • 9AM WAT
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-on-surface editorial-text leading-[0.9] mb-6 sm:mb-8">
              Level <span className="text-primary">Up</span>
              <br />
              Port Harcourt.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg mb-8 sm:mb-10 leading-relaxed font-sans">
              A gathering of tech enthusiasts in Port Harcourt, creating a welcoming space to learn, connect, and curate the future of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://flutterwave.com/pay/meetup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-extrabold shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                Register Now
              </a>
              <button
                onClick={() => navigate("/gallery")}
                className="border border-outline-variant/30 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-surface-container transition-colors"
              >
                View Gallery
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-5 relative"
          >
            <HeroCarousel />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container rounded-2xl -z-10 -rotate-12 opacity-40 blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section
      <section className="bg-surface-container-low py-20 sm:py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
            The Mission
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface leading-snug">
            "ATC Africa is more than a meetup. It's a{" "}
            <span className="text-primary">digital sanctuary</span> for creators, thinkers, and builders in the garden city to level up their craft."
          </p>
        </motion.div>
      </section> */}


      {/* Target Audience */}
      <section className="py-20 sm:py-24 bg-[#000] text-white px-4 sm:px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-12 sm:mb-16 editorial-text">
            Who is this Meetup
            <br />
            <span className="text-primary-container">designed for?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { id: "01", title: "Developers", desc: "From junior to senior level engineers." },
              { id: "02", title: "Designers", desc: "UI/UX, Product, and Visual designers." },
              { id: "03", title: "Founders", desc: "Entrepreneurs building local solutions." },
              { id: "04", title: "Community Manager", desc: "People who rally, organize, and grow the human side of tech." },
              { id: "05", title: "Project Manager", desc: "Those who turn ideas into timelines and teams into outcomes." },
              { id: "06", title: "Product Managers", desc: "Builders who sit at the intersection of users, business, and tech." },
              { id: "07", title: "Engineers", desc: "The hands that actually ship — from backend to the browser." },
              { id: "08", title: "Enthusiasts", desc: "Anyone curious about the tech space." },
            ].map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.04 }}
                className="p-4 sm:p-6 border-l-2 border-primary-container/30 bg-white/5 backdrop-blur-sm rounded-r-xl"
              >
                <span className="text-primary-container font-black text-xl sm:text-2xl block mb-2">{item.id}</span>
                <h4 className="text-base sm:text-xl font-bold">{item.title}</h4>
                <p className="text-on-surface-variant text-xs sm:text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Event Highlights */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4">Event Highlights</h2>
            <div className="w-16 sm:w-20 h-2 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="sm:col-span-2 md:col-span-2 md:row-span-2 bg-primary p-8 sm:p-10 rounded-[2rem] text-on-primary flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <Mic size={40} className="mb-4 sm:mb-6" />
                <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Keynote Session</h3>
                <p className="opacity-80 text-base sm:text-lg leading-relaxed">
                  Inspiring talks from industry veterans defining the next decade of African technology.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-tl-full group-hover:scale-150 transition-transform duration-500" />
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="sm:col-span-2 md:col-span-2 bg-surface-container-lowest p-6 sm:p-8 rounded-[2rem] ambient-shadow border border-outline-variant/10"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 sm:w-16 h-14 sm:h-16 shrink-0 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                  <MessagesSquare size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Panel Session</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base">Deep dives into local ecosystem challenges and opportunities.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-surface-container-high p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <Brain className="text-primary" size={36} />
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold">Breakout Sessions</h3>
                <p className="text-sm text-on-surface-variant mt-2">Hands-on workshops for practical skill building.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-primary-container p-6 sm:p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <Users size={36} />
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-on-surface">Networking Session</h3>
                <p className="text-sm opacity-80 mt-2">Connecting the brightest minds in Port Harcourt.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Partners Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/35 mb-4">
                <span className="w-5 h-px bg-white/30 inline-block" />
                Partners
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white editorial-text leading-tight">
                Community &<br />Strategic Partners
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/40 max-w-xs leading-relaxed md:text-right">
              Working together to build a robust ecosystem in the south-south.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl sm:rounded-3xl border border-white/8 bg-white/[0.03] overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch min-h-[280px]">

              {/* Left column: placeholder logo grid
              <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-white/8 p-10 sm:p-14 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl border border-white/10 bg-white/5 flex items-center justify-center"
                      style={{ opacity: 0.3 + (i % 3) * 0.2 }}
                    >
                      <div className="w-1/3 h-1/3 rounded-sm bg-white/20" />
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Right column: coming soon — fully centered */}
              <div className="md:w-1/2 p-10 sm:p-14 flex items-center justify-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-snug text-center">
                  <span className="text-primary-container">Coming Soon</span>
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-primary to-[#4b1979] p-10 sm:p-16 md:p-24 text-center text-on-primary relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black editorial-text mb-6 sm:mb-8">Ready to Level Up?</h2>
            <p className="text-base sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8 sm:mb-12">
              Secure your spot today and join hundreds of techies at the biggest gathering in Port Harcourt.
            </p>
            <Link
              to="/tickets"
              className="inline-block bg-surface text-primary px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Get Your Ticket Now
            </Link>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 border-[32px] border-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[48px] border-white/5 rounded-full pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
}
