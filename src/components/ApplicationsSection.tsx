import React from 'react';
import { Droplets, Factory, Lightbulb, Activity, ArrowUpRight } from 'lucide-react';
import { APPLICATION_VERTICALS } from '../data/applications';

interface ApplicationsSectionProps {
  onSelectVertical?: (tag: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onSelectVertical }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'water_drop':
        return <Droplets className="w-6 h-6 text-blue-600" />;
      case 'precision_manufacturing':
        return <Factory className="w-6 h-6 text-cyan-700" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-blue-600" />;
      case 'vital_signs':
      default:
        return <Activity className="w-6 h-6 text-cyan-700" />;
    }
  };

  return (
    <section id="ecosystems" className="relative z-10 w-full px-4 md:px-6 py-16 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-['JetBrains_Mono'] text-xs font-bold uppercase text-blue-600 tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> INDUSTRY ECOSYSTEMS
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-slate-900">
              關鍵領域賦能
            </h2>
          </div>
          <p className="font-['Inter'] text-sm text-slate-600 max-w-md leading-relaxed">
            從深埋地底的自來水表，到極速響應的無人機與電競周邊，笙科射頻技術連結百萬種可能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPLICATION_VERTICALS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectVertical && onSelectVertical(item.protocolTag)}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs ${
                    item.colorScheme === 'blue'
                      ? 'bg-blue-50 border border-blue-100'
                      : 'bg-cyan-50 border border-cyan-100'
                  }`}
                >
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="font-['Inter'] text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div
                className={`mt-6 pt-4 border-t border-slate-100 font-['JetBrains_Mono'] text-xs font-semibold flex items-center justify-between ${
                  item.colorScheme === 'blue' ? 'text-blue-600' : 'text-cyan-700'
                }`}
              >
                <span>{item.protocolTag}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
