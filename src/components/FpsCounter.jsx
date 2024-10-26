import { useFPS } from "../FpsContext.jsx";

// Usage in a component
export default function FpsCounter() {
  const { fps, insufficientComputingPower, lowFpsCount } = useFPS();

  return (
    <li
      title={`Low FPS counted ${lowFpsCount} times`}
      className={insufficientComputingPower ? "text-red-500" : "text-green-500"}
    >
      FPS: {fps}
    </li>
  );
}
