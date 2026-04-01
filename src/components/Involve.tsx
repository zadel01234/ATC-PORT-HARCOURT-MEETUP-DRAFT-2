import { motion } from "motion/react";
import { Rocket, Heart, Handshake } from "lucide-react";

export default function Involve() {
  const cards = [
    {
      icon: <Rocket size={32} />,
      title: "Become a Sponsor",
      desc: "Position your brand at the epicenter of Port Harcourt's tech revolution and connect with elite talent and founders.",
      buttonText: "Invest in Growth",
      type: "primary"
    },
    {
      icon: <Heart size={32} />,
      title: "Become a Volunteer",
      desc: "Gain hands-on experience in event management and community building while working alongside the continent's brightest minds.",
      buttonText: "Join the Team",
      type: "outline"
    },
    {
      icon: <Handshake size={32} />,
      title: "Community Partner",
      desc: "Are you leading a tech hub or community? Let's co-create events and resources that elevate the entire ecosystem.",
      buttonText: "Let's Collaborate",
      type: "ghost"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface">Become a Part of the Vision</h2>
        <p className="text-on-surface-variant">There are multiple ways to fuel the flame of innovation. Choose the path that aligns with your capacity to impact.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-surface-container-lowest rounded-xl p-10 ambient-shadow transition-transform duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:scale-110 transition-transform text-primary">
                {card.icon}
              </div>
              <h3 className="font-headline font-extrabold text-2xl text-on-surface">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{card.desc}</p>
            </div>
            <button className={`mt-10 inline-flex items-center justify-center w-full py-4 px-6 rounded-full font-bold active:scale-95 duration-200 transition-all ${
              card.type === "primary" 
                ? "signature-gradient text-on-primary shadow-lg shadow-primary/20" 
                : card.type === "outline"
                ? "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
                : "border-2 border-outline-variant text-on-surface hover:border-primary hover:text-primary"
            }`}>
              {card.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
