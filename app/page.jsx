'use client';
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";
import About from "@/app/components/aboutus";
import Resources from "@/app/components/resources";
import ContactUs from "@/app/components/contact";
import Footer from "@/app//components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Resources />
      <ContactUs />
      <Footer />
    </div>
  );
}