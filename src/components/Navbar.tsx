import React, { useState, useEffect } from 'react';
import { Printer, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

const NAV_LINKS = [
  { label: '소개', href: '#introduce' },
  { label: '경력', href: '#experience' },
  { label: '프로젝트', href: '#projects' },
  { label: '보유역량', href: '#skills' },
  { label: '자격 · Q&A', href: '#certification' },
];

const TOC_ITEMS = [
  { id: 'introduce', label: 'INTRODUCE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECT' },
  { id: 'skills', label: 'SKILL' },
  { id: 'certification', label: 'CERTIFICATION' },
  { id: 'faq', label: 'Q&A' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduce');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px' }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E4E4E7] no-print">
        <div className="max-w-[920px] mx-auto px-5 sm:px-6 h-14 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2 text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18181B]"
          >
            <span className="font-semibold text-[15px] tracking-tight">서지효</span>
            <span className="text-[12px] text-[#71717A] font-normal hidden sm:inline">
              · Backend Engineer
            </span>
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            className="hidden md:flex items-center gap-6 text-[13px] font-medium text-[#52525B]"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#18181B] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#18181B]/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary CTA button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#18181B] text-[#FFFFFF] text-[12.5px] font-medium hover:bg-[#27272A] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>이력 요약 · 인쇄</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-[#E4E4E7] text-[#18181B] hover:bg-[#F4F4F5] transition-colors cursor-pointer"
              aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#E4E4E7] bg-[#FFFFFF] px-5 py-3 space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-[#18181B] border-b border-[#F4F4F5] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#18181B] text-[#FFFFFF] text-xs font-medium"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>이력 요약 · 인쇄</span>
            </button>
          </div>
        )}
      </header>

      {/* Subtle Floating Right-Edge Section Index (Matching reference image) */}
      <aside
        className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-2 no-print"
        aria-label="섹션 바로가기"
      >
        {TOC_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10.5px] font-mono-tabular tracking-wider transition-colors ${
                isActive
                  ? 'text-[#18181B] font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#52525B]'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </aside>
    </>
  );
};
