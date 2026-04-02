import { motion } from "motion/react";

const tracks = [
  {
    title: "Become a Sponsor",
    desc: "Align your brand with Africa's fastest-growing tech hub. Gain exclusive access to top-tier talent and innovation leaders.",
    img: "/DSC_1156.jpg",
    btn: "Download Pitch Deck",
    link: "http://meetup.atcafrica.com/becomeasponsor",
    featured: false,
  },
  {
    title: "Become a Volunteer",
    desc: "Join the engine room. Shape the experience, build your network, and gain behind-the-scenes access to the meetup.",
    img: "/DSC_0832.JPG",
    btn: "Apply to Volunteer",
    link: "https://docs.google.com/forms",
    featured: true,
  },
  {
    title: "Community Partner",
    desc: "For tech hubs, NGOs, and student groups looking to collaborate on high-impact initiatives across the continent.",
    img: "/I89A0001.jpg",
    btn: "Let's Collaborate",
    link: "https://docs.google.com/forms",
    featured: false,
  },
];

export default function Involve() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-14 sm:space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-on-surface">
          Become a Part of the Vision
        </h2>
        <p className="text-on-surface-variant text-sm sm:text-base">
          There are multiple ways to fuel the flame of innovation. Choose the path that aligns with your capacity to impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {tracks.map((track, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className={`flex flex-col h-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group ${
              track.featured ? "border-t-4 border-primary" : ""
            }`}
          >
            <div className="h-44 sm:h-48 overflow-hidden">
              <img
                src={track.img}
                alt={track.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4">{track.title}</h3>
              <p className="text-on-surface-variant mb-6 sm:mb-8 flex-grow text-sm sm:text-base">{track.desc}</p>
              <a
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 sm:py-4 rounded-full font-bold transition-all duration-300 text-center text-sm sm:text-base ${
                  track.featured
                    ? "bg-primary text-on-primary shadow-lg hover:opacity-90"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
                }`}
              >
                {track.btn}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
