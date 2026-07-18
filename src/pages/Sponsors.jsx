import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import Icon from "../components/Icon";
import Button from "../components/Button";
import { sponsorTiers, pastSponsors, specialThanks, org } from "../data/site";

const provides = [
  { icon: "plane", text: "Travel to competitions as far as Hanksville, Utah" },
  { icon: "cpu", text: "Sophisticated equipment: single-board computers, LIDAR, cameras, motors" },
  { icon: "package", text: "Raw materials, mechanical components, and workshop tooling" },
  { icon: "wrench", text: "Services like machining, 3D printing, and PCB manufacturing" },
];

export default function Sponsors() {
  return (
    <>
      <PageHeader
        eyebrow="Our partners"
        eyebrowIcon="award"
        title="Powered by our"
        accent="sponsors"
        subtitle="Wisconsin Robotics depends on the generosity of sponsors to build rovers, travel to competitions, and grow the next generation of engineers."
      />

      <div className="container-x py-20 sm:py-24">
        {/* Mission / what sponsorship provides */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why it matters"
            title="Your support keeps us"
            accent="in the desert."
            subtitle="We build and upgrade our rovers every year to stay on the cutting edge. Contributions from sponsors make it possible."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {provides.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <Icon name={p.icon} className="mt-0.5 h-5 w-5 shrink-0 text-badger-bright" />
                  <p className="text-sm text-chalk-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tiers */}
        <div className="mt-24 space-y-16">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span
                    className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{ color: tier.accent, backgroundColor: `${tier.accent}1a`, border: `1px solid ${tier.accent}55` }}
                  >
                    {tier.tier}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.08]" />
                </div>
              </Reveal>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {tier.items.map((s, i) => (
                  <Reveal key={s.name} delay={(i % 3) * 0.07}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <SpotlightCard
                        className="h-full p-6"
                        spotColor={`${tier.accent}22`}
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-px"
                          style={{ background: `linear-gradient(90deg, transparent, ${tier.accent}, transparent)` }}
                        />
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                          <Icon name="arrow-up-right" className="h-4 w-4 shrink-0 text-chalk-dim" />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-chalk-soft">{s.blurb}</p>
                      </SpotlightCard>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-badger/30 bg-gradient-to-br from-rust-700 to-ink-900 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-badger/20 blur-3xl" />
            <h2 className="relative font-display text-3xl font-semibold text-white sm:text-4xl">
              Become a sponsor
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-chalk-soft">
              Partner with us financially or in-kind. Reach out through our contact
              form, or take a look at our sponsorship package.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/#contact" href="/#contact" icon="mail">Contact us</Button>
              <Button href="/docs/Sponsorship_Package_2025.pdf" target="_blank" rel="noopener noreferrer" variant="ghost" icon="download">
                Sponsorship package
              </Button>
              <Button href={org.donateUrl} target="_blank" rel="noopener noreferrer" variant="solid" icon="heart">
                Donate
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Past sponsors */}
        <div className="mt-24">
          <SectionHeading align="left" eyebrow="With gratitude" title="Past sponsors" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastSponsors.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.06}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <SpotlightCard className="h-full p-5">
                    <h4 className="font-semibold text-white">{s.name}</h4>
                    <p className="mt-2 text-sm text-chalk-dim">{s.blurb}</p>
                  </SpotlightCard>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="text-sm text-chalk-dim">And a special thanks to:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {specialThanks.map((n) => (
                <span key={n} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-chalk-soft">
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
