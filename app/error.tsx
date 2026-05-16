"use client";

import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ reset }: ErrorPageProps) => {
  return (
    <main className="flex min-h-screen w-full items-center bg-bg px-4 py-16 font-general-sans md:px-8">
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 border-t border-black/15 pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pt-14">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            Something Went Wrong
          </p>
          <h1 className="font-brown text-[clamp(4rem,15vw,12rem)] font-light leading-[0.82] text-black">
            Hold on.
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          <p className="max-w-3xl font-seasons text-3xl font-light leading-[1.08] text-black md:text-6xl">
            The page lost its frame for a moment. You can try again or return
            home.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/20 px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
              Try Again
            </button>
            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/20 px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
