import { Backdrop } from "@/components/quantum/Backdrop";
import { Navbar } from "@/components/quantum/Navbar";
import { Hero } from "@/components/quantum/Hero";
import { Services } from "@/components/quantum/Services";
import { Process } from "@/components/quantum/Process";
import { Team } from "@/components/quantum/Team";
import { WhyUs } from "@/components/quantum/WhyUs";
import { Testimonials } from "@/components/quantum/Testimonials";
import { Contact } from "@/components/quantum/Contact";
import { Footer } from "@/components/quantum/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Team />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
