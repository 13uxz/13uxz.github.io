import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import PhotoBreak from "@/components/PhotoBreak";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <PhotoBreak />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
