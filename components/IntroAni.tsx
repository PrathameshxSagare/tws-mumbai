"use client";
import { CldImage } from "next-cloudinary";

const IntroAni = () => {
  return (
    <div className="w-screen h-screen z-50 fixed top-0 left-0 intro-container">
      <div className="w-full h-[25%] bg-[#f0f0f0] bg-cover bg-center intro-div z-9999" />
      <div className="w-full h-[25%] bg-[#f0f0f0] bg-cover bg-center intro-div z-9999" />
      <div className="w-full h-[25%] bg-[#f0f0f0] bg-cover bg-center intro-div z-9999" />
      <div className="w-full h-[25%] bg-[#f0f0f0] bg-cover bg-center intro-div z-9999" />
      {/* <h2 className="text-white absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-seasons text-lg md:text-xl intro-text whitespace-nowrap">
        The Wedding Stories
      </h2> */}

      <CldImage
        src="74"
        width={300}
        height={500}
        alt="Intro Picture"
        format="png"
        quality={90}
        sizes="100vw"
        className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 intro-pic opacity-0 scale-90 md:scale-100"
      />
    </div>
  );
};

export default IntroAni;
