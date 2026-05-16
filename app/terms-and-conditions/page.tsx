import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Wedding Stories",
  description: "Terms and conditions for The Wedding Stories Mumbai bookings.",
};

const terms = [
  "This proposal is valid for 15 days and is not a disclosure quote.",
  "We require 30-45 minutes before the wedding for getting-ready shots and at least 20-30 minutes for couple portraits in every attire. If the expected time is not available from the couple's end, the team will not be responsible if the final output is not as per the expected quality.",
  "TWS Mumbai has the rights to publish the work online on their respective website and social media channels.",
  "Rituals at home, including before and after wedding rituals, are not inclusive.",
  "Album costs are separate from the total package. Delivery of the album will depend on the client selecting photos, album layouts, and approval to proceed further.",
  "TWS Mumbai is not responsible for a refund if the event is cancelled or the date has changed, except when you contact us 30 days prior.",
  "TWS Mumbai is not responsible if the pre-wedding or post-wedding shoot does not cover the planned locations within 1 day. If the customer requires extended photo or video shooting on the next day, it will carry an additional charge.",
  "If the location is not local, the client is liable for all travel fare at the venue, travel tickets, food, and accommodation of the team assigned to the event.",
  "The agreed-upon services are valid until midnight, 12:00 AM. Any extension beyond this time will be subject to additional charges.",
  "In case an LED screen is present, either an additional videographer has to be hired or the LED vendor has to arrange their own videographer.",
];

const TermsAndConditionsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-bg px-4 pb-20 pt-28 font-general-sans text-black md:px-8 md:pb-28 md:pt-32">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 gap-6 border-t border-black/15 pt-10 md:grid-cols-[0.85fr_1.15fr] md:items-end md:pt-14">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                Booking Policy
              </p>
              <h1 className="font-brown text-5xl leading-none md:text-8xl">
                Terms & Conditions
              </h1>
            </div>

            <p className="max-w-3xl font-seasons text-xl font-light leading-[1.15] text-black md:text-2xl">
              Please review the booking terms before confirming your event with
              The Wedding Stories Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-black/15 pt-8 md:grid-cols-[0.32fr_0.68fr] md:pt-12">
            <div className="flex flex-col gap-4 text-sm font-light leading-relaxed text-black/55 md:max-w-xs">
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                TWS Mumbai
              </p>
              <p>
                These terms apply to all the standard premium package
                photography and film services booked with our team.
              </p>
            </div>

            <ol className="flex flex-col border-t border-black/15">
              {terms.map((term, index) => (
                <li
                  key={term}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-black/15 py-5 md:grid-cols-[4.5rem_1fr] md:gap-8 md:py-7"
                >
                  <span className="font-seasons text-2xl font-light leading-none text-black/35 md:text-3xl">
                    {String(index + 1).padStart(2, "0")} 
                  </span>
                  <p className="text-base font-light leading-relaxed text-black/78 md:text-xl md:leading-relaxed">
                    {term}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
