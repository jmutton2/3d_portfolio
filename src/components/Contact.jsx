import { useState, useRef, useEffect } from "react";
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
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    let resp = await emailjs
      .send(
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
      )
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
          setMessageSent(true);
        } else {
          alert("An error has occured...");
        }
      });
  }

  useEffect(() => {
    setTimeout(() => setMessageSent(false), 5000);
  }, [messageSent]);

  return (
    <>
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
      <div hidden={!messageSent}>
        <div className="flex flex-row justify-evenly w-full">
          <div
            id="toast-simple"
            class=" fixed flex-row bottom-0 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
            role="alert"
          >
            <svg
              class="w-5 h-5 text-blue-600 dark:text-blue-500"
              focusable="false"
              data-prefix="fas"
              data-icon="paper-plane"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
              ></path>
            </svg>
            <div class="pl-4 text-sm font-normal">
              Message sent successfully.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
