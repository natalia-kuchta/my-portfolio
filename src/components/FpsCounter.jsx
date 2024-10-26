import { useEffect, useRef, useState } from 'react';

const useFPS = () => {
    const [fps, setFps] = useState(0);
    const frameCount = useRef(0);
    const lastTime = useRef(Date.now());

    useEffect(() => {
        const updateFPS = () => {
            const now = Date.now();
            frameCount.current += 1;

            if (now - lastTime.current >= 100) {
                setFps(frameCount.current * 10);
                frameCount.current = 0;
                lastTime.current = now;
            }

            requestAnimationFrame(updateFPS);
        };

        requestAnimationFrame(updateFPS);

        return () => cancelAnimationFrame(updateFPS);
    }, []);

    return fps;
};

// Usage in a component
export default function FpsCounter() {
    const fps = useFPS();

    return <li>FPS: {fps}</li>;
};