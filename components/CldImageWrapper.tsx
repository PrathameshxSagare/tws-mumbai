"use client";
import { CldImage } from "next-cloudinary";



const CldImageWrapper = ({src, classname, quality, isPreload} : {src : string, classname?: string | undefined, quality?:string, isPreload?:boolean}) => {
  return (
        <CldImage
          src={src}
          width={800}
          height={1200}
          alt=""
          preload={isPreload ? isPreload : false}
          format="auto"
          quality={quality ? quality : "40"}
          sizes="100vw"
          className={classname}
        />
  )
}

export default CldImageWrapper
