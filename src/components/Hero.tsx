import React from 'react';
import { Cpu, Download, Sliders, Moon } from 'lucide-react';

interface HeroProps {
  onExploreSilicon: () => void;
  onDownloadCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSilicon, onDownloadCatalog }) => {
  return (
    <section className="relative z-10 w-full px-4 md:px-6 py-12 lg:py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        {/* Status Beacon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm shadow-blue-500/5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="font-['JetBrains_Mono'] text-[11px] font-bold tracking-widest text-blue-700 uppercase">
            RF SILICON BENCHMARK 2025
          </span>
          <span className="text-slate-300 text-xs">•</span>
          <span className="font-['JetBrains_Mono'] text-[11px] text-slate-500">
            笙科微瓦創新實驗室
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight md:leading-[1.18]">
          探索微瓦級無線極限。<br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            為下一代物聯網而生的射頻晶片。
          </span>
        </h1>

        {/* English Subheadline */}
        <p className="mt-5 font-['Inter'] text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Next-Gen Low-Power RF Transceivers, BLE 5.4 &amp; Sub-1GHz Wireless SoCs engineered by AMICCOM for extreme battery longevity and uncompromising link budgets.
        </p>

        {/* Tech Specs Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 font-['JetBrains_Mono'] text-xs font-semibold">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            <span className="text-slate-900 font-bold">0.1μA</span>
            <span className="text-slate-500 font-normal">Deep Sleep</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:border-cyan-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
            <span className="text-slate-900 font-bold">+20dBm</span>
            <span className="text-slate-500 font-normal">High-Efficiency PA</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
            <span className="text-slate-900 font-bold">-121dBm</span>
            <span className="text-slate-500 font-normal">Ultra Sensitivity</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
          <button
            onClick={onExploreSilicon}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['Space_Grotesk'] text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>探索晶片矩陣 (Explore Silicon)</span>
            <Cpu className="w-4 h-4" />
          </button>
          <button
            onClick={onDownloadCatalog}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-['JetBrains_Mono'] text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span>下載全系列選型指南 (Catalog PDF)</span>
          </button>
        </div>

        {/* Hero Visual Showcase */}
        <div className="mt-14 w-full max-w-5xl relative group">
          {/* Ambient Backlight */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-300/30 via-cyan-200/40 to-indigo-300/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
            {/* Top Cyber HUD Header */}
            <div className="px-4 py-2.5 bg-slate-50 flex items-center justify-between border-b border-slate-200 font-['JetBrains_Mono'] text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-blue-700 font-bold">DIE INTERCONNECT // RF-CORE GEN 4</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <span className="hidden sm:inline">PACKAGE: QFN-32 [5x5mm]</span>
                <span>CARRIER FREQ: 2400-2483.5 MHz</span>
              </div>
            </div>

            {/* Hero Image with Telemetry Overlay */}
            <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[21/9]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1XUKY6fybuU8KWLs7EXs3fG6WCcMHIwZOt9EIF7RqpquOnsYeIvlWFgJSRnZ1SzbbAt_lEYpG1KTYfR8NHxDZnGvwbYv-RJLDszyTE_eqCOt_uDFjCZ9LWfvcgIpnci4wbCO51RdMSBCE_e0GQir_wHRXA_XrPhU8NRv0_ji5wxJO0j7Ng43eHurp7LGFjzbwVqDNbG9AjgYaGx-maav6XA3k1Bkn5NCaOs4WMp9MJ6JLyfA8LvRZfi9SEJ"
                alt="AMICCOM RF Semiconductor Chip"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Real-time HUD Markers */}
              <div className="absolute top-5 left-5 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md font-['JetBrains_Mono'] text-xs text-slate-800 pointer-events-none hidden sm:block text-left">
                <div className="text-blue-600 font-bold mb-0.5 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> TX POWER AMP DYNAMICS
                </div>
                <div className="text-slate-600">+20 dBm Linear Output @ 3.3V</div>
                <div className="text-blue-700 font-semibold text-[11px] mt-1">PAE EFFICIENCY: 48.2%</div>
              </div>

              <div className="absolute bottom-5 right-5 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md font-['JetBrains_Mono'] text-xs text-slate-800 pointer-events-none hidden sm:block text-right">
                <div className="text-cyan-700 font-bold mb-0.5 flex items-center justify-end gap-1.5">
                  SUB-MICROAMP SNOOZE <Moon className="w-3.5 h-3.5" />
                </div>
                <div className="text-slate-600">RTC Active + Retention RAM</div>
                <div className="text-blue-700 font-semibold text-[11px] mt-1">TOTAL LEAKAGE: 95 nA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
