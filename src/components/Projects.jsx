import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Cpu, FileText, Database, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getProjectVisualIcon = (id) => {
    switch (id) {
      case 1:
        return <Cpu className="w-16 h-16 text-blue-400" />;
      case 2:
        return <FileText className="w-16 h-16 text-indigo-400" />;
      case 3:
        return <Database className="w-16 h-16 text-emerald-400" />;
      default:
        return <Layers className="w-16 h-16 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
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
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SELECTED WORK
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
            Projects built to solve practical problems.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#101216] border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 group shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
                {/* Visual Preview Side (Left Column) */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/3] bg-[#08090B] border border-zinc-800/90 rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center space-y-4 relative z-10">
                        <div className="p-5 bg-[#101216] border border-zinc-800 rounded-2xl inline-block group-hover:scale-105 transition-transform shadow-lg">
                          {getProjectVisualIcon(project.id)}
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{project.subtitle}</p>
                          <p className="text-xs text-blue-400 font-mono font-semibold">Technical Architecture</p>
                        </div>
                      </div>
                    )}

                    {/* Subtle grid pattern background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e222b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>
                  </div>
                </div>

                {/* Content Info Side (Right Column) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-extrabold text-blue-400">
                      {project.number}
                    </span>

                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-semibold rounded-full uppercase">
                      {project.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#08090B] border border-zinc-800 text-zinc-300 text-xs font-mono rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/80">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="group flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm rounded-xl transition-all duration-200 blue-glow-sm"
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-zinc-800 transition-colors"
                      >
                        <GithubIcon size={16} />
                        <span>View on GitHub →</span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-zinc-800 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectCaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
