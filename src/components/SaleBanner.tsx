import React, { useEffect, useMemo, useState } from "react";

type SaleBannerProps = {
  /** Any Date-parsable string or Date object */
  deadline?: string | Date;
  /** CTA href */
  ctaHref?: string;
  /** Called once when countdown hits 0 */
  onExpire?: () => void;
};

const pad = (n: number) => n.toString().padStart(2, "0");

function getTimeParts(msRemaining: number) {
  const total = Math.max(0, Math.floor(msRemaining / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const mins = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  return { days, hours, mins, secs };
}

const SaleBanner: React.FC<SaleBannerProps> = ({
  // ⬇️ Set your real deadline here (example: 3 days from now)
  deadline = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  ctaHref = "/",
  onExpire,
}) => {
  const end = useMemo(
    () => (deadline instanceof Date ? deadline : new Date(deadline)),
    [deadline]
  );

  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = end.getTime() - now;
  const expired = remaining <= 0;
  const { days, hours, mins, secs } = getTimeParts(remaining);

  useEffect(() => {
    if (expired && onExpire) onExpire();
    // run only when it flips to expired
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired]);

  return (
    <div
      className="w-full text-center"
      style={{
        backgroundColor: "#826BFB",
        color: "#F0EFF1",
        fontFamily: "Raveo Display, sans-serif",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0%",
        padding: "6px 0",
      }}
      aria-live="polite"
      role="status"
    >
      {expired ? (
        <>
          Sale ended.{" "}
          <a
            href={ctaHref}
            style={{ textDecoration: "underline", marginLeft: 4, color: "#F0EFF1" }}
          >
            See new offers →
          </a>
        </>
      ) : (
        <>
          Sale Ends Soon,&nbsp;
          {days > 0 && `${pad(days)}:`}
          {pad(hours)}:{pad(mins)}:{pad(secs)}{" "}
          <a
            href={ctaHref}
            style={{ textDecoration: "underline", marginLeft: 4, color: "#F0EFF1" }}
          >
            GET IT NOW →
          </a>
        </>
      )}
    </div>
  );
};

export default SaleBanner;
