import React, { useState } from 'react';
import { Lock, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquirySectionProps {
  initialFormData?: Partial<InquiryFormData>;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialFormData }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: initialFormData?.fullName || '',
    company: initialFormData?.company || '',
    email: initialFormData?.email || '',
    rfCategory: initialFormData?.rfCategory || 'sub1g',
    details: initialFormData?.details || ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // React to prop changes (e.g. when user clicks "索取規格書" on a specific chip)
  React.useEffect(() => {
    if (initialFormData) {
      setFormData((prev) => ({
        ...prev,
        ...initialFormData
      }));
    }
  }, [initialFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      company: '',
      email: '',
      rfCategory: 'sub1g',
      details: ''
    });
  };

  return (
    <section id="inquiry" className="relative z-10 w-full px-4 md:px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50/90 border border-slate-200 p-6 md:p-12 shadow-xl relative overflow-hidden">
        {/* Top Cyber Line Accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500"></div>

        <div className="flex flex-col items-center text-center mb-10">
          <span className="px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 font-['JetBrains_Mono'] text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
            TECHNICAL INQUIRY &amp; EVB SAMPLING
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-slate-900">
            索取晶片規格書與開發評估板
          </h2>
          <p className="font-['Inter'] text-sm text-slate-600 max-w-lg mt-2 leading-relaxed">
            我們的資深 RF 硬體應用工程師 (FAE) 將在 24 小時內為您提供鏈路預算計算與專案技術支援。
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-emerald-900">
              技術諮詢與規格書索取已成功送出！
            </h3>
            <p className="font-['Inter'] text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
              感謝您的洽詢。笙科電子 (AMICCOM) 專屬 FAE 工程師將透過 <span className="font-bold underline">{formData.email || '您的信箱'}</span> 於 24 小時內回覆您完整的晶片 Datasheet、參考線路圖 (Reference Schematic) 與 EVB 評估板發貨進度。
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-['JetBrains_Mono'] text-xs font-bold transition-all cursor-pointer"
              >
                填寫另一份需求單 (Submit Another)
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  您的姓名 / FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="王小明 (David Wang)"
                  className="w-full bg-white border border-slate-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 font-['Inter'] px-3.5 py-2.5 text-sm transition-colors placeholder:text-slate-400 outline-none"
                />
              </div>
              <div className="relative">
                <label className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  公司名稱 / COMPANY ENTITY *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="科技股份有限公司 / Tech Corp"
                  className="w-full bg-white border border-slate-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 font-['Inter'] px-3.5 py-2.5 text-sm transition-colors placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  企業電子信箱 / CORPORATE EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="david.wang@company.com"
                  className="w-full bg-white border border-slate-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 font-['Inter'] px-3.5 py-2.5 text-sm transition-colors placeholder:text-slate-400 outline-none"
                />
              </div>
              <div className="relative">
                <label className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  目標頻段需求 / RF CATEGORY
                </label>
                <select
                  value={formData.rfCategory}
                  onChange={(e) => setFormData({ ...formData, rfCategory: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 font-['Inter'] px-3.5 py-2.5 text-sm transition-colors cursor-pointer outline-none"
                >
                  <option value="sub1g">Sub-1GHz (315/433/868/915 MHz)</option>
                  <option value="ble">Bluetooth Low Energy (BLE 5.3 SoC)</option>
                  <option value="24g">2.4GHz 專利協議 / 無線音訊</option>
                  <option value="gnss">GNSS 衛星導航 RF 接收端</option>
                  <option value="custom">客製化 ASIC / 模組方案</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="block font-['JetBrains_Mono'] text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                專案需求說明或 EVB 開發套件型號 / INQUIRY DETAILS
              </label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="請描述預估量產時間、通訊距離需求或欲索取之晶片型號 (例如：欲申請 A7129 EVB 開發評估板 2 套)..."
                className="w-full bg-white border border-slate-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 font-['Inter'] px-3.5 py-2.5 text-sm transition-colors placeholder:text-slate-400 resize-none outline-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-slate-500">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>NDA 保密協議保障 ‧ 笙科絕不對外透露客戶專案資訊</span>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['JetBrains_Mono'] text-xs font-bold tracking-wider uppercase shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all flex items-center gap-2 group cursor-pointer disabled:opacity-75"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>傳送中 SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND INQUIRY</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
