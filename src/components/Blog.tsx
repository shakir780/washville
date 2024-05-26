import Image from "next/image";
import Fs1 from "../assets/post-3-1-370x370.jpg";
import Fs2 from "../assets/post-4-370x370.jpg";
import Fs3 from "../assets/post-5-370x370.jpg";
import { MdNavigateNext } from "react-icons/md";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div ref={ref} className="h-fit bg-[#EEEBE5]">
      <div className="flex flex-col justify-center items-center py-20">
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-4xl uppercase tracking-[0.7rem]"
        >
          FROM THE BLOG
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
                Ironing Techniques for Shirts and Pantsdrying
              </span>
              <span className="text-xs">4 SEP 2016</span>
              <span className="text-xs leading-6 opacity-70">
                Ironing is often overlooked in our laundry routine, but it plays
                a crucial role in maintaining a polished and professional
                appearance.
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-[300px] items-center flex flex-col   h-fit bg-[#F7F7F7]"
          >
            <Image src={Fs2} alt="fs1" className="p-8 w-full" />
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col gap-3  px-10 py-4 text-center"
            >
              <span className="font-bold  tracking-wide hover:text-blue-400 cursor-pointer transition-all text-lg">
                5 Ways to Free Up Your Time
              </span>
              <span className="text-xs">4 SEP 2016</span>
              <span className="text-xs leading-6 opacity-70">
                In today's fast-paced world, finding time for the things that
                matter most can feel like a constant struggle. However, by
                implementing a few simple strategies.
              </span>
            </motion.div>
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
            transition={{ duration: 0.5, delay: 1 }}
            className="w-[300px] items-center flex flex-col   h-fit bg-[#F7F7F7]"
          >
            <Image src={Fs3} alt="fs1" className="p-8 w-full" />
            <div className="flex flex-col gap-3  px-10 py-4 text-center">
              <span className="font-bold  tracking-wide hover:text-blue-400 cursor-pointer transition-all text-lg">
                Tips for Working with Colored Laundry
              </span>
              <span className="text-xs">3 AUG 2019</span>

              <span className="text-xs leading-6 opacity-70">
                Colored laundry adds vibrancy and personality to our wardrobes,
                but it also requires special care to maintain its brightness and
                integrity over time.
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
        <motion.span
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-[#1A1E32] px-6 py-4 mt-10 text-white font-bold"
        >
          More Articles
        </motion.span>
      </div>
    </div>
  );
};

export default Blog;
