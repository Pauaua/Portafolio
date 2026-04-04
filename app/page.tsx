import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import ContactCTA from "@/components/sections/ContactCTA";
import SideNav from "@/components/ui/SideNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
