import CursorGrid from "./CursorGrid";

// Calm ambient background: an interactive cursor-lit grid under two slow glows.
export default function Aurora({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Interactive checkerboard grid (React Bits CursorGrid) */}
      <div className="absolute inset-0 mask-fade-b">
        <CursorGrid
          className="pointer-events-none"
          cellSize={45}
          color="#dc0202"
          radius={140}
          falloff="linear"
          holdTime={200}
          fadeDuration={600}
          lineWidth={2.5}
          maxOpacity={1}
          fillOpacity={0.06}
          gridOpacity={0.02}
          cellRadius={8}
          clickPulse
          pulseSpeed={850}
        />
      </div>

      <div
        className="absolute -left-[10%] top-[-20%] h-[55vh] w-[55vh] rounded-full blur-[120px] animate-spin-slow"
        style={{ background: "radial-gradient(circle, rgba(197,5,12,0.22), transparent 65%)" }}
      />
      <div
        className="absolute right-[-10%] top-[10%] h-[45vh] w-[45vh] rounded-full blur-[120px] animate-spin-slow"
        style={{
          background: "radial-gradient(circle, rgba(224,1,34,0.14), transparent 65%)",
          animationDirection: "reverse",
        }}
      />
    </div>
  );
}
