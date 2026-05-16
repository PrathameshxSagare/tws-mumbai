"use client";
import ImageWrapper from "@/components/ImageWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { SplitText } from "gsap/src/all";
import IntroAni from "@/components/IntroAni";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heroHeading = new SplitText(".main-hero-heading", {
        type: "chars",
        mask: "chars",
      });
      const heroPara = new SplitText(".main-hero-para", {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline();
      const barsArray = gsap.utils.toArray(".intro-div");

      tl.set(barsArray, { scaleY: 1.2 })
        // .fromTo(
        //   barsArray,
        //   {
        //     clipPath: "inset(0% 0% 0% 0%)",
        //   },
        //   {
        //     clipPath: "inset(0% 0% 100% 0%)",
        //     delay:3.5,
        //     duration: 2,
        //     stagger:0.07,
        //     ease:"power4.out",
        //     pointerEvents: "none"
        //   },
        // )
        .fromTo(
          ".intro-pic",
          {clipPath:"inset(0% 0% 100% 0%)"},
          {
            opacity:1,
            clipPath:"inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power1.in",
          })
        .to(barsArray, {
          scaleX: 0,
          // rotateZ: 3,
          delay: 4,
          duration: 1.35,
          transformOrigin: "right",
          stagger: {
            each: 0.07,
            from: "end",
          },
          ease: "expo.inOut",
        }, "-=1")
        .to(".intro-pic", {
          clipPath:"inset(100% 0% 0% 0%)",
          duration: 1.4,
          ease: "expo.inOut"
        }, "-=2")
        .set(".intro-container", {display:"none"})

        .from(
          ".hero-image",
          {
            scale: 1.2,
            duration: 2,
            ease: "power4.out",
          },
          "-=1.3",
        )
        .from(
          heroHeading.chars,
          {
            y: 200,
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            stagger: 0.02,
          },
          "-=2.1",
        )
        .from(
          heroPara.lines,
          {
            y: 300,
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            stagger: 0.07,
          },
          "-=2.5",
        );

      return () => {
        heroHeading.revert();
        heroPara.revert();
      };
    },
    { scope: heroRef },
  );

  return (
    <div ref={heroRef} className="w-full h-screen relative z-1 px-2 overflow-hidden">
      <ImageWrapper src="73" />

      <h1 className="font-brown text-4xl sm:text-[4rem] text-white absolute top-[14%] left-5 md:hidden main-hero-heading">
        The <br /> Wedding <br /> Stories <br /> Mumbai
      </h1>
      <h1 className="font-brown text-[3.5rem] text-white tracking-normal absolute bottom-[5%] left-15 hidden md:block main-hero-heading">
        The Wedding Stories Mumbai
      </h1>

      <p className="absolute  w-full md:w-1/2 lg:w-1/3 text-xs bottom-[15%] md:text-sm text-white md:bottom-[14%] md:right-5 px-6 md:px-2 main-hero-para font-general-sans font-light leading-relaxed">
        Your love is a story worth telling with elegance. Specializing in luxury
        weddings and exotic destinations, The Wedding Stories brings a cinematic
        eye to the most important days of your life. Based in Mumbai and
        traveling wherever love takes us, we craft exquisite imagery that feels
        as real and vibrant as the moment it was captured.
      </p>

      <IntroAni />
    </div>
  );
};

export default Hero;
