// Seamless infinite marquee. Duplicates children once and translates -50%.
export default function Marquee({ children, duration = 40, className = "" }) {
  return (
    <div className={`group relative flex overflow-hidden mask-fade-x ${className}`}>
      <div
        className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}
