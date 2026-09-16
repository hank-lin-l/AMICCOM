import React from 'react';
import { X, Download, FileSpreadsheet, Check, ArrowRight } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToInquiry: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onGoToInquiry
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-xl w-full relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 font-['JetBrains_Mono'] text-xs font-bold text-blue-700 uppercase">
            PRODUCT SELECTION GUIDE
          </span>
        </div>

        <h2 className="font-['Space_Grotesk'] text-2xl font-extrabold text-slate-900">
          笙科電子全系列射頻晶片選型指南 (2025-2026 最新版)
        </h2>

        <p className="font-['Inter'] text-sm text-slate-600 mt-2 leading-relaxed">
          內含 BLE 5.4、Sub-1GHz、2.4GHz 專用頻段與 GNSS 衛星導航全系列產品完整規格交叉對照表、封裝引腳定義與 EVB 開發評估板料號。
        </p>

        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 font-['Inter'] text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>包含 A8107、A7129、A7196、A8105、A7130、A5106 等核心晶片</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>射頻鏈路預算計算公式與天線匹配參考線路建議 (Gerber &amp; BOM)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>SDK 軟體開發包與各作業系統 (FreeRTOS / Bare-metal) 支援清單</span>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-slate-500">
            <FileSpreadsheet className="w-4 h-4 text-blue-600" />
            <span>PDF (8.4 MB) / Rev 4.8</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onGoToInquiry();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['JetBrains_Mono'] text-xs font-bold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>留下聯絡方式立即下載</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
