import React from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToInquiry: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({
  isOpen,
  onClose,
  onGoToInquiry
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 font-['JetBrains_Mono'] text-xs font-bold text-blue-700 uppercase">
            ARCHITECTURAL WHITEPAPER // 2025
          </span>
        </div>

        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-slate-900">
          笙科自研超低功耗 0.1μA 休眠與 RF 鏈路架構技術白皮書
        </h2>

        <p className="font-['Inter'] text-sm text-slate-600 mt-3 leading-relaxed">
          深入探討 AMICCOM 專利電感平衡網絡、微電流晶體振盪器（Patented Dual-Ring OSC）與 CMOS 8 吋製程之物理層最佳化，實現極致 141dB+ 鏈路預算與 15 年電池使用年限。
        </p>

        <div className="mt-6 space-y-4 font-['Inter'] text-sm text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-['Space_Grotesk'] font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              1. 微安級與奈安級休眠架構 (Sub-Microamp Power Management)
            </h4>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              透過先進動態偏壓 (Adaptive Biasing) 與低漏電電晶體堆疊技術，在保持 SRAM 完整數據與即時 RTC 計時狀態下，靜態漏電流僅為 95 nA，為電池供電水電表提供 15 年免更換電池實測保障。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-['Space_Grotesk'] font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
              2. 高抗干擾相鄰頻道抑制與高選擇性濾波 (Adjacent Channel Rejection)
            </h4>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              專利多級多相低通濾波器與高線性度數位類比轉換器 (DAC)，在密集工業環境與城市複雜電磁干擾下，仍能維持高達 -118 dBm @ 2Kbps 的極致感度。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-['Space_Grotesk'] font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              3. 車規 AEC-Q100 Grade 1 與工業認證
            </h4>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              晶片全面通過 -40°C ~ +125°C 寬溫測試與嚴格 ESD HBM 4KV 防護認證，完全符合車載胎壓偵測 (TPMS) 與戶外長距離智慧電網的苛刻規格。
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-['JetBrains_Mono'] text-xs text-slate-500">
            文檔編號: AMIC-WP-2025-RF09
          </span>
          <button
            onClick={() => {
              onClose();
              onGoToInquiry();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['JetBrains_Mono'] text-xs font-bold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>索取完整 28 頁白皮書 PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
