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
import SplashCursor from "./components/quantum/SplashCursor";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SplashCursor
        DENSITY_DISSIPATION={7.5}
        VELOCITY_DISSIPATION={6}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#0c3628"
      />
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