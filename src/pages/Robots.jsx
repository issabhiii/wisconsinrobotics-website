import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import TiltedCard from "../components/TiltedCard";
import SpotlightCard from "../components/SpotlightCard";
import Button from "../components/Button";
import {
  urcIntro,
  rovers,
  outreachBots,
  outreachEvents,
  otherRobots,
  org,
} from "../data/site";

function Badge({ kind }) {
  if (!kind) return null;
  const label = kind === "new" ? "new!" : "retired";
  const tone =
    kind === "new"
      ? "border-badger/50 bg-badger/20 text-badger-bright"
      : "border-white/15 bg-ink-950/70 text-chalk-dim";
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${tone}`}
    >
      {label}
    </span>
  );
}

export default function Robots() {
  const featured = rovers.find((r) => r.featured) ?? rovers[0];
  const past = rovers.filter((r) => r !== featured);

  return (
    <>
      <PageHeader
        eyebrow="University Rover Challenge (URC)"
        eyebrowIcon="map-pin"
        title="Our"
        accent="Robots"
        subtitle={urcIntro}
      />

      <div className="container-x py-20 sm:py-24">
        {/* Featured — Nebula */}
        <SectionHeading
          align="left"
          eyebrow="Latest build"
          eyebrowIcon="rocket"
          title="Our latest robot"
          subtitle={featured.blurb}
        />
        <Reveal className="mt-10">
          <TiltedCard className="overflow-hidden rounded-3xl border border-badger/40" max={5}>
            <div className="relative aspect-[16/9]">
              <img
                src={featured.image}
                alt={featured.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-badger-bright">
                    {featured.competition}
                  </p>
                  <h3 className="mt-1 font-display text-4xl font-semibold text-white">
                    {featured.name}
                  </h3>
                </div>
                <Button
                  href={org.video}
                  variant="ghost"
                  icon="play"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch SAR
                </Button>
              </div>
            </div>
          </TiltedCard>
        </Reveal>

        {/* Past / lineage */}
        <div className="mt-24">
          <SectionHeading align="left" eyebrow="The lineage" title="Past robots" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <TiltedCard className="h-full overflow-hidden rounded-2xl border border-badger/40" max={6}>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={r.image}
                      alt={`${r.name} — ${r.competition}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent" />
                    <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 font-mono text-xs text-chalk-soft backdrop-blur">
                      {r.year}
                    </span>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="font-display text-xl font-semibold text-white">{r.name}</h4>
                      <p className="text-xs text-chalk-dim">{r.competition}</p>
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Outreach robots */}
        <div className="mt-24">
          <SectionHeading
            align="left"
            eyebrow="Outreach"
            eyebrowIcon="megaphone"
            title="Outreach robots"
            subtitle="The Outreach subteam, which operates independently from the competitions, builds special robots for events to inspire and educate the community about robotics and STEM."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outreachBots.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 0.06}>
                <TiltedCard
                  className={`h-full overflow-hidden rounded-2xl border border-badger/40 ${
                    b.badge === "retired" ? "opacity-75" : ""
                  }`}
                  max={6}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent" />
                    {b.badge && (
                      <span className="absolute right-3 top-3">
                        <Badge kind={b.badge} />
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-display text-xl font-semibold text-white">{b.name}</h4>
                      {b.note && <p className="mt-0.5 text-xs text-chalk-dim">{b.note}</p>}
                    </div>
                  </div>
                </TiltedCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mt-24">
          <SectionHeading
            align="left"
            eyebrow="Out in the world"
            eyebrowIcon="calendar"
            title="Events"
            subtitle="Where we take our robots — campus, Milwaukee, Chicago, and classrooms across Wisconsin."
          />
          <div className="mt-10 space-y-14">
            {outreachEvents.map((event, i) => (
              <Reveal key={event.name} delay={0.04}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {event.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-chalk-soft sm:text-base">
                      {event.body}
                    </p>
                  </div>
                  <div
                    className={`grid gap-3 ${
                      event.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {event.images.map((src) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-2xl border border-badger/40"
                      >
                        <img
                          src={src}
                          alt={`${event.name}`}
                          className="aspect-[4/3] h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Other robots */}
        <div className="mt-24">
          <SectionHeading
            align="left"
            eyebrow="Beyond URC"
            title="Other robots"
            subtitle="Miscellaneous robots that we've built for various competitions and events."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherRobots.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <SpotlightCard className="overflow-hidden p-0">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={r.image}
                      alt={`${r.name} — ${r.competition}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="font-display text-xl font-semibold text-white">{r.name}</h4>
                      <p className="text-xs text-chalk-dim">{r.competition}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
