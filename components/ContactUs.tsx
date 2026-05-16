"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarDays, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const phoneNumber = "9004117271";
const phoneNumberWithCode = "+919004117271";
const email = "theweddingstoriesmumbai@gmail.com";

const shootTypes = [
  "Wedding",
  "Destination Wedding",
  "Pre-wedding",
  "Engagement",
  "House Event",
  "Corporate Event",
];

const ContactUs = () => {
  const nameId = useId();
  const shootTypeId = useId();
  const dateId = useId();

  const [name, setName] = useState("");
  const [shootType, setShootType] = useState(shootTypes[0]);
  const [eventDate, setEventDate] = useState<Date>();
  const [dateOpen, setDateOpen] = useState(false);

  const readableDate = useMemo(() => {
    if (!eventDate) return "Not selected";

    return format(eventDate, "d MMMM yyyy");
  }, [eventDate]);

  const canSubmit = name.trim().length > 0 && Boolean(eventDate);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    const message = [
      "Hello The Wedding Stories,",
      "",
      `My name is ${name.trim()}.`,
      `I am looking for: ${shootType}.`,
      `Event date: ${readableDate}.`,
      "",
      "I would love to check your availability and discuss the celebration.",
    ].join("\n");

    window.open(
      `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-bg px-4 py-[14vh] md:px-8 md:py-[18vh]"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 border-t border-black/15 pt-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pt-14">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="font-brown text-3xl leading-none md:text-4xl">
              Contact Us
            </h2>

            <p className="max-w-xl font-general-sans text-base font-light leading-relaxed text-black/70 md:text-lg">
              Whether it’s your wedding, engagement, portrait shoot, or any
              special celebration, we would love to be a part of your memorable
              day. <br /> <br /> Contact us today to discuss your requirements, check
              availability, and turn your moments into timeless memories.
            </p>

            {/* <p className="max-w-lg text-base font-light leading-relaxed text-black/60 md:text-lg">
              Share the essentials and start a direct WhatsApp conversation
              with the studio. For urgent dates, call or mail us directly.
            </p> */}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-12 justify-between rounded-full border-black/35 bg-transparent px-5 font-general-sans text-sm font-light text-black hover:bg-black hover:text-white"
            >
              <a
                href={`tel:${phoneNumberWithCode}`}
                aria-label="Call The Wedding Stories"
              >
                Call Us
                <Phone className="ml-4 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 justify-between rounded-full border-black/35 bg-transparent px-5 font-general-sans text-sm font-light text-black hover:bg-black hover:text-white"
            >
              <a
                href={`mailto:${email}`}
                aria-label="Email The Wedding Stories"
              >
                Mail
                <Mail className="ml-4 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 border-t border-black/15 pt-8 md:border-t-0 md:pt-0"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label
              htmlFor={nameId}
              className="flex flex-col gap-3 text-sm font-light text-black/55"
            >
              Name
              <input
                id={nameId}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                placeholder="Your name"
                className="h-14 border-b border-black/25 bg-transparent font-general-sans text-xl font-light text-black outline-none transition-colors placeholder:text-black/25 focus:border-black md:text-2xl"
              />
            </label>

            <label
              htmlFor={shootTypeId}
              className="flex flex-col gap-3 text-sm font-light text-black/55"
            >
              Shoot type
              <Select value={shootType} onValueChange={setShootType}>
                <SelectTrigger id={shootTypeId} aria-label="Choose shoot type">
                  <SelectValue placeholder="Choose shoot type" />
                </SelectTrigger>
                <SelectContent align="start">
                  {shootTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </div>

          <label
            htmlFor={dateId}
            className="flex flex-col gap-3 text-sm font-light text-black/55"
          >
            Event date
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <button
                  id={dateId}
                  type="button"
                  className="flex h-14 w-full items-center justify-between border-b border-black/25 bg-transparent text-left font-general-sans text-xl font-light text-black outline-none transition-colors hover:border-black focus-visible:border-black md:text-2xl"
                  aria-label="Choose event date"
                >
                  <span className={eventDate ? "text-black" : "text-black/25"}>
                    {eventDate ? readableDate : "Choose a date"}
                  </span>
                  <CalendarDays className="h-5 w-5 text-black/45" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-[min(92vw,340px)]">
                <Calendar
                  mode="single"
                  selected={eventDate}
                  onSelect={(date) => {
                    setEventDate(date);
                    if (date) setDateOpen(false);
                  }}
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
          </label>

          <div className="flex flex-col gap-4 border-t border-black/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm font-light leading-relaxed text-black/50">
              Your message opens in WhatsApp with these details pre-filled. No
              data is stored on this website.
            </p>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="h-12 justify-between rounded-full border border-black bg-black px-5 font-general-sans text-sm font-light text-white hover:bg-transparent hover:text-black"
            >
              Send On WhatsApp
              <Send className="ml-4 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
