import React from "react";
import useGerman from "./useGerman";
import GermanForm from "./GermanForm";

const avatars: string[] = [
  "https://media.onlinegermanskool.com/assets/avatar/Avatar1.svg",
  "https://media.onlinegermanskool.com/assets/avatar/Avatar2.svg",
  "https://media.onlinegermanskool.com/assets/avatar/Avatar3.svg",
  "https://media.onlinegermanskool.com/assets/avatar/Avatar4.svg",
  "https://media.onlinegermanskool.com/assets/avatar/1k.svg",
];

const RingCheck: React.FC<{ color?: string }> = ({ color = "#3AA376" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.6" />
    <path d="M6.3 10.1l2.3 2.3L13.7 7.4" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2">
    <RingCheck />
    <span className="md:text-[15px] text-[13px] leading-6">{children}</span>
  </li>
);

/** Single Input component with date placeholder overlay */
const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { error?: string }
> = ({ error, type, value, placeholder, ...props }) => {
  const isDate = type === "date";
  const showOverlay = isDate && !value; // empty date => show our label & hide native mask
  return (
    <div className="relative space-y-1">
      <input
        {...props}
        type={type}
        value={value}
        placeholder={isDate ? undefined : placeholder}
        className={`w-full rounded-lg border bg-white px-3 py-3 text-sm outline-none transition placeholder:opacity-60 ${
          error ? "border-red-400" : "border-gray-200"
        } focus:border-gray-400 ${showOverlay ? "date-mask-hidden" : ""}`}
      />
      {showOverlay && placeholder ? (
        <span className="pointer-events-none absolute left-3 top-3 text-sm text-gray-400">
          {placeholder}
        </span>
      ) : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
};


const Textarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }
> = ({ error, ...props }) => (
  <div className="space-y-1">
    <textarea
      {...props}
      className={`w-full min-h-[84px] rounded-lg border bg-white px-3 py-3 text-sm outline-none transition placeholder:opacity-60 ${
        error ? "border-red-400" : "border-gray-200"
      } focus:border-gray-400`}
    />
    {error ? <p className="text-xs text-red-500">{error}</p> : null}
  </div>
);

const German: React.FC = () => {
  const { COLORS, content, form, setField, errors, touched, setTouched, handleSubmit, loading } = useGerman();

  return (
    <section className="w-full md:pt-20" style={{ background: "linear-gradient(180deg,#EEF2FF,#F7F9FF)" }}>
      <div className="mx-auto max-w-[1700px] px-6 md:px-[120px]">
        <div className="mx-auto grid max-w-[1500px] items-start gap-10 py-12 md:grid-cols-[minmax(0,1fr)_620px] md:gap-0 md:py-16">
          {/* LEFT */}
          <div className="mx-auto max-w-[520px] text-center md:mx-0 md:max-w-none md:text-left">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{ backgroundColor: COLORS.bannerText, color: COLORS.primary }}
            >
              <div className="bg-[#E0DAFE] inline-flex items-center gap-1 rounded-full px-3 py-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <circle opacity="0.38" cx="5.5" cy="5.5" r="5" fill="#A190FC" />
                    <circle cx="5.5" cy="5.5" r="2" fill="#826BFB" />
                  </svg>
                </span>
                <span className="text-[12px] font-semibold ">New</span>
              </div>
              <span className="text-[12px] font-medium text-[#242325]">{content.badge}</span>
            </div>

            <h1 className="text-[28px] leading-[60px] font-semibold text-black sm:text-[32px] md:text-[48px]">
              {content.title}
            </h1>
            <p className="text-[28px] leading-[50px] font-normal text-black sm:text-[32px] md:text-[40px]" style={{ color: COLORS.body }}>
              {content.subtitle}
            </p>

            <p className="mt-3 text-[14px] leading-6 md:mt-4 md:max-w-xl" style={{ color: COLORS.body }}>
              {content.description}
            </p>

            <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
  href="#courses"
  className="inline-flex h-12 w-full items-center justify-center rounded-xl border text-sm font-semibold sm:w-auto sm:px-6"
  style={{ borderColor: "#D9DEE7", color: "#414f66ff"}}
>
  {content.ctas.explore}
</a>


              <a
                href="/contact_us"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold sm:w-auto sm:px-6"
                style={{ backgroundColor: COLORS.ctaBg, color: COLORS.ctaText, fontFamily: "Raveo Display, sans-serif", fontWeight: 600}}
              >
                {content.ctas.book} <span className="ml-2">→</span>
              </a>

              
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <ul className="space-y-2" style={{ color: COLORS.body }}>
                {content.bulletsLeft.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
              <ul className="space-y-2" style={{ color: COLORS.body }}>
                {content.bulletsRight.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
            </div>

            <div className="mt-6 md:mb-0 mb-20 flex flex-col items-center gap-3 md:items-start">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Student avatar ${i + 1}`}
                    className="h-8 w-8 rounded-full object-cover"
                    loading={i > 1 ? "lazy" : "eager"}
                  />
                ))}
              </div>
              <p className="text-sm" style={{ color: COLORS.body }}>
                {content.socialProof}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute md:-top-20 md:left-60 left-20 -top-16 animate-bounce ">
              <img src="https://media.onlinegermanskool.com/msg.svg" alt="" />
            </div>
            <GermanForm />
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default German;
