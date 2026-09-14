import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WorkGallery from "@/components/WorkGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  return (
    <>
      <Nav />
      <Ticker />
      <Hero />
      <Services />
      <Features />
      <Process />
      <Testimonials />
      <WorkGallery />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </>
  );
}
