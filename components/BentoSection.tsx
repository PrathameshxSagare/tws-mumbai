"use client";
import CldImageWrapper from "@/components/CldImageWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BentoSection = () => {
  useGSAP(() => {
    // const ImageArray = [
    //   ".bento-image-1",
    //   ".bento-image-3",
    //   ".bento-image-5",
    //   ".bento-image-6",
    // ];

    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop } = context.conditions!;
        // ImageArray.forEach((el) => {
        //   gsap.to(el, {
        //     y: isDesktop
        //       ? gsap.utils.random(-220, -250)
        //       : gsap.utils.random(-160, -220),
        //     x: gsap.utils.random(5, 6),
        //     scrollTrigger: {
        //       trigger: ".bento-section",
        //       start: "top bottom",
        //       end: "top top",
        //       scrub: 1,
        //     },
        //   });
        // });

        const el = document.querySelector(".bento-image-4") as HTMLElement;
        if (!el) return;

        const naturalW = el.offsetWidth;
        const naturalH = el.offsetHeight;
        const AllImageArray = [
          ".bento-image-1",
          ".bento-image-2",
          ".bento-image-3",
          ".bento-image-5",
          ".bento-image-6",
          ".bento-image-7",
        ];

        gsap.set(".bento-image-4", {
          scale: 2,
          clipPath: isDesktop
            ? "inset(30% 40% 30% 40%)"
            : "inset(30% 15% 30% 32%)",
          zIndex: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".bento-container",
            start: isDesktop ? "top top" : "top 20%",
            end: "+=1400",
            pin: true,
            scrub: true,
          },
        });
        AllImageArray.forEach((el, i) => {
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
              x: isDesktop ? moveX / 1.7 : gsap.utils.random(-200, 200),
              y: isDesktop ? moveY / 1.7 : gsap.utils.random(-200, 200),
              rotation: rotate,
              scale: 0.5,
            },
            "<",
          );
        });

        // const rect = el.getBoundingClientRect();
        // const scaleX = window.innerWidth / rect.width;
        // const scaleY = window.innerHeight / rect.height;
        // const fillScale = Math.max(scaleX, scaleY) * 1.2;

        tl.fromTo(
          ".bento-image-4",
          {
            scale: 2,
            //   clipPath: "inset(30% 40% 30% 40%)",
            clipPath: isDesktop
              ? "inset(30% 40% 30% 40%)"
              : "inset(30% 25% 30% 32%)",

            objectPosition: "bottom",
          },
          {
            scale: () => {
              const scaleX = window.innerWidth / naturalW;
              const scaleY = window.innerHeight / naturalH;
              const fillScale = Math.max(scaleX, scaleY) * 1.2;
              return isDesktop ? fillScale / 2 : fillScale / 1.34;
            },
            translateX: -5,
            clipPath: isDesktop ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 7.6%)",
            zIndex: 50,
          },
        );
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

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
