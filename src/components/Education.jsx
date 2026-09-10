import { motion } from 'framer-motion';
import { GraduationCap, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
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
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
            Formal computer science education and academic timeline.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-zinc-800 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu) => {
              const isDominant = edu.featured || edu.id === 1;

              return (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative md:pl-20 text-left"
                >
                  {/* Timeline Dot Indicator */}
                  <div
                    className={`absolute left-[19px] md:left-[27px] top-6 w-3 h-3 rounded-full border-2 hidden md:block ${
                      isDominant
                        ? 'bg-blue-500 border-blue-400 blue-glow-sm'
                        : 'bg-zinc-800 border-zinc-600'
                    }`}
                  ></div>

                  {/* Card Container */}
                  <div
                    className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                      isDominant
                        ? 'bg-[#101216] border-2 border-blue-500/50 shadow-2xl shadow-blue-500/5'
                        : 'bg-[#101216]/60 border border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`p-2 rounded-lg ${
                              isDominant ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-900 text-zinc-400'
                            }`}
                          >
                            <GraduationCap size={20} />
                          </span>
                          <h3
                            className={`text-xl sm:text-2xl font-bold ${
                              isDominant ? 'text-white' : 'text-zinc-200'
                            }`}
                          >
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-sm font-semibold text-zinc-400 font-mono pl-9">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 bg-[#08090B] border border-zinc-800 text-zinc-300 text-xs font-mono rounded-lg">
                          {edu.period}
                        </span>

                        {edu.score && (
                          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs rounded-lg">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pt-2 border-t border-zinc-800/80">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
