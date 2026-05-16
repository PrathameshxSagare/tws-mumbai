import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";

export const generalSans = localFont({
  src: [
    {
      path: "./_private/fonts/GeneralSans-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./_private/fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_private/fonts/GeneralSans-Semibold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-general-sans",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});



export const seasons = Geist({
  // src: "./_private/fonts/seasons.otf",
  subsets: ['latin'],
  display: 'swap',
  variable:"--font-seasons"
});

export const brownSugar = localFont({
  src:"./_private/fonts/Brown-Sugar.otf", 
  display: "swap",
  variable: "--font-brown",
})

export const delon = localFont({
  src: "./_private/fonts/Delon.otf",
  display: "swap",
  variable: "--font-delon",
})
