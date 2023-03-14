import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectsType } from "@/@types/allType";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsType[]>([]);
  const getProjects = async () => {
    await fetch("../data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };
  useEffect(() => {
    try {
      getProjects();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      <p className="absolute top-28 tracking-[5px] text-gray-500">
        이미지를 클릭하면 github으로 이동합니다
      </p>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen"
            >
              <Link href={`${project.githubUrl}`} target="_blank">
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={`${project.projectImageUrl}`}
                  alt="project"
                  className="object-cover h-32 xl:h-40 filter group-hover:grayscale mt-5"
                />
              </Link>

              <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl font-semibold text-center mb-5">
                  <span className="underline decoration-[#f7ab0a]/50">
                    {project.underlineTitle}
                  </span>{" "}
                  {project.projectTitle}
                </h4>

                <span className="text-center md:text-left mr-4 text-[#f7ab0a]">
                  사용 스텍 : {project.projectStack}
                </span>
                <span className="text-center md:text-left text-[#f7ab0a]">
                  기간 : {project.period}
                </span>
                <ul className="list-disc space-y-2 ml-5 mt-3">
                  {project.projectContent.map((con) => {
                    return <li key={project.id}>{con}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
