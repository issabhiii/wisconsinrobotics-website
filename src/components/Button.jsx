import { Link } from "react-router-dom";
import Icon from "./Icon";

const styles = {
  primary:
    "bg-badger text-white hover:bg-badger-bright shadow-[0_8px_30px_-8px_rgba(197,5,12,0.7)]",
  ghost:
    "border border-white/15 text-chalk hover:border-white/40 hover:bg-white/[0.04]",
  solid: "bg-white text-ink-950 hover:bg-chalk",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3
    text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${styles[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (to) return <Link to={to} className={cls} {...props}>{inner}</Link>;
  return (
    <a href={href} className={cls} {...props}>
      {inner}
    </a>
  );
}
