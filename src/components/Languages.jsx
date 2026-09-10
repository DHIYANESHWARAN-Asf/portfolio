import { Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Languages = () => {
  const { languages } = portfolioData;

  return (
    <div className="bg-[#101216] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex items-center space-x-2">
        <Globe className="w-5 h-5 text-indigo-400" />
        <h3 className="text-lg font-bold text-white tracking-tight">Languages</h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="p-3.5 bg-[#08090B] border border-zinc-800 rounded-xl space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">{lang.name}</span>
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            </div>
            <p className="text-xs font-mono text-zinc-400">{lang.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
