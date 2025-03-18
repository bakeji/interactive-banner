import { useState } from "react";
import Banner from "./components/banner";
import BannerForm from "./components/bannerForm";

export default function App() {
    const [bannerContent, setBannerContent] = useState({
        title: "Music🎶",
        content: "I love listening to music so much, especially Afrobeats. Afrobeats is a genre with soulful melodies and beautiful rythyms.",
        picture: "/pic.jpg",
        background: "#121B68"
    })

  return (
    <div className="w-full font-inter h-[100vh] bg-[#E0E0E0]">
        <Banner bannerContent={bannerContent} />
        <BannerForm bannerContent={bannerContent} setBannerContent={setBannerContent}/>
    </div>
   
  )
    
}

