import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

const MannequinModel = ({ bodyType }: { bodyType: string }) => {
  // Simple geometric shapes to represent a mannequin
  const getBodyScale = () => {
    switch (bodyType.toLowerCase()) {
      case "babies":
        return [0.6, 1.0, 0.5];
      case "kids":
        return [0.7, 1.2, 0.55];
      case "petite":
        return [0.8, 1.4, 0.6];
      case "athletic":
        return [0.9, 1.6, 0.7];
      case "curvy":
        return [1.1, 1.5, 0.9];
      case "plus":
        return [1.3, 1.5, 1.1];
      default: // average
        return [1, 1.5, 0.8];
    }
  };

  const bodyScale = getBodyScale();

  return (
    <group>
      {/* Head */}
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f5d0c5" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1, 0]} scale={[bodyScale[0], bodyScale[1], bodyScale[2]]}>
        <capsuleGeometry args={[0.3, 0.8, 16, 32]} />
        <meshStandardMaterial color="#e8c4b8" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.5, 1.2, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
        <meshStandardMaterial color="#f5d0c5" />
      </mesh>
      <mesh position={[0.5, 1.2, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
        <meshStandardMaterial color="#f5d0c5" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.2, 0.1, 0]}>
        <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
        <meshStandardMaterial color="#d4b5a8" />
      </mesh>
      <mesh position={[0.2, 0.1, 0]}>
        <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
        <meshStandardMaterial color="#d4b5a8" />
      </mesh>

      {/* Platform/Base */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 32]} />
        <meshStandardMaterial color="#94a3b8" opacity={0.5} transparent />
      </mesh>
    </group>
  );
};

interface Model3DProps {
  bodyType: string;
}

const Model3D = ({ bodyType }: Model3DProps) => {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-background to-muted rounded-lg overflow-hidden">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 1.5, 4]} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={6}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
          
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
          <directionalLight position={[-5, 3, -5]} intensity={0.4} />
          <pointLight position={[0, 2, 0]} intensity={0.3} />
          
          <MannequinModel bodyType={bodyType} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Model3D;
