import React from 'react';
import { Radio } from 'lucide-react';

interface FooterProps {
  onNavigateToMatrix?: () => void;
  onNavigateToEcosystems?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToMatrix,
  onNavigateToEcosystems
}) => {
  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200">
      {/* Footer Telemetry Strip */}
      <div className="w-full bg-slate-200/60 py-2.5 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between font-['JetBrains_Mono'] text-xs text-slate-600 flex-wrap gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1 font-bold text-blue-700">
              <Radio className="w-3.5 h-3.5" /> RF SPECTRUM:
            </span>
            <span className="text-slate-800 font-medium">Sub-1GHz [315/433/868/915 MHz]</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-800 font-medium">2.4GHz ISM Band</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-800 font-medium">BLE 5.3 SoC</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-800 font-medium">Satellite GNSS L1/L5</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-600">
            <span className="text-blue-700 font-semibold">CARRIER TX: +20dBm</span>
            <span className="text-slate-400">•</span>
            <span className="text-blue-700 font-semibold">RX SENSITIVITY: -121dBm</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-['Space_Grotesk'] text-xl font-bold text-slate-900">
                笙科電子股份有限公司
              </span>
              <span className="font-['JetBrains_Mono'] text-xs px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full font-bold">
                TW: 5284
              </span>
            </div>
            <p className="font-['Inter'] text-sm text-slate-600 max-w-md leading-relaxed">
              AMICCOM Electronics Corporation is a world-class fabless IC design company specialized in ultra-low power Wireless RF Transceivers, SoC microcontrollers, and wireless audio solutions.
            </p>
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="px-2.5 py-1 rounded bg-white border border-slate-300 font-['JetBrains_Mono'] text-[10px] font-bold text-slate-700">
                ISO9001 CERTIFIED
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-300 font-['JetBrains_Mono'] text-[10px] font-bold text-blue-700">
                AEC-Q100 GRADE-1
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-300 font-['JetBrains_Mono'] text-[10px] font-bold text-slate-700">
                ROHS / REACH
              </span>
            </div>
          </div>

          {/* Headquarters */}
          <div className="space-y-2 font-['Inter'] text-sm">
            <div className="font-['JetBrains_Mono'] text-xs font-bold text-blue-700 tracking-wider uppercase">
              TAIWAN HQ / 研發總部
            </div>
            <p className="text-slate-800 font-medium">新竹科學園區創新一路18號2樓</p>
            <p className="font-['JetBrains_Mono'] text-xs text-slate-500">
              2F, No. 18, Innovation 1st Rd., Hsinchu Science Park, Hsinchu 30076, Taiwan
            </p>
            <p className="font-['JetBrains_Mono'] text-xs text-slate-600 pt-1">
              TEL: +886-3-578-5818
            </p>
            <p className="font-['JetBrains_Mono'] text-xs text-slate-600">
              FAX: +886-3-578-5819
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="font-['JetBrains_Mono'] text-xs font-bold text-blue-700 tracking-wider uppercase">
              QUICK ACCESS / 核心索引
            </div>
            <ul className="space-y-1.5 font-['Inter'] text-sm text-slate-600">
              <li>
                <button
                  onClick={onNavigateToMatrix}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Sub-1GHz 無線射頻收發晶片
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToMatrix}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  2.4GHz 專利協議射頻 IC
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToMatrix}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Bluetooth Low Energy (BLE) 核心
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToMatrix}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  無線音訊及語音解決方案
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToEcosystems}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  智慧電網 AMR 與車載感測
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 font-['JetBrains_Mono'] text-xs">
          <p>© 2025 AMICCOM Electronics Corporation. 笙科電子股份有限公司 版權所有.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer transition-colors">
              隱私權政策 Privacy Policy
            </span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">
              智財與專利聲明 IP &amp; Patents
            </span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">
              投資人關係 Investor Relations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
