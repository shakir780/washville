import Image from "next/image";
import React from "react";
import DiscoverMoreBg from "../assets/oli-woodman-f4jsI88K7ds-unsplash.jpg";
import DiscoverMorePics from "../assets/image_call.webp";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const DiscoverMore = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="h-fit">
      <div className="flex lg:flex-row flex-col ">
        <Image
          src={DiscoverMoreBg}
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
              className="pt-24 font-bold text-3xl lg:text-4xl text-center leading-[50px] "
            >
              We Also <br className="hidden lg-[inline-block]" /> Offer Self
              <br className="hidden lg-[inline-block]" /> Service
            </motion.span>
            <motion.span
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.4 }}
              className="uppercase text-white text-5xl font-extrabold"
            >
              laundromat
            </motion.span>
            <motion.span
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image src={DiscoverMorePics} alt="DiscoverMorePics" />
            </motion.span>
            <motion.span
              ref={ref}
              initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.8 }}
              className="self-center  text-white  font-semibold justify-center bg-[#FFCD30] px-10 py-[14px]"
            >
              Discover More
            </motion.span>
          </div>
          <div className="flex  absolute top-4 right-6 items-center flex-col justify-center w-24 h-24 rounded-full bg-[#FFCD30] shadow-md text-center font-sans text-md text-white font-bold">
            <span className="block w-full">from only</span>
            <span className="block w-full">$4.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
