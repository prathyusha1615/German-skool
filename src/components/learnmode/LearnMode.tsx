'use client';

import React, { useState } from 'react';
import useLearnMode from './useLearnMode';

/** Typography tokens (exact per spec) */
const type = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2:
    "md:text-[40px] text-[28px] leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325]",
  rowTitle:
    "text-[18px] leading-[27px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  lead:
    "text-[16px] leading-[24px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  bullet:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M4 11L6.5 13.5M10 9.5L12.5 7M8 11L10.5 13.5L16.5 7"
      stroke="#CC802C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LearnMode() {
  const { UI, items } = useLearnMode();
  const [active, setActive] = useState(items[0].id);
  const activeItem = items.find(i => i.id === active)!;

  return (
    <section id='benefits' className="w-full">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] sm:py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_568px] md:gap-16">
          <div>
            <div
              className={`inline-flex items-center gap-[6px] rounded-[36px] border px-3 py-1 ${type.caption}`}
              style={{ borderColor: UI.captionBorder, background: UI.captionBg, color: UI.tertiary }}
            >
              Learning Modes
            </div>

            <h2 className={`mt-6 ${type.h2}`}>
              Choose Your<br /> Learning Style
            </h2>

            <div className="mt-6">
              {items.map((m, idx) => {
                const isActive = m.id === active;
                return (
                  <div key={m.id} className="py-3">
                    <button
                      type="button"
                      onClick={() => setActive(m.id)}
                      className="group flex w-full items-center justify-between"
                      aria-expanded={isActive}
                      aria-controls={`mode-${m.id}`}
                    >
                      <span
                        className={`${type.rowTitle} transition-colors`}
                        style={{ color: isActive ? UI.primary : UI.brand }}
                      >
                        {m.title}
                      </span>
                    </button>

                    <div
                      id={`mode-${m.id}`}
                      className={[
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isActive ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className={`${type.lead}`} style={{ color: UI.tertiary }}>
                          {m.lead}
                        </p>

                        <ul className="mt-3 space-y-3">
                          {m.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-[2px] shrink-0"><CheckIcon /></span>
                              <span className={`${type.bullet}`} style={{ color: UI.tertiary }}>
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {idx < items.length - 1 && (
                      <div className="mt-6 h-px w-full" style={{ background: UI.captionBorder }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="relative flex justify-center items-center shrink-0 rounded-[24px] overflow-hidden"
          >
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.alt}
              className="md:h-full md:w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
