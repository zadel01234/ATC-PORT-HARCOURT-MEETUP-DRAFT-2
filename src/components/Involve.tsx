import { motion } from "motion/react";
import { Rocket, Heart, Handshake } from "lucide-react";

export default function Involve() {
  const cards = [
    {
      icon: <Rocket size={32} />,
      title: "Become a Sponsor",
      desc: "Position your brand at the epicenter of Port Harcourt's tech revolution and connect with elite talent and founders.",
      buttonText: "Invest in Growth",
      type: "primary",
      link: "http://meetup.atcafrica.com/becomeasponsor"
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

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div> */}

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Become a Sponsor",
              desc: "Align your brand with Africa's fastest-growing tech hub. Gain exclusive access to top-tier talent and innovation leaders.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUdUwoZX0MUd4L3fSmt1Mj-SJwhnjO22Ct-qm9GiDubEg8AZd39Nk2y-sttiFxtRvOgNm0vdWVTHVjSdsh6xilXAfYLOQ1PCdeJZ_oPTxsM94Se-nK_QqUarw4bPrNVDVQwq7dowzecAce3J8IIoX5TnfQm4cHMvAm7omTxnHqdjSLvniNkvF5bEZ_bQve8ZT72qIoCbnkDdmW93jQeMW7qDxDp04A5hcBvsXu2SBJDvgM13UFf_3QwS6N_raw6Y_e04tdhBMnB6iV",
              btn: "Download Pitch Deck",
              link: "http://meetup.atcafrica.com/becomeasponsor"

            },
            {
              title: "Become a Volunteer",
              desc: "Join the engine room. Shape the experience, build your network, and gain behind-the-scenes access to the meetup.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALuC17M6PIWjmSZ5zdPeOk3kFArtDIUMwWiSs9D3aW44eQpGWQJJxEMIV0LaoWT-3ekT4gWf2kkaMVXEqTEYCNCOxw67i7pyUj97ShYV8TpN0mt3uaTwFSBpiCkHuwKj0upAJ4QrhK_Oga7kUK3-cgSSEebipag8kLtOXvpLKQnBEBrAWIve2DY3x5ZMs9--DJsxhrI7l8Lhp1jBv5X0vfsljigrSmcJ68w3ZfyhR55w8INlGUBcax6nnNcyPTJ-LW6z6JIehvCX_Z",
              btn: "Apply to Volunteer",
              featured: true,
              link: "http://googleform"
            },
            {
              title: "Community Partner",
              desc: "For tech hubs, NGOs, and student groups looking to collaborate on high-impact initiatives across the continent.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm3aetJFI6-LFL3s1V5WBnnV3lZXCotZRVoJ15UZx6fnOF0mov4TH-wxkKGCwMFOMv7x0meFVlA7CBZyVj3w4X9k5E-muOKRUqgyY_bdpQouf3Ig0_-NQh5cmT6zO_5aGnH2coiyTdsYMfEitG6tdkXTyXg3vZlXqBUqZz-gtcQJ8ZVWH_cPXLK6mBuGFRaAo0o6IUiKChNR_DQ6GKM7nFDUp5GrwPouTsgsvj7iPpzrYKqaasTnn3qfqWsFsPmbTSadsw2Y1o-NyB",
              btn: "Let's Collaborate",
              link: "http://googleform"
            }
          ].map((track, idx) => (
            <div key={idx} className={`flex flex-col h-full bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group ${track.featured ? 'border-t-4 border-primary' : ''}`}>
              <div className="h-48 overflow-hidden">
                <img
                  src={track.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-headline font-bold mb-4">{track.title}</h3>
                <p className="text-on-surface-variant mb-8 flex-grow">{track.desc}</p>
                <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${track.featured ? 'bg-primary text-on-primary shadow-lg' : 'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary'}`} href={track.link}>
                  {track.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
