'use client';

import React from 'react';
import useFreeClass from './useFreeClass';

const type = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2:
    "md:text-[40px] text-[28px] leading-[35px] md:leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  subtitle:
    "text-[20px] leading-[30px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  cta:
    "text-[16px] leading-[24px] font-[600] [font-family:'Raveo_Display',sans-serif]",
};

function Mesh() {
  // light “grid” that fades to the right edge of the purple panel
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="377" height="409" viewBox="0 0 377 409" fill="none">
    <path d="M0.999997 429.4L1 492L63.5 492M0.999997 429.4L63.5 429.4M0.999997 429.4L0.999995 366.8M63.5 429.4L63.5 492M63.5 429.4L63.5 366.8M63.5 429.4L126 429.4M63.5 492L126 492M0.999995 366.8L63.5 366.8M0.999995 366.8L0.999992 304.2M63.5 366.8L63.5 304.2M63.5 366.8L126 366.8M0.999992 304.2L63.5 304.2M0.999992 304.2L0.999989 241.6M63.5 304.2L63.5 241.6M63.5 304.2L126 304.2M0.999989 241.6L63.5 241.6M0.999989 241.6L0.999986 179M63.5 241.6L63.5 179M63.5 241.6L126 241.6M0.999986 179L63.5 179M0.999986 179L0.999984 116.4M63.5 179L63.5 116.4M63.5 179L126 179M0.999984 116.4L63.5 116.4M0.999984 116.4L0.999981 53.8M63.5 116.4L63.5 53.8M63.5 116.4L126 116.4M0.999981 53.8L63.5 53.8M0.999981 53.8L0.999978 -8.80002M63.5 53.8L63.5 -8.80002M63.5 53.8L126 53.8M0.999978 -8.80002L63.5 -8.80002M0.999978 -8.80002L0.999975 -71.4M63.5 -8.80002L63.5 -71.4M63.5 -8.80002L126 -8.80002M0.999975 -71.4L63.5 -71.4M0.999975 -71.4L0.999973 -134L63.5 -134M63.5 -71.4L63.5 -134M63.5 -71.4L126 -71.4M63.5 -134L126 -134M126 429.4L126 492M126 429.4L126 366.8M126 429.4L188.5 429.4M126 492L188.5 492M126 366.8L126 304.2M126 366.8L188.5 366.8M126 304.2L126 241.6M126 304.2L188.5 304.2M126 241.6L126 179M126 241.6L188.5 241.6M126 179L126 116.4M126 179L188.5 179M126 116.4L126 53.8M126 116.4L188.5 116.4M126 53.8L126 -8.80002M126 53.8L188.5 53.8M126 -8.80002L126 -71.4M126 -8.80002L188.5 -8.80003M126 -71.4L126 -134M126 -71.4L188.5 -71.4M126 -134L188.5 -134M188.5 429.4L188.5 492M188.5 429.4L188.5 366.8M188.5 429.4L251 429.4M188.5 492L251 492M188.5 366.8L188.5 304.2M188.5 366.8L251 366.8M188.5 304.2L188.5 241.6M188.5 304.2L251 304.2M188.5 241.6L188.5 179M188.5 241.6L251 241.6M188.5 179L188.5 116.4M188.5 179L251 179M188.5 116.4L188.5 53.8M188.5 116.4L251 116.4M188.5 53.8L188.5 -8.80003M188.5 53.8L251 53.8M188.5 -8.80003L188.5 -71.4M188.5 -8.80003L251 -8.80003M188.5 -71.4L188.5 -134M188.5 -71.4L251 -71.4M188.5 -134L251 -134M251 429.4L251 492M251 429.4L251 366.8M251 429.4L313.5 429.4M251 492L313.5 492M251 366.8L251 304.2M251 366.8L313.5 366.8M251 304.2L251 241.6M251 304.2L313.5 304.2M251 241.6L251 179M251 241.6L313.5 241.6M251 179L251 116.4M251 179L313.5 179M251 116.4L251 53.8M251 116.4L313.5 116.4M251 53.8L251 -8.80003M251 53.8L313.5 53.8M251 -8.80003L251 -71.4M251 -8.80003L313.5 -8.80003M251 -71.4L251 -134M251 -71.4L313.5 -71.4M251 -134L313.5 -134M313.5 429.4L313.5 492M313.5 429.4L313.5 366.8M313.5 429.4L376 429.4M313.5 492L376 492L376 429.4M313.5 366.8L313.5 304.2M313.5 366.8L376 366.8M313.5 304.2L313.5 241.6M313.5 304.2L376 304.2M313.5 241.6L313.5 179M313.5 241.6L376 241.6M313.5 179L313.5 116.4M313.5 179L376 179M313.5 116.4L313.5 53.8M313.5 116.4L376 116.4M313.5 53.8L313.5 -8.80003M313.5 53.8L376 53.8M313.5 -8.80003L313.5 -71.4M313.5 -8.80003L376 -8.80003M313.5 -71.4L313.5 -134M313.5 -71.4L376 -71.4M313.5 -134L376 -134L376 -71.4M376 429.4L376 366.8M376 366.8L376 304.2M376 304.2L376 241.6M376 241.6L376 179M376 179L376 116.4M376 116.4L376 53.8M376 53.8L376 -8.80003M376 -8.80003L376 -71.4" stroke="url(#paint0_radial_351_4151)"/>
    <defs>
        <radialGradient id="paint0_radial_351_4151" cx="0" cy="0" r="1" gradientTransform="matrix(134.375 -144.763 144.882 134.609 188.5 179)" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.42"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
    </defs>
    </svg>
  );
}

export default function FreeClass() {
  const { UI, content, onCta } = useFreeClass();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[120px] py-16 md:py-24">
        <div className="grid items-stretch gap-0 rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:grid-cols-2">
          <div
            className="relative flex flex-col justify-center p-6 md:p-10"
            style={{ backgroundColor: UI.panelBg }}
          >
            <div
              className={`inline-flex w-fit items-center gap-[6px] rounded-[36px] border px-3 py-1 ${type.caption}`}
              style={{
                color: UI.badgeText,
                borderColor: UI.badgeBorder,
                background: UI.badgeBg,
              }}
            >
              {content.badge}
            </div>

            <h2 className={`mt-4 ${type.h2}`} style={{ color: UI.title }}>
              {content.titleLine1}
              <br/>
              {content.titleLine2}
            </h2>

            <p className={`mt-4 max-w-[34rem] ${type.subtitle}`} style={{ color: UI.subtitle }}>
              {content.subtitle}
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => (window.location.href = "/contact_us")}
                className={`inline-flex md:w-fit w-full text-center justify-center items-center gap-1 rounded-[8px] px-4 py-3 ${type.cta}`}
                style={{ background: UI.ctaBg, color: UI.ctaText }}
              >
                {content.cta}
              </button>
            </div>
            <div className="absolute -right-36 top-0">
              <Mesh />
            </div>
          </div>

          <div className="relative h-[320px] md:h-auto">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="h-full w-full object-cover"
              style={{ flex: '1 0 0', alignSelf: 'stretch' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
