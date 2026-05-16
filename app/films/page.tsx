import Footer from "@/components/Footer";
import Header from "@/components/Header";

const films = [
  {
    id: "DrlAPXt3l5o",
    title:
      "Dr. Deepshree & Ninad || Traditional Prewedding @THE WEDDING STORIES",
    label: "Traditional Pre-wedding",
  },
  {
    id: "-FHGEk5fX8w",
    title:
      "Grand Beach Wedding in Juhu Highlight || Sayali & Rohan || Sun & Sand",
    label: "Beach Wedding Highlight",
  },
  {
    id: "ZhTIU1psp_E",
    title: "Grand Muslim Wedding Mumbai Wadala 2025 || Dr Azra & Yusuf",
    label: "Wedding Film",
  },
  {
    id: "pHlcpIZn5oI",
    title: "Best Marathi Wedding Teaser 2026 || Sujay & Janhavi",
    label: "Wedding Teaser",
  },
  {
    id: "Se_1YlwnOP0",
    title: "Marathi Wedding Teaser 2025 || Vishal & Kadambari",
    label: "Emotional Wedding Film",
  },
  {
    id: "dG7GnuDLePo",
    title: "Best Engagement & Sangeet Teaser 2025 || Rohan & Saylee",
    label: "Engagement & Sangeet",
  },
];

const FilmsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-bg px-4 pb-20 pt-28 font-general-sans md:px-8 md:pt-32">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 gap-6 border-t border-black/15 pt-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:pt-14">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                Moving Stories
              </p>
              <h1 className="font-brown text-5xl leading-none md:text-8xl">
                Films
              </h1>
            </div>

            <p className="max-w-3xl font-seasons text-xl font-light leading-[1.15] text-black md:text-2xl">
              Wedding films shaped around rituals, atmosphere, family, and the
              moments that still feel alive after the music fades.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-y-30">
            {films.map((film, index) => (
              <article key={film.id} className="group flex flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden bg-black shadow-[0_18px_70px_rgba(0,0,0,0.10)]">
                  <iframe
                    src={`https://www.youtube.com/embed/${film.id}`}
                    title={film.title}
                    className="h-full w-full"
                    loading={index < 2 ? "eager" : "lazy"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <div className="flex items-start justify-between gap-5 border-t border-black/15 pt-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-[0.28em] text-black/45">
                      {film.label}
                    </p>
                    <h2 className="max-w-xl font-seasons text-2xl font-light leading-none text-black md:text-3xl">
                      {film.title}
                    </h2>
                  </div>

                  <p className="font-seasons text-4xl leading-none text-black/15">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FilmsPage;
