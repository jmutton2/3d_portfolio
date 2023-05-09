import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { close } from "../assets";

import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  active_site_link,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={() => {
          setShowModal(true);
          console.log(showModal);
        }}
      >
        <Tilt className="bg-primary_dark p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-black text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>

      <div
        className="fixed top-0 left-0 right-0 text-black z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full h-full bg-secondary bg-opacity-50"
        hidden={!showModal}
        onClick={() => {
          setShowModal(false);
          console.log(showModal);
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div
            class="relative w-full max-w-2xl max-h-full flex flex-col justify-center"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div class="relative flex flex-col justify-center bg-secondary rounded-lg shadow ">
              <div class="flex items-start justify-between p-4 border-b rounded-t border-black">
                <h3 class="text-xl font-semibold text-gray-900 text-black">
                  {name}
                </h3>
                <button
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <img src={close}></img>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-black">
                  {description}
                </p>
              </div>
              <div class="flex items-center p-6 space-x-2 border-t rounded-b border-black">
                {source_code_link != "" ? (
                  <div className="px-2">
                    <button class="text-black bg-primary_dark focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-secondary text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 hover:bg-tertiary">
                      <a href={active_site_link} target="_blank">
                        Live Site
                      </a>
                    </button>
                    <button class="text-black bg-primary_dark hover:bg-primaryfocus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-secondary text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 hover:bg-tertiary">
                      <a href={source_code_link} target="_blank">
                        Github
                      </a>
                    </button>
                  </div>
                ) : (
                  <div>Restricted Access</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
