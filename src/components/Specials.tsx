import Image from "next/image";
import React from "react";
import SpecialsBg from "../assets/specialsbg.jpg";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const Specials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="h-fit ">
      <div className="flex lg:flex-row-reverse flex-col ">
        <Image
          src={SpecialsBg}
          alt="disvovermorebg"
          width={840}
          className="object-cover"
        />
        <div className="bg-blue-500 pb-10 w-full lg:h-screen relative ">
          <div className="flex pt-14 flex-col  gap-10 justify-center items-center">
            <motion.span
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-24 text-[#1A1E32] font-bold text-4xl lg:text-4xl text-center leading-[50px] "
            >
              Enjoy our 20lb <br className="hidden lg:block" />
              washers for only <br className="hidden lg:block" /> $1.99
            </motion.span>
            <motion.span
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.4 }}
              className="uppercase text-white text-5xl font-extrabold"
            >
              Specials
            </motion.span>
            <motion.span
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.6 }}
              className="self-center  text-white  font-semibold justify-center bg-[#FFCD30] px-10 py-[14px]"
            >
              Discover More
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
