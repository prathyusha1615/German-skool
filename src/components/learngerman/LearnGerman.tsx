import React from "react";
import useLearnGerman from "./useLearnGerman";

function FeatureCard({
  title,
  subtitle,
  iconInline,
  accent = "#E9D8FF",     
  badge = "#E4F1FE"  
}: {
  title: string;
  subtitle: string;
  iconInline: string;
  accent: string;
  badge: string;
}) {
  return (
  <div className="rounded-2xl" style={{ backgroundColor: accent }}>
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-7 md:p-16 gap-6">
      <div className="order-1 md:order-2 md:pb-8 pb-0 md:self-auto">
        <span
          dangerouslySetInnerHTML={{ __html: iconInline }}
          className="block h-[84px] w-[84px]"
          aria-hidden="true"
        />
      </div>

      <div className="order-2 md:order-1 min-w-0 text-left">
        <h4
          className="truncate"
          style={{
            color: "#242325",
            fontFamily: "Raveo Display, sans-serif",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "35px",
          }}
        >
          {title}
        </h4>
        <p
          className="mt-2"
          style={{
            color: "#47464A",
            fontFamily: "Raveo Display, sans-serif",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  </div>
  );
}

const LearnGerman: React.FC = () => {
  const { COLORS, items } = useLearnGerman();

  return (
    <section
      className="w-full bg-[#ffffff]"    >
      <div className="mx-auto max-w-[1700px] px-7 md:px-[120px] py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_700px]">
          <div className="relative">
            <div className="sticky top-24 md:top-28">
              <div
                className="inline-block rounded-full px-3 py-1 mb-3"
                style={{ color: "#6B6A70", fontFamily: "Raveo Display, sans-serif",
                         fontWeight: 400, fontSize: "14px", lineHeight: "21px",
                         backgroundColor: COLORS.bannerText }}
              >
                Learn German With Us
              </div>

              <h2 className="text-[#242325] text-[28px] md:text-[40px] font-semibold leading-[35px] md:leading-[50px] ">
                Why 1000+ Students Chose <br className="md:block hidden" />
                Online German SKOOL
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-8 pt-10 md:pt-32">
            {items.map((f, i) => (
              <FeatureCard
                key={i}
                title={f.title}
                subtitle={f.subtitle}
                iconInline={f.iconInline}
                accent={i % 2 === 0 ? "#E9D8FF" : "#E4F1FE"}
                badge="#E4F1FE"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnGerman;
