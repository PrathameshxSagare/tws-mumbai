"use client";
import CldImageWrapper from "@/components/CldImageWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BentoSection = () => {
  useGSAP(() => {
    const AllImageArray = [
      ".bento-image-1",
      ".bento-image-2",
      ".bento-image-3",
      ".bento-image-5",
      ".bento-image-6",
      ".bento-image-7",
    ];

    const mm = gsap.matchMedia();
    
    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop } = context.conditions!;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".bento-container",
            start: isDesktop ? "top top" : "top 20%",
            end: "+=1400",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true, // Crucial for responsive/random setups
          },
        });

        AllImageArray.forEach((el) => {
          tl.to(
            el,
            {
              opacity: 0,
              filter: "blur(4px)",
              // Use function-based values so GSAP can recalculate properly
              x: () => gsap.utils.random(-200, 200),
              y: () => gsap.utils.random(-200, 200),
              rotation: () => gsap.utils.random(-30, 30),
              scale: 0.5,
            },
            "<",
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
            translateX: -5,
            clipPath: isDesktop ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 7.6%)",
            zIndex: 50,
          },
          "<"
        );
      },
    );
  }, []); // useGSAP handles cleanup automatically

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-y-2 px-2 bento-section">
      <div className="w-full h-[70%] grid grid-cols-3 gap-y-4 gap-x-4 place-items-center bento-container px-2">
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