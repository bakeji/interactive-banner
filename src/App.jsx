import React, { useState, useEffect } from "react";
import Banner from "./components/banner";
import BannerForm from "./components/bannerForm";

export default function App() {
    // Create a custom hook to get and set the banner content in localStorage   
    function useLocalStorage(key, defaultValue) {
        const [value, setValue] = useState(() => {
          const savedValue = localStorage.getItem(key);
          if (savedValue) {
            try {
              return JSON.parse(savedValue);
            } catch (error) {
              console.error("Error parsing localStorage value:", error);
            }
          }
          return defaultValue;
        });
      
        // Update localStorage whenever the value changes
        useEffect(() => {
          localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);
      
        return [value, setValue];
      }
  // set the initial state of the banner content
  const [bannerContent, setBannerContent] = useLocalStorage("bannerContent", {
    title: "Music🎶",
    content:
      "I love listening to music so much, especially Afrobeats. Afrobeats is a genre with soulful melodies and beautiful rythyms.",
    picture: "/pic.jpg",
    background: "#121B68",
    textColor: "#ffffff",
  });
  
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
