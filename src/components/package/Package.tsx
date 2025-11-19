"use client";

import React from "react";
import usePackage from "./usePackage";

const t = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2:
    "md:text-[40px] text-[28px] leading-[35px] md:leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#242325] text-center ",
  cardTitle:
    "md:text-[40px] text-[22px] leading-[27.5px] md:leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  perk:
    "md:text-[14px] text-[12px] leading-[18px] md:leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
};

const Check = ({ color = "#26C281" }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    {/* Circle */}
    <circle
      cx="10"
      cy="10"
      r="9"
      stroke={color}
      strokeWidth="1.5"
    />

    {/* Single check mark */}
    <path
      d="M6.5 10L9 12.5L14 7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const Mesh = () => (
              <svg xmlns="http://www.w3.org/2000/svg" width="199" height="120" viewBox="0 0 199 120" fill="none">
                <path d="M20.7 1H1V20.6667M20.7 1V20.6667M20.7 1H40.4M20.7 20.6667H1M20.7 20.6667H40.4M20.7 20.6667V40.3333M1 20.6667V40.3333M40.4 1V20.6667M40.4 1H60.1M40.4 20.6667H60.1M40.4 20.6667V40.3333M60.1 1V20.6667M60.1 1H79.8M60.1 20.6667H79.8M60.1 20.6667V40.3333M79.8 1V20.6667M79.8 1H99.5M79.8 20.6667H99.5M79.8 20.6667V40.3333M99.5 1V20.6667M99.5 1H119.2M99.5 20.6667H119.2M99.5 20.6667V40.3333M119.2 1V20.6667M119.2 1H138.9M119.2 20.6667H138.9M119.2 20.6667V40.3333M138.9 1V20.6667M138.9 1H158.6M138.9 20.6667H158.6M138.9 20.6667V40.3333M158.6 1V20.6667M158.6 1H178.3M158.6 20.6667H178.3M158.6 20.6667V40.3333M178.3 1V20.6667M178.3 1H198V20.6667M178.3 20.6667H198M178.3 20.6667V40.3333M198 20.6667V40.3333M20.7 40.3333H1M20.7 40.3333H40.4M20.7 40.3333V60M1 40.3333V60M40.4 40.3333H60.1M40.4 40.3333V60M60.1 40.3333H79.8M60.1 40.3333V60M79.8 40.3333H99.5M79.8 40.3333V60M99.5 40.3333H119.2M99.5 40.3333V60M119.2 40.3333H138.9M119.2 40.3333V60M138.9 40.3333H158.6M138.9 40.3333V60M158.6 40.3333H178.3M158.6 40.3333V60M178.3 40.3333H198M178.3 40.3333V60M198 40.3333V60M20.7 60H1M20.7 60H40.4M20.7 60V79.6667M1 60V79.6667M40.4 60H60.1M40.4 60V79.6667M60.1 60H79.8M60.1 60V79.6667M79.8 60H99.5M79.8 60V79.6667M99.5 60H119.2M99.5 60V79.6667M119.2 60H138.9M119.2 60V79.6667M138.9 60H158.6M138.9 60V79.6667M158.6 60H178.3M158.6 60V79.6667M178.3 60H198M178.3 60V79.6667M198 60V79.6667M20.7 79.6667H1M20.7 79.6667H40.4M20.7 79.6667V99.3333M1 79.6667V99.3333M40.4 79.6667H60.1M40.4 79.6667V99.3333M60.1 79.6667H79.8M60.1 79.6667V99.3333M79.8 79.6667H99.5M79.8 79.6667V99.3333M99.5 79.6667H119.2M99.5 79.6667V99.3333M119.2 79.6667H138.9M119.2 79.6667V99.3333M138.9 79.6667H158.6M138.9 79.6667V99.3333M158.6 79.6667H178.3M158.6 79.6667V99.3333M178.3 79.6667H198M178.3 79.6667V99.3333M198 79.6667V99.3333M20.7 99.3333H1M20.7 99.3333H40.4M20.7 99.3333V119M1 99.3333V119H20.7M40.4 99.3333H60.1M40.4 99.3333V119M60.1 99.3333H79.8M60.1 99.3333V119M79.8 99.3333H99.5M79.8 99.3333V119M99.5 99.3333H119.2M99.5 99.3333V119M119.2 99.3333H138.9M119.2 99.3333V119M138.9 99.3333H158.6M138.9 99.3333V119M158.6 99.3333H178.3M158.6 99.3333V119M178.3 99.3333H198M178.3 99.3333V119M198 99.3333V119H178.3M20.7 119H40.4M40.4 119H60.1M60.1 119H79.8M79.8 119H99.5M99.5 119H119.2M119.2 119H138.9M138.9 119H158.6M158.6 119H178.3" stroke="url(#paint0_radial_446_1864)"/>
                <defs>
                    <radialGradient id="paint0_radial_446_1864" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(134 51.5) rotate(-60.7621) scale(91.1071 125.063)">
                    <stop stop-color="#BDBBC1" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#BDBBC1" stop-opacity="0"/>
                    </radialGradient>
                </defs>
              </svg>
);

