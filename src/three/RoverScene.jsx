import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  Stars,
  ContactShadows,
} from "@react-three/drei";
import Rover from "./Rover";

// The interactive hero scene. Rendered lazily so the initial paint stays fast.
export default function RoverScene({ interactive = true }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [4.5, 2.2, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#0b0c0f"]} />
      <fog attach="fog" args={["#0b0c0f", 9, 20]} />

      <ambientLight intensity={0.35} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={2.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -3]} intensity={12} color="#e00122" distance={14} />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Rover spin={interactive} />
      </Float>

      <ContactShadows
        position={[0, -1.35, 0]}
        opacity={0.5}
        scale={12}
        blur={2.6}
        far={4}
        color="#000000"
      />

      <Stars radius={60} depth={40} count={2500} factor={4} saturation={0} fade speed={0.6} />
      <Environment preset="night" />

      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.05}
        />
      )}
    </Canvas>
  );
}
