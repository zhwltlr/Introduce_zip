import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SkillType } from "@/@types/allType";
import Skill from "./Skill";

const Skills = () => {
  const [skilldata, setSkillData] = useState<SkillType[]>([]);

  const getSkills = async () => {
    await fetch("../data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkillData(data));
  };
  useEffect(() => {
    try {
      getSkills();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px]  text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {skilldata.map((skills: SkillType, i) => {
          return <Skill key={i} skills={skills} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
