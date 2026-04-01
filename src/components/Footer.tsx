import { Globe, Share2, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-slate-950 w-full mt-20">
      <div className="flex flex-col gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="font-headline font-bold text-2xl text-primary">ATC Africa</span>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mt-4 max-w-sm">
              © 2024 ATC Africa. Curating the future of Port Harcourt tech.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
              <a className="text-on-surface hover:text-primary transition-colors font-sans text-sm" href="http://atcafrica.com">Join Community</a>
            <a className="text-on-surface hover:text-primary transition-colors font-sans text-sm" href="#">Sponsorship</a>
            <a className="text-on-surface hover:text-primary transition-colors font-sans text-sm" href="#">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-2 md:mt-8">
            <p className="text-on-surface-variant font-sans text-sm">
              Contact Us
            </p>
            <a
              className="text-on-surface hover:text-primary transition-colors font-sans text-sm"
              href="mailto:hello@atcafrica.com"
            >
              hello@atcafrica.com
            </a>
            <a
              className="text-on-surface hover:text-primary transition-colors font-sans text-sm"
              href="https://atcafrica.com"
            >
              atcafrica.com
            </a>
          </div>
        </div>
        {/* <div className="flex gap-4">
          <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
            <Globe className="text-primary" size={20} />
          </span>
          <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
            <Share2 className="text-primary" size={20} />
          </span>
          <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
            <Mail className="text-primary" size={20} />
          </span>
        </div> */}
        <div className="flex gap-4">
          <a
            href="https://x.com/atcafricahq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <Twitter className="text-primary" size={20} />
          </a>

          <a
            href="https://www.instagram.com/atcafricahq/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <Instagram className="text-primary" size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/atcafricahq/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="text-primary" size={20} />
          </a>

          <a
            href="https://atcafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <Globe className="text-primary" size={20} />
          </a>

          <a
            href="mailto:hello@atcafrica.com"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"
          >
            <Mail className="text-primary" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
