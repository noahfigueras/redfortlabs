import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}