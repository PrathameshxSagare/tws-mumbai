"use client";

import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  {
    value: "150+",
    label: "Curated weddings delivered",
  },
  {
    value: "10+",
    label: "Years of wedding experience",
  },
  {
    value: "Luxury",
    label: "Aesthetic-led visual direction",
  },
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        y: 36,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.fromTo(
        ".about-image",
        { yPercent: -12 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-bg px-4 py-[14vh] md:px-8 md:py-[18vh]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-14">
        <div className="about-reveal flex w-full justify-center md:justify-start">
          <h2 className="font-brown text-3xl leading-none md:text-4xl">
            About Us
          </h2>
        </div>

        <div className="about-reveal hidden text-xs uppercase tracking-[0.35em] text-black/45 md:block">
          The Wedding Stories
        </div>

        <figure className="about-reveal relative h-[68vh] w-full overflow-hidden md:h-[78vh]">
          <CldImage
            src="70"
            width={1000}
            height={1400}
            alt="The Wedding Stories founder and luxury wedding photography"
            format="auto"
            quality="85"
            sizes="(min-width: 768px) 42vw, 100vw"
            className="about-image h-[118%] w-full object-cover object-center will-change-transform"
          />
          <div className="absolute inset-0 bg-black/10" />
          <figcaption className="absolute bottom-5 left-5 font-seasons text-xl text-white md:bottom-7 md:left-7">
            Prathamesh Sudhir Sagare
          </figcaption>
        </figure>

        <div className="flex flex-col gap-12 md:pt-0">
          <div className="about-reveal flex flex-col gap-7">
            <p className="max-w-3xl font-seasons text-xl font-light leading-[1.12] text-black md:text-2xl">
              Led by founder Prathamesh Sudhir Sagare, <br /> TWS Mumbai
              creates refined wedding imagery for couples who care about
              beauty, emotion, and the quiet details that make a celebration
              feel deeply personal.
            </p>

            <p className="max-w-2xl text-base font-light leading-relaxed text-black/65 md:text-lg">
              With over a decade behind the camera and more than 150 curated
              weddings delivered, the studio brings a calm editorial eye to
              luxury celebrations. Every frame is shaped with intention, from
              intimate rituals and family moments to grand destination
              chapters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-reveal border-t border-black/20 pt-4"
              >
                <p className="font-brown text-3xl leading-none md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-light leading-relaxed text-black/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
