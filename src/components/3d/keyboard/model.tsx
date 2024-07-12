import {
  useGLTF,
  OrbitControls,
  GizmoHelper,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { motion } from "framer-motion-3d";
import { RefObject, useRef } from "react";

useGLTF.preload("/image/keyboard.glb");

function Keyboard() {
  const ref = useRef<THREE.Mesh>(null); // Update the type of ref to THREE.Mesh

  const { nodes } = useGLTF("/image/keyboard.glb");
  console.log(nodes, "nodes");
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.0005;
    }
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
      <ambientLight intensity={2} color={"#1c70bf"} />
      <directionalLight position={[10, 90, -10]} color="white" />
      <group dispose={null}>
        <motion.mesh
          ref={ref as any}
          geometry={(nodes.Cube069 as any).geometry}
          scale={[0.05, 0.1, 0.1]}
          position={[1, -1, 1]}
          rotation={[0, 0, 0]}
        >
          {" "}
          {/* Access geometry directly on nodes.Cube069 */}
          <meshStandardMaterial />
        </motion.mesh>
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

export default Keyboard;
