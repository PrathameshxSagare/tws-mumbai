import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full items-center bg-bg px-4 py-28 font-general-sans md:px-8">
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 border-t border-black/15 pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pt-14">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-black/50">
              Page Not Found
            </p>
            <h1 className="font-brown text-[clamp(5rem,18vw,14rem)] font-light leading-[0.78] text-black">
              404
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            <p className="max-w-3xl font-seasons text-3xl font-light leading-[1.08] text-black md:text-6xl">
              This story seems to have moved, but the good ones are still close
              by.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/20 px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Home
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/20 px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
              >
                View Gallery
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
