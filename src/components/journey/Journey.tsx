import React from "react";
import { useJourney } from "./useJourney";
import TestimonialsMarquee from "../TestimonialsMarquee";
import VideoTestimonialCard from "../VideoTestimonialCard";
export default function Journey() {
  const { rings, computeAngles } = useJourney();

  return (
    <section id="testimonials" className="relative mx-auto w-full overflow-hidden bg-[#E4F1FE]">
      <div className="mx-auto max-w-4xl px-7 pt-16 text-center">
        <div
          className={`inline-flex bg-[#FFFFFF] text-[#6B6A70] items-center gap-[6px] rounded-[36px] border px-3 py-1 mb-4 `}
        >
          Testimonials
        </div>
        <h2 className="md:text-[40px] text-[28px] leading-[35px] md:leading-[50px] font-semibold tracking-tight text-[neutral-900]">
          Our Students’ Stories
        </h2>
      </div>

        <div
        className="relative mx-auto mt-0  h-[360px] w-full max-w-5xl"
        style={{ perspective: 1200 }}
        >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {rings.map((ring) => {
            const angles = computeAngles(ring.avatars.length);
            return (
                <div
                key={ring.id}
                className="absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2"
                style={{
                    ['--tilt' as any]: `${ring.tiltDeg}deg`,
                    ['--spin' as any]: `0deg`,
                    transform:
                    'translate(-50%, -50%) rotate(var(--tilt)) rotate(var(--spin))',
                    animation: `${ring.reverse ? 'orbit-rev' : 'orbit'} ${ring.speedSec}s linear infinite`,
                    transformOrigin: 'center center',
                }}
                >
                {/* optional: faint guide circle to check centering */}
                {/* <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    width: ring.radiusPx*2, height: ring.radiusPx*2,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '9999px', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.06)'
                }} /> */}

                {angles.map((deg, idx) => {
                    const a = ring.avatars[idx];
                    return (
                    <div
                        key={a.id}
                        className="absolute rounded-full border border-white/70 shadow-md"
                        style={{
                        left: '50%',
                        top: '50%',
                        width: ring.sizePx,
                        height: ring.sizePx,
                        transform: `translate(-50%, -50%) rotate(${deg}deg) translate(${ring.radiusPx}px) rotate(${-deg}deg)`,
                        willChange: 'transform',
                        }}
                    >
                        <img
                        src={a.src}
                        alt={a.alt || ''}
                        className="h-full w-full rounded-full object-cover"
                        draggable={false}
                        />
                    </div>
                    );
                })}
                </div>
            );
            })}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#E4F1FE] to-transparent" />
        </div>



      <TestimonialsMarquee />
      <VideoTestimonialCard />

      {/* Local styles (keyframes) */}
      <style>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(var(--tilt, 0deg)) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(var(--tilt, 0deg)) rotate(360deg); }
        }
        @keyframes orbit-rev {
          0% { transform: translate(-50%, -50%) rotate(var(--tilt, 0deg)) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(var(--tilt, 0deg)) rotate(-360deg); }
        }
      `}</style>
      
        <style>{`
        /* Animate a variable, not transform */
        @keyframes spin   { from { --spin: 0deg;   } to { --spin: 360deg;  } }
        @keyframes spinRev{ from { --spin: 0deg;   } to { --spin: -360deg; } }
        `}</style>
    </section>
  );
}
