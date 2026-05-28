import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutOqta from "./components/AboutOqta";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import AboutSection from "./components/AboutSection";
import MediaCards from "./components/MediaCards";
import MediaCoverage from "./components/MediaCoverage";
// Reviews: LP由来のため除外 (docs/todo.md #16)
// NewsSection: SSフレームに根拠なし・LP実装時に再検討
import Supporter from "./components/Supporter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutOqta />
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
