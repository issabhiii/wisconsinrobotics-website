import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Icon from "./Icon";
import { org } from "../data/site";
import heroFrames from "../data/heroFrames.json";

/**
 * Hero card: copy on the left, scroll-scrubbed frame sequence on the right.
 * progress 0→1 drives frames. Second headline line reveals after the halfway mark
 * (frames ~50–100). Mobile: heading → planet → paragraph/CTAs.
 */
export default function Hero({ progress = 0 }) {
  const p = Math.min(1, Math.max(0, progress));
  const frames = heroFrames;
  const frameIndex = Math.min(
    frames.length - 1,
    Math.max(0, Math.floor(p * (frames.length - 1)))
  );
  const activeSrc = frames[frameIndex];

  // Frames 1–50: only first line. 50–100: both lines (fade second in over ~8%).
  const secondLine = useMemo(() => {
    if (p < 0.5) return 0;
    return Math.min(1, (p - 0.5) / 0.08);
  }, [p]);

  const revealed = secondLine > 0.02;

  const preloaded = useRef(false);
  useEffect(() => {
    if (preloaded.current || typeof window === "undefined") return;
    preloaded.current = true;
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [frames]);

  const planet = activeSrc ? (
    <img
      src={activeSrc}
      alt=""
      draggable={false}
      className="h-full w-full object-contain object-center lg:object-contain lg:object-right"
    />
  ) : null;

  return (
    <section className="relative flex h-[100svh] min-h-[100svh] overflow-hidden bg-ink-950">
      {/* Black center, faint red only on the far sides — no muddy mid-glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 50%, #0b0c0f 0%, #0b0c0f 55%, transparent 100%), linear-gradient(90deg, rgba(197,5,12,0.22) 0%, transparent 18%, transparent 82%, rgba(197,5,12,0.18) 100%)",
        }}
      />

      <div className="container-x relative z-10 flex h-full w-full flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="flex min-h-0 flex-1 flex-col justify-center pt-20 pb-6 lg:max-w-[34rem] lg:pt-20 lg:pb-20 lg:pr-4 xl:-translate-x-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow w-fit"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-badger-bright" />
            {org.school}
          </motion.span>

          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">We build Mars rovers</span>
            <span
              className="mt-1 block text-gradient"
              style={{
                opacity: secondLine,
                transform: `translateY(${(1 - secondLine) * 14}px)`,
                filter: secondLine === 0 ? "none" : `blur(${(1 - secondLine) * 6}px)`,
                visibility: secondLine === 0 ? "hidden" : "visible",
              }}
              aria-hidden={secondLine < 0.05}
            >
              that compete on Earth.
            </span>
          </h1>

          {/* Mobile: planet between heading and paragraph */}
          <div className="relative mx-auto mt-4 mb-2 h-[28svh] w-full max-w-sm sm:h-[32svh] lg:hidden">
            {planet}
          </div>

          <div
            style={{
              opacity: secondLine,
              visibility: revealed ? "visible" : "hidden",
              pointerEvents: revealed ? "auto" : "none",
            }}
          >
            <p className="mt-3 max-w-md text-base leading-relaxed text-chalk-soft sm:text-lg lg:mt-5">
              Wisconsin Robotics is a student-led team at UW–Madison designing,
              building, and racing autonomous rovers in the University Rover
              Challenge.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-8">
              <Button to="/robots" icon="arrow-right">
                Meet the rovers
              </Button>
              <Button
                href={org.video}
                variant="ghost"
                icon="play"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch the film
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop: planet on the right */}
        <div className="relative hidden min-h-0 lg:block lg:h-full">
          <div className="absolute inset-y-8 inset-x-0">
            {planet}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 lg:bottom-8">
        <Icon name="chevron-down" className="h-6 w-6 animate-bounce text-chalk-dim" />
      </div>
    </section>
  );
}
