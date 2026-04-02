import { motion } from "motion/react";
import { Sparkles, ArrowRight, Quote } from "lucide-react";

const events = [
  {
    id: "lagos",
    title: "The Innovation Summit",
    location: "Civic Center, Victoria Island",
    label: "Lagos Meetup",
    img: "/previousmeetlagos.jpg",
    cols: "md:col-span-8",
  },
  {
    id: "stats",
    title: "500+",
    desc: "Tech Enthusiasts connected across Nigeria in 2023.",
    label: "Impact",
    cols: "md:col-span-4",
    type: "stats",
  },
  {
    id: "abuja",
    title: "Governance & Tech",
    location: "Transcorp Hilton, Abuja",
    label: "Abuja Meetup",
    img: "/previousmeetabuja.jpg",
    cols: "md:col-span-4",
  },
  {
    id: "ibadan",
    title: "The Developer Ecosystem",
    location: "University of Ibadan",
    label: "Ibadan Meetup",
    img: "/previousmeetibadan.jpg",
    cols: "md:col-span-4",
  },
  {
    id: "cta",
    title: "Hungry for more?",
    desc: "Explore our full archive of past events and speaker sessions.",
    cols: "md:col-span-4",
    type: "cta",
    link: "https://atcafrica.com/gallery",
  },
];

export default function Gallery() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container p-8 sm:p-12 md:p-20"
        >
          <div className="max-w-3xl relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 leading-[1.1]">
              Look back at where we've been.
            </h1>
            <p className="text-base sm:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Capturing the spirit of innovation across Nigerian tech hubs. From Lagos to Abuja to Ibadan, we curate moments that spark change.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-20 pointer-events-none">
            <div className="w-full h-full bg-linear-to-bl from-primary to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`${event.cols} group relative overflow-hidden rounded-2xl sm:rounded-3xl ${event.type === "stats"
                  ? "bg-primary p-6 sm:p-8 flex flex-col justify-between text-on-primary min-h-[280px]"
                  : event.type === "cta"
                    ? "bg-surface-container p-6 sm:p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-outline-variant/30 min-h-[280px]"
                    : "bg-surface-container-lowest ambient-shadow min-h-[280px]"
                }`}
            >
              {event.type === "stats" ? (
                <>
                  <Sparkles size={36} className="mb-4 sm:mb-6" />
                  <div>
                    <div className="text-5xl sm:text-6xl font-headline font-extrabold mb-2">{event.title}</div>
                    <div className="text-base sm:text-lg opacity-80">{event.desc}</div>
                  </div>
                  <div className="h-1 w-full bg-on-primary/20 rounded-full mt-4 sm:mt-6">
                    <div className="h-full w-2/3 bg-on-primary rounded-full" />
                  </div>
                </>
              ) : event.type === "cta" ? (
                <>
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <ArrowRight className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline font-extrabold text-on-surface mb-3 sm:mb-4">{event.title}</h3>
                  <p className="text-on-surface-variant mb-6 sm:mb-8 text-sm">{event.desc}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 sm:py-4 bg-primary text-on-primary rounded-full font-headline font-bold hover:bg-primary/90 transition-colors shadow-lg text-center block"
                  >
                    View More
                  </a>
                </>
              ) : (
                <>
                  {/* Image fills the entire card absolutely */}
                  <img
                    src={event.img}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Label badge */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                    <span className="px-3 sm:px-4 py-1 sm:py-2 bg-primary/90 text-white rounded-full font-headline font-bold text-xs sm:text-sm tracking-widest uppercase">
                      {event.label}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Hover text */}
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <h3 className="text-xl sm:text-2xl font-headline font-bold">{event.title}</h3>
                    <p className="text-white/80 mt-1 text-sm sm:text-base">{event.location}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 text-center">
        <Quote className="text-primary/30 mx-auto mb-6 sm:mb-8" size={52} />
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface leading-tight italic">
          "Tech is more than code; it's the community we build through shared moments and vision."
        </blockquote>
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
          <div className="w-8 sm:w-12 h-[1px] bg-outline-variant" />
          <cite className="not-italic font-headline font-bold text-primary text-sm sm:text-base">ATC Africa Curators</cite>
          <div className="w-8 sm:w-12 h-[1px] bg-outline-variant" />
        </div>
      </section>
    </div>
  );
}