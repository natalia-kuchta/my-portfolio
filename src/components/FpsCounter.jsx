import { useFPS } from "../FpsContext.jsx";

// Usage in a component
export default function FpsCounter() {
  const fps = useFPS();

  return <li>FPS: {fps}</li>;
}
