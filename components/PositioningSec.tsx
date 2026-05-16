"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PositioningSec = ({ text }: { text: string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      gsap.from(
        sectionRef.current,
        {
          yPercent:2,
          opacity:0,
          duration: 0.4,
          ease: "power3.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="w-full h-[10vh] md:h-[30vh] flex justify-center flex-col items-center px-4 gap-y-8 relative"
    >
      <p
        ref={textRef}
        className="text-xl md:text-2xl lg:text-2xl w-[85%] font-light positioning-text font-seasons"
      >
        {text}
      </p>
      {/* <p className="italic font-general-sans font-light text-xl">- TWS Mumbai</p> */}
    </div>
  );
};

export default PositioningSec;
