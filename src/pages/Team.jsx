import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/motion/Reveal";
import ProfileCard from "../components/ProfileCard";
import { team } from "../data/site";

function Grid({ people, cols = "sm:grid-cols-2 lg:grid-cols-4" }) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:gap-6 ${cols}`}>
      {people.map((p, i) => (
        <Reveal key={p.name} delay={(i % 4) * 0.06}>
          <ProfileCard {...p} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="The people"
        title="Meet the"
        accent="team"
        subtitle="A student-led effort at UW–Madison — leadership, technical leads, and the operations crew who keep us running."
      />

      <div className="container-x space-y-24 pb-28">
        <section>
          <SectionHeading align="left" eyebrow="Leadership" title="Steering the org" />
          <div className="mt-10">
            <Grid people={team.leadership} />
          </div>
        </section>

        <section>
          <SectionHeading align="left" eyebrow="Technical leads" title="Running the subteams" />
          <div className="mt-10">
            <Grid people={team.leads} />
          </div>
        </section>

        <section>
          <SectionHeading align="left" eyebrow="Operations" title="Behind the scenes" />
          <div className="mt-10">
            <Grid people={team.operations} />
          </div>
        </section>

        <section>
          <SectionHeading align="left" eyebrow="Built by" title="Website" />
          <div className="mt-10 max-w-[220px]">
            <Grid people={team.website} cols="" />
          </div>
        </section>
      </div>
    </>
  );
}
