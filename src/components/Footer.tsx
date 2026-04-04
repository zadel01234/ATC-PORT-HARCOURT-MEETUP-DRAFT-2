import { Globe, Mail, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full mt-20">
      <div className="flex flex-col gap-8 px-6 sm:px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="shrink-0">
            <Link to="/" className="inline-block">
              <img
                src="/ATC logo Black.png"
                alt="ATC Africa"
                className="h-10 w-auto object-contain mb-3"
              />
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
              © 2026 ATC Africa. - A powerhouse of change makers who are shaping the future of technology ecosystem in Africa.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-x-8 gap-y-8">
            <a
              className="text-on-surface hover:text-primary transition-colors text-sm"
              href="http://atcafrica.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
            </a>
            <a
              className="text-on-surface hover:text-primary transition-colors text-sm"
              href="http://meetup.atcafrica.com/becomeasponsor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsorship
            </a>
            <Link
              to="/tickets"
              className="text-on-surface hover:text-primary transition-colors text-sm"
            >
              Get Tickets
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1">
            <p className="text-on-surface-variant text-sm font-semibold mb-1">Contact Us</p>
            <a
              className="text-on-surface hover:text-primary transition-colors text-sm"
              href="mailto:hello@atcafrica.com"
            >
              hello@atcafrica.com
            </a>
            <a
              className="text-on-surface hover:text-primary transition-colors text-sm"
              href="https://atcafrica.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              atcafrica.com
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 flex-wrap">
          {[
            { href: "https://x.com/atcafricahq", icon: <Twitter size={18} />, label: "Twitter" },
            { href: "https://www.instagram.com/atcafricahq/", icon: <Instagram size={18} />, label: "Instagram" },
            { href: "https://www.linkedin.com/company/atcafricahq/", icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: "https://atcafrica.com", icon: <Globe size={18} />, label: "Website" },
            { href: "mailto:hello@atcafrica.com", icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary/10 transition-colors text-primary"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
