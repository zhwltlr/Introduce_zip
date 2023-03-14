import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://user-images.githubusercontent.com/100506719/224532502-99a089cf-921a-4e70-89a4-90d186f92b8b.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#f7ab0a]/50">
            소통하는 개발자
          </span>
          가 되고 싶습니다.
        </h4>
        <p>
          대학생 때 어플리케이션 개발 동아리에서 기획 파트를 담당하였고, 그 때
          개발 파트에 호기심이 생겼습니다. 그 이후로 개발 공부를 하게 되었고
          좋은 개발자가 되기 위해 늘 도전하며 한계를 뛰어넘고 있습니다. 동료의
          말에 귀 기울이며 서로의 다른 의견은 협의점을 찾아나가며 더 나은
          방향으로 다 같이 나아갈 것 입니다.
        </p>
        <p className="text-base">
          저는 질문을 두려워하지 않으며 늘 주변 사람들의 말에 귀를 기울일
          것입니다. 탁월함에 끊임없이 도전하여 최고의 성과를 내고 싶습니다.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
