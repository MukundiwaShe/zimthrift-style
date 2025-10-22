import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const ImagePlane = ({ imageUrl }: { imageUrl: string }) => {
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  
  // Calculate aspect ratio to maintain image proportions
  const aspectRatio = texture.image.width / texture.image.height;
  const width = aspectRatio > 1 ? 3 : 3 * aspectRatio;
  const height = aspectRatio > 1 ? 3 / aspectRatio : 3;

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

interface Image3DViewerProps {
  imageUrl: string;
  alt: string;
}

const Image3DViewer = ({ imageUrl, alt }: Image3DViewerProps) => {
  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-background to-muted rounded-lg overflow-hidden">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            minDistance={2}
            maxDistance={8}
          />
          
          {/* Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, 3, -5]} intensity={0.5} />
          
          <ImagePlane imageUrl={imageUrl} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
        Drag to rotate • Scroll to zoom • Right-click to pan
      </div>
    </div>
  );
};

export default Image3DViewer;
