import { motion } from "framer-motion";
import SplitText from "./motion/SplitText";
import Aurora from "./Aurora";
import Button from "./Button";
import Icon from "./Icon";
import { org } from "../data/site";

// NOTE: the interactive 3D rover hero lives in src/three/ (RoverScene.jsx).
// It's temporarily disabled — re-enable by rendering <RoverScene /> here.
export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0">
        <Aurora />
        {/* faint starfield */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.45), transparent), radial-gradient(1.5px 1.5px at 45% 80%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 85% 25%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 35% 15%, rgba(255,255,255,0.35), transparent)",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* readability gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* content */}
      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-24 pb-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow w-fit"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-badger-bright" />
          {org.school}
        </motion.span>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
          <SplitText text="We build Mars rovers" />
          <span className="mt-2 block text-gradient">
            <SplitText text="that compete on Earth." delay={0.35} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-soft"
        >
          Wisconsin Robotics is a student-led team at UW–Madison designing,
          building, and racing autonomous rovers in the University Rover
          Challenge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button to="/robots" icon="arrow-right">
            Meet the rovers
          </Button>
          <Button href={org.video} variant="ghost" icon="play" target="_blank" rel="noopener noreferrer">
            Watch the film
          </Button>
        </motion.div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
          <Icon name="chevron-down" className="h-6 w-6 animate-bounce text-chalk-dim" />
        </div>
      </div>
    </section>
  );
}
