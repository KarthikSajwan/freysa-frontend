"use client";
import dynamic from "next/dynamic";
import UI from "@/components/UI";
import { Loader } from "@react-three/drei";

const CanvasComponent = dynamic(() => import("@/components/CanvasComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <UI />
      <Loader />
      <CanvasComponent />
    </>
  );
}
