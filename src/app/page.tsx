import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ClientScripts from "@/components/ClientScripts";
import Loader from "@/components/Loader";

import { getProjects, getTranslations } from "@/lib/data";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await getProjects();
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <>
      <Loader />
      <ClientScripts />
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
