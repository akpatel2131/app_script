import { isEqual, throttle } from "lodash-es";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "react-use";

import { DEBOUNCE, isBrowser } from "./constant";

export const BREAKPOINTS = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1200,
  xl: 1440,
  xxl: 1920,
};

const DEFAULT_BREAKPOINTS = {
  isDesktop: false,
  isMobile: false,
  isTablet: false,
};

const calculateBreakpoints = (width) => {
  if (width < BREAKPOINTS.sm) {
    return {
      ...DEFAULT_BREAKPOINTS,
      isMobile: true,
    };
  }
  if (width >= BREAKPOINTS.sm && width < BREAKPOINTS.md) {
    return {
      ...DEFAULT_BREAKPOINTS,
      isTablet: true,
    };
  }
  if (width >= BREAKPOINTS.md) {
    return {
      ...DEFAULT_BREAKPOINTS,
      isDesktop: true,
    };
  }
  return DEFAULT_BREAKPOINTS;
};

const getWindowWidth = () => {
  return isBrowser ? window.innerWidth : 0;
};


export default function useBreakpoints({
  throttleTime,
}= {}) {
  const [width, setWidth] = useState(getWindowWidth());
  const [breakpoints, setBreakpoints] = useState(
    isBrowser ? calculateBreakpoints(width) : DEFAULT_BREAKPOINTS,
  );

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleResize = throttle(() => {
      const newWidth = getWindowWidth();
      const newBreakpoints = calculateBreakpoints(newWidth);
      if (isEqual(newBreakpoints, breakpoints)) {
        return;
      }
      setBreakpoints(newBreakpoints);
      setWidth(newWidth);
    }, throttleTime ?? DEBOUNCE.fast);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...breakpoints, width };
}
