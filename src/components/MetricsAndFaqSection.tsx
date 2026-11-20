import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ENGINEERING_FAQS, PROFILE_DATA } from '../data/resumeData';

export const MetricsAndFaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(ENGINEERING_FAQS[0].id);

  return (
    <>
      {/* CERTIFICATION (Matching clean EDUCATION / ETC left-date / right-title layout) */}
      <section id="certification" className="py-10 sm:py-12">
        <div className="max-w-[920px] mx-auto px-5 sm:px-6">
          <div className="pb-2.5 mb-6 border-b border-[#18181B]">
            <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#18181B]">
              CERTIFICATION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
            <div className="md:col-span-3 font-mono-tabular text-[13px] font-semibold text-[#18181B]">
              {PROFILE_DATA.certification.acquiredDate}
            </div>
            <div className="md:col-span-9">
              <div className="text-[15px] font-bold text-[#18181B]">
                {PROFILE_DATA.certification.name}
              </div>
              <div className="text-[13px] text-[#52525B] mt-0.5">
                국가기술자격 취득 · 한국산업인력공단
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING Q&A */}
      <section id="faq" className="py-10 sm:py-12">
        <div className="max-w-[920px] mx-auto px-5 sm:px-6">
          <div className="pb-2.5 mb-6 border-b border-[#18181B]">
            <h2 className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#18181B]">
              ENGINEERING Q&amp;A
            </h2>
          </div>

          <div className="divide-y divide-[#E4E4E7] border-b border-[#E4E4E7]">
            {ENGINEERING_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:text-[#000000] transition-colors"
                  >
                    <span className="text-[14.5px] font-semibold text-[#18181B]">
                      <span className="font-mono-tabular text-[#71717A] mr-2.5">{faq.index}.</span>
                      {faq.question}
                    </span>
                    <span className="text-[#52525B] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Plus className="w-4 h-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pl-7 text-[13.5px] leading-[1.72] text-[#3F3F46]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
