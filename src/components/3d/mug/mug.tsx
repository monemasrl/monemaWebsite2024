import {
  GizmoHelper,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

useGLTF.preload("/image/mug.glb");

function Mug() {
  const ref = useRef<THREE.Mesh>(); // Update the type of ref to THREE.Mesh

  const { nodes } = useGLTF("/image/mug.glb");
  useFrame(() => {
    ref.current && (ref.current.rotation.z += 0.001);
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[10, 350, -250]}
        far={700}
        fov={3.6}
        coordinateSystem={2000}
      />
      <ambientLight intensity={4} color={"#1c70bf"} />
      <directionalLight position={[10, 90, -50]} color="white" />
      <group dispose={null}></group>
      <group dispose={null}>
        <mesh
          ref={ref as any}
          geometry={(nodes.Cloud_4007 as any).geometry}
          scale={[0.8, 0.8, 0.8]}
          position={[1, -1, 1]}
          rotation={[-0.5, 0, 0]}
        >
          <meshStandardMaterial />
        </mesh>
      </group>
      <GizmoHelper />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
    </>
  );
}

export default Mug;
