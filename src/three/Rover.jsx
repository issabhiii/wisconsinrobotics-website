import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Stylized six-wheel rover built from primitives.
// Recognizable rocker-bogie silhouette with a camera mast + solar deck.
const BODY = "#3a3f47";
const METAL = "#8b9099";
const DARK = "#1b1e24";
const ACCENT = "#c5050c";

function Wheel({ position }) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.34, 24]} />
        <meshStandardMaterial color={DARK} roughness={0.85} metalness={0.2} />
      </mesh>
      {/* hub */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 0.36, 16]} />
        <meshStandardMaterial color={METAL} roughness={0.4} metalness={0.8} />
      </mesh>
    </group>
  );
}

function Bogie({ side }) {
  const z = side * 0.95;
  return (
    <group position={[0, -0.35, z]}>
      {/* rocker bar */}
      <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.7, 0.09, 0.09]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.4} />
      </mesh>
      <mesh position={[0.9, 0.05, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.9, 0.08, 0.08]} />
        <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.4} />
      </mesh>
      <Wheel position={[-1.15, -0.15, 0]} />
      <Wheel position={[0.15, -0.15, 0]} />
      <Wheel position={[1.25, -0.15, 0]} />
    </group>
  );
}

export default function Rover({ spin = true }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (spin) group.current.rotation.y += delta * 0.25;
    // gentle bob
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 0.6) * 0.06;
  });

  return (
    <group ref={group} position={[0, 0, 0]} scale={0.85}>
      {/* chassis */}
      <mesh castShadow position={[0, 0.15, 0]}>
        <boxGeometry args={[2.1, 0.7, 1.4]} />
        <meshStandardMaterial color={BODY} metalness={0.6} roughness={0.35} />
      </mesh>
      {/* solar deck */}
      <mesh castShadow position={[0, 0.55, 0]}>
        <boxGeometry args={[2.4, 0.06, 1.7]} />
        <meshStandardMaterial color={DARK} metalness={0.5} roughness={0.3} />
      </mesh>
      {/* accent stripe */}
      <mesh position={[0, 0.15, 0.71]}>
        <boxGeometry args={[2.12, 0.16, 0.02]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.4} roughness={0.4} />
      </mesh>

      {/* camera mast */}
      <group position={[0.6, 0.55, 0]}>
        <mesh castShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 1, 12]} />
          <meshStandardMaterial color={METAL} metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh castShadow position={[0, 1.02, 0]}>
          <boxGeometry args={[0.5, 0.22, 0.28]} />
          <meshStandardMaterial color={BODY} metalness={0.6} roughness={0.35} />
        </mesh>
        {/* lens */}
        <mesh position={[0.26, 1.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.07, 0.07, 0.08, 16]} />
          <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.2} />
        </mesh>
      </group>

      {/* robotic arm (stowed) */}
      <group position={[-0.9, 0.2, 0.4]} rotation={[0, 0, 0.3]}>
        <mesh castShadow>
          <boxGeometry args={[0.9, 0.09, 0.09]} />
          <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh castShadow position={[-0.5, -0.2, 0]} rotation={[0, 0, -0.8]}>
          <boxGeometry args={[0.6, 0.08, 0.08]} />
          <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.4} />
        </mesh>
      </group>

      <Bogie side={1} />
      <Bogie side={-1} />
    </group>
  );
}
