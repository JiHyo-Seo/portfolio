import React from 'react';
import { CAPABILITIES, PROFILE_DATA } from '../data/resumeData';

export const ProfileBento: React.FC = () => {
  return (
    <section id="introduce" className="py-10 sm:py-12">
      <div className="max-w-[920px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="pb-2.5 mb-6 border-b border-[#18181B]">
          <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#18181B]">
            INTRODUCE
          </h2>
        </div>

        {/* Left-Right Resume Grid: Label Column + Scannable Prose */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-9">
          <div className="md:col-span-3">
            <div className="text-[13px] font-semibold text-[#18181B]">소개 및 강점</div>
            <div className="text-xs text-[#71717A] mt-1 font-mono-tabular">
              {PROFILE_DATA.department} · {PROFILE_DATA.position}
            </div>
          </div>

          <div className="md:col-span-9 space-y-4 text-[14.5px] leading-[1.78] text-[#27272A]">
            <p>
              블루웨이브 개발 1팀에서 <strong className="font-semibold text-[#18181B]">5년(2021.11 ~ 2026.10)</strong>간 백엔드 엔지니어로 재직하며 대규모 기업 사이트 리뉴얼, 자사 공통 플랫폼(CMS · 멤버십), 모빌리티 하이브리드 앱 백엔드까지 총 9개의 프로덕션 프로젝트를 완수했습니다.
            </p>
            <p>
              단순 기능 구현에 그치지 않고 <strong className="font-semibold text-[#18181B]">JWT · Spring Security 기반 인증 표준</strong>을 정립하고, <strong className="font-semibold text-[#18181B]">AOP 기반 traceId 로그 추적 체계</strong>를 도입해 운영 환경의 장애 추적성과 안정성을 높였습니다. 삼성카드, Cloudflare CDN, 캐치테이블, 현대오일뱅크 파킹스루, 인터파크 비즈마켓 등 다양한 외부 API 연동을 높은 기여도(80~100%)로 이끌었습니다.
            </p>
            <p>
              또한 Thymeleaf 기반 SSR부터 Vue.js SPA 및 하이브리드 모바일 앱(PUSH, PASS 본인인증)까지 프론트엔드·모바일 직군과의 긴밀한 API 계약 설계를 통해 서비스 전체 주기를 끝까지 책임집니다.
            </p>
          </div>
        </div>

        {/* 4 Core Strength Cards (Clean Bordered Resume Grid, zero clutter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-4 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono-tabular text-[#71717A] mb-1">
                  {cap.index}
                </div>
                <h3 className="text-[14px] font-bold text-[#18181B] leading-snug mb-2">
                  {cap.title}
                </h3>
                <p className="text-[12.5px] leading-[1.6] text-[#52525B] mb-3">
                  {cap.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#E4E4E7] text-[11.5px] text-[#3F3F46] leading-relaxed">
                {cap.highlights.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
