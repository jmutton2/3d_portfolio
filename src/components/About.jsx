import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import "../index.css";

const ServiceCard = ({ index, title, icon, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsFlipped(!isFlipped);
      }}
      onMouseLeave={() => {
        setIsFlipped(!isFlipped);
      }}
      className={"card-container" + (isFlipped ? " flipped" : "")}
    >
      <div className="xs:w-[250px] w-full front">
        <motion.div
          className="w-full blue-green-gradient p-[1px] rounded-[20px] shadow-card"
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          <div className="bg-primary_dark rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-black text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
      <div className="xs:w-[250px] w-full back">
        <div
          className="w-full blue-green-gradient p-[1px] rounded-[20px] shadow-card"
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          <div className="bg-primary_dark rounded-[20px] py-0 px-5 min-h-[280px] flex justify-evenly items-center flex-col text-black">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        With a background in both front-end and back-end development, Jacob has
        honed their skills in building efficient and scalable applications that
        deliver seamless user experiences. Their experience with various web
        technologies and programming languages allows them to adapt quickly to
        new challenges and deliver innovative solutions.
        <br />
        <br />
        As a junior developer, Jacob also gained valuable experience in DevOps,
        with a focus on automation and continuous integration/continuous
        deployment (CI/CD) processes. This experience has given them a unique
        perspective on the software development lifecycle, allowing them to work
        effectively in cross-functional teams and drive successful projects from
        start to finish.
        <br />
        <br />
        But what really sets Jacob apart is their passion for learning and their
        desire to share their knowledge with others. They believe that
        technology has the power to transform lives and communities, and they
        are committed to helping others harness that power. Through mentorship,
        open-source contributions, and community outreach, Jacob is constantly
        seeking new ways to make a positive impact on the world through
        technology.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
