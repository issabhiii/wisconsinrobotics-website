import { Link } from "react-router-dom";
import IntroStack from "../components/IntroStack";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import CountUp from "../components/motion/CountUp";
import SpotlightCard from "../components/SpotlightCard";
import TiltedCard from "../components/TiltedCard";
import Marquee from "../components/Marquee";
import Icon from "../components/Icon";
import Contact from "../components/Contact";
import SubteamGrid from "../components/SubteamGrid";
import { stats, pillars, rovers, sponsorTiers } from "../data/site";

export default function Home() {
  const featured = rovers.find((r) => r.featured) ?? rovers[0];
  const allSponsors = sponsorTiers.flatMap((t) => t.items.map((i) => i.name));

  return (
    <>
      <IntroStack />

      {/* STATS */}
      <section className="border-y border-white/[0.06] bg-ink-900/50">
        <div className="container-x grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-5xl font-semibold text-white sm:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-chalk-dim">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT / PILLARS */}
      <section className="relative py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Who we are"
            eyebrowIcon="sparkles"
            title="A team of student engineers"
            accent="chasing the Red Planet."
            subtitle="From mechanical design to autonomy software, members of every discipline come together to build a competition-grade rover each year."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <SpotlightCard className="h-full p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-badger/30 bg-badger/10">
                    <Icon name={p.icon} className="h-6 w-6 text-badger-bright" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-chalk-soft">{p.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ROVER */}
      <section className="relative py-8 sm:py-12">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <TiltedCard className="overflow-hidden rounded-3xl border border-white/10">
                <div className="relative aspect-[4/3]">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-badger-bright">
                      {featured.competition}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-white">
                      {featured.name}
                    </h3>
                  </div>
                </div>
              </TiltedCard>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Latest build"
                eyebrowIcon="rocket"
                title="Meet"
                accent={featured.name}
                subtitle={featured.blurb}
              />
              <Reveal delay={0.15}>
                <Link
                  to="/robots"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Explore every rover we've built
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SUBTEAMS */}
      <section className="relative py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we're organized"
            eyebrowIcon="layers"
            title="Six subteams,"
            accent="one rover."
            subtitle="Every discipline has a home here — and they all integrate into a single machine that has to survive the desert."
          />
          <div className="mt-16">
            <SubteamGrid />
          </div>
        </div>
      </section>

      {/* SPONSORS MARQUEE */}
      <section className="border-y border-white/[0.06] bg-ink-900/40 py-16">
        <div className="container-x">
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-chalk-dim">
            Backed by industry & the university
          </p>
        </div>
        <div className="mt-8">
          <Marquee duration={38}>
            {allSponsors.map((name) => (
              <span
                key={name}
                className="mx-2 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3 font-display text-lg text-chalk-soft"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
        <div className="container-x mt-8 text-center">
          <Link
            to="/sponsors"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            See all our sponsors
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
