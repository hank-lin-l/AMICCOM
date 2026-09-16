import React from 'react';
import { Activity, Radio, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BentoSectionProps {
  onOpenWhitepaper: () => void;
}

export const BentoSection: React.FC<BentoSectionProps> = ({ onOpenWhitepaper }) => {
  return (
    <section id="bento" className="relative z-10 w-full px-4 md:px-6 py-16 bg-slate-50/80 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-['JetBrains_Mono'] text-xs font-bold uppercase text-blue-600 mb-1.5 tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> ARCHITECTURAL HIGHLIGHTS
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-slate-900">
              矽智創新 ‧ 卓越微架構
            </h2>
          </div>
          <p className="font-['Inter'] text-sm text-slate-600 max-w-md leading-relaxed">
            笙科電子深耕自研射頻專利，自 2005 年起推動超低功耗微控制器與多頻段 RF 無線通訊晶片普及化。
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Card A: 主視覺大卡 (2x2 span) */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-2 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs">
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold uppercase border border-blue-200">
                  FABLESS SILICON IP
                </span>
                <span className="text-slate-500">WAFER // 8-INCH CMOS</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-slate-900 mt-4 leading-snug">
                超低功耗 0.1μA 休眠技術<br />
                <span className="text-blue-600">笙科自研射頻架構專利</span>
              </h3>
              <p className="font-['Inter'] text-sm text-slate-600 mt-2.5 max-w-md leading-relaxed">
                整合自研電感平衡網絡與微電流晶體振盪器，提供領先業界的鏈路預算（Link Budget &gt; 141dB），在嚴苛環境中確保 15 年電池使用壽命。
              </p>
            </div>

            {/* Wafer Image Container */}
            <div className="relative my-6 rounded-xl overflow-hidden aspect-[16/10] border border-slate-200 group">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UYe2v-rOp6BXDfh46FxCbg8PGG4V_biH4n-9apgNYQ_5e1Lgrp6rcNlFhH6OstLUbhHFUtQLKcgywK04EFQtCFFtW-qyGx9bt-rUkX3tvCi_8xyZjgc-OdHQpO06y2JfLfCHIKICXpnMvfbEGaUU_jEALcljBht4AR1ifHGS1CFv-Z2cJ2bFehSpSSizq814h93zPDdBqNGN5ZJftW1uD1LEJvFPGc-rEvQdHLr1Q4pIsfBl7SvTG-8hX3"
                alt="Silicon Wafer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-white/90 backdrop-blur-sm font-['JetBrains_Mono'] text-[10px] font-bold text-blue-700 border border-slate-200 shadow-sm">
                  PATENTED DUAL-RING OSC
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/90 backdrop-blur-sm font-['JetBrains_Mono'] text-[10px] font-bold text-slate-700 border border-slate-200 shadow-sm">
                  ISO9001 QUALIFIED
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-['JetBrains_Mono'] text-xs">
              <span className="text-slate-500">FREQUENCY JITTER: &lt; 0.05 ppm</span>
              <button
                onClick={onOpenWhitepaper}
                className="text-blue-600 font-semibold flex items-center gap-1 hover:translate-x-1 transition-transform cursor-pointer"
              >
                架構白皮書 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card B: 互動數據指標 (1x1 span) */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs text-slate-500 mb-4">
                <span>METRICS TELEMETRY</span>
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-['Space_Grotesk'] text-3xl font-extrabold text-blue-600 tracking-tight">
                    2005<span className="text-sm font-medium text-slate-500 ml-1">年創立</span>
                  </div>
                  <div className="font-['Inter'] text-sm text-slate-600 mt-1">
                    二十年專精無線射頻 IC 設計
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-['Space_Grotesk'] text-3xl font-extrabold text-cyan-600 tracking-tight">
                    100M+<span className="text-sm font-medium text-slate-500 ml-1">顆 / 年</span>
                  </div>
                  <div className="font-['Inter'] text-sm text-slate-600 mt-1">
                    全球累計億級晶片穩定出貨驗證
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>全球 50+ 國物聯網設備採用</span>
            </div>
          </div>

          {/* Card C: 無線傳輸技術圖解 (1x1 span) */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs text-slate-500 mb-2">
                <span>DUAL TOPOLOGY SPECTRUM</span>
                <Radio className="w-5 h-5 text-cyan-600" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-slate-900">
                Sub-1GHz vs BLE 5.4
              </h4>

              {/* Visual Frequency Pulse Chart */}
              <div className="my-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 font-['JetBrains_Mono'] text-xs">
                <div>
                  <div className="flex justify-between text-xs text-slate-800 font-semibold mb-1">
                    <span className="text-blue-700">Sub-1GHz (315~915MHz)</span>
                    <span className="text-blue-600 font-bold">3km+ 穿透</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full w-[95%]"></div>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    專為智慧三表 (AMR/AMI)、工業遠程控制打造
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-xs text-slate-800 font-semibold mb-1">
                    <span className="text-cyan-700">BLE 5.4 / 2.4GHz ISM</span>
                    <span className="text-cyan-600 font-bold">2Mbps 低延遲</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full w-[80%]"></div>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    智慧醫療穿戴、智慧照明 Mesh 自組網
                  </span>
                </div>
              </div>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 雙頻協同無縫切換支援
            </div>
          </div>

          {/* Card D: 智慧應用城市節點 (2x1 span) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 p-6 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VvjVebCuTFZrbUQKErbg1LznQTMc4RwjfbzZy1K7czPQQMAGLUHeVwlJ5bNT3_QSemZJD3hv-Cs-kO6A0t-4OKPD30Hbobb2mkPyycA02aNBN0xZKDhPTV1jJpvm28keYSaJENdimCzRCJp5KsuTpwPqGbswWOH3k1q0edvH-wpSld7vt5mMD3Z0pDB0TRs3lyvV-iHw5qbH3TcahwvxS3d_zlNIt7vyHB5wbznMb9JUY-JNPAQjlSKN5L"
                alt="Smart City Infrastructure"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="px-2.5 py-1 rounded bg-cyan-50 text-cyan-800 font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider border border-cyan-200">
                  SMART INFRASTRUCTURE NODES
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mt-3">
                  智慧公用事業與微電網自動讀表
                </h3>
                <p className="font-['Inter'] text-sm text-slate-600 max-w-lg mt-2 leading-relaxed">
                  笙科專利 Sub-1G 晶片已獲各大電力、瓦斯與智慧水表系統全面導入，支援 Wireless M-Bus、Wi-SUN 及私有雙向高安全性傳輸加密。
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100 font-['JetBrains_Mono'] text-xs text-slate-700 flex-wrap">
                <span className="flex items-center gap-1.5 font-semibold text-blue-700">
                  <ShieldCheck className="w-4 h-4 text-blue-600" /> 128-bit AES 硬體加速
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 font-semibold text-cyan-700">
                  <Zap className="w-4 h-4 text-cyan-600" /> 3.3V 單電池 10+ 年
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
