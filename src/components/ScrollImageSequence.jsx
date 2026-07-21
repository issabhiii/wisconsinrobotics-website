import { useEffect, useMemo, useRef, useState } from "react";

function useIsNarrow(breakpoint = 768) {
  const [narrow, setNarrow] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setNarrow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return narrow;
}

/**
 * Scroll-scrubbed image sequence. Pass `progress` 0→1 from a parent
 * (typically document scroll through a sticky track). Framer controls removed.
 */
export default function ScrollImageSequence({
  images = [],
  progress = 0,
  objectFit = "cover",
  earlyPlayEnd = 0.14,
  holdEnd = 0.34,
  finalHoldStart = 0.88,
  showTextOverlays = true,
  firstText = "ready to build the future?",
  secondText = "the future is now",
  firstTextSide = "left",
  firstTextInset = 6,
  imageStartX = 14,
  imageEndX = -2,
  imageEndY = 50,
  imageScale = 1.05,
  textLift = 80,
  secondTextTop = 42,
  background = "#0b0c0f",
  className = "",
}) {
  const isNarrow = useIsNarrow();

  // Desktop: Mars sits ~10–15% right of center; text lives in the black on the left.
  // Mobile: planet ~60% of viewport height, docked bottom so black + text sit above.
  const motion = isNarrow
    ? {
        startX: 0,
        endX: 0,
        endY: 0,
        scale: 1,
        fit: "contain",
        objectPosition: "center bottom",
        box: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "60%",
          width: "100%",
        },
      }
    : {
        startX: imageStartX,
        endX: imageEndX,
        endY: imageEndY,
        scale: imageScale,
        fit: objectFit,
        objectPosition: "center center",
        box: {
          position: "absolute",
          inset: 0,
        },
      };
  const frames = useMemo(
    () =>
      (images || [])
        .map((item) => {
          if (typeof item === "string") return { src: item };
          if (item && typeof item === "object" && item.src) {
            return { src: item.src, srcSet: item.srcSet, alt: item.alt };
          }
          return null;
        })
        .filter(Boolean)
        .slice(0, 76),
    [images]
  );

  const thresholds = useMemo(() => {
    const early = Math.min(0.8, Math.max(0.02, earlyPlayEnd));
    const hold = Math.min(0.92, Math.max(early + 0.01, holdEnd));
    const finalStart = Math.min(0.99, Math.max(hold + 0.01, finalHoldStart));
    return { early, hold, finalStart };
  }, [earlyPlayEnd, holdEnd, finalHoldStart]);

  const getFrameIndexForProgress = useMemo(() => {
    return (p) => {
      const clampedProgress = Math.min(1, Math.max(0, p));
      const totalFrames = frames.length;
      if (totalFrames <= 1) return 0;

      const earlyFrameEnd = Math.min(2, totalFrames - 1);
      const finalHoldCount = Math.min(
        5,
        Math.max(3, totalFrames >= 5 ? 5 : totalFrames)
      );
      const finalRangeStart = Math.max(
        earlyFrameEnd + 1,
        totalFrames - finalHoldCount
      );
      const finalIndex = totalFrames - 1;

      if (clampedProgress <= thresholds.early) {
        const local = clampedProgress / thresholds.early;
        return Math.min(
          earlyFrameEnd,
          Math.max(0, Math.floor(local * (earlyFrameEnd + 1)))
        );
      }

      if (clampedProgress <= thresholds.hold) {
        return earlyFrameEnd;
      }

      if (clampedProgress < thresholds.finalStart) {
        const local =
          (clampedProgress - thresholds.hold) /
          (thresholds.finalStart - thresholds.hold);
        return Math.min(
          finalRangeStart - 1,
          Math.max(
            earlyFrameEnd,
            Math.floor(
              earlyFrameEnd +
                local * Math.max(1, finalRangeStart - 1 - earlyFrameEnd)
            )
          )
        );
      }

      const local =
        (clampedProgress - thresholds.finalStart) /
        (1 - thresholds.finalStart || 1);
      return Math.min(
        finalIndex,
        Math.max(
          finalRangeStart,
          Math.floor(
            finalRangeStart + local * (finalIndex - finalRangeStart + 1)
          )
        )
      );
    };
  }, [frames.length, thresholds]);

  const scrollProgress = Math.min(1, Math.max(0, progress));
  const frameIndex = getFrameIndexForProgress(scrollProgress);
  const activeFrame = frames[frameIndex];

  // Preload frames once
  const preloaded = useRef(false);
  useEffect(() => {
    if (preloaded.current || typeof window === "undefined") return;
    preloaded.current = true;
    frames.forEach((item) => {
      if (!item?.src) return;
      const img = new window.Image();
      img.src = item.src;
      if (item.srcSet) img.srcset = item.srcSet;
    });
  }, [frames]);

  const firstTextProgress = useMemo(() => {
    if (scrollProgress <= thresholds.hold) return 1;
    const fadeDuration = 0.14;
    if (scrollProgress >= thresholds.hold + fadeDuration) return 0;
    return Math.max(
      0,
      1 - (scrollProgress - thresholds.hold) / Math.max(0.0001, fadeDuration)
    );
  }, [scrollProgress, thresholds]);

  const secondTextProgress = useMemo(() => {
    if (scrollProgress <= thresholds.finalStart) return 0;
    const local =
      (scrollProgress - thresholds.finalStart) /
      Math.max(0.0001, 1 - thresholds.finalStart);
    return Math.min(1, Math.max(0, local * 1.25));
  }, [scrollProgress, thresholds]);

  const easedMotionProgress = useMemo(() => {
    const p = Math.min(1, Math.max(0, scrollProgress));
    return p * p * (3 - 2 * p);
  }, [scrollProgress]);

  const imageMotion = useMemo(() => {
    const x = motion.startX + (motion.endX - motion.startX) * easedMotionProgress;
    const yCurve = Math.pow(easedMotionProgress, 1.35);
    const y = motion.endY * yCurve;
    return { x, y };
  }, [motion.startX, motion.endX, motion.endY, easedMotionProgress]);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background }}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ background }}
      >
        {activeFrame?.src ? (
          <>
            <div
              className="will-change-transform"
              style={{
                ...motion.box,
                transform: `translate3d(${imageMotion.x}%, ${imageMotion.y}%, 0) scale(${motion.scale})`,
                transformOrigin: isNarrow ? "center bottom" : "center center",
              }}
            >
              <img
                src={activeFrame.src}
                srcSet={activeFrame.srcSet}
                alt={activeFrame.alt || ""}
                draggable={false}
                className="block h-full w-full"
                style={{ objectFit: motion.fit, objectPosition: motion.objectPosition }}
              />
            </div>

            {showTextOverlays && (
              <div className="pointer-events-none absolute inset-0 font-display">
                <div
                  style={
                    isNarrow
                      ? {
                          position: "absolute",
                          left: "50%",
                          top: "18%",
                          width: "min(88vw, 420px)",
                          color: "#FFFFFF",
                          fontSize: "clamp(26px, 8.5vw, 48px)",
                          fontWeight: 700,
                          lineHeight: 0.95,
                          letterSpacing: `${(1 - firstTextProgress) * 0.08}em`,
                          textAlign: "center",
                          textShadow: "0 2px 16px rgba(0,0,0,0.45)",
                          opacity: firstTextProgress,
                          filter: `blur(${(1 - firstTextProgress) * 9}px)`,
                          transform: `translate(-50%, ${-scrollProgress * textLift * 0.35 + (1 - firstTextProgress) * -16}px) scale(${0.99 + firstTextProgress * 0.01})`,
                          clipPath: `inset(${(1 - firstTextProgress) * 48}% 0% ${(1 - firstTextProgress) * 26}% 0%)`,
                        }
                      : {
                          position: "absolute",
                          top: "43%",
                          [firstTextSide === "right" ? "right" : "left"]:
                            `${firstTextInset}%`,
                          width: "min(38vw, 420px)",
                          color: "#FFFFFF",
                          fontSize: "clamp(22px, 4.1vw, 62px)",
                          fontWeight: 700,
                          lineHeight: 0.95,
                          letterSpacing: `${(1 - firstTextProgress) * 0.08}em`,
                          textAlign: firstTextSide === "right" ? "right" : "left",
                          textShadow: "0 2px 16px rgba(0,0,0,0.35)",
                          opacity: firstTextProgress,
                          filter: `blur(${(1 - firstTextProgress) * 9}px)`,
                          transform: `translate3d(${(1 - firstTextProgress) * 24}px, ${-scrollProgress * textLift + (1 - firstTextProgress) * -16}px, 0) scale(${0.99 + firstTextProgress * 0.01})`,
                          clipPath: `inset(${(1 - firstTextProgress) * 48}% 0% ${(1 - firstTextProgress) * 26}% 0%)`,
                        }
                  }
                >
                  {firstText}
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: `${isNarrow ? 22 : secondTextTop}%`,
                    transform: `translate(-50%, -50%) translateY(${(1 - secondTextProgress) * 20 - scrollProgress * textLift * 0.55}px)`,
                    width: isNarrow ? "min(88vw, 760px)" : "min(70vw, 760px)",
                    color: "#FFFFFF",
                    fontSize: isNarrow
                      ? "clamp(28px, 9vw, 56px)"
                      : "clamp(26px, 6vw, 92px)",
                    fontWeight: 700,
                    lineHeight: 0.92,
                    letterSpacing: "-0.01em",
                    textAlign: "center",
                    textShadow: "0 2px 18px rgba(0,0,0,0.34)",
                    opacity: secondTextProgress,
                    filter: `blur(${(1 - secondTextProgress) * 6}px)`,
                  }}
                >
                  {secondText}
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="px-4 text-center text-sm text-chalk-dim">
            Add image frames to create a scroll sequence.
          </p>
        )}
      </div>
    </div>
  );
}
