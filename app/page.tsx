// app/page.tsx
import Hero from '@/components/Hero';
import CoursesGrid from '@/components/CoursesGrid';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import FeesTable from '@/components/FeesTable';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/FloatingChatButton';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* offset for fixed navbar */}
        <Hero />
        <CoursesGrid />
        <Facilities />
        <Gallery />
        <FeesTable />
        <EnquiryForm />
        <Footer />
        <FloatingChatButton />
      </main>
    </>
  );
}
