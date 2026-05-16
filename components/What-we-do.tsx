"use client";

import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [

  {
    title: "Pre-Weddings",
    src: "39",
    alt: "Pre-wedding photography",
  },
  {
    title: "Destination Weddings",
    src: "120",
    alt: "Destination wedding photography",
  },
  {
    title: "The Grandeur",
    src: "12",
    alt: "Grand luxury wedding photography",
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".what-we-do-item");

      items.forEach((item) => {
        const image = item.querySelector(".what-we-do-image");
        if (!image) return;

        gsap.fromTo(
          image,
          { yPercent: -35 },
          {
            yPercent: 25,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate z-0 w-full bg-bg px-4 py-[12vh] md:px-8 md:py-[16vh]"
    >
      <h2 className="font-brown text-3xl tracking-tigher md:text-4xl text-start py-6 sm:text-center">We Take On </h2>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center mt-10">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="what-we-do-item "
          >
            <figure className="relative h-[72vh] w-screen md:w-screen overflow-hidden md:h-[82vh]">
              <CldImage
                src={project.src}
                width={1200}
                height={1600}
                alt={project.alt}
                format="auto"
                quality="85"
                sizes="(min-width: 768px) 720px, 82vw"
                priority={index === 0}
                className="what-we-do-image h-[116%] w-full object-cover object-center will-change-transform"
              />

              <div className="absolute inset-0 bg-black/20" />

              <figcaption className="absolute bottom-7 left-1/2 w-[92%] -translate-x-1/2 text-center font-brown text-[clamp(0.7rem,5vw,1.6rem)] font-bold leading-none text-white md:bottom-10 tracking-wide">
                {project.title}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
