import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
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
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
            Verified course certifications in programming, databases, web backends, and hardware troubleshooting.
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-[#08090B] border border-zinc-800 rounded-xl group-hover:border-blue-500/30 transition-colors text-blue-400">
                    <Award size={24} />
                  </div>

                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <ShieldCheck size={12} className="mr-1" /> Verified
                  </span>
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {cert.issuer} <span className="text-zinc-600">•</span> {cert.year || "2024"}
                  </p>
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 bg-[#08090B] border border-zinc-800/80 text-zinc-400 text-[11px] font-mono rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  {cert.credentialId ? `ID: ${cert.credentialId}` : 'Verified Credential'}
                </span>

                <button
                  onClick={() => setActiveCertModal(cert)}
                  className="group flex items-center space-x-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Details Modal */}
      {activeCertModal && (
        <CertificationModal
          cert={activeCertModal}
          onClose={() => setActiveCertModal(null)}
        />
      )}
    </section>
  );
};

export default Certifications;
