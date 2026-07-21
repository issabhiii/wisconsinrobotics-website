import { useEffect, useRef, useState } from "react";
import ScrollImageSequence from "./ScrollImageSequence";
import Hero from "./Hero";
import sequenceFrames from "../data/sequenceFrames.json";

// How tall each scrub track is (in viewport heights).
const SEQUENCE_VH = 280;
const HERO_VH = 180;

/**
 * Intro stack:
 * 1) Sticky Mars sequence (card 1)
 * 2) Sticky Hero with right-side frame scrub + staggered headline (card 2)
 */
export default function IntroStack() {
  const marsScrubRef = useRef(null);
  const heroScrubRef = useRef(null);
  const [marsProgress, setMarsProgress] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const scrubProgress = (el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const available = Math.max(1, el.offsetHeight - window.innerHeight);
      return Math.min(1, Math.max(0, (window.scrollY - top) / available));
    };

    const update = () => {
      rafRef.current = null;
      const nextMars = scrubProgress(marsScrubRef.current);
      const nextHero = scrubProgress(heroScrubRef.current);
      setMarsProgress((prev) =>
        Math.abs(prev - nextMars) > 0.0005 ? nextMars : prev
      );
      setHeroProgress((prev) =>
        Math.abs(prev - nextHero) > 0.0005 ? nextHero : prev
      );
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative">
      {/* Card 1 — Mars sequence */}
      <div className="sticky top-0 z-0 h-[100svh]">
        <ScrollImageSequence
          images={sequenceFrames}
          progress={marsProgress}
          background="#0b0c0f"
          firstText="ready to build the future?"
          secondText="the future is now"
          firstTextSide="left"
          imageStartX={14}
          imageEndX={-2}
        />
      </div>

      <div className="relative z-10 -mt-[100svh]">
        <div
          ref={marsScrubRef}
          aria-hidden
          className="pointer-events-none"
          style={{ height: `${SEQUENCE_VH}vh` }}
        />

        {/* Card 2 — Hero with terraforming sequence */}
        <div className="relative">
          <div className="sticky top-0 z-10 h-[100svh] bg-ink-950 shadow-[0_-24px_80px_rgba(0,0,0,0.55)]">
            <Hero progress={heroProgress} />
          </div>

          <div className="relative -mt-[100svh]">
            <div
              ref={heroScrubRef}
              aria-hidden
              className="pointer-events-none"
              style={{ height: `${HERO_VH}vh` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
