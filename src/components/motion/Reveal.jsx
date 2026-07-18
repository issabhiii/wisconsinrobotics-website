import { motion } from "framer-motion";

const variants = {
  hidden: (d) => ({ opacity: 0, y: d?.y ?? 22, x: d?.x ?? 0 }),
  show: { opacity: 1, y: 0, x: 0 },
};

// Scroll-triggered reveal. One consistent motion language across the whole site.
export default function Reveal({
  children,
  delay = 0,
  y,
  x,
  className = "",
  as = "div",
  once = true,
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      custom={{ y, x }}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
