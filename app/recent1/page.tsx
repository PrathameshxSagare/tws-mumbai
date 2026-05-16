"use client";
import GalleryRender from "@/components/GalleryRender";
import Header from "@/components/Header";

const recentOneImages = [
  "316",  "291", "292", "293", "294", "295", "296", "297", "298", "299", "300",
  "301", "302", "303", "304", "305", "306", "307", "308", "309", "310",
  "311", "312", "313", "314", "315", "317", "318","331", "320",
  "321", "322", "323", "324", "325", "326", "327", "328", "329", "330"];

const RecentOnePage = () => {
  return (
    <>
      <Header />
      <GalleryRender
        title="Akash & Sneha"
        subtitle="A catholic wedding story told through intimate portraits, ritual details, and grand celebration frames."
        images={recentOneImages}
      />
    </>
  );
};

export default RecentOnePage;
