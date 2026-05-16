import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioCldImage from "@/components/PortfolioCldImage";
import { clientPortfolioData } from "@/data/clientPortfolio";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ClientsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-bg px-4 pb-20 pt-28 font-general-sans md:px-8 md:pt-32">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 gap-6 border-t border-black/15 pt-10 md:grid-cols-[0.85fr_1.15fr] md:items-end md:pt-14">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                Client Journeys
              </p>
              <h1 className="font-brown text-5xl leading-none md:text-8xl">
                Clients
              </h1>
            </div>

            <p className="max-w-3xl font-seasons text-xl font-light leading-[1.15] text-black md:text-2xl">
              Portrait photography is not just about posing <br /> It&apos;s
              about capturing personalities beautifully.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientPortfolioData.map((client, index) => (
              <Link
                key={client.id}
                href={`/clients/${client.id}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-black"
                aria-label={`View ${client.name} client portfolio`}
              >
                <PortfolioCldImage
                  src={client.thumbnailSrc}
                  width={900}
                  height={1200}
                  alt={`${client.name} wedding portfolio thumbnail`}
                  quality="82"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  priority={index < 4}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
                  <div className="flex min-w-0 flex-col gap-2">
                    <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/65">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-seasons text-3xl font-light leading-none md:text-4xl">
                      {client.name}
                    </h2>
                    <p className="max-w-[15rem] text-xs font-light uppercase leading-snug tracking-[0.18em] text-white/70">
                      {client.weddingType}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientsPage;
