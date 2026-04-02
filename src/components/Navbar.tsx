import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Ticket } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/speakers", label: "Speakers" },
    { to: "/about", label: "About" },
    { to: "/involve", label: "Involve" },
    { to: "/gallery", label: "Gallery" },
  ];

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-surface/80 backdrop-blur-xl shadow-sm"
          : "bg-surface/60 backdrop-blur-md"
        }`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 h-16 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/ATC logo Black.png"
            alt="ATC Africa Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-headline font-bold transition-all hover:text-primary relative pb-1 ${isActive(link.to) ? "text-primary" : "text-on-surface"
                }`}
            >
              {link.label}
              {isActive(link.to) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop: Get Ticket | Mobile: Hamburger only */}
        <div className="flex items-center gap-3">
          <Link
            to="/tickets"
            className="hidden md:flex items-center gap-2 signature-gradient text-on-primary px-5 py-2 rounded-full font-bold shadow-lg active:scale-95 duration-200 transition-all text-sm"
          >
            <Ticket size={16} />
            Get Ticket
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:opacity-80 transition-opacity p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-surface border-b border-outline-variant/10 shadow-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-headline font-bold text-lg py-3 border-b border-outline-variant/10 last:border-0 ${isActive(link.to) ? "text-primary" : "text-on-surface"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Get Ticket inside mobile menu */}
              <Link
                to="/tickets"
                className="mt-3 w-full signature-gradient text-on-primary py-4 rounded-full font-bold text-base shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Ticket size={18} />
                Get Ticket
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}