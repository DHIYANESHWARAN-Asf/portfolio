import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all fields before sending.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Construct mailto fallback or simulated success state
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      
      // Also open mailto link with prefilled subject/body
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Dhiyaneshwaran,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16 text-left"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-blue-400 tracking-wider uppercase">
            <Terminal size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            LET'S BUILD SOMETHING
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
            Have an idea, internship opportunity, project, or just want to talk tech?
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start space-x-4 p-5 bg-[#101216] border border-zinc-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="p-3 bg-[#08090B] border border-zinc-800 rounded-xl group-hover:border-blue-500/30 transition-colors text-blue-400">
                  <Mail size={22} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Address</span>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors break-all">
                    {contact.email}
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${contact.phone}`}
                className="group flex items-start space-x-4 p-5 bg-[#101216] border border-zinc-800 rounded-2xl hover:border-blue-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="p-3 bg-[#08090B] border border-zinc-800 rounded-xl group-hover:border-blue-500/30 transition-colors text-indigo-400">
                  <Phone size={22} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Phone / WhatsApp</span>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start space-x-4 p-5 bg-[#101216] border border-zinc-800 rounded-2xl shadow-lg">
                <div className="p-3 bg-[#08090B] border border-zinc-800 rounded-xl text-emerald-400">
                  <MapPin size={22} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Location</span>
                  <p className="text-sm font-semibold text-white">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Connect Online</span>
              <div className="flex items-center space-x-3">
                <a
                  href={contact.github || "https://github.com/dhiyaneshwaran-r"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 bg-[#101216] border border-zinc-800 hover:border-blue-500/40 text-zinc-300 hover:text-white rounded-xl transition-all hover:scale-105"
                >
                  <GithubIcon size={20} />
                </a>

                <a
                  href={contact.linkedin || "https://linkedin.com/in/dhiyaneshwaran-r"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 bg-[#101216] border border-zinc-800 hover:border-blue-500/40 text-zinc-300 hover:text-white rounded-xl transition-all hover:scale-105"
                >
                  <LinkedinIcon size={20} />
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Send Direct Email"
                  className="p-3 bg-[#101216] border border-zinc-800 hover:border-blue-500/40 text-zinc-300 hover:text-white rounded-xl transition-all hover:scale-105"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-[#101216] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">Send a Message</h3>
                <p className="text-xs text-zinc-400 font-mono">Fill out the form below to initiate direct communication.</p>
              </div>

              {status.error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-mono flex items-center space-x-2">
                  <AlertCircle size={16} />
                  <span>{status.error}</span>
                </div>
              )}

              {status.submitted && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono flex items-center space-x-2">
                  <CheckCircle2 size={16} />
                  <span>Message formatted! Opening your email client to send...</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#08090B] border border-zinc-800 focus:border-blue-500 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-[#08090B] border border-zinc-800 focus:border-blue-500 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, question, or opportunity..."
                    className="w-full px-4 py-3 bg-[#08090B] border border-zinc-800 focus:border-blue-500 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full group flex items-center justify-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 blue-glow-sm disabled:opacity-50"
              >
                <span>{status.submitting ? 'Preparing Message...' : 'Send Message →'}</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
