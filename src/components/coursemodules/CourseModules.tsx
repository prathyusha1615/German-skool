'use client';

import React, { useState } from "react";
import useCourseModules from "./useCourseModules";

/* ...keep your type object exactly as you have it... */
const type = {
  caption: "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2: "md:text-[40px] text-[28px] leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325]",
  rowTitle: "text-[18px] leading-[27px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  rowDesc: "text-[18px] leading-[27px] font-[400] [font-family:'Raveo_Display',sans-serif]",
};

/** Infinite marquee chips (no end) */
function MarqueeChips({ chips, bg = "#00000066", speed = 18 }: { chips: string[]; bg?: string; speed?: number }) {
  // Duplicate once so translating -50% lands on the identical second half
  const loop = [...chips, ...chips];

  return (
    <>
      <style>{`
        @keyframes cm-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="absolute inset-x-4 bottom-4 overflow-hidden rounded-[20px] pointer-events-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, rgba(0,0,0,.85) 8%, rgba(0,0,0,.85) 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, rgba(0,0,0,.85) 8%, rgba(0,0,0,.85) 92%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div
          className="flex w-[200%] gap-3"
          style={{
            animation: `cm-scroll ${speed}s linear infinite`,
            willChange: "transform",
          }}
        >
          {/* first half */}
          <div className="flex min-w-[50%] gap-3">
            {chips.map((chip, i) => (
              <span
                key={`a-${i}`}
                className="whitespace-nowrap bg-[#b5a6a6] backdrop-blur-lg  rounded-[39px] text-[#fff] px-3 py-2 text-[14px] leading-[21px] font-[600]"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* second half (identical) */}
          <div className="flex min-w-[50%] gap-3">
            {chips.map((chip, i) => (
              <span
                key={`b-${i}`}
                className="whitespace-nowrap bg-[#b5a6a6] backdrop-blur-md  rounded-[39px] text-[#fff]  px-3 py-2 text-[14px] leading-[21px] font-[600]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function CourseModules() {
  const { items, UI } = useCourseModules();
  const [active, setActive] = useState(items[0].id);

  const activeItem = items.find((x) => x.id === active)!;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[568px_minmax(0,1fr)] md:gap-16 items-start">
          {/* LEFT: Image (fixed 568×436) */}
          <div style={{ isolation: "isolate" }} className="hidden md:block relative flex justify-center items-center shrink-0 rounded-[24px] overflow-hidden bg-[#F0EFF1]">
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.heading}
              className="md:h-full md:w-full object-cover"
            />

            {/* Infinite chips carousel */}
            <MarqueeChips chips={activeItem.chips} bg={activeItem.chipBg} speed={22} />
          </div>

          {/* RIGHT: Caption, Title, Accordion */}
          <div className="w-full">
            <div
              className={`inline-flex items-center gap-[6px] rounded-[36px] border px-3 py-1 ${type.caption}`}
              style={{ borderColor: UI.captionBorder, background: UI.captionBg, color: UI.captionText }}
            >
              Detailed Course Modules
            </div>

            <h2 className={`mt-4 ${type.h2}`}>
              What You’ll Learn<br /> in Each Level
            </h2>

            <div className="mt-6 md:mt-10">
              {items.map((lvl, idx) => {
                const isActive = lvl.id === active;
                return (
                  <div key={lvl.id} className="py-3">
                    <button
                      type="button"
                      onClick={() => setActive(lvl.id)}
                      className="group flex w-full items-center justify-between"
                      aria-expanded={isActive}
                      aria-controls={`row-${lvl.id}`}
                    >
                      <span
                        className={`${type.rowTitle} transition-colors`}
                        style={{ color: isActive ? UI.brand : UI.secondaryText }}
                      >
                        {lvl.heading}
                      </span>
                    </button>

                    {isActive && (
                      <div id={`row-${lvl.id}`} className="mt-3 pr-2 w-full md:w-[568px]">
                        <p className={`${type.rowDesc}`} style={{ color: UI.secondaryText }}>
                          {lvl.description}
                        </p>
                      </div>
                    )}

                    {idx < items.length - 1 && (
                      <div className="mt-6 h-px w-full md:w-[568px]" style={{ background: UI.divider }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ isolation: "isolate" }} className="md:hidden block relative flex w-[568px] max-w-full h-[436px] justify-center items-center shrink-0 rounded-[24px] overflow-hidden bg-[#F0EFF1]">
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.heading}
              className="h-full w-full object-cover"
            />

            {/* Infinite chips carousel */}
            <MarqueeChips chips={activeItem.chips} bg={activeItem.chipBg} speed={22} />
          </div>
        </div>
      </div>
    </section>
  );
}
