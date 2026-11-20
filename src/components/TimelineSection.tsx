import React from 'react';
import { CAREER_PHASES, PROFILE_DATA } from '../data/resumeData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="py-10 sm:py-12">
      <div className="max-w-[920px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-2.5 mb-6 border-b border-[#18181B]">
          <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#18181B]">
            EXPERIENCE
          </h2>
          <span className="text-xs font-mono-tabular text-[#52525B]">
            총 {PROFILE_DATA.itExperience}
          </span>
        </div>

        {/* Left Period / Right Company & Role Progression (Matching reference EXPERIENCE layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-4">
          {/* Left Period Column */}
          <div className="md:col-span-3">
            <div className="font-mono-tabular text-[13px] font-semibold text-[#18181B]">
              2021.11.01 ~ 2026.10.31
            </div>
            <div className="font-mono-tabular text-xs text-[#71717A] mt-0.5">
              5년 · 재직
            </div>
          </div>

          {/* Right Company & Career Phases */}
          <div className="md:col-span-9">
            <div className="flex flex-wrap items-baseline gap-2.5 mb-1">
              <h3 className="text-[17px] font-bold text-[#18181B]">
                블루웨이브 (Bluewave)
              </h3>
              <span className="text-xs font-medium text-[#52525B]">
                개발 1팀 · 대리 · 중급 기술등급
              </span>
            </div>
            <div className="text-[13px] text-[#71717A] mb-5">
              담당업무: 백엔드 개발 (JAVA, JavaScript, SQL)
            </div>

            {/* Structured Timeline Phases */}
            <div className="space-y-4">
              {CAREER_PHASES.slice()
                .reverse()
                .map((phase) => (
                  <div
                    key={phase.step}
                    className="rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-[14px] font-semibold text-[#18181B]">
                        {phase.title}
                      </h4>
                      <span className="font-mono-tabular text-xs text-[#71717A]">
                        {phase.period}
                      </span>
                    </div>
                    <p className="text-[13.5px] leading-[1.68] text-[#3F3F46] mb-2">
                      {phase.description}
                    </p>
                    <div className="text-[12px] text-[#71717A] font-mono-tabular">
                      주요 수행: {phase.keyMilestone}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
