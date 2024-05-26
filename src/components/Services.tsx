import React, { useRef } from "react";
import { FiTruck } from "react-icons/fi";
import { GiAmpleDress, GiWashingMachine } from "react-icons/gi";
import Image from "next/image";
import ServicesBg from "../assets/Services.jpg";
import { useInView, motion } from "framer-motion";
export const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div id="about" ref={ref} className="h-fit relative ">
      <div className="flex md:flex-row flex-col  ">
        <div className="px-20 flex items-center lg:items-start flex-col  py-10 gap-2 ">
          <motion.span
            ref={ref}
            initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-red-500 font-bold"
          >
            Services you will love
          </motion.span>
          <motion.span
            ref={ref}
            initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className=" w-[300px] lg:w-[600px]"
          >
            Unlike what its name implies, dry cleaning is not actually a 'dry'
            process. Clothes are soaked in a different solvent other than water.
            The solvent used is typically toxic tetrachloroethylene
          </motion.span>
          <div className="flex items-center gap-16 py-4">
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-3xl">
                <FiTruck />
              </span>
              <span className="font-bold text-sm">
                Drop off <br /> Laundry
              </span>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-3xl">
                <GiAmpleDress />
              </span>
              <span className="font-bold text-sm">
                Free Pickup & <br /> Delivery
              </span>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-3xl">
                <GiWashingMachine />
              </span>
              <span className="font-bold text-sm">
                Eco Friendly <br /> Products
              </span>
            </motion.div>
          </div>

          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-red-500 px-4 py-3 w-fit text-white font-semibold mt-5"
          >
            <span>Discover More</span>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src={ServicesBg}
            alt="ServicesBg"
            className="lg:w-[1000px] object-cover h-[500px]"
          />
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
        animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-blue-400 py-10 text-4xl text-center px-4  font-bold text-white"
      >
        <span>
          New customers save $10.00 automatically! All customers save 10% on
          orders over $145.00!
        </span>
      </motion.div>
    </div>
  );
};
