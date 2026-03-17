"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer({ url }: { url: string }) {
  return (
    <div className="h-full w-full bg-black/20 backdrop-blur-sm rounded-[3rem] overflow-hidden border border-white/5">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="cursor-grab active:cursor-grabbing">
        <color attach="background" args={["#121212"]} />
        <Suspense fallback={null}>
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.6}>
              <Model url={url} />
            </Stage>
          </PresentationControls>
          <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
        </Suspense>
        <OrbitControls enableZoom={true} makeDefault />
      </Canvas>
    </div>
  );
}
