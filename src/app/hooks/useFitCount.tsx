import { RefObject, useEffect, useState } from "react";

export function useFitCount(containerRef: RefObject<HTMLElement | null>, itemWidth: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!containerRef?.current || !itemWidth) return;

    const el = containerRef.current;

    const updateCount = () => {
      const containerWidth = el.clientWidth || 0;
      const fitCount = Math.max(1, Math.floor(containerWidth / itemWidth));
      setCount(fitCount);
    };

    updateCount();

    const observer = new ResizeObserver(() => {
      updateCount();
    });

    observer.observe(el);
    console.log("observe", observer);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, itemWidth]);

  return count;
}
