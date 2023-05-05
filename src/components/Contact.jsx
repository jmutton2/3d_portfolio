import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { TreeCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_ufevdnd
//service_6p0c7a8
//CBf30yeEgoOc1i8bI

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      "service_6p0c7a8",
      "template_ufevdnd",
      {
        from_name: form.name,
        to_name: "Jacob",
        from_email: form.email,
        to_email: "jacobpengu@gmail.com",
        message: form.message,
      },
      "CBf30yeEgoOc1i8bI"
    );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-primary_dark p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}> Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black font-medium ab-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="outlined-none focus:outline-none border  hover:border-pink-600 focus:border-pink-600 bg-primary py-4 px-6 placeholder:text-black text-black rounded-lg font-medium "
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium ab-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="outlined-none focus:outline-none border  hover:border-pink-600 focus:border-pink-600 bg-primary py-4 px-6 placeholder:text-black text-black rounded-lg font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium ab-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="outlined-none focus:outline-none border hover:border-pink-600 focus:border-pink-600 bg-primary bg-primary py-4 px-6 placeholder:text-black text-black rounded-lg font-medium"
            ></textarea>
          </label>
          <button
            className="outlined-none focus:outline-none border  hover:border-pink-600 focus:border-pink-600 bg-tertiary py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-secondary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <TreeCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
