// import { motion } from "motion/react";
// import { Twitter, Linkedin, Globe, Mic2, Users, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// const speakers = [
//   {
//     name: "Amara Nwosu",
//     role: "CTO, Flutterwave",
//     topic: "Building Fintech Infrastructure for the Next Billion Users",
//     bio: "Amara leads engineering at one of Africa's most influential fintech companies, having scaled systems to handle millions of transactions daily across 34 countries.",
//     img: "/DSC_1156.jpg",
//     tags: ["FinTech", "Infrastructure", "Scale"],
//     social: { twitter: "#", linkedin: "#" },
//     featured: true,
//   },
//   {
//     name: "Tolu Adeyemi",
//     role: "Founder, DevHub Lagos",
//     topic: "Community-Led Growth: How Local Tech Ecosystems Win",
//     bio: "Serial community builder who has helped 5,000+ developers find mentors, jobs, and co-founders across West Africa.",
//     img: "/DSC_0832.JPG",
//     tags: ["Community", "Growth", "Ecosystem"],
//     social: { twitter: "#", linkedin: "#" },
//     featured: true,
//   },
//   {
//     name: "Chisom Eze",
//     role: "Senior Product Designer, Google",
//     topic: "Designing for Emerging Markets: Context is Everything",
//     bio: "Chisom shapes how Google's products serve 1B+ African users, bringing a decade of research into low-bandwidth, multilingual design systems.",
//     img: "/DSC_1159.jpg",
//     tags: ["Design", "Product", "Research"],
//     social: { twitter: "#", linkedin: "#", website: "#" },
//     featured: false,
//   },
//   {
//     name: "Emeka Obiora",
//     role: "Partner, Ventures Platform",
//     topic: "What Investors Look For in Early-Stage African Startups",
//     bio: "Has deployed capital into 60+ startups across the continent, with a focus on deep tech, climate, and developer tools.",
//     img: "/I89A0001.jpg",
//     tags: ["Venture Capital", "Startups", "Investment"],
//     social: { twitter: "#", linkedin: "#" },
//     featured: false,
//   },
//   {
//     name: "Ngozi Abiodun",
//     role: "AI Engineer, Microsoft Africa",
//     topic: "Practical AI: Building Real Products with LLMs Today",
//     bio: "Works on AI tooling and developer experience at Microsoft's Africa Development Centre, bridging the gap between research and production.",
//     img: "/previousmeetlagos.jpg",
//     tags: ["AI", "Engineering", "LLMs"],
//     social: { twitter: "#", linkedin: "#" },
//     featured: false,
//   },
//   {
//     name: "Ifeanyi Obi",
//     role: "CEO, Pyale WorkHub",
//     topic: "Port Harcourt Rising: The Garden City's Tech Moment",
//     bio: "Ifeanyi is at the centre of Port Harcourt's emerging startup scene, running the city's most active co-working and incubation space.",
//     img: "/previousmeetibadan.jpg",
//     tags: ["Startups", "Port Harcourt", "Workspace"],
//     social: { twitter: "#", linkedin: "#", website: "#" },
//     featured: false,
//   },
// ];

// const sessionTypes = [
//   { icon: <Mic2 size={28} />, label: "Keynotes session", count: "", desc: "Headline talks from industry leaders" },
//   { icon: <Users size={28} />, label: "Panels session", count: "", desc: "Multi-speaker deep dives" },
//   { icon: <Sparkles size={28} />, label: "BreakOut session", count: "", desc: "Hands-on breakout sessions" },
//   { icon: <Users size={28} />, label: "Networking Session", count: "", desc: "Great Networking Sessions" },
// ];

// export default function Speakers() {
//   const featured = speakers.filter((s) => s.featured);
//   const rest = speakers.filter((s) => !s.featured);

//   return (
//     <div className="pt-24 sm:pt-32 pb-20">

//       {/* ── Hero ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0d0d0d] px-8 sm:px-16 py-16 sm:py-24"
//         >
//           {/* Glow blobs */}
//           <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] pointer-events-none" />

