'use client';

import React from "react";
import useCourseLevel from "./useCourseLevel";
import CourseModules from "../coursemodules/CourseModules";

/** Typography (exact per spec) */
const t = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif] text-[#6B6A70]",
  h2:
    "md:text-[40px] text-[28px] leading-[35px] md:leading-[40px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325] text-center",
  h4:
    "text-[28px] leading-[35px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325]",
  big:
    "md:text-[80px] text-[40px] leading-[30px] font-[500] tracking-[-0.8px] [font-family:'Raveo_Display',sans-serif]",
  body:
    "md:text-[20px] text-[14px] leading-[21px] md:leading-[30px] font-[400] [font-family:'Raveo_Display',sans-serif] text-[#242325]",
};

/** Sticky top offsets to mimic Elementor (desktop/mobile) */
const TOPS_DESKTOP = ["top-[210px]", "top-[350px]", "top-[220px]"];
const TOPS_MOBILE  = ["top-[116px]",  "top-[130px]", "top-[240px]"];

/** Overlap so cards nest under each other (tweak if you want tighter/looser) */
const OVERLAP_DESKTOP = "md:mt-24";
const OVERLAP_MOBILE  = "mt-20";

function Card({
  tier,
  label,
  description,
  bg,
  lightText,
}: {
  tier: string;
  label: string;
  description: string;
  bg: string;
  lightText?: boolean;
}) {
  return (
    <div 
      className="rounded-[28px] px-9 py-10 md:px-12 md:pt-6 md:pb-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      style={{ backgroundColor: bg }}
    >
      <div className={`${t.h4} ${lightText ? "text-white" : ""}`}>{tier}</div>

      <div className="md:mt-32 mt-16 grid grid-cols-1 items-center justify-center gap-20 md:grid-cols-[auto_minmax(0,1fr)]">
        <div className=" leading-none">
          <div className={`${t.big} ${lightText ? "text-white/95" : "text-[#242325]"}`}>
            {label}
          </div>
        </div>

        <p className={`${t.body} ${lightText ? "text-white/90" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CourseLevel() {
  const { items } = useCourseLevel();

  return (
    <section className="w-full">
      {/* Scale/1600, side padding 120 */}
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-16 md:py-24">
        {/* Section header */}
        <div className="mx-auto max-w-[1200px] text-center pb-12">
            <div
                className="inline-block rounded-full px-3 py-1 mb-5"
                style={{ color: "#6B6A70", fontFamily: "Raveo Display, sans-serif",
                 fontWeight: 400, fontSize: "14px", lineHeight: "21px",
                 backgroundColor: "#F0EFF1" }}
            >
            Course Levels Overview
            </div>          
            <h2 className={`mt-2 ${t.h2}`}>Courses Tailored for Every <br className="md:hidden block" /> Stage of <br className="md:block hidden" /> Your Journey</h2>
        </div>

        {/* Sticky stack (like Elementor) */}
        <div className="relative mx-auto mt-10 md:mt-16 max-w-[1200px] md:pb-[40vh]">
          {items.map((c, i) => {
            const topDesktop = TOPS_DESKTOP[i] ?? "top-[110px]";
            const topMobile  = TOPS_MOBILE[i]  ?? "top-[90px]";
            // Later cards should sit ABOVE earlier ones
            const z = 20 + i; // increase with index

            return (
              <div id="course"
                key={c.tier}
                className={[
                  "sticky",           // pin while scrolling
                  topMobile,          // mobile top
                  `md:${topDesktop}`, // desktop top
                  OVERLAP_MOBILE,
                  OVERLAP_DESKTOP,
                  "z-["+z+"]",        // Tailwind can't calc dynamic z, so use style below
                ].join(" ")}
              >
                <Card
                  tier={c.tier}
                  label={c.label}
                  description={c.description}
                  bg={c.bg}
                  lightText={c.lightText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
