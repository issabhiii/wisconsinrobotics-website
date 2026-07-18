import { motion } from "framer-motion";

// Word-by-word rise-in for headlines. Used only on hero/section titles.
export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  as = "span",
}) {
  const words = text.split(" ");
  const MotionTag = motion[as] ?? motion.span;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      aria-label={text}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: { y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
