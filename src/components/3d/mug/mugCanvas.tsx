import React from "react";
import { Canvas } from "@react-three/fiber";
import Mug from "./mug";
function MugCanvas() {
  return (
    <Canvas>
      <Mug />
    </Canvas>
  );
}

export default MugCanvas;
