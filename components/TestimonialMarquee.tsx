import Image from "next/image";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { reviewData } from "@/data/data";

const googleMapsUrl = "https://goo.gl/maps/g6u5mnq3ybrbDLXU7";
const marqueeReviews = [...reviewData, ...reviewData];

const cleanReviewText = (text: string) =>
  text
    .replaceAll("â€™", "'")
    .replaceAll("â€¦", "...")
    .replaceAll("â¤ï¸", "love");

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const TestimonialMarquee = () => {
  return (
    <section className="relative w-full overflow-hidden bg-bg px-4 py-[14vh] md:px-8 md:py-[18vh]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 border-t border-black/15 pt-10 md:gap-14 md:pt-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="font-brown text-3xl leading-none md:text-5xl">
              Testimonials
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex gap-1 text-yellow-400" aria-label="5 star rated">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-yellow-400 md:h-6 md:w-6"
                  />
                ))}
              </div>

              <p className="font-general-sans text-sm font-light uppercase tracking-[0.22em] text-black/60 md:text-base">
                5 star rated, 200+ reviews
              </p>
            </div>
          </div>

          <div className="flex md:justify-end">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/20 px-5 py-3 font-general-sans text-sm font-light uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
              aria-label="Write a review on Google Maps"
            >
              Write a Review
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative -mx-4 overflow-hidden md:-mx-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20  md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0  w-20 md:w-40" />

          <div className="testimonial-marquee-track flex w-max gap-4 px-4 md:gap-5 md:px-8">
            {marqueeReviews.map((review, index) => (
              <article
                key={`${review.id}-${index}`}
                aria-hidden={index >= reviewData.length}
                className="flex h-100 w-[82vw] shrink-0 flex-col justify-between bg-[#ffffff] p-5 shadow-lg md:w-[26rem] md:p-6 rounded-3xl border border-black/15"
              >
                <div className="flex items-start justify-between gap-5 border-b pb-2 border-black/15">
                  <div className="flex items-center gap-3 ">
                    {review.avatar_url ? (
                      <Image
                        src={review.avatar_url}
                        alt={`${review.name} avatar`}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full font-seasons text-sm text-black/70 ">
                        {getInitials(review.name)}
                      </div>
                    )}

                    <div>
                      <h3 className="font-seasons text-xl leading-none text-black">
                        {review.name}
                      </h3>
                      <p className="mt-1 text-xs font-light uppercase tracking-[0.18em] text-black/45">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <Quote className="h-5 w-5 shrink-0 text-black/30" />
                </div>


                <p className="testimonial-review-text my-4 min-h-0 flex-1 overflow-hidden font-general-sans text-base font-light leading-relaxed text-black/75 md:text-base">
                  {cleanReviewText(review.review)}
                </p>

                <div className="flex items-center justify-between border-t border-black/15 pt-4">
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4 w-4 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-light uppercase tracking-[0.24em] text-black/45">
                    Google Review
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
