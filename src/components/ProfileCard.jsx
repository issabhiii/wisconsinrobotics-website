import { useRef } from "react";
import Icon from "./Icon";

// Holographic tilt card for team members. Refined from the legacy version:
// calmer sheen, real focus/hover states, graceful fallback when no avatar.
export default function ProfileCard({ name, role, avatar, linkedin }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - py) * 10}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 12}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group block [perspective:1000px] focus:outline-none"
      aria-label={`${name} — ${role} (LinkedIn)`}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))" }}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-ink-800
          transition-[transform,border-color] duration-200 ease-out [transform-style:preserve-3d]
          group-hover:border-badger/50 group-focus-visible:border-badger"
      >
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-rust-700 to-ink-900">
            <span className="font-display text-4xl text-chalk-soft">{initials}</span>
          </div>
        )}

        {/* holographic sheen — follows pointer, very subtle */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--px,50%) var(--py,50%), rgba(224,1,34,0.25), transparent 45%)",
          }}
        />

        {/* legibility gradient + text */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent p-4 pt-12">
          <div className="flex items-end justify-between gap-2">
            <div>
              <h3 className="font-display text-lg font-semibold leading-tight text-white">
                {name}
              </h3>
              <p className="mt-0.5 text-sm text-badger-bright">{role}</p>
            </div>
            <Icon
              name="linkedin"
              className="h-5 w-5 shrink-0 text-chalk-dim transition-colors group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
