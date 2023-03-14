import React from "react";
import { motion } from "framer-motion";
import { ExperienceProp } from "@/@types/allType";

type Props = {};

const ExperienceCard = ({ experience }: ExperienceProp) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] px-10 py-16 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[100px] object-contain object-center"
        src={experience.exImageUrl}
        alt="experience"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light mb-2">{experience.companyName}</h4>
        <span className="font-bold text-lg mt-1 mr-4">
          {experience.companyExplanation}
        </span>
        <span className="uppercase py-1 mb-5 text-gray-300">
          {experience.period}
        </span>
        <ul className="list-disc space-y-5 mt-7 ml-5">
          {experience.content.map((contents) => {
            return <li key={experience.id}>{contents}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
