import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const CurrentlyBuilding = () => {
  const { currentlyBuilding } = portfolioData;

  if (!currentlyBuilding) return null;

  return (
    <section id="building" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-[#101216] via-[#12151b] to-[#101216] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Currently Building</span>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium uppercase">
                  {currentlyBuilding.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <Cpu className="w-7 h-7 text-blue-400 flex-shrink-0" />
                <span>{currentlyBuilding.title}</span>
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                {currentlyBuilding.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentlyBuilding.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Action & Progress */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-5 lg:border-l lg:border-zinc-800/80 lg:pl-8">
              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Activity size={14} className="text-blue-400" /> Development Progress
                  </span>
                  <span className="text-blue-400 font-bold">{currentlyBuilding.progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${currentlyBuilding.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full group flex items-center justify-center space-x-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-all duration-200 blue-glow-sm"
              >
                <span>View All Projects</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
