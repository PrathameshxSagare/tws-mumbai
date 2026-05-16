import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioCldImage from "@/components/PortfolioCldImage";
import { clientPortfolioData } from "@/data/clientPortfolio";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ClientPortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getClientPortfolio = (slug: string) =>
  clientPortfolioData.find((client) => String(client.id) === slug);

export const dynamicParams = false;

export const generateStaticParams = () =>
  clientPortfolioData.map((client) => ({
    slug: String(client.id),
  }));

export const generateMetadata = async ({
  params,
}: ClientPortfolioPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const client = getClientPortfolio(slug);

  if (!client) {
    return {
      title: "Client Portfolio | The Wedding Stories",
    };
  }

  return {
    title: `${client.name} | Client Portfolio`,
    description: `${client.weddingType} photo journey for ${client.name} by The Wedding Stories Mumbai.`,
  };
};

const ClientPortfolioPage = async ({ params }: ClientPortfolioPageProps) => {
  const { slug } = await params;
  const client = getClientPortfolio(slug);

  if (!client) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-bg px-4 pb-20 pt-28 font-general-sans md:px-8 md:pt-32">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 gap-8 border-t border-black/15 pt-10 md:grid-cols-[0.95fr_1.05fr] md:items-end md:pt-14">
            <div className="flex flex-col gap-6">
              <Link
                href="/clients"
                className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.28em] text-black/55 transition-colors hover:text-black"
              >
                <ArrowLeft className="h-4 w-4" />
                Clients
              </Link>

              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                  Client Journey
                </p>
                <h1 className="font-brown text-5xl font-light leading-none md:text-8xl">
                  {client.name}
                </h1>
                <p className="max-w-xl text-xs font-light uppercase leading-relaxed tracking-[0.24em] text-black/55">
                  {client.weddingType}
                </p>
              </div>
            </div>

            <p className="max-w-3xl font-seasons text-xl font-light leading-[1.15] text-black md:text-2xl">
              A complete visual story from {client.weddingType.toLowerCase()},
              told through the moments, portraits, and atmosphere that made
              this celebration its own.
            </p>
          </div>

          <figure className="relative aspect-[16/11] w-full overflow-hidden bg-black md:aspect-[16/8]">
            <PortfolioCldImage
              src={client.thumbnailSrc}
              width={1800}
              height={1100}
              alt={`${client.name} featured wedding portfolio image`}
              quality="88"
              sizes="100vw"
              priority
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 flex max-w-3xl flex-col gap-3 p-5 text-white md:p-8">
              <span className="font-seasons text-3xl font-light leading-none md:text-5xl">
                {client.name}
              </span>
              <span className="max-w-xl font-general-sans text-xs font-light uppercase leading-relaxed tracking-[0.24em] text-white/72">
                {client.weddingType}
              </span>
            </figcaption>
          </figure>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure:not(:first-child)]:mt-4">
            {client.images.map((src, index) => (
              <figure
                key={`${client.id}-${src}-${index}`}
                className="break-inside-avoid overflow-hidden bg-black"
              >
                <PortfolioCldImage
                  src={src}
                  width={1200}
                  height={1600}
                  alt={`${client.name} wedding portfolio image ${index + 1}`}
                  quality="86"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientPortfolioPage;
