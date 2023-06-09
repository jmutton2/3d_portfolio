import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute insert-0 top-[120px] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Purple circle with gradient line */}
          <div className="w-5 h-5 rounded-full bg-[#eac4d5]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          {/* Could add an emoji here */}
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#809bce]">Jacob</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            A software engineer with a passion for empowering others!
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
