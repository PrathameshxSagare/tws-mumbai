import type { Metadata } from "next";
import "./globals.css";
import { bricolage, brownSugar, delon, generalSans, seasons} from "./fonts";
import BackButton from "@/components/BackButton";
import SmoothScroll from "@/components/SmoothScroll";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "The Wedding Stories",
  description: "A Premium Wedding & Film Maker Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
        <body className={`${generalSans.variable} ${bricolage.variable} ${seasons.variable} ${brownSugar.variable} ${delon.variable} overflow-x-hidden`}>
        <SmoothScroll>
          <BackButton />
          {children}
        </SmoothScroll>
        </body>
    </html>
  );
}
