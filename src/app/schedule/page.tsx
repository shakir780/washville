"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import HeroBg from "../../assets/Hero.jpg";
import { GrMapLocation } from "react-icons/gr";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const page = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div ref={ref} className="h-fit pb-10">
      <Navbar />

      <div
        className="h-[25vh] relative"
        style={{
          backgroundColor: "yellow",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBg.src})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-4 text-white justify-center py-10 items-center">
          <motion.span
            ref={ref}
            initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }}
            className="uppercase text-2xl text-white  tracking-[0.8rem] "
          >
            Contacts
          </motion.span>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>Home</span> / <span>Contacts</span>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4  items-start md:items-center px-8 md:px-0 max-w-5xl mx-auto pt-10 justify-around">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-7 ">
            <motion.div
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-6 "
            >
              <span className="text-4xl text-blue-700">
                <GrMapLocation />
              </span>
              <div className="flex flex-col gap-3">
                <span className="text-md font-bold text-[#1A1E32]">
                  Address:
                </span>
                <span className="text-sm opacity-70">
                  123, New Lenox, Chicago, IL 60606
                </span>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-6"
            >
              <span className="text-4xl text-blue-700">
                <BsFillTelephoneForwardFill />
              </span>
              <div className="flex flex-col gap-3">
                <span className="text-md font-bold text-[#1A1E32]">Phone:</span>
                <span className="text-sm opacity-70">800-123-247</span>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-6"
            >
              <span className="text-4xl text-blue-700">
                <CiMail />
              </span>
              <div className="flex flex-col gap-3">
                <span className="text-md font-bold text-[#1A1E32]">Email:</span>
                <span className="text-sm opacity-70">Info@Washville.com</span>
              </div>
            </motion.div>
          </div>
        </div>
        <form>
          <div className="flex flex-col gap-6">
            <motion.input
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.3 }}
              required
              type="text"
              className="h-[50px] bg-gray-200 w-[600px] px-4"
              placeholder="Name"
            />
            <motion.input
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.5 }}
              required
              type="text"
              className="h-[50px] bg-gray-200 w-[600px] px-4"
              placeholder="Email"
            />
            <motion.textarea
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.7 }}
              required
              className="h-[150px] p-4 bg-gray-200 w-[600px]"
              placeholder="Message"
            />
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-2 justify-center items-center"
            >
              <input type="checkbox" name="" id="" />
              <span className="text-gray-400 text-sm">
                I agree that my submitted data is being collected and stored.
              </span>
            </motion.div>

            <motion.span
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 1 }}
              className="py-4 px-6 text-white font-semibold hover:opacity-80 cursor-pointer bg-gray-500 w-fit self-center"
            >
              Send Message
            </motion.span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
