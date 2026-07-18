import Aurora from "./Aurora";
import SplitText from "./motion/SplitText";
import { motion } from "framer-motion";
import Icon from "./Icon";

export default function PageHeader({ eyebrow, eyebrowIcon, title, accent, subtitle }) {
  return (
    <header className="relative overflow-hidden border-b border-white/[0.06] pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Aurora />
      <div className="container-x relative">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {eyebrowIcon && <Icon name={eyebrowIcon} className="h-3.5 w-3.5 text-badger-bright" />}
            {eyebrow}
          </motion.span>
        )}
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
          <SplitText text={title} />{" "}
          {accent && <span className="text-gradient"><SplitText text={accent} delay={0.15} /></span>}
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-chalk-soft"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
}
