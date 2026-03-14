import NavbarF from "@/components/NavbarF";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBands from "@/components/CtaBands";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main>
      <NavbarF />
      <Hero />
      {/* <StatsBar /> */}
      <About />
      <Services />
      <Process />
      <CtaBands />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <WhatsappButton />
    </main>
  );
}