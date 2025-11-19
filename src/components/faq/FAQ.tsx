import React, { useState } from "react";
import useFaq from "./useFaq";

/** Typography helpers (same family/sizes you’ve been using) */
const T = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2:
    "md:text-[40px] text-[28px] leading-[35px] md:leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325]",
  q:
    "text-[18px] leading-[27px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  a:
    "text-[16px] leading-[24px] font-[400] [font-family:'Raveo_Display',sans-serif]",
};

const Chevron: React.FC<{ open: boolean; color?: string }> = ({ open, color = "#6B6A70" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FAQ: React.FC = () => {
  const { items, UI } = useFaq();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl px-7 md:px-[120px] py-16 md:py-24">        <div className="text-center">
          <span
            className={`inline-flex items-center gap-[6px] rounded-[36px] border px-6 py-1 ${T.caption}`}
            style={{ borderColor: UI.captionBorder, background: UI.captionBg, color: UI.captionText }}
          >
            FAQs
          </span>
          <h2 className={`mt-3 ${T.h2}`}>Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto mt-8 md:mt-10 max-w-[1200px]">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: UI.cardBg, }}
          >
            {items.map((row, idx) => {
              const open = row.id === openId;
              return (
                <div key={row.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : row.id)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${row.id}`}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-6">
                      <span
                        className={`${T.q} transition-colors`}
                        style={{ color: open ? UI.brand : UI.primary }}
                      >
                        {row.q}
                      </span>
                      <Chevron open={open} color={open ? UI.brand : UI.tertiary} />
                    </div>
                  </button>

                  {open && (
                    <div id={`faq-panel-${row.id}`} className="px-5 pb-6 md:px-8 md:pb-8 -mt-2">
                      <p className={T.a} style={{ color: UI.secondary }}>
                        {row.a}
                      </p>
                    </div>
                  )}

                  {idx < items.length - 1 && (
                    <div
                      role="separator"
                      aria-hidden
                      className="h-px mx-5 md:mx-8"
                      style={{
                        background: `linear-gradient(
                          90deg,
                          transparent 0,
                          ${UI.divider} 8%,
                          ${UI.divider} 92%,
                          transparent 100%
                        )`,
                      }}
                    />
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
