"use client";
import CldImageWrapper from "@/components/CldImageWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BentoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;

      const allImageArray = [
        ".bento-image-1",
        ".bento-image-2",
        ".bento-image-3",
        ".bento-image-5",
        ".bento-image-6",
        ".bento-image-7",
      ];

      const safeRefresh = () => ScrollTrigger.refresh(true);
      const rafId = window.requestAnimationFrame(safeRefresh);
      const timeoutId = window.setTimeout(safeRefresh, 220);

      window.addEventListener("load", safeRefresh);
      window.addEventListener("pageshow", safeRefresh);

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          gsap.set([...allImageArray, ".bento-image-4"], { clearProps: "all" });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: containerRef.current,
              start: "top top",
              end: () => `+=${isDesktop ? 1400 : 1100}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          allImageArray.forEach((el, i) => {
            let moveX = 0;
          let moveY = 0;
          let rotate = 0;

          switch (i) {
            case 0:
              moveX = -250;
              moveY = -100;
              rotate = -20;
              break;
            case 1:
              moveX = 0;
              moveY = -100;
              rotate = -5;
              break;
            case 2:
              moveX = 300;
              moveY = 100;
              rotate = 20;
              break;
            case 3:
              moveX = 200;
              moveY = 300;
              rotate = 35;
              break;
            case 4:
              moveX = -200;
              moveY = 100;
              rotate = -40;
              break;
            case 5:
              moveX = 60;
              moveY = 200;
              rotate = 5;
              break;
          }
            tl.to(
              el,
              {
                opacity: 0,
                filter: "blur(4px)",
              x: isDesktop ? moveX / 1.7 : moveX / 3,
              y: isDesktop ? moveY / 1.7 : moveY / 3,
              rotation: rotate,
              scale: 0.5,
              },
              0,
            );
          });

          tl.fromTo(
            ".bento-image-4",
            {
              scale: 2,
              clipPath: isDesktop
                ? "inset(30% 40% 30% 40%)"
                : "inset(30% 25% 30% 32%)",
            },
            {
              scale: 2.5,
              x: -5,
              clipPath: isDesktop
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 0% 0% 7.6%)",
              zIndex: 50,
              immediateRender: false,
            },
            0,
          );
        },
      );

      return () => {
        window.removeEventListener("load", safeRefresh);
        window.removeEventListener("pageshow", safeRefresh);
        window.clearTimeout(timeoutId);
        window.cancelAnimationFrame(rafId);
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center items-center gap-y-2 px-2 bento-section"
    >
      <div
        ref={containerRef}
        className="w-full h-[70%] grid grid-cols-3 gap-y-4 gap-x-4 place-items-center bento-container px-2"
      >
        <CldImageWrapper
          src="79"
          classname="w-30 h-72 md:w-52 md:h-96  object-cover object-center row-span-2 bento-image-1"
        />
        <CldImageWrapper
          src="77"
          classname="w-26 h-40 md:w-44 md:h-52  object-cover object-center bento-image-2"
        />
        <CldImageWrapper
          src="4"
          classname="w-26 h-40 md:w-44 md:h-52 object-cover object-top bento-image-3"
        />

        <CldImageWrapper
          src="5"
          quality="90"
          isPreload={true}
          classname="w-32 h-40 md:w-80 md:h-52 object-cover object-center bento-image-4"
        />
        <CldImageWrapper
          src="76"
          classname="w-30 h-72 md:w-52 md:h-100 object-cover object-center row-span-2 bento-image-5"
        />
        <CldImageWrapper
          src="80"
          classname="w-26 h-40 md:w-44 md:h-52 object-cover object-bottom bento-image-6"
        />
        <CldImageWrapper
          src="75"
          classname="w-26 h-40 md:w-44 md:h-52 object-cover object-center bento-image-7"
        />
      </div>
    </div>
  );
};

export default BentoSection;
