import React, { useRef } from "react";
import HowItWorksBg from "../assets/worksBg.jpg";
import { RiTruckFill } from "react-icons/ri";
import { GiCoffeeCup, GiLoincloth, GiWashingMachine } from "react-icons/gi";
import { useInView, motion } from "framer-motion";
const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div
      className="h-fit relative   "
      style={{
        backgroundColor: "yellow",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ),url(${HowItWorksBg.src})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-start px-4 md:items-center md:pl-[400px] xl:pl-[600px] gap-4 py-20">
        <motion.span
          ref={ref}
          initial={{ x: -50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-red-600 font-bold  mr-[100px]"
        >
          How It Works
        </motion.span>
        <motion.span
          ref={ref}
          initial={{ x: -50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-[350px] text-xl mr-[100px] text-[#1A1E32] font-semibold leading-10"
        >
          Traditionally, the cleaning process was carried out at centralized
          factories. High street cleaners' shops received garments from
          customers.
        </motion.span>
        <div className="flex md:flex-row flex-col justify-center md:justify-start  gap-10 self-center">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
          >
            <div className="flex  flex-col items-center gap-6">
              <div className="bg-gray-300 w-fit  rounded-full p-4 xl:p-8">
                <span className="text-3xl xl:text-4xl">
                  <RiTruckFill />
                </span>
              </div>

              <span className="text-xs font-bold capitalize  text-center">
                {" "}
                Choose Any Time For <br /> Delivery
              </span>
            </div>
            <span className="absolute bottom-8 md:bottom-[5rem] xl:bottom-14 left-10 md:left-0 px-2 py-1 text-white font-bold rounded-full bg-blue-500 ">
              01
            </span>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative"
          >
            <div className="flex  flex-col items-center gap-6">
              <div className="bg-gray-300 w-fit  rounded-full p-4 xl:p-8">
                <span className="text-3xl xl:text-4xl">
                  <GiWashingMachine />
                </span>
              </div>
              <span className="text-xs font-bold capitalize  text-center">
                {" "}
                We can wash and <br /> dry dirty laundry
              </span>
            </div>
            <span className="absolute bottom-8 md:bottom-[5rem] xl:bottom-14 left-10 md:left-0 px-2 py-1 text-white font-bold rounded-full bg-blue-500 ">
              02
            </span>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 1 }}
            className="relative"
          >
            <div className="flex  flex-col items-center gap-8">
              <div className="bg-gray-300 w-fit gap-4 rounded-full p-4 xl:p-8">
                <span className="text-3xl xl:text-4xl">
                  <GiLoincloth />
                </span>
              </div>
              <span className="text-xs font-bold capitalize  text-center">
                {" "}
                we return your clean <br /> laundry
              </span>
            </div>
            <span className="absolute bottom-8 md:bottom-[5rem] xl:bottom-14 left-10 md:left-0 px-2 py-1 text-white font-bold rounded-full bg-blue-500 ">
              03
            </span>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 1.2 }}
            className="relative"
          >
            <div className="flex  flex-col items-center gap-8">
              <div className="bg-gray-300 w-fit gap-4 rounded-full p-4 xl:p-8">
                <span className="text-3xl xl:text-4xl">
                  <GiCoffeeCup />
                </span>
              </div>
              <span className="text-xs  font-bold capitalize  text-center">
                {" "}
                Relax and enjoy
                <br /> clean clothes
              </span>
            </div>
            <span className="absolute bottom-8 md:bottom-[5rem] xl:bottom-14 left-10 md:left-0 px-2 py-1 text-white font-bold rounded-full bg-blue-500 ">
              04
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
