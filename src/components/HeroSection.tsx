import React from 'react';
import { Award, Building2, Copy, Check, Printer } from 'lucide-react';
import { CLIENT_PARTNERS, PROFILE_DATA } from '../data/resumeData';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopySummary = async () => {
    const text = `서지효 (Seo Ji-hyo) | Backend Engineer | ${PROFILE_DATA.company} ${PROFILE_DATA.department} ${PROFILE_DATA.position} (${PROFILE_DATA.totalCareerSpan})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="top" className="pt-12 sm:pt-16 pb-10">
      <div className="max-w-[920px] mx-auto px-5 sm:px-6">
        {/* Top Profile Header Block (Matching clean centered/left resume header) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
          {/* Clean Geometric Monogram Avatar */}
          <div
            className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#18181B] text-[#FFFFFF] flex items-center justify-center shrink-0 border border-[#E4E4E7]"
            aria-hidden="true"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              SJ
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-2.5 mb-1">
              <h1 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#18181B]">
                {PROFILE_DATA.nameKo}
              </h1>
              <span className="text-[15px] text-[#71717A] font-medium">
                ({PROFILE_DATA.nameEn})
              </span>
            </div>

            <p className="text-[14.5px] sm:text-[15px] font-medium text-[#3F3F46] mb-3">
              Backend Engineer
            </p>

            {/* Unboxed Metadata & Quick Action Links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#52525B]">
              <span className="inline-flex items-center gap-1.5 font-mono-tabular">
                <Building2 className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
                <span>{PROFILE_DATA.totalCareerSpan}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
                <span>
                  {PROFILE_DATA.certification.name} ({PROFILE_DATA.certification.acquiredDate})
                </span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-3.5 text-[12.5px] no-print">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 text-[#2563EB] hover:underline underline-offset-4 font-medium cursor-pointer"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                ) : (
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                <span>{copied ? '프로필 요약 복사됨' : '프로필 요약 복사'}</span>
              </button>
              <span className="text-[#D4D4D8]" aria-hidden="true">
                ·
              </span>
              <button
                type="button"
                onClick={() => (onOpenContact ? onOpenContact() : window.print())}
                className="inline-flex items-center gap-1.5 text-[#52525B] hover:text-[#18181B] font-medium cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                <span>이력서 PDF 인쇄 / 전체 요약</span>
              </button>
            </div>
          </div>
        </div>

        {/* Soft Notice Banner (Matching subtle callout bar in reference) */}
        <div className="rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] px-4 py-3 text-[13.5px] leading-relaxed text-[#3F3F46] mb-8">
          2021년 11월 입사 이후 5년간 엔터프라이즈 웹 서비스, 외부 API 연동(삼성카드 · Cloudflare · 캐치테이블 · 파킹스루), 인증 보안(JWT · Spring Security) 및 AOP 로그 추적 체계를 설계해온 백엔드 개발자입니다.
        </div>

        {/* 3-Column Clean KPI Summary Strip (Matching 10+ / 400+ / 500+ strip in reference) */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#E4E4E7] text-center">
          <div>
            <div className="text-2xl sm:text-[32px] font-bold tracking-tight text-[#18181B] font-mono-tabular leading-none mb-1.5">
              5년
            </div>
            <div className="text-[11.5px] sm:text-xs text-[#71717A]">
              IT 근무경력 (2021.11 ~ 2026.10)
            </div>
          </div>
          <div className="border-x border-[#E4E4E7]">
            <div className="text-2xl sm:text-[32px] font-bold tracking-tight text-[#18181B] font-mono-tabular leading-none mb-1.5">
              9건
            </div>
            <div className="text-[11.5px] sm:text-xs text-[#71717A]">
              수행 프로젝트 완료
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-[32px] font-bold tracking-tight text-[#18181B] font-mono-tabular leading-none mb-1.5">
              90%
            </div>
            <div className="text-[11.5px] sm:text-xs text-[#71717A]">
              핵심 API · AOP 로그 기여도
            </div>
          </div>
        </div>

        {/* Quiet Partner Client List */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12px] text-[#71717A]">
          <span className="font-medium text-[#52525B]">주요 협업 고객사:</span>
          {CLIENT_PARTNERS.map((partner, idx) => (
            <React.Fragment key={partner.name}>
              <span>{partner.name}</span>
              {idx < CLIENT_PARTNERS.length - 1 && (
                <span className="text-[#D4D4D8]" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
