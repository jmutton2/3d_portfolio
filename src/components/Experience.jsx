import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return experience.title != "" ? (
    <VerticalTimelineElement
      contentStyle={{ background: "#D0C1B3", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid #D0C1B3" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p className="text-black text-[16px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className="text-black-100 text-[10px] pl-1 tracking-wider">
          {experience.text}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => {
            return (
              <li
                key={`experience-${index}`}
                className="text-black-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  ) : (
    <VerticalTimelineElement
      iconStyle={{ background: experience.iconBg, color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    ></VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={"black"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
