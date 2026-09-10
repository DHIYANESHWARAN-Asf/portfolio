import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, Building, Calendar, ShieldCheck } from 'lucide-react';

const CertificationModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-[#101216] border border-zinc-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Decorative Line */}
          <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"></div>

          {/* Modal Header */}
          <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400">
                <Award size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">VERIFIED CERTIFICATION</span>
                <h3 className="text-lg font-bold text-white tracking-tight">{cert.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              aria-label="Close Certification Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#08090B] border border-zinc-800 rounded-xl p-3.5 space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                  <Building size={12} className="text-blue-400" /> Issuer
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">{cert.issuer}</p>
              </div>

              <div className="bg-[#08090B] border border-zinc-800 rounded-xl p-3.5 space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                  <Calendar size={12} className="text-blue-400" /> Year
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">{cert.year || "2024"}</p>
              </div>
            </div>

            {/* Credential ID */}
            {cert.credentialId && (
              <div className="bg-[#08090B] border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                    <ShieldCheck size={12} className="text-emerald-400" /> Credential Reference
                  </span>
                  <p className="text-xs font-mono font-bold text-blue-400">{cert.credentialId}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 size={12} className="mr-1" /> Verified
                </span>
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase">Description & Scope</h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Skills Covered */}
            {cert.skills && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase">Key Competencies Verified</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#08090B] border border-zinc-800 text-zinc-300 text-xs font-mono rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificationModal;
