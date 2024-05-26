import React, { useState } from "react";
import { GiClothes, GiLoincloth } from "react-icons/gi";
import { PiDressLight } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const Price = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <div id="pricing" ref={ref} className="h-fit bg-[#EEEBE5]">
      <div className="flex flex-col justify-center items-center py-32 gap-4">
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-4xl text-[#1A1E32]  tracking-[0.7rem] uppercase"
        >
          Affordable prices
        </motion.span>
        <motion.span
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-red-600 font-bold"
        >
          How much does it costs
        </motion.span>
        <div className="flex flex-wrap mt-10 items-center justify-center gap-3">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white relative self-center px-20 py-16"
          >
            <span className="text-[100px] opacity-5 self-center text-center justify-center">
              <PiDressLight />
            </span>
            <div className="absolute flex flex-col items-center  bottom-[70px] right-10 ">
              <span className="font-bold text-lg">From $1.50 Per dress</span>
              <span className="text-gray-400">shirt services</span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white relative px-20 py-16"
          >
            <span className="text-[100px] opacity-5 self-center text-center justify-center">
              <GiClothes className=" " />
            </span>
            <div className="absolute  flex flex-col  items-center gap-3    bottom-[60px] right-14 ">
              <div className="flex flex-col items-center">
                <span className="font-bold text-lg">From $2 Per item</span>
                <span className="text-gray-400">dry cleaning</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white relative px-20 py-16"
          >
            <span className="text-[100px] opacity-5 self-center text-center justify-center">
              <TbMoneybag />
            </span>
            <div className="absolute flex flex-col items-center  bottom-[70px] right-14 ">
              <span className="font-bold text-lg">$2.50 Per Pound</span>
              <span className="text-gray-400">laundry service</span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white relative px-20 py-16"
          >
            <span className="text-[100px] opacity-5 self-center text-center justify-center">
              <GiLoincloth />
            </span>
            <div className="absolute flex flex-col items-center  bottom-[70px] right-14 ">
              <span className="font-bold text-lg">From $1.99 Per Suit</span>
              <span className="text-gray-400">cooperate laundry</span>
            </div>
          </motion.div>
        </div>
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 1.3 }}
          className="px-6 py-5 bg-red-700 text-white mt-10 font-bold "
        >
          View Full Prices List
        </motion.span>
      </div>
    </div>
  );
};

export default Price;
