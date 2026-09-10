import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Award, Code2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Achievements = () => {
  const { achievements } = portfolioData;

  const achievementIcons = {
    "GraduationCap": <GraduationCap className="w-6 h-6 text-blue-400" />,
    "Cpu": <Cpu className="w-6 h-6 text-indigo-400" />,
    "Award": <Award className="w-6 h-6 text-amber-400" />,
    "Code2": <Code2 className="w-6 h-6 text-emerald-400" />,
  };

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
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
            <span>MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ACHIEVEMENTS & EXPERIENCE
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
            Verified academic, hardware, and engineering growth milestones.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-wider px-2.5 py-1 bg-blue-500/10 rounded-md">
                    {item.category}
                  </span>
                  <div className="p-2 bg-[#08090B] border border-zinc-800 rounded-xl group-hover:scale-105 transition-transform">
                    {achievementIcons[item.icon] || <Award className="w-6 h-6 text-blue-400" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
