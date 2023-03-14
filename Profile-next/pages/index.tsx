import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/image/s_zhwltlr.png";

const Home: NextPage = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
          <Head>
            <title>Ji Young</title>
          </Head>

          <Header />

          <section id="hero" className="snap-start">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="experience" className="snap-center">
            <Experience />
          </section>

          <section id="skills" className="snap-start">
            <Skills />
          </section>

          <section id="projects" className="snap-start">
            <Projects />
          </section>

          <section id="contact" className="snap-start">
            <ContactMe />
          </section>

          <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={Logo}
                  alt="profile"
                  placeholder="blur"
                  className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
                />
              </div>
            </footer>
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
