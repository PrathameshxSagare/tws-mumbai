"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { celebSliderData } from "@/data/CelebSliderData";

const cleanText = (text: string) =>
  text.replaceAll("â€™", "'").replaceAll("â€¦", "...");

const getHighlightedCopy = (text: string) => {
  const cleanedText = cleanText(text);
  const splitAt = cleanedText.indexOf(" is ");

  if (splitAt === -1) {
    return {
      name: cleanedText,
      copy: "",
    };
  }

  return {
    name: cleanedText.slice(0, splitAt),
    copy: cleanedText.slice(splitAt),
  };
};

const FamousPeopleCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === celebSliderData.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? celebSliderData.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === celebSliderData.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-bg px-4 py-[10vh] md:px-8 md:py-[12vh]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-black/15 pt-8 md:gap-8 md:pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-black/45">
              Trusted Frames
            </p>
            <h2 className="font-brown text-3xl leading-none md:text-4xl">
              Famous people we&apos;ve worked with
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/25 text-black transition-colors duration-300 hover:bg-black hover:text-white"
              aria-label="Show previous famous person"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/25 text-black transition-colors duration-300 hover:bg-black hover:text-white"
              aria-label="Show next famous person"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {celebSliderData.map((celeb, index) => {
              const highlightedCopy = getHighlightedCopy(celeb.para);

              return (
                <article
                  key={celeb.id}
                  className="grid min-w-full grid-cols-1 border border-black/15 md:h-[22rem] md:grid-cols-[1.08fr_0.92fr]"
                  aria-hidden={activeIndex !== index}
                >
                  <div className="flex min-h-[18rem] flex-col justify-between gap-6 p-5 md:min-h-0 md:p-7">
                    <p className="font-seasons text-4xl leading-none text-black/15 md:text-5xl">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="max-w-3xl font-general-sans text-base font-light leading-relaxed text-black md:text-lg">
                      <span className="font-medium text-black">
                        {highlightedCopy.name}
                      </span>
                      {highlightedCopy.copy}
                    </p>
                  </div>

                  <figure className="relative flex h-[34vh] items-center justify-center overflow-hidden md:h-full">
                    <CldImage
                      src={String(celeb.src)}
                      width={900}
                      height={900}
                      alt={`Famous person The Wedding Stories worked with ${index + 1}`}
                      format="auto"
                      quality="85"
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="h-full w-full object-contain object-center"
                      priority={index === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />
                  </figure>
                </article>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {celebSliderData.map((celeb, index) => (
            <button
              key={celeb.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-7 bg-black" : "w-1.5 bg-black/25"
              }`}
              aria-label={`Show famous person slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousPeopleCarousel;
