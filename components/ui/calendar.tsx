"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-[#f1eade] p-1 font-general-sans", className)}
      classNames={{
        root: "w-full",
        months: "flex flex-col gap-4",
        month: "space-y-4",
        month_caption: "relative flex items-center justify-center pt-1",
        caption_label: "font-seasons text-xl text-black",
        nav: "absolute inset-x-0 top-0 flex items-center justify-between",
        button_previous: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "h-8 w-8 rounded-full bg-transparent text-black/60 hover:bg-black hover:text-white",
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "h-8 w-8 rounded-full bg-transparent text-black/60 hover:bg-black hover:text-white",
        ),
        weekdays: "grid grid-cols-7 pt-3",
        weekday:
          "flex h-8 items-center justify-center text-[0.7rem] font-light uppercase tracking-[0.16em] text-black/45",
        week: "grid grid-cols-7",
        day: "flex h-9 w-9 items-center justify-center p-0 text-sm",
        day_button:
          "flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-sm font-light text-black transition-colors hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-none",
        selected:
          "[&>button]:bg-black [&>button]:text-white [&>button]:hover:bg-black [&>button]:hover:text-white",
        today: "[&>button]:border [&>button]:border-black/30",
        outside: "text-black/25 [&>button]:text-black/25",
        disabled:
          "pointer-events-none text-black/20 opacity-40 [&>button]:text-black/20",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: iconClassName, ...iconProps }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("h-4 w-4", iconClassName)} {...iconProps} />
          ) : (
            <ChevronRight
              className={cn("h-4 w-4", iconClassName)}
              {...iconProps}
            />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
