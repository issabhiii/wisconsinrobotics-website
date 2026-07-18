import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import TiltedCard from "../components/TiltedCard";
import SpotlightCard from "../components/SpotlightCard";
import Icon from "../components/Icon";
import Button from "../components/Button";
import { rovers, outreachBots, org } from "../data/site";

export default function Robots() {
  const [featured, ...past] = rovers;

  return (
    <>
      <PageHeader
        eyebrow="University Rover Challenge"
        eyebrowIcon="map-pin"
        title="Our"
        accent="rovers"
        subtitle="Held each summer in the Utah desert, URC challenges students to build the next generation of Mars rovers. We've competed since 2016."
      />

      <div className="container-x py-20 sm:py-24">
        {/* Featured */}
        <SectionHeading align="left" eyebrow="Latest build" eyebrowIcon="rocket" title="Our newest rover" />
        <Reveal className="mt-10">
          <TiltedCard className="overflow-hidden rounded-3xl border border-white/10" max={5}>
            <div className="relative aspect-[16/9]">
              <img src={featured.image} alt={featured.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-badger-bright">
                    {featured.competition}
                  </p>
                  <h3 className="mt-1 font-display text-4xl font-semibold text-white">{featured.name}</h3>
                  <p className="mt-2 max-w-lg text-sm text-chalk-soft">{featured.blurb}</p>
                </div>
                <Button href={org.video} variant="ghost" icon="play" target="_blank" rel="noopener noreferrer">
                  Watch
                </Button>
              </div>
            </div>
          </TiltedCard>
        </Reveal>

        {/* Past rovers timeline */}
        <div className="mt-24">
          <SectionHeading align="left" eyebrow="The lineage" title="Rovers we've built" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <TiltedCard className="h-full overflow-hidden rounded-2xl border border-white/10" max={6}>
                  <div className="relative aspect-[4/3]">
                    <img src={r.image} alt={r.name} className="absolute inset-0 h-full w-full object-cover" />
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

        {/* Outreach bots */}
        <div className="mt-24">
          <SectionHeading
            align="left"
            eyebrow="Community impact"
            eyebrowIcon="megaphone"
            title="Outreach robots"
            subtitle="Our Outreach subteam builds special bots for events — inspiring the next generation of engineers and roboticists."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outreachBots.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 0.06}>
                <SpotlightCard className="flex h-full items-center gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon name={b.icon} className="h-6 w-6 text-badger-bright" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{b.name}</h4>
                    <p className="text-sm text-chalk-dim">{b.note}</p>
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
