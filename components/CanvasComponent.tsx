"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./Experience";

export default function CanvasComponent() {
  return (
    <Canvas
      shadows
      camera={{
        position: [-0.5, 1, 4],
        fov: 45,
      }}
    >
      <group position-y={0}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </group>
    </Canvas>
  );
}
