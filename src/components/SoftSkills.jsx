import { CheckCircle2, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const SoftSkills = () => {
  const { softSkills } = portfolioData;

  return (
    <div className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex items-center space-x-2">
        <UserCheck className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-bold text-white tracking-tight">Professional Strengths</h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-[#08090B] border border-zinc-800 text-zinc-200 text-xs font-semibold rounded-xl hover:border-blue-500/40 transition-colors"
          >
            <CheckCircle2 size={14} className="text-blue-400" />
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
