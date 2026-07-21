import { Link } from "react-router-dom";
import Reveal from "./motion/Reveal";
import SpotlightCard from "./SpotlightCard";
import Icon from "./Icon";
import { subteams } from "../data/site";

// Clickable grid of subteams — each card links to its own subteam page.
// Used on both the Home page and the Team page.
export default function SubteamGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {subteams.map((t, i) => (
        <Reveal key={t.id} delay={(i % 3) * 0.06}>
          <Link to={t.to} className="block h-full">
            <SpotlightCard className="flex h-full items-start gap-4 p-6 transition-transform duration-200 hover:-translate-y-1">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Icon name={t.icon} className="h-5 w-5 text-badger-bright" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                  <Icon
                    name="arrow-up-right"
                    className="h-4 w-4 shrink-0 text-chalk-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-badger-bright"
                  />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-chalk-soft">{t.blurb}</p>
              </div>
            </SpotlightCard>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
