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
  const [insufficientComputingPower, setInsufficientComputingPower] =
    useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(Date.now());
  const lowFpsCount = useRef(0); // Counter for low FPS occurrences

  useEffect(() => {
    const updateFPS = () => {
      const now = Date.now();
      frameCount.current += 1;

      if (now - lastTime.current >= 1000) {
        const calculatedFps = frameCount.current;
        setFps(calculatedFps);

        // Check if FPS is below 10 (3 times FPS < 10)
        if (calculatedFps < 10) {
          lowFpsCount.current += 1; // Increment counter
        } else {
          lowFpsCount.current = 0; // Reset counter if FPS is sufficient
        }

        // Set insufficientComputingPower if low FPS occurred 3 times
        setInsufficientComputingPower(lowFpsCount.current >= 3);

        frameCount.current = 0;
        lastTime.current = now;
      }

      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);

    return () => cancelAnimationFrame(updateFPS);
  }, []);

  return (
    <FpsContext.Provider value={{ fps, insufficientComputingPower }}>
      {children}
    </FpsContext.Provider>
  );
};

// Hook to use FPS
export const useFPS = () => {
  return useContext(FpsContext);
};
