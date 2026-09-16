import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoSection } from './components/BentoSection';
import { ProductMatrix } from './components/ProductMatrix';
import { ApplicationsSection } from './components/ApplicationsSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { DatasheetModal } from './components/DatasheetModal';
import { WhitepaperModal } from './components/WhitepaperModal';
import { CatalogModal } from './components/CatalogModal';
import { ChipProduct, InquiryFormData } from './types';

export default function App() {
  const [selectedProductForDatasheet, setSelectedProductForDatasheet] = useState<ChipProduct | null>(null);
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [inquiryPrefill, setInquiryPrefill] = useState<Partial<InquiryFormData>>({});

  const scrollToInquiry = (category?: string, details?: string) => {
    if (category || details) {
      setInquiryPrefill((prev) => ({
        ...prev,
        rfCategory: category || prev.rfCategory || 'sub1g',
        details: details || prev.details || ''
      }));
    }
    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSilicon = () => {
    const el = document.getElementById('matrix');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForInquiry = (chip: ChipProduct) => {
    setInquiryPrefill({
      rfCategory: chip.category === '24g' ? '24g' : chip.category,
      details: `欲索取 ${chip.name} (${chip.categoryBadge}, 封裝: ${chip.package}) 規格書、參考線路圖與 EVB 評估開發板。`
    });
    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVertical = (protocolTag: string) => {
    setInquiryPrefill({
      details: `諮詢 ${protocolTag} 相關射頻方案與晶片選型建議。`
    });
    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 font-['Inter'] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-700 tech-grid-bg relative min-h-screen">
      {/* Floating Header */}
      <Navbar onOpenInquiry={() => scrollToInquiry()} />

      <main className="w-full pt-20">
        <div className="flex flex-col w-full relative">
          {/* Subtle Atmospheric Glows (Light Mode) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/60 via-cyan-100/30 to-transparent blur-[120px]"></div>
            <div className="absolute top-[35%] -left-48 w-[500px] h-[500px] bg-sky-100/50 blur-[140px] rounded-full"></div>
            <div className="absolute top-[65%] -right-48 w-[550px] h-[550px] bg-blue-100/40 blur-[150px] rounded-full"></div>
          </div>

          {/* Hero Section */}
          <Hero
            onExploreSilicon={handleExploreSilicon}
            onDownloadCatalog={() => setIsCatalogOpen(true)}
          />

          {/* Bento Architecture Grid */}
          <BentoSection onOpenWhitepaper={() => setIsWhitepaperOpen(true)} />

          {/* Silicon Arsenal & Product Matrix */}
          <ProductMatrix
            onSelectProductForInquiry={handleSelectProductForInquiry}
            onViewDatasheet={(chip) => setSelectedProductForDatasheet(chip)}
          />

          {/* Application Verticals */}
          <ApplicationsSection onSelectVertical={handleSelectVertical} />

          {/* Technical Inquiry & EVB Sampling */}
          <InquirySection initialFormData={inquiryPrefill} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigateToMatrix={handleExploreSilicon}
        onNavigateToEcosystems={() => {
          const el = document.getElementById('ecosystems');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Interactive Modals */}
      <DatasheetModal
        product={selectedProductForDatasheet}
        onClose={() => setSelectedProductForDatasheet(null)}
        onRequestEVB={(chip) => {
          setSelectedProductForDatasheet(null);
          handleSelectProductForInquiry(chip);
        }}
      />

      <WhitepaperModal
        isOpen={isWhitepaperOpen}
        onClose={() => setIsWhitepaperOpen(false)}
        onGoToInquiry={() => {
          setIsWhitepaperOpen(false);
          scrollToInquiry(
            'sub1g',
            '申請下載 2025 笙科自研超低功耗 0.1μA 休眠與 RF 鏈路架構技術白皮書 (PDF)。'
          );
        }}
      />

      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onGoToInquiry={() => {
          setIsCatalogOpen(false);
          scrollToInquiry(
            'sub1g',
            '申請下載 2025-2026 笙科電子全系列射頻晶片選型指南 (Catalog PDF)。'
          );
        }}
      />
    </div>
  );
}
