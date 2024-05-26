import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { TiSocialFacebook } from "react-icons/ti";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const NewsLetterSub = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="bg-blue-300 h-fit">
      <div className="flex md:flex-row flex-col justify-around py-20 gap-4 items-center ">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 items-center "
        >
          <input
            className=" w-[240px] md:w-[340px] h-14 outline-none px-8"
            placeholder="Newsletter Subscribe"
          />
          <span className="py-4 px-8 bg-yellow-500 hover:opacity-80 cursor-pointer text-white font-bold">
            Sign up
          </span>
        </motion.div>
        <div className="flex text-xl gap-3 items-center justify-around ">
          <motion.span
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white hover:bg-red-400 hover:text-white cursor-pointer animation px-3 py-3 rounded-full"
          >
            <FaXTwitter />
          </motion.span>
          <motion.span
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white hover:bg-red-400 hover:text-white cursor-pointer animation px-3 py-3 rounded-full"
          >
            <FaInstagram />
          </motion.span>
          <motion.span
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white hover:bg-red-400 hover:text-white cursor-pointer animation px-3 py-3 rounded-full"
          >
            <TiSocialFacebook />
          </motion.span>
          <motion.span
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white hover:bg-red-400 hover:text-white cursor-pointer animation px-3 py-3 rounded-full"
          >
            <GrLinkedin />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSub;
