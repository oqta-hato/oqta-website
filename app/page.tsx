import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Product from "./components/Product";
import VideoSection from "./components/VideoSection";
import Philosophy from "./components/Philosophy";
import FounderStory from "./components/FounderStory";
import MediaCoverage from "./components/MediaCoverage";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Features />
        <HowItWorks />
        <Product />
        <VideoSection />
        <Philosophy />
        <FounderStory />
        <MediaCoverage />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