//           <div className="relative z-10 max-w-3xl">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-container font-bold text-xs uppercase tracking-widest mb-6">
//               <Mic2 size={14} />
//               Meet the Speakers
//             </span>
//             <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white editorial-text leading-[0.9] mb-6">
//               Voices that<br />
//               <span className="text-primary-container">move</span> the needle.
//             </h1>
//             <p className="text-white/60 text-base sm:text-xl max-w-xl leading-relaxed">
//               Founders, engineers, designers, and investors — the people defining what African tech looks like in the next decade.
//             </p>
//           </div>

//           {/* Session type pills */}
//           <div className="relative z-10 flex flex-wrap gap-4 mt-12 sm:mt-16">
//             {sessionTypes.map((s) => (
//               <div key={s.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
//                 <span className="text-primary-container">{s.icon}</span>
//                 <div>
//                   <p className="text-white font-bold text-sm">{s.count} {s.label}</p>
//                   <p className="text-white/40 text-xs">{s.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* ── Featured Speakers ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
//         <div className="mb-10 sm:mb-14">
//           <h2 className="text-3xl sm:text-4xl font-black text-on-surface editorial-text">Featured Speakers</h2>
//           <div className="w-16 h-1.5 bg-primary rounded-full mt-3" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//           {featured.map((speaker, i) => (
//             <motion.div
//               key={speaker.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-lowest ambient-shadow"
//             >
//               {/* Image */}
//               <div className="relative h-64 sm:h-80 overflow-hidden">
//                 <img
//                   src={speaker.img}
//                   alt={speaker.name}
//                   className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/20 to-transparent" />

//                 {/* Social links */}
//                 <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {speaker.social.twitter && (
//                     <a href={speaker.social.twitter} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
//                       <Twitter size={15} />
//                     </a>
//                   )}
//                   {speaker.social.linkedin && (
//                     <a href={speaker.social.linkedin} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
//                       <Linkedin size={15} />
//                     </a>
//                   )}
//                   {speaker.social.website && (
//                     <a href={speaker.social.website} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
//                       <Globe size={15} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="p-6 sm:p-8">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {speaker.tags.map((tag) => (
//                     <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl font-black text-on-surface">{speaker.name}</h3>
//                 <p className="text-primary font-bold text-sm mt-1 mb-3">{speaker.role}</p>
//                 <div className="flex items-start gap-3 bg-surface-container rounded-xl p-4 mb-4">
//                   <Mic2 size={16} className="text-primary shrink-0 mt-0.5" />
//                   <p className="text-on-surface font-semibold text-sm leading-snug italic">"{speaker.topic}"</p>
//                 </div>
//                 <p className="text-on-surface-variant text-sm leading-relaxed">{speaker.bio}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ── Speaker Grid ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
//         <div className="mb-10 sm:mb-14">
//           <h2 className="text-3xl sm:text-4xl font-black text-on-surface editorial-text">All Speakers</h2>
//           <div className="w-16 h-1.5 bg-primary rounded-full mt-3" />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
//           {rest.map((speaker, i) => (
//             <motion.div
//               key={speaker.name}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               whileHover={{ y: -6 }}
//               className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest ambient-shadow flex flex-col"
//             >
//               {/* Image */}
//               <div className="relative h-52 overflow-hidden shrink-0">
//                 <img
//                   src={speaker.img}
//                   alt={speaker.name}
//                   className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//                 {/* Social links on hover */}
//                 <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {speaker.social.twitter && (
//                     <a href={speaker.social.twitter} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
//                       <Twitter size={13} />
//                     </a>
//                   )}
//                   {speaker.social.linkedin && (
//                     <a href={speaker.social.linkedin} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
//                       <Linkedin size={13} />
//                     </a>
//                   )}
//                   {speaker.social.website && (
//                     <a href={speaker.social.website} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors">
//                       <Globe size={13} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="p-5 sm:p-6 flex flex-col flex-grow">
//                 <div className="flex flex-wrap gap-1.5 mb-3">
//                   {speaker.tags.slice(0, 2).map((tag) => (
//                     <span key={tag} className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-black text-on-surface">{speaker.name}</h3>
//                 <p className="text-primary font-bold text-xs mt-1 mb-3">{speaker.role}</p>
//                 <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed flex-grow">{speaker.bio}</p>
//                 <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-start gap-2">
//                   <Mic2 size={13} className="text-primary shrink-0 mt-0.5" />
//                   <p className="text-on-surface text-xs font-semibold italic leading-snug">"{speaker.topic}"</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ── Speak at ATC CTA ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary p-10 sm:p-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10"
//         >
//           {/* Decorative rings */}
//           <div className="absolute -top-20 -left-20 w-64 h-64 border-[32px] border-white/10 rounded-full pointer-events-none" />
//           <div className="absolute -bottom-16 -right-16 w-80 h-80 border-[40px] border-white/5 rounded-full pointer-events-none" />

