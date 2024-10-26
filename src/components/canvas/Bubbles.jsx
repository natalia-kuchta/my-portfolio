import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Bubbles = (props) => {
  const ref = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }),
    [],
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          intensity={3}
          color="#FF00FF"
          emissive="#FF00FF"
          emissiveIntensity={2}
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

import { useFPS } from "../../FpsContext.jsx";

const BubblesCanvas = () => {
  const { fps, insufficientComputingPower } = useFPS();

  if (fps > 40 && !insufficientComputingPower) {
    return (
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Bubbles />
            <EffectComposer>
              <Bloom
                intensity={1.5}
                luminanceThreshold={0.1}
                luminanceSmoothing={0.9}
              />
            </EffectComposer>
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  } else {
    return <></>;
  }
};

export default BubblesCanvas;
