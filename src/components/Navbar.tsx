import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (category?: string, chipName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['matrix', 'ecosystems', 'inquiry'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveNav('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveNav('home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-3 pointer-events-none">
      <div
        className={`pointer-events-auto max-w-6xl mx-auto h-16 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'shadow-md border-slate-300/80 bg-white/95' : ''
        }`}
      >
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1UazwpwA2MRuLf0cIeWibFAWjWzzTbHPgPRE1UGiyuwhL-D8sO7NdaX5j84b3sEG64Ta40bklL0rze5KgrpfZF08pygzm9NNk0HleAqzDe2_tgB3SLspWS7JCxDTNxgrtM_SqtsXzjDJWOFyzy3Am50uUHjpM7Dj8k4wCkViXFjbQ9PyqUPccUu0NYiEmTNVHOz4vZl9txP8WlS1G75WspMj3OnZrntQW4k8tdN7isU4_SCAcMGKS8LrP58"
              alt="AMICCOM 笙科電子 Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase text-blue-700 tracking-wider">
              RF IC LEADER
            </span>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`transition-colors text-sm font-medium cursor-pointer ${
              activeNav === 'home'
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            關於笙科
          </button>
          <button
            onClick={() => scrollToSection('bento')}
            className={`transition-colors text-sm font-medium cursor-pointer ${
              activeNav === 'bento'
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Bento 晶片藝廊
          </button>
          <button
            onClick={() => scrollToSection('matrix')}
            className={`transition-colors text-sm font-medium cursor-pointer ${
              activeNav === 'matrix'
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            核心產品線
          </button>
          <button
            onClick={() => scrollToSection('ecosystems')}
            className={`transition-colors text-sm font-medium cursor-pointer ${
              activeNav === 'ecosystems'
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            應用場景
          </button>
          <button
            onClick={() => scrollToSection('inquiry')}
            className={`transition-colors text-sm font-medium cursor-pointer ${
              activeNav === 'inquiry'
                ? 'text-blue-600 font-semibold'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            技術諮詢
          </button>
        </nav>

        {/* Action Button / User profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['JetBrains_Mono'] text-xs font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all group cursor-pointer"
          >
            <span>索取規格書</span>
            <span className="opacity-80 text-[10px]">Datasheet</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div
            title="工程師客戶入口"
            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm cursor-pointer hover:bg-slate-200 transition-colors"
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl p-4 flex flex-col gap-2 font-medium text-sm text-slate-700">
          <button
            onClick={() => scrollToSection('home')}
            className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            關於笙科
          </button>
          <button
            onClick={() => scrollToSection('bento')}
            className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Bento 晶片藝廊
          </button>
          <button
            onClick={() => scrollToSection('matrix')}
            className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            核心產品線
          </button>
          <button
            onClick={() => scrollToSection('ecosystems')}
            className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            應用場景
          </button>
          <button
            onClick={() => scrollToSection('inquiry')}
            className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            技術諮詢
          </button>
          <div className="pt-2 border-t border-slate-100 mt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-['JetBrains_Mono'] text-xs font-bold tracking-wide flex items-center justify-center gap-2"
            >
              <span>索取規格書 Datasheet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
