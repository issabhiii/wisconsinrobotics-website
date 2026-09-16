import { org } from "../data/site";

// Team wordmark — used in the navbar and footer brand lockups.
export default function BrandLogo({ className = "h-9 w-auto" }) {
  return (
    <img
      src="/images/WRlogo.png"
      alt={org.name}
      className={`block object-contain ${className}`}
      draggable={false}
    />
  );
}
