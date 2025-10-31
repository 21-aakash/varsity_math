// app/page.tsx
import "@/app/globals.css";

import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Mission from "@/components/MissionSection";
import Socials from "@/components/Socials";
import FacilitiesCarousel from "@/components/FacilitiesCarousel";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Faculty from "@/components/Faculty";
import Achievers from "@/components/Achievers";
import YouTubeSlider from "@/components/YouTubeSlider";
import ResultsStats from "@/components/ResultsStats";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>


        <Hero />

        <Socials />

        <Achievers />


  <ResultsStats />



        <Courses />

      <Faculty/>

<Mission />
        <YouTubeSlider />

        <FacilitiesCarousel />

        <EnquiryForm />
        
        <Footer />
      </main>
    </>
  );
}
