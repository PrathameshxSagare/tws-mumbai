"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const BackButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") {
    return null;
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="fixed left-4 top-16 z-30 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2 font-general-sans text-xs font-light uppercase tracking-[0.18em] text-black shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors duration-300 hover:bg-black hover:text-white md:left-8 md:top-20"
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
};

export default BackButton;
