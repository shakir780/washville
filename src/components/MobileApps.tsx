import React from "react";
import AppBg from "../assets/bg_apps.jpg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const MobileApps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div
      className="h-[500px] relative   "
      style={{
        backgroundColor: "yellow",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ),url(${AppBg.src})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-8  pt-32 px-5 md:px-10 lg:px-20">
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-red-500 font-bold "
        >
          Dont miss our new application
        </motion.span>
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.4 }}
          className=" text-xl md:text-3xl lg:text-4xl w-[450px]  font-bold text-[#1A1E32]"
        >
          Get Our Mobile Apps for <br /> Easy and Convenient Usage
        </motion.span>
        <div className="flex lg:flex-row flex-col gap-4  lg:gap-3 w-fit lg:items-center">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center bg-[#1A1E32] px-10 py-4 mt-10 text-white font-bold"
          >
            <span className="text-3xl">
              <IoLogoGooglePlaystore />
            </span>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase">Download from</span>
              <span>Google Play</span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center bg-[#1A1E32] px-10 py-4 lg:mt-10 text-white font-bold"
          >
            <span className="text-3xl">
              <FaApple />
            </span>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase">Download from</span>
              <span>Apple Store</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
