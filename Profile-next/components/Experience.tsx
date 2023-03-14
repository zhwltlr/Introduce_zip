import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "@/@types/allType";

const Experience = () => {
  const [experiences, setExperiences] = useState<Experiences[]>([]);

  const getExperiences = async () => {
    await fetch("../data/experience.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  };
  useEffect(() => {
    try {
      getExperiences();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {experiences.map((experience: Experiences) => {
          return (
            <>
              <ExperienceCard experience={experience} />
            </>
          );
        })}
      </div>
    </motion.div>
  );
};
export default Experience;
