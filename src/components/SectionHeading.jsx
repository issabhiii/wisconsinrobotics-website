import Reveal from "./motion/Reveal";
import Icon from "./Icon";

export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  accent,
  subtitle,
  align = "center",
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            {eyebrowIcon && <Icon name={eyebrowIcon} className="h-3.5 w-3.5 text-badger-bright" />}
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-chalk-soft ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
