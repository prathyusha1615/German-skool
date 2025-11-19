'use client';

import React from 'react';
import useSegmentation from './useSegmentation';

const type = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h1:
    "md:text-[40px] text-[28px] leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325]",
  item:
    "md:text-[16px] sm:text-[16px] text-[12px] leading-[24px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  itemBold:
    "text-[16px] leading-[24px] font-[600] [font-family:'Raveo_Display',sans-serif]",
};

const RingCheck: React.FC<{ color?: string }> = ({ color = '#2ECC71' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.6" />
    <path
      d="M6.3 10.1l2.3 2.3L13.7 7.4"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Segmentation: React.FC = () => {
  const { UI, image, items, cta } = useSegmentation();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[568px_minmax(0,1fr)] md:gap-16 ">
          <div
            className="relative flex justify-center items-center shrink-0 rounded-[24px] overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="md:h-full md:w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="w-full rounded-[16px] ">
            <div
              className={`inline-flex items-center gap-[6px] rounded-[36px] border px-3 py-1 ${type.caption}`}
              style={{
                background: UI.captionBg,
                borderColor: UI.captionBorder,
                color: UI.tertiary,
              }}
            >
              Segmentation
            </div>

            <h1 className={`mt-4 ${type.h1}`}>Is This Course<br /> Right For You?</h1>

            <ul className="mt-6 grid grid-cols-2 md:gap-x-4 gap-x-1 md:gap-y-3 gap-y-1 md:grid-cols-1">
              {items.map((it, i) => (
                <li key={i} className="flex items-start md:gap-3 gap-1">
                  <span className="mt-0.5 shrink-0">
                    <RingCheck color={UI.success} />
                  </span>
                  <p className={type.item} style={{ color: UI.secondary }}>
                    {it.text}
                  </p>
                </li>
              ))}
            </ul>


            <a
              href={cta.href}
              className="mt-6 md:w-fit w-full text-center justify-center inline-flex items-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-[600]"
              style={{
                background: UI.ctaBg,
                color: UI.ctaText,
                fontFamily: 'Raveo Display, sans-serif',
              }}
            >
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segmentation;
