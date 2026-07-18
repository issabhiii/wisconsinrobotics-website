import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import ProfileCard from "../components/ProfileCard";
import Icon from "../components/Icon";
import Button from "../components/Button";
import { team } from "../data/site";

const doing = [
  { icon: "calendar", title: "Events & Outreach", body: "Planning demos and community events that inspire future engineers." },
  { icon: "share-2", title: "Media & Comms", body: "Running our social channels and telling the team's story." },
  { icon: "briefcase", title: "Industry Relations", body: "Building sponsor partnerships and securing funding." },
];

const responsibilities = [
  { icon: "users", title: "Event coordination", body: "Meetings, demos, competitions, and public showcases." },
  { icon: "message-circle", title: "Social media", body: "Content creation and community engagement online." },
  { icon: "trending-up", title: "Sponsorship & fundraising", body: "Partnerships, sponsor relationships, and funding." },
  { icon: "package", title: "Logistics & planning", body: "Competition logistics, travel, and equipment." },
  { icon: "code", title: "Website development", body: "Maintaining the team's digital presence." },
  { icon: "heart", title: "Team culture", body: "A positive, inclusive environment and team building." },
];

export default function Operations() {
  return (
    <>
      <PageHeader
        eyebrow="Subteam"
        eyebrowIcon="briefcase"
        title="The engine behind"
        accent="the team."
        subtitle="Operations is the backbone of Wisconsin Robotics — coordinating events, media, industry relations, and logistics so the engineers can focus on the rover."
      />

      <div className="container-x py-20 sm:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {doing.map((d, i) => (
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

        {/* Team */}
        <div className="mt-24">
          <SectionHeading align="left" eyebrow="The crew" title="Our team" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {team.operations.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.06}>
                <ProfileCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-24">
          <SectionHeading align="left" eyebrow="What we own" title="Key responsibilities" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((r, i) => (
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
          <Button to="/#contact" href="/#contact" icon="arrow-right">
            Interested in Operations? Get in touch
          </Button>
        </Reveal>
      </div>
    </>
  );
}