export default function Package() {
  const { UI, plans } = usePackage();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] items-center justify-center flex flex-col">
          <div
            className={`inline-flex items-center gap-[6px] rounded-[36px] border px-3 py-1 ${t.caption}`}
            style={{
              background: UI.captionBg,
              borderColor: UI.captionBorder,
              color: UI.captionText,
            }}
          >
             Learning Pace
          </div>
          <h2 className={`mt-6 md:mt-4 ${t.h2} md:whitespace-nowrap`}>
            Customized <br className="block md:hidden" />
            Delivery <span className="hidden md:inline"> - </span>Your Way
          </h2>
        </div>

        <div className="mx-auto mt-8 md:mt-12 grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-2">
          <article
            className="relative rounded-[24px] p-6 md:p-8"
            style={{ background: plans[0].bg }}
          >
            <div className="absolute right-0 top-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="198" height="119" viewBox="0 0 198 119" fill="none">
                <path d="M20.7 0H1V19.6667M20.7 0V19.6667M20.7 0H40.4M20.7 19.6667H1M20.7 19.6667H40.4M20.7 19.6667V39.3333M1 19.6667V39.3333M40.4 0V19.6667M40.4 0H60.1M40.4 19.6667H60.1M40.4 19.6667V39.3333M60.1 0V19.6667M60.1 0H79.8M60.1 19.6667H79.8M60.1 19.6667V39.3333M79.8 0V19.6667M79.8 0H99.5M79.8 19.6667H99.5M79.8 19.6667V39.3333M99.5 0V19.6667M99.5 0H119.2M99.5 19.6667H119.2M99.5 19.6667V39.3333M119.2 0V19.6667M119.2 0H138.9M119.2 19.6667H138.9M119.2 19.6667V39.3333M138.9 0V19.6667M138.9 0H158.6M138.9 19.6667H158.6M138.9 19.6667V39.3333M158.6 0V19.6667M158.6 0H178.3M158.6 19.6667H178.3M158.6 19.6667V39.3333M178.3 0V19.6667M178.3 0H198V19.6667M178.3 19.6667H198M178.3 19.6667V39.3333M198 19.6667V39.3333M20.7 39.3333H1M20.7 39.3333H40.4M20.7 39.3333V59M1 39.3333V59M40.4 39.3333H60.1M40.4 39.3333V59M60.1 39.3333H79.8M60.1 39.3333V59M79.8 39.3333H99.5M79.8 39.3333V59M99.5 39.3333H119.2M99.5 39.3333V59M119.2 39.3333H138.9M119.2 39.3333V59M138.9 39.3333H158.6M138.9 39.3333V59M158.6 39.3333H178.3M158.6 39.3333V59M178.3 39.3333H198M178.3 39.3333V59M198 39.3333V59M20.7 59H1M20.7 59H40.4M20.7 59V78.6667M1 59V78.6667M40.4 59H60.1M40.4 59V78.6667M60.1 59H79.8M60.1 59V78.6667M79.8 59H99.5M79.8 59V78.6667M99.5 59H119.2M99.5 59V78.6667M119.2 59H138.9M119.2 59V78.6667M138.9 59H158.6M138.9 59V78.6667M158.6 59H178.3M158.6 59V78.6667M178.3 59H198M178.3 59V78.6667M198 59V78.6667M20.7 78.6667H1M20.7 78.6667H40.4M20.7 78.6667V98.3333M1 78.6667V98.3333M40.4 78.6667H60.1M40.4 78.6667V98.3333M60.1 78.6667H79.8M60.1 78.6667V98.3333M79.8 78.6667H99.5M79.8 78.6667V98.3333M99.5 78.6667H119.2M99.5 78.6667V98.3333M119.2 78.6667H138.9M119.2 78.6667V98.3333M138.9 78.6667H158.6M138.9 78.6667V98.3333M158.6 78.6667H178.3M158.6 78.6667V98.3333M178.3 78.6667H198M178.3 78.6667V98.3333M198 78.6667V98.3333M20.7 98.3333H1M20.7 98.3333H40.4M20.7 98.3333V118M1 98.3333V118H20.7M40.4 98.3333H60.1M40.4 98.3333V118M60.1 98.3333H79.8M60.1 98.3333V118M79.8 98.3333H99.5M79.8 98.3333V118M99.5 98.3333H119.2M99.5 98.3333V118M119.2 98.3333H138.9M119.2 98.3333V118M138.9 98.3333H158.6M138.9 98.3333V118M158.6 98.3333H178.3M158.6 98.3333V118M178.3 98.3333H198M178.3 98.3333V118M198 98.3333V118H178.3M20.7 118H40.4M40.4 118H60.1M60.1 118H79.8M79.8 118H99.5M99.5 118H119.2M119.2 118H138.9M138.9 118H158.6M158.6 118H178.3" stroke="url(#paint0_radial_443_1730)"/>
                <defs>
                    <radialGradient id="paint0_radial_443_1730" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(134 50.5) rotate(-60.7621) scale(91.1071 125.063)">
                    <stop stop-color="#F0EFF1" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#F0EFF1" stop-opacity="0"/>
                    </radialGradient>
                </defs>
              </svg>
            </div>
            <h3
              className={`${t.cardTitle} ${
                plans[0].lightText ? "text-white" : "text-[#242325]"
              } w-28`}
            >
              {plans[0].title}
            </h3>

            <div className="mt-5 h-px w-full bg-white/50" />

            <ul className="mt-5 grid md:gap-4 gap-2 grid-cols-2">
              {plans[0].perks.map((p) => (
                <li key={p} className="flex items-start md:gap-3 gap-0">
                  <Check color="#B1F2CF" />
                  <span className={`${t.perk} text-white/90`}>{p}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => (window.location.href = "/contact_us")}
              className="mt-6 w-full rounded-[12px] px-5 py-4 font-[600]"
              style={{
                background: "#FFFFFF",
                color: UI.primary,
                fontFamily: "Raveo Display, sans-serif",
              }}
            >
              Start Regular Classes
            </button>
          </article>

          <article className="relative rounded-[24px] border border-[#E7E6EA] bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="absolute right-0 top-0">
              <Mesh />
            </div>
            {plans[1].recommended && (
              <div
                className="absolute md:right-6 md:top-6 right-3 top-3 rounded-full px-3 py-1 text-[12px] font-[600]"
                style={{
                  background: "#F0EFF1",
                  color: UI.neutralSecondary,
                  border: "0.8px solid #E0DFE3",
                  fontFamily: "Raveo Display, sans-serif",
                }}
              >
                Recommended
              </div>
            )}

            <h3
              className={`${t.cardTitle} md:w-96`}
              style={{ color: UI.brand }}
            >
              {plans[1].title}
            </h3>

            <div className="mt-5 h-px w-full bg-[#E9E8ED]" />

            <ul className="mt-5 grid md:gap-4 gap-2 grid-cols-2">
              {plans[1].perks.map((p) => (
                <li key={p} className="flex items-start md:gap-3 gap-0">
                  <Check color="#26C281" />
                  <span className={`${t.perk} text-[#47464A]`}>{p}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => (window.location.href = "/contact_us")}
              className="mt-6 w-full rounded-[12px] px-5 py-4 font-[600] text-white "
              style={{
                background: UI.primary,
                fontFamily: "Raveo Display, sans-serif",
              }}
            >
              Join Super-Intensive Now
            </button>

            <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-black/5" />
          </article>
        </div>
      </div>
    </section>
  );
}
