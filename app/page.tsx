// app/page.tsx
import './globals.css';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import FeesTable from '@/components/FeesTable';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/FloatingChatButton';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Achievers from '@/components/Achievers';
import YouTubeSlider from '@/components/YouTubeSlider';
import AdmissionBanner from '@/components/AdmissionBanner';
export default function Home() {
  return (
    <>
      <Navbar />
       
      <main > 
       
         <Hero />
       
        <Achievers/>
        <Courses />

 <YouTubeSlider/>


        <Facilities />
        <Gallery />
      
      
        <EnquiryForm />
        <Footer />
      
      </main>
    </>
  );
}
