"use client";

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reasons = [
  {
    title: "150+ Weddings Successfully Covered",
    copy: "From intimate ceremonies to grand celebrations, we have documented over 150 weddings with consistent quality and client satisfaction.",
  },
  {
    title: "Expertise Across Cultures",
    copy: "We specialize in Marathi, Bengali, Gujarati, South Indian, North Indian, and other diverse brahmin wedding traditions, ensuring rituals are captured authentically.",
  },
  {
    title: "Highly Experienced & Loyal Core Team",
    copy: "Our photographers and cinematographers & drone pilots have been working with us for 5–7 years, bringing seamless coordination and reliability to every event & conditions.",
  },
  {
    title: "Emotion-driven Storytelling",
    copy: "We focus on candid moments, real emotions, and meaningful details that transform wedding photos & cinematics into timeless stories which are unscripted & raw.",
  },
];

const WhyChooseTWS = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".why-tws-reveal", {
        y: 34,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg px-4 py-[14vh] md:px-8 md:py-[18vh]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 border-t border-black/15 pt-10 md:grid-cols-[0.78fr_1.22fr] md:gap-16 md:pt-14">
        <div className="why-tws-reveal flex flex-col gap-6">
          <h2 className="font-brown text-3xl leading-none md:text-4xl">
            Why Choose TWS ?
          </h2>

          <p className="max-w-xl font-seasons text-2xl font-light leading-[1.15] text-black md:text-2xl">
            Because we don’t just capture photos — we capture emotions,
            memories, and moments that last forever.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="why-tws-reveal flex min-h-64 flex-col justify-between border-t border-black/20 pt-5"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="font-seasons text-5xl leading-none text-black/20">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-black/45" />
              </div>

              <div className="mt-10 flex flex-col gap-4">
                <h3 className="font-seasons text-2xl leading-none text-black md:text-3xl">
                  {reason.title}
                </h3>
                <p className="text-base font-light leading-relaxed text-black/62">
                  {reason.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTWS;
