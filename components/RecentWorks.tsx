"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const works = [
  {
    couple: "Akash & Sneha",
    src: "318",
    href: "/recent1",
    alt: "Akash & Sneha Catholic Wedding",
    props:"object-center"
  },
  {
    couple: "Sarthak & Sayali",
    src: "40",
    href: "/recent2",
    alt: "Sarthak and Sayali wedding story",
    props:"object-bottom"
  },
];

const RecentWorks = () => {
  return (
    <section className="relative w-full bg-bg px-4 py-[14vh] md:px-8 md:py-[18vh]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
        <div className="flex w-full justify-center md:justify-start">
          <h2 className="font-brown text-3xl leading-none md:text-4xl">
            Recent Works
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {works.map((work) => (
            <Link
              key={work.href}
              href={work.href}
              className="group block focus:outline-none"
              aria-label={`View ${work.couple} gallery`}
            >
              <figure className="relative h-[72vh] w-full overflow-hidden md:h-[78vh]">
                <CldImage
                  src={work.src}
                  width={1200}
                  height={1600}
                  alt={work.alt}
                  format="auto"
                  quality="85"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${work.props}`}
                />

                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />

                <figcaption className="absolute bottom-7 left-1/2 w-[90%] -translate-x-1/2 text-center font-general-sans text-[clamp(0.7rem,5vw,1.6rem)] leading-none text-white md:bottom-9 tracking-wide font-extralight">
                  {work.couple}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
