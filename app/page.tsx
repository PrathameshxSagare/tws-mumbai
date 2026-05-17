import AboutUs from "@/components/AboutUs";
import BentoSection from "@/components/BentoSection";
import ContactUs from "@/components/ContactUs";
import FamousPeopleCarousel from "@/components/FamousPeopleCarousel";
import Footer from "@/components/Footer";
import GalleryCTA from "@/components/galleryCTA";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PositioningSec from "@/components/PositioningSec";
import RecentWorks from "@/components/RecentWorks";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import WhatWeDo from "@/components/What-we-do";
import WhyChooseTWS from "@/components/WhyChooseTWS";

const texts = {
  text1:"We Promise To Turn Your Special Moments Into Memories.",

  text2:"You are not hiring random people with camera, You are hiring expert creative artists. The most important moments in your life are in safe hands to be captured."
}

const Page = () => {
  return (
    <div className="font-general-sans text-2xl bg-bg w-screen min-h-screen overflow-x-hidden relative">
      <Header />
      <Hero />
      <AboutUs />
      <FamousPeopleCarousel />
      <PositioningSec text={texts.text1} />
      <BentoSection />
      <div className="w-screen h-[130vh] md:h-[194vh]"></div>
      <WhatWeDo />
      <RecentWorks />
      <GalleryCTA />
      <WhyChooseTWS />
      <TestimonialMarquee />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
