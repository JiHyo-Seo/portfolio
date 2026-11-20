import React, { useState, useMemo } from 'react';
import { ArrowUpRight, ArrowUpDown } from 'lucide-react';
import { PROJECTS } from '../data/resumeData';

type FilterCategory = 'all' | 'api' | 'auth' | 'platform' | 'renewal';

const FILTER_TABS: { key: FilterCategory; label: string }[] = [
  { key: 'all', label: '전체 (9)' },
  { key: 'api', label: '외부 API 연동' },
  { key: 'auth', label: '인증 · 하이브리드 앱' },
  { key: 'platform', label: '자사 플랫폼 · CMS' },
  { key: 'renewal', label: '기업 리뉴얼' },
];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredProjects = useMemo(() => {
    const base = filter === 'all' ? [...PROJECTS] : PROJECTS.filter((p) => p.category === filter);
    return base.sort((a, b) => {
      const startA = a.period.split('~')[0].trim();
      const startB = b.period.split('~')[0].trim();
      return sortOrder === 'asc'
        ? startA.localeCompare(startB)
        : startB.localeCompare(startA);
    });
  }, [filter, sortOrder]);

  return (
    <section id="projects" className="py-10 sm:py-12">
      <div className="max-w-[920px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 mb-5 border-b border-[#18181B]">
          <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#18181B]">
            PROJECT
          </h2>

          <button
            type="button"
            onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
            className="inline-flex items-center gap-1.5 text-xs font-mono-tabular font-medium text-[#52525B] hover:text-[#18181B] transition-colors cursor-pointer"
            aria-label="수행기간 정렬 순서 전환"
          >
            <span>수행기간 ({sortOrder === 'asc' ? '오름차순 ↑' : '내림차순 ↓'})</span>
            <ArrowUpDown className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7] mb-8 w-fit"
          role="tablist"
          aria-label="프로젝트 카테고리 필터"
        >
          {FILTER_TABS.map((tab) => {
            const isSelected = filter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFFFFF] text-[#18181B] shadow-xs'
                    : 'text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clean Resume-Style Project List (Left Period / Right Structured Details) */}
        <div className="divide-y divide-[#E4E4E7]">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="py-7 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
            >
              {/* Left Period & Client Column */}
              <div className="md:col-span-3">
                <div className="font-mono-tabular text-[13px] font-semibold text-[#18181B]">
                  {project.period}
                </div>
                <div className="font-mono-tabular text-xs text-[#71717A] mt-0.5">
                  {project.duration} · {project.client}
                </div>
                <div className="text-[11.5px] text-[#71717A] mt-1">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Right Project Details Column */}
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-[16.5px] font-bold tracking-tight text-[#18181B]">
                    {project.title}
                  </h3>

                  {/* Live Link ONLY for the 4 designated projects */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                    >
                      <span>링크 바로가기</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <p className="text-[13.5px] leading-[1.68] text-[#3F3F46] mb-3.5">
                  {project.summary}
                </p>

                {/* Role & Contribution Bullets */}
                <ul className="space-y-1.5 mb-4">
                  {project.roles.map((role) => (
                    <li
                      key={role.description}
                      className="flex items-baseline justify-between gap-4 text-[13.5px] leading-[1.6] text-[#27272A]"
                    >
                      <span className="flex items-start gap-2">
                        <span className="text-[#A1A1AA] select-none" aria-hidden="true">
                          •
                        </span>
                        <span>{role.description}</span>
                      </span>
                      {role.contribution !== undefined && (
                        <span className="font-mono-tabular text-xs font-semibold text-[#18181B] whitespace-nowrap shrink-0">
                          기여도 {role.contribution}%
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Unboxed Tech Stack Metadata */}
                <div className="text-[12px] font-mono-tabular text-[#52525B] leading-relaxed pt-2.5 border-t border-[#F4F4F5]">
                  <span className="text-[#71717A] mr-2">Stack:</span>
                  {[...project.languages, ...project.stack].join(' · ')}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
