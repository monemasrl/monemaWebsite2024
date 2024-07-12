import React from "react";
import { Canvas } from "@react-three/fiber";
import Keyboard from "./model";
function KeyboardCanvas() {
  return (
    <Canvas>
      <Keyboard />
    </Canvas>
  );
}

export default KeyboardCanvas;
