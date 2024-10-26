import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useFPS } from "../../FpsContext.jsx";

const Capybara = () => {
  const capybara = useGLTF("./model/scene.gltf");
  return (
    <primitive
      object={capybara.scene}
      scale={0.5}
      position={[0, -2, 0]}
      rotation-y={0}
    ></primitive>
  );
};

const CapybaraCanvas = () => {
  const { fps, insufficientComputingPower } = useFPS();

  if (fps > 20 && !insufficientComputingPower) {
    return (
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preseveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-8, 1, 6],
        }}
      >
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={5} castShadow />
        <pointLight position={[0, 10, 0]} intensity={1.5} />

        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Capybara />
        </Suspense>
        <Preload all />
      </Canvas>
    );
  } else {
    return <></>;
  }
};

export default CapybaraCanvas;
