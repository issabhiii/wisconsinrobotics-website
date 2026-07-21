import { useParams, Navigate, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import ProfileCard from "../components/ProfileCard";
import Icon from "../components/Icon";
import Button from "../components/Button";
import { subteams, subteamContent, getSubteamMembers } from "../data/site";

export default function Subteam() {
  const { subteam } = useParams();
  const meta = subteams.find((s) => s.id === subteam);
  const content = subteamContent[subteam];

  // Unknown subteam → send people back to the roster.
  if (!meta || !content) return <Navigate to="/team" replace />;

  const members = getSubteamMembers(subteam);
  const isOps = subteam === "operations";

  return (
    <>
      <PageHeader
        eyebrow="Subteam"
        eyebrowIcon={meta.icon}
        title={meta.name}
        accent="subteam"
        subtitle={content.intro}
      />

      <div className="container-x py-20 sm:py-24">
        {/* Back to all subteams */}
        <Reveal>
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-sm font-medium text-chalk-dim transition-colors hover:text-white"
          >
            <Icon
              name="arrow-right"
              className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5"
            />
            All subteams
          </Link>
        </Reveal>

        {/* Focus areas */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.focus.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.1}>
              <SpotlightCard className="h-full p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-badger/30 bg-badger/10">
                  <Icon name={d.icon} className="h-6 w-6 text-badger-bright" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-chalk-soft">{d.body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* People */}
        {members.length > 0 && (
          <div className="mt-24">
            <SectionHeading
              align="left"
              eyebrow="The crew"
              title={isOps ? "Our team" : "Subteam leads"}
            />
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {members.map((p, i) => (
                <Reveal key={p.name} delay={(i % 4) * 0.06}>
                  <ProfileCard {...p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* What we own / tools */}
        <div className="mt-24">
          <SectionHeading align="left" eyebrow="Day to day" title={content.practice.title} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.practice.items.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-badger to-badger-dark">
                    <Icon name={r.icon} className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{r.title}</h4>
                    <p className="mt-1 text-sm text-chalk-dim">{r.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 text-center">
          <Button to="/#contact" icon="arrow-right">
            Interested in {meta.name}? Get in touch
          </Button>
        </Reveal>
      </div>
    </>
  );
}
