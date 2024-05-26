import Image from "next/image";
import Fs1 from "../assets/Fs1.jpg";
import Fs2 from "../assets/Fs2.jpg";
import Fs3 from "../assets/Fs3.jpg";
import { MdNavigateNext } from "react-icons/md";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const FeaturedServices = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div id="services" ref={ref} className="h-fit bg-[#EEEBE5]">
      <div className="flex flex-col justify-center items-center py-20">
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-4xl uppercase tracking-[0.7rem]"
        >
          Featured Services
        </motion.span>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-[300px] items-center flex flex-col   h-fit bg-[#F7F7F7]"
          >
            <Image src={Fs1} alt="fs1" className="p-8 w-full" />
            <div className="flex flex-col gap-3  px-10 py-4 text-center">
              <span className="font-bold  tracking-wide hover:text-blue-400 cursor-pointer transition-all text-lg">
                We Deliver in 24 hours or 48 hours
              </span>
              <span className="text-xs leading-6 opacity-70">
                Experience convenience and reliability with our expert dry
                cleaning and laundry services. Whether you need it in a hurry or
                prefer a more flexible timeline.
              </span>
            </div>
            <div className="flex items-center  py-5 font-bold  text-red-600">
              <span className="text-xs">Read More</span>
              <span className="">
                <MdNavigateNext />
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[300px] items-center flex flex-col   h-fit bg-[#F7F7F7]"
          >
            <Image src={Fs2} alt="fs1" className="p-8 w-full" />
            <div className="flex flex-col gap-3  px-10 py-4 text-center">
              <span className="font-bold  tracking-wide hover:text-blue-400 cursor-pointer transition-all text-lg">
                We Offer Flexible Price Range
              </span>
              <span className="text-xs leading-6 opacity-70">
                Discover affordability tailored to you. Our services come with a
                flexible price range, ensuring quality fits your budget
                effortlessly.
              </span>
            </div>
            <div className="flex items-center  py-5 font-bold  text-red-600">
              <span className="text-xs">Read More</span>
              <span className="">
                <MdNavigateNext />
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-[300px] items-center flex flex-col   h-fit bg-[#F7F7F7]"
          >
            <Image src={Fs3} alt="fs1" className="p-8 w-full" />
            <div className="flex flex-col gap-3  px-10 py-4 text-center">
              <span className="font-bold  tracking-wide hover:text-blue-400 cursor-pointer transition-all text-lg">
                Helpful & Friendly Attendants
              </span>
              <span className="text-xs leading-6 opacity-70">
                Meet our friendly team: always ready to assist with a smile.
                Experience helpful service at every visit - because your
                satisfaction is our priority.
              </span>
            </div>
            <div className="flex items-center  py-5 font-bold  text-red-600">
              <span className="text-xs">Read More</span>
              <span className="">
                <MdNavigateNext />
              </span>
            </div>
          </motion.div>
        </div>
        <span className="bg-[#1A1E32] px-6 py-4 mt-10 text-white font-bold">
          More About Services
        </span>
      </div>
    </div>
  );
};

export default FeaturedServices;
