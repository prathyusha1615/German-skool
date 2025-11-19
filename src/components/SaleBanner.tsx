import React, { useEffect, useMemo, useState } from "react";

type SaleBannerProps = {
  deadline?: string | Date;
  ctaHref?: string;
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
  deadline = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  ctaHref = "/",
  onExpire,
}) => {
  const end = useMemo(
    () => (deadline instanceof Date ? deadline : new Date(deadline)),
    [deadline]
  );

  const [now, setNow] = useState<number>(() => Date.now());

  const remaining = end.getTime() - now;
  const expired = remaining <= 0;
  const { days, hours, mins, secs } = getTimeParts(remaining);

  useEffect(() => {
    if (expired) return;

    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, [expired]);

  useEffect(() => {
    if (expired && onExpire) onExpire();
  }, [expired, onExpire]);

  return (
    <div
      className="w-full text-center bg-[#826BFB] text-[#F0EFF1] font-[600] text-[16px] leading-[24px] py-[6px]"
      style={{ fontFamily: "Raveo Display, sans-serif" }}
      aria-live="polite"
      role="status"
    >
      {expired ? (
        <>
          Sale ended.
          <a
            href={ctaHref}
            className="underline ml-1"
            style={{ color: "#F0EFF1" }}
          >
            See new offers →
          </a>
        </>
      ) : (
        <>
          Sale Ends Soon,&nbsp;
          {days > 0 && `${pad(days)}:`}
          {pad(hours)}:{pad(mins)}:{pad(secs)}
          <a
            href={ctaHref}
            className="underline ml-1"
            style={{ color: "#F0EFF1" }}
          >
            GET IT NOW →
          </a>
        </>
      )}
    </div>
  );
};

export default SaleBanner;
