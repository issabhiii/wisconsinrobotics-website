import { useEffect, useRef } from "react";

const srcOf = (item) => (typeof item === "string" ? item : item?.src);
const srcSetOf = (item) =>
  typeof item === "object" && item ? item.srcSet : undefined;

/**
 * Preload every frame in the sequence. Fine now that assets are ~WebP-compressed.
 * Returns frameIndex unchanged (always safe to display).
 */
export default function useFrameWindowPreload(frames, frameIndex) {
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !frames?.length || started.current) {
      return;
    }
    started.current = true;

    for (const item of frames) {
      const src = srcOf(item);
      if (!src) continue;
      const img = new window.Image();
      const srcSet = srcSetOf(item);
      if (srcSet) img.srcset = srcSet;
      img.src = src;
    }
  }, [frames]);

  return frameIndex;
}
