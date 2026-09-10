import { motion } from 'framer-motion';
import { Code, Globe, Database, Cpu, Sparkles, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skillsCategories } = portfolioData;

  const categoryIcons = {
    "Programming Languages": <Code className="w-5 h-5 text-blue-400" />,
    "Web Development": <Globe className="w-5 h-5 text-emerald-400" />,
    "Databases": <Database className="w-5 h-5 text-amber-400" />,
    "IoT & Embedded": <Cpu className="w-5 h-5 text-indigo-400" />,
    "AI & Emerging Tech": <Sparkles className="w-5 h-5 text-purple-400" />,
    "Tools & Environment": <Wrench className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-blue-400 tracking-wider uppercase">
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY TOOLBOX
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            Technologies, programming languages, and hardware frameworks I use to engineer solutions.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:border-blue-500/30 transition-colors">
                    {categoryIcons[category.name] || <Code className="w-5 h-5 text-blue-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#08090B] border border-zinc-800 text-zinc-300 text-xs font-mono font-medium rounded-lg hover:border-blue-500/50 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
