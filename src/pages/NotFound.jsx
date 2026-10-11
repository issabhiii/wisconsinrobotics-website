import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Aurora from "../components/Aurora";
import Button from "../components/Button";
import Icon from "../components/Icon";

const shortcuts = [
  { label: "Home", to: "/", icon: "rocket" },
  { label: "Team", to: "/team", icon: "users" },
  { label: "Robots", to: "/robots", icon: "bot" },
  { label: "Sponsors", to: "/sponsors", icon: "award" },
];

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Same interactive red squares as page headers */}
      <Aurora />

      <div className="container-x relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="eyebrow w-fit"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-badger-bright" />
          Signal lost
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 max-w-3xl font-display text-[clamp(4.5rem,18vw,9rem)] font-semibold leading-[0.9] tracking-tight text-white"
        >
          4
          <span className="text-gradient">0</span>
          4
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-6 max-w-xl"
        >
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            This path isn’t on the map.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-chalk-soft sm:text-lg">
            We couldn’t find{" "}
            <code className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-sm text-badger-bright">
              {pathname}
            </code>
            . It may have moved, or it never existed — either way, let’s get you
            back to solid ground.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Button to="/" icon="arrow-right">
            Back to home
          </Button>
          <Button to="/#contact" variant="ghost" icon="send">
            Contact us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-chalk-dim">
            Or jump to
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {shortcuts.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center gap-3 rounded-2xl border border-badger/40 bg-white/[0.02] px-4 py-4 transition-colors hover:border-badger/70 hover:bg-white/[0.04]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-badger/30 bg-badger/10">
                  <Icon name={s.icon} className="h-5 w-5 text-badger-bright" />
                </span>
                <span className="flex-1 font-semibold text-white">{s.label}</span>
                <Icon
                  name="arrow-up-right"
                  className="h-4 w-4 text-chalk-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-badger-bright"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
