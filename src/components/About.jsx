import { motion } from 'framer-motion';
import { GraduationCap, Code2, Wrench, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { about } = portfolioData;

  const renderStatIcon = (index) => {
    switch (index % 4) {
      case 0: return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 1: return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 2: return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 3: return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <GraduationCap className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-blue-400 tracking-wider uppercase">
            <Terminal size={14} />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {about.heading}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-300">
                {paragraph}
              </p>
            ))}

            <div className="p-5 bg-[#101216] border border-zinc-800/90 rounded-xl space-y-3">
              <div className="flex items-center space-x-2 text-sm font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Core Philosophy</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-mono">
                "Software and hardware are tools to solve real-world problems. Clean architecture, physical sensor integration, and reliable execution matter most."
              </p>
            </div>
          </motion.div>

          {/* Compact Verified Metric Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 gap-4"
          >
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#101216] border border-zinc-800 rounded-xl p-5 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-blue-500/30 transition-colors">
                    {renderStatIcon(index)}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
