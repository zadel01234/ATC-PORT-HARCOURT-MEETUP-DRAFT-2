// import { motion } from "motion/react";
// import { MapPin, Building2, } from "lucide-react";

// export default function About() {
//   return (
//     <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
//       {/* Hero Section / About Content */}
//       <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="lg:col-span-7 space-y-8"
//         >
//           <div className="space-y-4">
//             <span className="inline-block py-1 px-4 rounded-full bg-primary-container text-on-surface text-xs font-bold uppercase tracking-widest">About the Movement</span>
//             <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
//               ATC Africa: A powerhouse of change-makers shaping the future of technology ecosystem in Africa.
//             </h1>
//           </div>
//           <div className="border-l-4 border-primary pl-8 py-2">
//             <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light italic">
//               "We are not just organizing events; we are architecting the next decade of innovation in the Garden City and beyond."
//             </p>
//           </div>
//           <div className="flex flex-col md:flex-row gap-8 pt-4">
//             <div className="flex-1 space-y-3">
//               <h3 className="font-headline font-bold text-lg text-primary">Nurturing Local Talent</h3>
//               <p className="text-on-surface-variant leading-relaxed">By providing direct access to global networks and local mentorship, we bridge the gap between curiosity and career-defining mastery.</p>
//             </div>
//             <div className="flex-1 space-y-3">
//               <h3 className="font-headline font-bold text-lg text-primary">Fostering Innovation</h3>
//               <p className="text-on-surface-variant leading-relaxed">Our cross-sector collaborations ensure that technology isn't siloed, but acts as a catalyst for agriculture, energy, and creative industries.</p>
//             </div>
//           </div>
//         </motion.div>
        
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="lg:col-span-5 relative group"
//         >
//           <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-container rounded-2xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
//           <div className="rounded-xl overflow-hidden shadow-2xl">
//             <img 
//               src="https://picsum.photos/seed/atc-about/800/1000" 
//               alt="Tech ecosystem gathering" 
//               className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
//               referrerPolicy="no-referrer"
//             />
//           </div>
//           <div className="absolute -bottom-10 -right-4 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs ambient-shadow">
//             <div className="flex items-center gap-4 mb-2">
//               <MapPin className="text-primary" size={20} />
//               <span className="font-bold text-sm tracking-widest uppercase">Port Harcourt</span>
//             </div>
//             <p className="text-on-surface text-sm leading-relaxed">The heart of the Niger Delta's digital transformation, where energy meets intelligence.</p>
//           </div>
//         </motion.div>
//       </section>
//       <section className=" flex flex-col md:flex-row items-center gap-12">
//         {/* Lagos */}
//         <section className="max-w-7xl mx-auto px-8 mb-20">
//           <div className="editorial-grid items-center">
//             <div className="col-span-12 md:col-span-7 relative group">
//               <div className="absolute -inset-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors"></div>
//               <img
//                 className="w-full aspect-[16/9] object-cover rounded-xl relative z-10 ambient-shadow grayscale hover:grayscale-0 transition-all duration-700"
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7JkHQkjHfh0E6XM8upfumeVFSMzPTvA2wPscMrK6I819GzWa4OFUSgcVOxSjdlq7g_kLQgyg8tputizQ4rLI1kDoNr1OmXhfWIaJ0A-RbfPqIeOrnJm6x-2maeXAVxVWDB4BeOUmQFNkxlaoUqgsjrHblaKGsQXKjd1LV08VW7IkWT0f4L9prLCXSKi6mZeABi2daB9PPOqpzmt_uT0H1cKxvg4dG9TTkh31TOu9k34wR-6tFpc2BGcvm6U6_Yt09yJVii9GFC1aP"
//                 referrerPolicy="no-referrer"
//               />
//             </div>
//             <div className="col-span-12 md:col-span-5 md:pl-12">
//               <div className="flex items-center gap-4 mb-6">
//                 <MapPin className="text-primary" size={20} />
//                 <span className="text-sm font-bold tracking-widest uppercase">Lagos, Nigeria</span>
//               </div>
//               <h2 className="font-headline font-bold text-5xl tracking-tight mb-6">The Innovation Summit</h2>
//               <p className="text-on-surface-variant mb-8 leading-loose">
//                 The flagship event where 500+ developers, founders, and investors converged to map out the future of FinTech in West Africa. A day of raw talent and high-stakes networking.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {['FinTech', 'Venture Capital', 'Scale'].map(tag => (
//                   <span key={tag} className="bg-secondary-container px-4 py-1 rounded-full text-xs font-semibold text-on-secondary-container">{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Abuja */}
//         <section className="max-w-7xl mx-auto px-8 mb-20">
//           <div className="editorial-grid items-center">
//             <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:pr-12 text-right">
//               <div className="flex items-center gap-4 mb-6 justify-end">
//                 <span className="text-sm font-bold tracking-widest uppercase">Abuja, FCT</span>
//                 <Building2 className="text-primary" size={20} />
//               </div>
//               <h2 className="font-headline font-bold text-5xl tracking-tight mb-6">Governance & Tech</h2>
//               <p className="text-on-surface-variant mb-8 leading-loose">
//                 Bridging the gap between policy makers and software engineers. We discussed data privacy, digital infrastructure, and the regulatory frameworks needed for a billion-dollar ecosystem.
//               </p>
//               <div className="flex flex-wrap gap-2 justify-end">
//                 {['Policy', 'Infrastructure', 'Data'].map(tag => (
//                   <span key={tag} className="bg-secondary-container px-4 py-1 rounded-full text-xs font-semibold text-on-secondary-container">{tag}</span>
//                 ))}
//               </div>
//             </div>
//             <div className="col-span-12 md:col-span-7 order-1 md:order-2 relative group">
//               <div className="absolute -inset-4 bg-tertiary/5 rounded-2xl group-hover:bg-tertiary/10 transition-colors"></div>
//               <img
//                 className="w-full aspect-[16/9] object-cover rounded-xl relative z-10 ambient-shadow grayscale hover:grayscale-0 transition-all duration-700"
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvWnmWBjCgBKievoT8UIBj6Cld2OXChzH2W9I2sIsD0n1AlATMaqLnB9PKaN6vNezh3nOdYN11_WAhpsqUurVEt3541xya2SgrZ4XW4jLZdRbMfHBilcvSXPUO9epHeX6HjCeT94rvEIEq18wx9W1aDRjy1cOAAYB_9fiMFBGaizsgJuAC2afBBg7HEam-GokpXsLlccST5fBnkoS5wbz2pGpjabRArISLexqZ_iT5X4PslUUdV4RhBHFypKqkQqbNF7pnASDOTbkL"
//                 referrerPolicy="no-referrer"
//               />
//             </div>
//           </div>
//         </section>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-primary p-12 md:p-20 rounded-3xl text-on-primary grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
//         {[
//           { label: "Developers", value: "5K+" },
//           { label: "Startups", value: "120+" },
//           { label: "Corporate Partners", value: "45+" },
//           { label: "Tech Capital", value: "24M" }
//         ].map((stat, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="space-y-2 relative"
//           >
//             <div className="text-5xl font-black font-headline tracking-tighter">{stat.value}</div>
//             <div className="text-xs font-bold uppercase tracking-widest text-on-primary/60">{stat.label}</div>
//           </motion.div>
//         ))}
//       </section>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block py-1 px-4 rounded-full bg-primary-container text-on-surface text-xs font-bold uppercase tracking-widest">
              About the Movement
            </span>

            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              ATC Africa: A powerhouse of change-makers shaping the future of Africa’s technology ecosystem.
            </h1>
          </div>

          <div className="border-l-4 border-primary pl-8 py-2">
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light italic">
              "We are not just organizing events; we are architecting the next decade of innovation in the Garden City and beyond."
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 pt-4">
            <div className="flex-1 space-y-3">
              <h3 className="font-headline font-bold text-lg text-primary">
                Nurturing Local Talent
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                By providing direct access to global networks and local mentorship, we bridge the gap between curiosity and career-defining mastery.
              </p>
            </div>

            <div className="flex-1 space-y-3">
              <h3 className="font-headline font-bold text-lg text-primary">
                Fostering Innovation
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our cross-sector collaborations ensure that technology isn't siloed, but acts as a catalyst for agriculture, energy, and creative industries.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-container rounded-2xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform"></div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/atc-about/800/1000"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="absolute -bottom-10 -right-4 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs">
            <div className="flex items-center gap-4 mb-2">
              <MapPin className="text-primary" size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">
                Port Harcourt
              </span>
            </div>
            <p className="text-sm text-on-surface">
              The heart of the Niger Delta's digital transformation, where energy meets intelligence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section (Image LEFT, Text RIGHT) */}
      <section className="flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full md:w-7/12 relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7JkHQkjHfh0E6XM8upfumeVFSMzPTvA2wPscMrK6I819GzWa4OFUSgcVOxSjdlq7g_kLQgyg8tputizQ4rLI1kDoNr1OmXhfWIaJ0A-RbfPqIeOrnJm6x-2maeXAVxVWDB4BeOUmQFNkxlaoUqgsjrHblaKGsQXKjd1LV08VW7IkWT0f4L9prLCXSKi6mZeABi2daB9PPOqpzmt_uT0H1cKxvg4dG9TTkh31TOu9k34wR-6tFpc2BGcvm6U6_Yt09yJVii9GFC1aP"
            className="w-full aspect-[16/9] object-cover rounded-xl relative z-10 grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-5/12">
          <h2 className="font-headline font-bold text-5xl mb-6">
            OUR MISSION
          </h2>

          <p className="text-on-surface-variant text-2xl mb-8 leading-loose">
            To be a community of change makers who will partake in shaping the future of technology
          </p>

          <div className="flex flex-wrap gap-2">
            {['Community', 'Change', 'Tech'].map(tag => (
              <span key={tag} className="bg-surface-container-low text-primary px-4 py-1 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section (Text LEFT, Image RIGHT) */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-12">

        {/* Image */}
        <div className="w-full md:w-7/12 relative group">
          <div className="absolute -inset-4 bg-tertiary/5 rounded-2xl group-hover:bg-tertiary/10 transition"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvWnmWBjCgBKievoT8UIBj6Cld2OXChzH2W9I2sIsD0n1AlATMaqLnB9PKaN6vNezh3nOdYN11_WAhpsqUurVEt3541xya2SgrZ4XW4jLZdRbMfHBilcvSXPUO9epHeX6HjCeT94rvEIEq18wx9W1aDRjy1cOAAYB_9fiMFBGaizsgJuAC2afBBg7HEam-GokpXsLlccST5fBnkoS5wbz2pGpjabRArISLexqZ_iT5X4PslUUdV4RhBHFypKqkQqbNF7pnASDOTbkL"
            className="w-full aspect-[16/9] object-cover rounded-xl relative z-10 grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-5/12">
          <h2 className="font-headline font-bold text-5xl mb-6">
            OUR VISION
          </h2>

          <p className="text-on-surface-variant text-2xl mb-8 leading-loose">
            Our goal is to build a quality and comprehensive community for technology infrastructure
          </p>

          <div className="flex flex-wrap gap-2">
            {['Build', 'Infrastructure', 'Community'].map(tag => (
              <span key={tag} className="bg-surface-container-low text-primary px-4 py-1 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary p-12 md:p-20 rounded-3xl text-on-primary grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { label: "Developers", value: "5K+" },
          { label: "Startups", value: "120+" },
          { label: "Partners", value: "45+" },
          { label: "Tech Capital", value: "24M" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-5xl font-black">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest opacity-70">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}