import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/resumeData';

export const SkillsInventorySection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const totalSkillsCount = SKILL_GROUPS.reduce((acc, g) => acc + g.items.length, 0);

  const visibleGroups =
    selectedGroup === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === selectedGroup);

  return (
    <section id="skills" className="py-10 sm:py-12">
      <div className="max-w-[920px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 mb-5 border-b border-[#18181B]">
          <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#18181B]">
            SKILL
          </h2>
          <span className="text-xs font-mono-tabular text-[#71717A]">
            총 {totalSkillsCount}개 실무 기술
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-1 p-1 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7] mb-7 w-fit"
          role="tablist"
          aria-label="보유 역량 카테고리 필터"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedGroup === 'all'}
            onClick={() => setSelectedGroup('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedGroup === 'all'
                ? 'bg-[#FFFFFF] text-[#18181B] shadow-xs'
                : 'text-[#52525B] hover:text-[#18181B]'
            }`}
          >
            전체 ({totalSkillsCount})
          </button>
          {SKILL_GROUPS.map((group) => {
            const isSelected = selectedGroup === group.id;
            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedGroup(group.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFFFFF] text-[#18181B] shadow-xs'
                    : 'text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                {group.label} ({group.items.length})
              </button>
            );
          })}
        </div>

        {/* Clean Resume-Style Category Rows (Left Category / Right Skill Grid with Proficiency Bars) */}
        <div className="divide-y divide-[#E4E4E7]">
          {visibleGroups.map((group) => (
            <div
              key={group.id}
              className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
            >
              {/* Left Category Column */}
              <div className="md:col-span-3 pt-1">
                <div className="text-[13.5px] font-semibold text-[#18181B]">
                  {group.label}
                </div>
                <div className="text-[11px] font-mono-tabular text-[#71717A] mt-0.5">
                  {group.enLabel}
                </div>
              </div>

              {/* Right Skills Grid */}
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.id}
                    className="rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] p-3.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[13.5px] font-semibold text-[#18181B]">
                          {skill.name}
                        </span>
                        {skill.proficiency !== undefined ? (
                          <span className="font-mono-tabular text-[11.5px] font-medium text-[#52525B]">
                            {skill.proficiency}%
                          </span>
                        ) : (
                          <span className="font-mono-tabular text-[11px] text-[#71717A]">
                            실무 적용
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] leading-[1.45] text-[#52525B] mb-2.5">
                        {skill.note}
                      </p>
                    </div>

                    {skill.proficiency !== undefined && (
                      <div className="h-1.5 w-full rounded-full bg-[#F4F4F5] overflow-hidden">
                        <div
                          className="h-full bg-[#18181B] rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
