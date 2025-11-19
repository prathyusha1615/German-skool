import React from "react";

type HeaderProps = {
  onCtaClick?: () => void;
  ctaLabel?: string;
  ctaBg?: string;
};

const MenuIcon = ({ className = "" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" className={className}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="#6B6A70" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" className={className}>
    <path d="M6 6l12 12M18 6L6 18" stroke="#6B6A70" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Header({
  onCtaClick,
  ctaLabel = "Book Free Trial Class",
  ctaBg = "#A190FC",
}: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  // lock scroll when overlay is open + close on ESC
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#D1D0D6] bg-white">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img src="https://media.onlinegermanskool.com/logo.svg" alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden h-10 w-[397px] items-center justify-between text-[16px] font-semibold leading-6 text-[#6B6A70] md:flex">
            <a href="#course">Courses</a>
            <a href="#benefits">Benefits</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/contact_us">Contact</a>
          </nav>

          {/* Right side: CTA + hamburger (hamburger shows on mobile) */}
          <div className="flex items-center gap-3">
            <a
              type="button"
              href="/contact_us"
              className="inline-flex h-[48px] w-fit items-center justify-center rounded-[8px] px-3 py-3 transition-transform duration-150 hover:translate-y-[-1px] active:translate-y-0 font-semibold md:text-[16px] text-[14px] leading-[24px] text-[#E4F1FE]  "
              style={{
                backgroundColor: ctaBg,
              }}
            >
              {ctaLabel}
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-overlay"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div
          id="mobile-overlay"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100]"
        >
          {/* dimmer */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div
            className="
              relative mx-auto flex h-full w-full  flex-col
              bg-[#ffffff] shadow-xl sm:rounded-none
            "
          >
            <div className="flex items-center justify-between px-4 py-4">
              <img src="https://media.onlinegermanskool.com/logo.svg" alt="Logo" className="h-7 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-md p-2"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="mx-4 overflow-hidden rounded-xl bg-white px-8">
              {[
                { label: "Courses", href: "#courses" },
                { label: "Benefits", href: "#benefits" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((item, i, arr) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 border-b-[1.5px] border-[#D1D0D6]"
                >
                  <span className="text-[14px] font-medium text-[#242325]">
                    {item.label}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" stroke="#D1D0D6" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </a>
              ))}
            </div>


            {/* bottom CTAs */}
            <div className="mt-auto px-4 pb-6">
              <button
                onClick={() => {
                  setOpen(false);
                  onCtaClick?.();
                }}
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded-xl font-semibold text-white"
                style={{ backgroundColor: "#A190FC" }}
              >
                Book Free Trial Class 
              </button>
              <a
                href="#courses"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#D1D0D6] bg-white text-sm font-semibold text-[#374151]"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
