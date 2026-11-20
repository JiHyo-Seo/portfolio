import React from 'react';
import { Printer, ArrowUp, Check, Copy } from 'lucide-react';
import { PROFILE_DATA } from '../data/resumeData';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  return (
    <footer className="py-12 border-t border-[#E4E4E7] mt-8">
      <div className="max-w-[920px] mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#71717A]">
        <div className="font-mono-tabular">
          © 2026 {PROFILE_DATA.nameKo} ({PROFILE_DATA.nameEn}) · Backend Engineer
        </div>

        <div className="flex items-center gap-4 no-print">
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-[#18181B] transition-colors cursor-pointer"
          >
            이력 요약 복사
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => window.print()}
            className="hover:text-[#18181B] transition-colors cursor-pointer"
          >
            PDF 인쇄
          </button>
          <span aria-hidden="true">·</span>
          <a href="#top" className="hover:text-[#18181B] transition-colors">
            맨 위로 ↑
          </a>
        </div>
      </div>

      {/* Subtle Floating Print / Top Utility Buttons (Matching bottom-right icons in reference) */}
      <div className="fixed bottom-5 right-5 z-30 hidden sm:flex flex-col gap-2 no-print">
        <button
          type="button"
          onClick={() => window.print()}
          title="PDF 인쇄 / 저장"
          aria-label="포트폴리오 PDF 인쇄"
          className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#E4E4E7] shadow-sm flex items-center justify-center text-[#52525B] hover:text-[#18181B] hover:border-[#18181B]/30 transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
        </button>
        <a
          href="#top"
          title="맨 위로 이동"
          aria-label="페이지 맨 위로 이동"
          className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#E4E4E7] shadow-sm flex items-center justify-center text-[#52525B] hover:text-[#18181B] hover:border-[#18181B]/30 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const summaryText = `[서지효 백엔드 개발자 이력 요약]\n- 성명/생년월일: 서지효 (1996.03.23)\n- 소속/직위: 블루웨이브 개발 1팀 대리 (중급 기술등급)\n- 경력: 2021.11.01 ~ 2026.10.31 (IT 근무경력 5년)\n- 자격증: 정보처리기사 (2025.06.13)\n- 핵심기술: JAVA, SpringBoot, SpringSecurity, JWT, JPA, AOP(traceId), SQL, Thymeleaf, Vue.js\n- 주요 프로젝트: 신라호텔, 남양유업, BW_Cms, 현대 오일뱅크 EV&U, BW_Membership, HL 만도 카믈리에, 조선호텔 캐치테이블, 인터파크 복지몰, 제주패스`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18181B]/50 backdrop-blur-xs no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl bg-[#FFFFFF] border border-[#E4E4E7] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E4E4E7]">
          <div>
            <div className="text-[11px] font-mono-tabular tracking-wider text-[#71717A] mb-1">
              RESUME SUMMARY
            </div>
            <h3 id="contact-modal-title" className="text-lg font-bold text-[#18181B]">
              서지효 · 백엔드 개발자 이력 요약
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-md border border-[#E4E4E7] text-xs font-medium text-[#18181B] hover:bg-[#F4F4F5] cursor-pointer"
          >
            닫기
          </button>
        </div>

        <div className="py-5 space-y-4">
          <div className="rounded-lg bg-[#FAFAFA] border border-[#E4E4E7] p-4 text-xs leading-relaxed text-[#3F3F46] whitespace-pre-line font-mono-tabular">
            {summaryText}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#18181B] text-[#FFFFFF] text-xs font-medium hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '이력 요약 복사 완료' : '이력 요약 클립보드 복사'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                setTimeout(() => window.print(), 150);
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#E4E4E7] text-[#18181B] text-xs font-medium hover:bg-[#F4F4F5] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>포트폴리오 PDF 인쇄</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
