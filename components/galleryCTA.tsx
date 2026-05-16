"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const galleryImages = ["121", "122", "15", "124", "125"];

const GalleryCTA = () => {
  useGSAP(() => {
    const marquee = gsap.to(".gallery-cta-track", {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    const images = gsap.utils.toArray<HTMLElement>(".gallery-slider-images");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { xPercent: -70 },
        {
          xPercent: 70,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            containerAnimation: marquee,
            start: "left 70%",
            end: "right left",
            scrub: true,
          },
        },
      );
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-bg px-4 py-[14vh] md:px-8 md:py-[18vh]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:gap-12">
        <div className="flex w-full justify-center md:justify-start">
          <h2 className="font-brown text-3xl leading-none md:text-4xl">
            Gallery
          </h2>
        </div>

        <div className="w-full overflow-hidden">
          <div className="gallery-cta-track flex w-max">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                aria-hidden={groupIndex === 1}
                className="gallery-cta-group flex shrink-0 items-center gap-2 pr-2 md:gap-4 md:pr-4"
              >
                {galleryImages.map((src, index) => (
                  <figure
                    key={`${groupIndex}-${src}-${index}`}
                    className="relative h-[42vh] w-[68vw] shrink-0 overflow-hidden md:h-[35vh] md:w-[23vw]"
                  >
                    <CldImage
                      src={src}
                      width={900}
                      height={1200}
                      alt={
                        groupIndex === 0 ? `Gallery preview ${index + 1}` : ""
                      }
                      format="auto"
                      quality="80"
                      sizes="(min-width: 768px) 31vw, 68vw"
                      className="h-full w-full object-cover object-center md:object-contain md:object-top scale-180 gallery-slider-images"
                    />
                    {/* <div className="absolute inset-0 bg-black/10" /> */}
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/gallery"
          className="font-general-sans font-light flex justify-between items-center text-sm md:text-base/tight min-w-30 border-b py-2 px-4 rounded-full group"
        >
          Gallery <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default GalleryCTA;
