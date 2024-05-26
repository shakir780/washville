import React, { useEffect, useRef, useState } from "react";
import Ft1 from "../assets/feature1.webp";
import Ft2 from "../assets/feature2.webp";
import Ft3 from "../assets/feature3.webp";
import Ft4 from "../assets/feature4.webp";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

const Featured = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <div id="features" ref={ref} className="h-fit bg-[#F7F7F7]  ">
      <div className="py-20 flex  flex-col max-w-5xl mx-auto justify-center items-center">
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-5xl text-[#1A1E32]  font-semibold tracking-widest uppercase"
        >
          Featured Services
        </motion.span>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-8  md:grid-cols-4 gap-[100px] pt-10 ">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-10"
          >
            <Image src={Ft1} alt="ft1" width={150} />
            <div className="flex flex-col gap-4">
              <span className="text-[#1A1E32] text-center font-bold text-sm lg:text-lg hover:text-blue-400 transition-all cursor-pointer">
                Wash & Fold <br />
                Laundry Service
              </span>
              <span className="text-center text-xs w-[300px] md:w-full opacity-80">
                Effortlessly freshen up your wardrobe with our convenient Wash &
                Fold Laundry Service..
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-10"
          >
            <Image src={Ft2} alt="ft2" width={150} />
            <div className="flex flex-col gap-4">
              <span className="text-[#1A1E32]  text-center font-bold text-sm lg:text-lg hover:text-blue-400 transition-all cursor-pointer">
                Commercial <br />
                Laundry Service
              </span>
              <span className="text-center text-xs w-[300px] md:w-full opacity-80">
                Streamline your business operations with our reliable Commercial
                Laundry Service.
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-10"
          >
            <Image src={Ft3} alt="ft3" width={150} />
            <div className="flex flex-col gap-4">
              <span className="text-[#1A1E32]  text-center font-bold text-sm lg:text-lg hover:text-blue-400 transition-all cursor-pointer">
                Eco Friendly <br />
                Dry Cleaning
              </span>
              <span className="text-center text-xs w-[300px] md:w-full opacity-80">
                Experience the difference with our Eco-Friendly Dry Cleaning
                service.
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            <Image src={Ft4} alt="ft4" width={150} />

            <div className="flex flex-col gap-4">
              <span className="text-[#1A1E32] mt-4 text-center font-bold lg:text-lg hover:text-blue-400 transition-all cursor-pointer">
                Self Service <br /> & Laundromat
              </span>
              <span className="text-center text-xs w-[300px] md:w-full opacity-80">
                Take control of your laundry routine with our Self-Service
                Laundromat.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
