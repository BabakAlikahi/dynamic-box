import { RefObject, useEffect, useState } from "react";

export function useFitCount(containerRef: RefObject<HTMLElement | null>, itemWidth: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!containerRef?.current || !itemWidth) return;

    const el = containerRef.current;

    const updateCount = () => {
      const computedStyle = window.getComputedStyle(el);
      const containerWidth = el.clientWidth;

      // Get gap from row-gap or gap property
      const gapValue = computedStyle.getPropertyValue("gap") || computedStyle.getPropertyValue("row-gap") || "0px";
      const gap = parseFloat(gapValue) || 0;

      // Get padding from left and right
      const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
      const totalPadding = paddingLeft + paddingRight;

      const availableWidth = containerWidth - totalPadding;
      const totalItemWidth = itemWidth + gap;
      const fitCount = Math.max(1, Math.floor((availableWidth + gap) / totalItemWidth));
      setCount(fitCount);
    };

    updateCount();

    const observer = new ResizeObserver(() => {
      updateCount();
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, itemWidth]);

  return count;
}
