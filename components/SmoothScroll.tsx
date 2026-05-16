"use client";

import ReactLenis from "lenis/react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp:0.09 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
