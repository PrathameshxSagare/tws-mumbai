"use client";
import GalleryRender from "@/components/GalleryRender";
import Header from "@/components/Header";

const recentTwoImages = ["39", "40", "41", "59", "61", "62", "38", "63"];

const RecentTwoPage = () => {
  return (
    <>
      <Header />
      <GalleryRender
        title="Sarthak & Sayali"
        subtitle="An editorial chapter shaped around soft portraits, ceremonial texture, and the quiet scale of celebration."
        images={recentTwoImages}
      />
    </>
  );
};

export default RecentTwoPage;
