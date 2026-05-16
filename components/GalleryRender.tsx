import { CldImage } from "next-cloudinary";

type GalleryRenderProps = {
  title: string;
  subtitle?: string;
  images: string[];
};

const GalleryRender = ({ title, subtitle, images }: GalleryRenderProps) => {
  return (
    <main className="min-h-screen w-full bg-bg px-4 pb-20 pt-28 font-general-sans md:px-8 md:pt-32">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            {/* Recent Works */}
          </p>
          <h1 className="font-brown text-5xl leading-none md:text-8xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-2xl text-base font-light leading-relaxed text-black/65 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure:not(:first-child)]:mt-4">
          {images.map((src, index) => (
            <figure
              key={`${src}-${index}`}
              className="break-inside-avoid overflow-hidden bg-black"
            >
              <CldImage
                src={src}
                width={1200}
                height={1600}
                alt={`${title} gallery image ${index + 1}`}
                format="auto"
                quality="85"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-contain"
                priority={index < 3}
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryRender;
