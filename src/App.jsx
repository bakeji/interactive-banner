import React, { useState, useEffect } from "react";
import Banner from "./components/banner";
import BannerForm from "./components/bannerForm";

export default function App() {
  // set the initial state of the banner content
  const [bannerContent, setBannerContent] = useState({
    title: "Music🎶",
    content:
      "I love listening to music so much, especially Afrobeats. Afrobeats is a genre with soulful melodies and beautiful rythyms.",
    picture: "/pic.jpg",
    background: "#121B68",
    textColor: "#ffffff",
  });

  // save the banner content to local storage
  useEffect(() => {
    const savedBannerContent = localStorage.getItem("bannerContent");

    if (savedBannerContent) {
      try {
        const parsedContent = JSON.parse(savedBannerContent);
        setBannerContent(parsedContent);
      } catch (error) {
        console.error("Error parsing saved banner content:", error);
      }
    }
  }, []);

  // get the banner content from local storage
  useEffect(() => {
    localStorage.setItem("bannerContent", JSON.stringify(bannerContent));
  }, [bannerContent]);

  return (
    <div className="w-full font-inter h-[100vh]">
      <Banner bannerContent={bannerContent} />
      <BannerForm
        bannerContent={bannerContent}
        setBannerContent={setBannerContent}
      />
    </div>
  );
}
