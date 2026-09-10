import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, Layers } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ProjectCaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#101216] border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#101216]/95 backdrop-blur-md border-b border-zinc-800 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-mono font-bold text-blue-400">{project.number}</span>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-xs text-zinc-400 font-mono">{project.subtitle}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              aria-label="Close Case Study Modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8 text-left">
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">PROJECT OVERVIEW</h4>
              <p className="text-base text-zinc-300 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#08090B] border border-zinc-800/80 rounded-xl p-5 space-y-2">
                <h5 className="text-sm font-semibold text-red-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> The Problem
                </h5>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {caseStudy?.problem || project.shortDescription}
                </p>
              </div>

              <div className="bg-[#08090B] border border-zinc-800/80 rounded-xl p-5 space-y-2">
                <h5 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> The Solution
                </h5>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {caseStudy?.solution || project.shortDescription}
                </p>
              </div>
            </div>

            {/* Architecture Process Flow Diagram */}
            {caseStudy?.architecture && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers size={16} /> SYSTEM ARCHITECTURE & PROCESS FLOW
                </h4>

                <div className="bg-[#08090B] border border-zinc-800 rounded-xl p-5">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {caseStudy.architecture.map((arch, index) => (
                      <div key={index} className="relative flex flex-col items-center text-center p-3 bg-[#101216] border border-zinc-800/90 rounded-lg">
                        <span className="text-[10px] font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 mb-2">
                          STEP {index + 1}: {arch.step}
                        </span>
                        <p className="text-xs text-zinc-300 font-mono font-medium">{arch.desc}</p>
                        {index < caseStudy.architecture.length - 1 && (
                          <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-zinc-600 z-10">
                            <ArrowRight size={14} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-2">
                {(caseStudy?.techStack || project.technologies).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#08090B] border border-zinc-800 text-zinc-200 text-xs font-mono rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Contribution & Outcome */}
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">MY CONTRIBUTION</h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                  {caseStudy?.contribution || "Full lifecycle development, implementation, debugging, and verification."}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">OUTCOME & RESULTS</h4>
                <p className="text-xs sm:text-sm text-emerald-400 leading-relaxed font-mono">
                  {caseStudy?.outcome || "Successfully deployed and tested prototype functionality."}
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold rounded-lg border border-zinc-800 transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Repository</span>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium rounded-lg border border-zinc-800 transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;
