import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Hero from "../components/about/Hero";
import Values from "../components/about/Values";
import Statstics from "../components/about/Statstics";
import StoryImage from "../components/about/StoryImage";
import StoryContent from "../components/about/StoryContent";
import Final from "../components/about/Final";
import Modal from "../components/about/Modal";
import {statistics,values } from "../data/apiAbout"


const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <main dir="rtl" className="overflow-hidden bg-[#f2f1e9] text-[#14251d]">
      <section className="grid grid-cols-1 items-center lg:grid-cols-2">
        <Hero />
      </section>
      <section className="border-t border-[#e2e2d8] bg-[#eaeae1]">
        <Values values={values} />
      </section>
      <section className="relative overflow-hidden bg-[#10251c] text-[#f4f2e8]">
        <Statstics statistics={statistics} />
      </section>
      <section className="mx-auto grid max-w-[160rem] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <StoryImage setIsVideoOpen={setIsVideoOpen} />
        <StoryContent />
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <Final  />
      </section>

      <AnimatePresence>{isVideoOpen && <Modal setIsVideoOpen={setIsVideoOpen} />}</AnimatePresence>
    </main>
  );
};

export default About;
