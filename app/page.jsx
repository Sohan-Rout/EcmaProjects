'use client';
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";
import About from "@/app/components/aboutus";
import Resources from "@/app/components/resources";
import Newsletter from "@/app/components/newsletter";
import ContactUs from "@/app/components/contact";
import Footer from "@/app//components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}