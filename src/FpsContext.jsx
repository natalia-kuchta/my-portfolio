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
  const frameCount = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const updateFPS = () => {
      const now = Date.now();
      frameCount.current += 1;

      if (now - lastTime.current >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastTime.current = now;
      }

      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);

    return () => cancelAnimationFrame(updateFPS);
  }, []);

  return <FpsContext.Provider value={fps}>{children}</FpsContext.Provider>;
};

// Hook to use FPS
export const useFPS = () => {
  return useContext(FpsContext);
};
