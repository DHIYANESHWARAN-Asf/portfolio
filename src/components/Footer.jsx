import { ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Footer = () => {
  const { profile, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Building', href: '#building' },
    { name: 'How I Build', href: '#how-i-build' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#08090B] border-t border-zinc-800 text-left">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 blue-glow-sm"
      >
        <ArrowUp size={18} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xl font-bold text-white tracking-tight">{profile.name}</h3>
            <p className="text-xs font-mono text-zinc-400 max-w-sm">
              {profile.title}
            </p>
            <p className="text-xs text-zinc-500 italic">
              "Built with curiosity & code."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-zinc-400 hover:text-white transition-colors text-left py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Connect</h4>
            <div className="flex items-center space-x-3">
              <a
                href={contact.github || "https://github.com/dhiyaneshwaran-r"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 bg-[#101216] border border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={contact.linkedin || "https://linkedin.com/in/dhiyaneshwaran-r"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 bg-[#101216] border border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Send Email"
                className="p-2.5 bg-[#101216] border border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="text-zinc-600">Sathyamangalam, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
