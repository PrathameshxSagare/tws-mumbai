"use client";
import { CldImage } from "next-cloudinary";


const ImageWrapper = ({src} : {src : string}) => {
  return (
        <CldImage
          src={src}
          width={800}
          height={1200}
          alt="Background"
          preload
          format="auto"
          quality={90}
          sizes="100vw"
          // className="w-full h-screen object-bottom md:object-top object-cover absolute inset-0 left-0 -z-10 brightness-80 hero-image"
          className="w-full h-screen object-top scale-90 md:scale-100 md:object-bottom object-cover absolute inset-0 left-0 -z-10 brightness-84 hero-image"
        />
  )
}

export default ImageWrapper
