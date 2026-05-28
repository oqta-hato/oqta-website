import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FounderStory from "./components/FounderStory";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import AboutSection from "./components/AboutSection";
import MediaCards from "./components/MediaCards";
import MediaCoverage from "./components/MediaCoverage";
import Supporter from "./components/Supporter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FounderStory />
        <Features />
        <Product />
        <HowItWorks />
        <AboutSection />
        <MediaCards />
        <MediaCoverage />
        <Supporter />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
