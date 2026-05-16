"use client";

import { CldImage } from "next-cloudinary";

type PortfolioCldImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  quality?: string;
  priority?: boolean;
};

const PortfolioCldImage = ({
  src,
  alt,
  width,
  height,
  className,
  sizes = "100vw",
  quality = "85",
  priority = false,
}: PortfolioCldImageProps) => {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      format="auto"
      quality={quality}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
};

export default PortfolioCldImage;
