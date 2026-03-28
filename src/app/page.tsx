import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Brands from "@/components/Brands";
import PhotoBreak from "@/components/PhotoBreak";
import Labels from "@/components/Labels";
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
        <Brands />
        <PhotoBreak />
        <Labels />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