//           <div className="relative z-10 max-w-xl">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-primary editorial-text mb-4">
//               Got something to say?
//             </h2>
//             <p className="text-on-primary/80 text-base sm:text-lg leading-relaxed">
//               We're looking for builders, thinkers, and doers who have a story worth sharing with Port Harcourt's tech community.
//             </p>
//           </div>

//           <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
//             <a
//               href="https://docs.google.com/forms"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-surface text-primary px-8 py-4 rounded-full font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
//             >
//               Apply to Speak
//             </a>
//             <Link
//               to="/tickets"
//               className="border-2 border-on-primary/30 text-on-primary px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-colors text-center"
//             >
//               Get a Ticket
//             </Link>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }


import { motion } from "motion/react";
import { Twitter, Linkedin, Globe, Mic2, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sessionTypes = [
  {
    icon: <Mic2 size={20} />,
    label: "Keynote Sessions",
    desc: "Headline talks from industry leaders",
  },
  {
    icon: <Users size={20} />,
    label: "Panel Sessions",
    desc: "Multi-speaker deep dives",
  },
  {
    icon: <Sparkles size={20} />,
    label: "Breakout Sessions",
    desc: "Hands-on interactive workshops",
  },
  {
    icon: <Users size={20} />,
    label: "Networking Sessions",
    desc: "Connect with the community",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Speakers() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16 sm:space-y-24">

      {/* ── Hero Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0d0d0d] px-8 sm:px-14 py-14 sm:py-20"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-10 left-1/4 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-container/15 blur-[130px]" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-container">
              <Mic2 size={12} />
              Meet the Speakers
            </div>

            <h1 className="editorial-text mb-6 text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl">
              We're finalising an incredible lineup of community builders, tech leaders, and innovators.
            </h1>

            <p className="text-base text-white/50 sm:text-lg">
              Based in Port Harcourt — check back soon for the full announcement.
            </p>
          </div>

          {/* Session type pills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 mt-12 flex flex-wrap gap-3"
          >
            {sessionTypes.map((s) => (
              <motion.div
                key={s.label}
                variants={itemVariants}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
              >
                <span className="shrink-0 text-primary-container">{s.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white">{s.label}</p>
                  <p className="text-xs text-white/40">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Coming Soon placeholder ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-black py-20 text-center"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Mic2 size={28} className="text-white/30" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-white/60">Speaker lineup coming soon</h2>
          <p className="max-w-xs text-sm text-white/30 leading-relaxed">
            We're putting together something special. Follow us on socials so you don't miss the reveal.
          </p>
        </motion.div>
      </section>

      {/* ── Speak at ATC CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-10 py-14 sm:px-16 sm:py-20 md:px-20"
        >
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full border-[40px] border-white/5" />

          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* Copy */}
            <div className="max-w-xl">
              <h2 className="editorial-text mb-4 text-3xl font-black text-on-primary sm:text-4xl md:text-5xl">
                Got something to say?
              </h2>
              <p className="text-base leading-relaxed text-on-primary/75 sm:text-lg">
                We're looking for builders, thinkers, and doers who have a story worth sharing with Port Harcourt's tech community.
              </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="https://forms.gle/kNF3VrBf2vsEC3iV9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-surface px-8 py-4 text-base font-black text-primary shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Apply to Speak
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/tickets"
                className="inline-flex items-center justify-center rounded-full border-2 border-on-primary/30 px-8 py-4 text-base font-bold text-on-primary transition-colors hover:bg-white/10"
              >
                Get a Ticket
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}