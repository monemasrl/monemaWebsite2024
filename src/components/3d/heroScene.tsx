import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useGLTF } from "@react-three/drei";

import { Suspense, useRef } from "react";
import AnimazionePrincipale from "./animazione";

function HeroScene({ isInView }: { isInView: boolean }) {
  const target = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <Canvas ref={target} style={{ zIndex: 2 }}>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[180, 300, -250]}
            far={500}
            fov={13.2}
            coordinateSystem={2000}
            zoom={1.2}
          />
          <ambientLight intensity={4} color={"#1c70bf"} />
          <directionalLight position={[10, 90, -50]} color="white" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            enableDamping={true}
            minPolarAngle={1}
            maxPolarAngle={1}
          />
          <AnimazionePrincipale isInView={isInView} />
        </Suspense>
      </Canvas>
    </>
  );
}
export default HeroScene;
useGLTF.preload("/img/animazione.glb");
