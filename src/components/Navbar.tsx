import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Ticket } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentScreen: string;
  setScreen: (screen: string) => void;
}

export default function Navbar({ currentScreen, setScreen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "involve", label: "Involve" },
    { id: "gallery", label: "Gallery" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect ambient-shadow">
      <nav className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:opacity-80 transition-opacity"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span 
            onClick={() => setScreen("home")}
            className="text-xl font-black text-primary font-headline tracking-tight cursor-pointer"
          >
            ATC Africa
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setScreen(link.id)}
              className={`font-headline font-bold transition-all hover:opacity-80 ${
                currentScreen === link.id 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-on-surface"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setScreen("tickets")}
          className="signature-gradient text-on-primary px-6 py-2 rounded-full font-bold shadow-lg active:scale-95 duration-200 transition-all flex items-center gap-2"
        >
          <Ticket size={18} />
          <span className="hidden sm:inline">Get Ticket</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-outline-variant/10 p-6 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setScreen(link.id);
                  setIsOpen(false);
                }}
                className={`text-left font-headline font-bold text-lg ${
                  currentScreen === link.id ? "text-primary" : "text-on-surface"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
