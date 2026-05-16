import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theweddingstories_mumbai?igsh=ZW4zenVmZ3Y4dHRl",
    icon: InstagramLogo,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCy_yJY0C9vIC81QruCBUARQ",
    icon: YoutubeLogo,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theweddingstoriesmumbai?mibextid=ZbWKwL",
    icon: FacebookLogo,
  },
  {
    label: "Google Map",
    href: "https://goo.gl/maps/g6u5mnq3ybrbDLXU7",
    icon: MapPin,
  },
];

const footerNav = [
  { label: "Teaser & Highlights", href: "/films" },
  { label: "Quick Portfolio", href: "/gallery" },
  { label: "Client Portfolio", href: "/clients" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Contact", href: "mailto:theweddingstoriesmumbai@gmail.com" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-black px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[14vh] text-white md:px-8 md:pb-10 md:pt-[18vh]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 border-t border-white/15 pt-10 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pt-14">
          <div className="flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.38em] text-white/45">
              The Wedding Stories Mumbai
            </p>

            <h2 className="max-w-5xl font-brown text-[clamp(1rem,10vw,8rem)] font-light leading-[0.78] tracking-normal">
              Let the next story be yours.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-10 md:items-end">
            <p className="max-w-sm font-seasons text-2xl font-light leading-[1.12] text-white/80 md:text-right md:text-3xl">
              Your story deserves more than pictures — it deserves unforgettable memories.
            </p>

            <a
              href="tel:+919004117271"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-3 font-general-sans text-sm font-light text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Call 9004117271
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-white/15 pt-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-28 flex-col justify-between border border-white/12 p-4 transition-colors duration-300 hover:bg-white hover:text-black"
                  aria-label={`Open ${link.label}`}
                >
                  <Icon className="h-5 w-5 text-white/60 transition-colors duration-300 group-hover:text-black" />
                  <span className="flex items-center justify-between gap-3 font-seasons text-xl leading-none">
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/35">
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {footerNav.map((item) => {
                  const isExternal = item.href.startsWith("mailto:");

                  if (isExternal) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center justify-between border-b border-white/12 py-3 font-seasons text-2xl font-light text-white/75 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-between border-b border-white/12 py-3 font-seasons text-2xl font-light text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/35">
                  Direct
                </p>
                <div className="flex flex-col gap-3 text-lg font-light text-white/65 md:pt-6">
                  <p className="text-sm md:text-lg">
                    Address - Parel East Bhoiwada Mumbai 
                  </p>
                  <p className="text-sm md:text-lg">
                    400012.
                  </p>
                  <a
                    href="mailto:theweddingstoriesmumbai@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    theweddingstoriesmumbai@gmail.com
                  </a>
                  <a
                    href="tel:+919004117271"
                    className="transition-colors hover:text-white"
                  >
                    +91 90041 17271
                  </a>
                </div>
              </div>

              <p className="max-w-sm text-sm font-light leading-relaxed text-white/42">
                Based in Mumbai. Available for luxury weddings, destination
                celebrations, pre-weddings, and culturally rich family events.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-5 text-xs uppercase tracking-[0.22em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {year} The Wedding Stories. All rights reserved.</p>
          <a
            href="https://vinodevagency.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/70 shadow-[0_0_28px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black hover:shadow-[0_0_36px_rgba(255,255,255,0.28)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative bg-gradient-to-r from-white/55 via-white to-white/55 bg-[length:220%_100%] bg-clip-text text-transparent [animation:footer-credit-shimmer_3.6s_linear_infinite] group-hover:text-black">
              Website developed by V Agency
            </span>
            <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
