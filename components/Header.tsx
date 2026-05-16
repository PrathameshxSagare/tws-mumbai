"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { label: "Quick Portfolio", href: "/gallery" },
  { label: "Films", href: "/films" },
  { label: "Client Portfolio", href: "/clients" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useGSAP(()=> {
            gsap.fromTo(".nav-bar", {y:-130}, {y:0, opacity:1, duration:2, delay:3.5})
  },[])

  return (
    <header className="w-full h-12 fixed top-0 z-10 nav-bar opacity-0 bg-white/40 backdrop-blur-md">
      <nav className="w-full h-full px-6 md:px-10 flex justify-between items-center">
           

           <div className="hidden w-full items-center justify-between md:flex">
             <Link href="/gallery" className="font-general-sans text-sm font-light text-black">Quick Portfolio</Link>
             <Link href="/films" className="font-general-sans text-sm font-light text-black">Films</Link>
             <Link href="/" className="font-brown font-light text-4xl text-black">TWS</Link> 
             <Link href="/clients" className="font-general-sans text-sm font-light text-black">Client Portfolio</Link>
             <Link href="/#contact" className="font-general-sans text-sm font-light text-black">Contact</Link>
           </div>

           <Link href="/" className="font-brown font-light text-3xl text-black md:hidden">TWS</Link>
           <button
             type="button"
             onClick={() => setIsSidebarOpen(true)}
             className="flex items-center gap-2 text-sm font-light text-black md:hidden"
             aria-label="Open navigation menu"
           >
             <Menu className="h-4 w-4" />
             Menu
           </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-dvh w-[82vw] max-w-sm flex-col justify-between bg-[#f0f0f0] px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="flex items-center justify-between border-b border-black/15 pb-5">
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="font-brown text-3xl font-light text-black"
          >
            TWS
          </Link>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black"
            aria-label="Close navigation menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className="border-b border-black/15 py-4 font-general-sans text-lg font-light leading-none text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="max-w-xs text-sm font-light leading-relaxed text-black/55">
          Luxury wedding photography, films, and intimate visual stories from
          Mumbai to wherever love gathers.
        </p>
      </aside>
    </header>
  )
}

export default Header
