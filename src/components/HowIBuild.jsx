import { motion } from 'framer-motion';
import { Search, Compass, Code2, Bug, Rocket, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const HowIBuild = () => {
  const { howIBuild } = portfolioData;

  const renderStepIcon = (idx) => {
    switch (idx % 5) {
      case 0: return <Search className="w-6 h-6 text-blue-400" />;
      case 1: return <Compass className="w-6 h-6 text-indigo-400" />;
      case 2: return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 3: return <Bug className="w-6 h-6 text-amber-400" />;
      case 4: return <Rocket className="w-6 h-6 text-cyan-400" />;
      default: return <Search className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="how-i-build" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-blue-400 tracking-wider uppercase">
            <Terminal size={14} />
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            HOW I BUILD
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
            A structured 5-step methodology from initial problem analysis to deployed solution.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid md:grid-cols-5 gap-4 lg:gap-6 relative">
          {howIBuild.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 bg-blue-500/10 rounded-lg">
                    {step.step}
                  </span>
                  <div className="p-2.5 bg-[#08090B] border border-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
                    {renderStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
