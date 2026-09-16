import React from 'react';
import { X, Cpu, Check, Download, ArrowRight, Shield, Zap } from 'lucide-react';
import { ChipProduct } from '../types';

interface DatasheetModalProps {
  product: ChipProduct | null;
  onClose: () => void;
  onRequestEVB: (chip: ChipProduct) => void;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  product,
  onClose,
  onRequestEVB
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span
            className={`px-2.5 py-0.5 rounded border font-['JetBrains_Mono'] text-xs font-bold uppercase ${product.categoryBadgeStyle}`}
          >
            {product.categoryBadge}
          </span>
          <span className="font-['JetBrains_Mono'] text-xs text-slate-500">
            {product.package}
          </span>
        </div>

        <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold text-slate-900">
          {product.name}
        </h2>
        <p className="font-['JetBrains_Mono'] text-sm text-blue-600 font-semibold mt-1">
          {product.subTitle}
        </p>

        <p className="font-['Inter'] text-sm text-slate-600 mt-3 leading-relaxed">
          {product.description}
        </p>

        {/* Technical Specs Grid */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="font-['JetBrains_Mono'] text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-600" />
            ELECTRICAL SPECIFICATIONS &amp; RATINGS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-['JetBrains_Mono'] text-xs">
            {product.specs.map((s, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200">
                <span className="text-slate-400 text-[10px] block font-normal">{s.label}</span>
                <span className={`block font-bold mt-0.5 ${s.highlight ? 'text-blue-600' : 'text-slate-800'}`}>
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 font-['JetBrains_Mono'] text-xs">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
              <span className="text-slate-500">供應電壓 (Supply Voltage):</span>
              <span className="font-bold text-slate-800">{product.voltageRange || '1.9V ~ 3.6V'}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
              <span className="text-slate-500">工作頻段 (Frequency):</span>
              <span className="font-bold text-slate-800">{product.frequencyRange || '標準頻段'}</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        {product.features && product.features.length > 0 && (
          <div className="mt-6">
            <div className="font-['JetBrains_Mono'] text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-600" /> 核心微架構與硬體特性
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-slate-500">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>原廠正式 Datasheet v2.4 (PDF)</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`已為您準備 ${product.name} 完整技術規格書與應用參考手冊。請在下方技術諮詢表單中留下 Email，原廠 FAE 將立即寄出。`);
                onRequestEVB(product);
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-['JetBrains_Mono'] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>索取 PDF 下載鏈結</span>
            </button>
            <button
              onClick={() => onRequestEVB(product)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['JetBrains_Mono'] text-xs font-bold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>申請 EVB 評估板</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
