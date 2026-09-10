import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, FolderGit2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const GithubActivity = () => {
  const { contact } = portfolioData;

  return (
    <section id="github" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-blue-400 tracking-wider uppercase">
                <Terminal size={14} />
                <span>OPEN SOURCE & CODE REPOSITORIES</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <GithubIcon size={26} />
                <span>Developer Activity & Repositories</span>
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Explore source code repositories for web applications, C/C++ embedded micro-automation, database tools, and software experiments on GitHub.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 pt-2">
                <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#08090B] border border-zinc-800 rounded-lg">
                  <FolderGit2 size={14} className="text-blue-400" />
                  <span>Version Control: Git & GitHub</span>
                </div>
                <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#08090B] border border-zinc-800 rounded-lg">
                  <GitBranch size={14} className="text-emerald-400" />
                  <span>Clean Code & Modular Architecture</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center lg:items-end">
              <a
                href={contact.github || "https://github.com/dhiyaneshwaran-r"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 blue-glow-sm"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
