import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Philosophy from "./components/Philosophy";
import MediaCoverage from "./components/MediaCoverage";
import Awards from "./components/Awards";
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
        <Philosophy />
        <MediaCoverage />
        <Awards />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
