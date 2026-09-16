import React, { useState } from 'react';
import { ProductCategory, ChipProduct } from '../types';
import { CHIP_PRODUCTS } from '../data/products';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

interface ProductMatrixProps {
  onSelectProductForInquiry: (chip: ChipProduct) => void;
  onViewDatasheet: (chip: ChipProduct) => void;
}

export const ProductMatrix: React.FC<ProductMatrixProps> = ({
  onSelectProductForInquiry,
  onViewDatasheet
}) => {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('all');

  const filteredProducts =
    activeFilter === 'all'
      ? CHIP_PRODUCTS
      : CHIP_PRODUCTS.filter((p) => p.category === activeFilter);

  const filterTabs: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'ALL 全部晶片' },
    { key: 'ble', label: 'BLE 藍牙晶片' },
    { key: 'sub1g', label: 'Sub-1GHz 無線射頻' },
    { key: '24g', label: '2.4GHz 專用頻段' },
    { key: 'gnss', label: '衛星導航 GNSS' }
  ];

  return (
    <section id="matrix" className="relative z-10 w-full px-4 md:px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title & Filter Nav */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="font-['JetBrains_Mono'] text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            SILICON ARSENAL // PRODUCT MATRIX
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-slate-900">
            全系列高可靠度射頻晶片
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 max-w-xl mt-2 leading-relaxed">
            針對各頻段特性深度優化，提供最高接收靈敏度、最低運作電流與極簡化周邊 BOM 表成本。
          </p>

          {/* Dynamic Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-2 rounded-full font-['JetBrains_Mono'] text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-sm'
                      : 'text-slate-600 hover:text-blue-600 font-medium hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded border font-['JetBrains_Mono'] text-xs font-bold uppercase ${product.categoryBadgeStyle}`}
                  >
                    {product.categoryBadge}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-slate-500">
                    {product.package}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3
                      onClick={() => onViewDatasheet(product)}
                      className="font-['Space_Grotesk'] text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <button
                      onClick={() => onViewDatasheet(product)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-blue-600"
                      title="查看晶片詳細規格與引腳"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-['JetBrains_Mono'] text-xs text-slate-600 mt-0.5">
                    {product.subTitle}
                  </p>
                </div>

                <p className="font-['Inter'] text-sm text-slate-600 mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Spec Matrix */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 font-['JetBrains_Mono'] text-xs">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <span className="text-slate-500 block text-[11px] font-normal">
                        {spec.label}
                      </span>
                      <span
                        className={`block mt-0.5 font-bold truncate ${
                          spec.highlight ? 'text-blue-600' : 'text-slate-800'
                        }`}
                        title={spec.value}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs text-slate-500">
                  {product.targetMarket}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onViewDatasheet(product)}
                    className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    詳細規格
                  </button>
                  <button
                    onClick={() => onSelectProductForInquiry(product)}
                    className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>索取規格書</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
