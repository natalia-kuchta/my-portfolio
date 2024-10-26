import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const FpsContext = createContext();

export const FpsProvider = ({ children }) => {
  const [fps, setFps] = useState(0);
  const [lowFpsCount, setLowFpsCount] = useState(0); // Counter for low FPS occurrences
  const frameCount = useRef(0);
  const lastTime = useRef(Date.now());

  // Compute insufficientComputingPower directly based on lowFpsCount
  const insufficientComputingPower = lowFpsCount >= 3;

  useEffect(() => {
    const updateFPS = () => {
      const now = Date.now();
      frameCount.current += 1;

      if (now - lastTime.current >= 1000) {
        const calculatedFps = frameCount.current;
        setFps(calculatedFps);

        // Check if FPS is below 10
        if (calculatedFps < 10) {
          setLowFpsCount((prevCount) => prevCount + 1); // Increment counter
        }

        frameCount.current = 0;
        lastTime.current = now;
      }

      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);

    return () => cancelAnimationFrame(updateFPS);
  }, []);

  return (
    <FpsContext.Provider
      value={{ fps, insufficientComputingPower, lowFpsCount }}
    >
      {children}
    </FpsContext.Provider>
  );
};

// Hook to use FPS
export const useFPS = () => {
  return useContext(FpsContext);
};
