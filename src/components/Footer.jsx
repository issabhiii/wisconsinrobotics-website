import { Link } from "react-router-dom";
import Icon from "./Icon";
import { org, nav } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-badger/40 bg-badger/10">
              <Icon name="bot" className="h-5 w-5 text-badger-bright" />
            </span>
            <span className="font-display text-[15px] font-semibold text-white">
              {org.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-chalk-dim">
            {org.school}'s student-led Mars rover team. We design, build, and
            compete — and bring robotics to our community.
          </p>
          <div className="mt-6 flex gap-2">
            {org.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-chalk-dim transition-colors hover:border-badger/50 hover:text-white"
              >
                <Icon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-chalk-dim">
            Explore
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-chalk-soft transition-colors hover:text-white"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-chalk-dim">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-chalk-soft">
            <li>
              <a
                href={`mailto:${org.email}`}
                className="transition-colors hover:text-white"
              >
                {org.email}
              </a>
            </li>
            <li className="text-chalk-dim">{org.address.join(" · ")}</li>
            <li className="text-chalk-dim">{org.meetings}</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-6 text-xs text-chalk-dim sm:flex-row">
        <p>
          © {new Date().getFullYear()} {org.name}. All rights reserved.
        </p>
        <p>Built by students at UW–Madison.</p>
      </div>
    </footer>
  );
}
