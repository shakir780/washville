import React from "react";
import Video from "../assets/video/video.mp4";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { GiCurledLeaf, GiTechnoHeart } from "react-icons/gi";
import { PiClockCountdownDuotone } from "react-icons/pi";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Promise = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div className="h-fit">
      <div className="flex flex-col gap-6  py-20 justify-center items-center">
        <motion.span
          ref={ref}
          initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="uppercase lg:text-4xl tracking-[1rem] text-[#1A1E32]"
        >
          Our Promise
        </motion.span>

        <div className="flex lg:flex-row flex-col justify-center max-w-5xl px-10 mx-auto gap-8 pt-12">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className=" relative flex flex-col"
          >
            <video ref={vidRef} loop src={Video} />

            <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded shadow">
              <div
                className="w-[70px] h-[70px] rounded-[50%] border hover:bg-blue-500 border-blue-700 cursor-pointer justify-center items-center flex"
                onClick={() => {
                  setPlayVideo(!playVideo);
                  if (playVideo) {
                    vidRef?.current?.pause();
                  } else {
                    vidRef?.current?.play();
                  }
                }}
              >
                {playVideo ? (
                  <BsPauseFill color="fff" fontSize={30} />
                ) : (
                  <BsFillPlayFill color="fff" fontSize={30} />
                )}
              </div>
            </div>
            <div className="w-full h-fit  bg-[#F7F7F7]">
              <span className=" px-10 lg:px-20 flex items-center justify-center py-8 lg:text-lg text-center">
                Discover why thousands of people trust us to take care of their
                clothes for them!
              </span>
            </div>
          </motion.div>
          <div className="w-full flex flex-col gap-[80px]">
            <div className="flex items-center  gap-6">
              <motion.span
                ref={ref}
                initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-7xl text-blue-600"
              >
                <GiTechnoHeart />
              </motion.span>
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col gap-3 "
              >
                <span className="font-bold">100% Happiness Guaranteed</span>
                <span className="">
                  if you’re not completely satisfied with the wash or dry
                  cleaning, we will re-wash your clothes for free!
                </span>
              </motion.div>
            </div>

            <div className="flex items-center  gap-6">
              <motion.span
                ref={ref}
                initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 1 }}
                className="text-7xl text-blue-600"
              >
                <PiClockCountdownDuotone />
              </motion.span>
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-col gap-3 "
              >
                <span className="font-bold">Fast & High Quality</span>
                <span className="">
                  We work hard to make sure that the clothes you get back are
                  spotless and ready for action.
                </span>
              </motion.div>
            </div>

            <div className="flex items-center  gap-6">
              <motion.span
                ref={ref}
                initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-7xl text-blue-600"
              >
                <GiCurledLeaf />
              </motion.span>
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex flex-col gap-3 "
              >
                <span className="font-bold">Cleaner & Greener</span>
                <span className="">
                  We work with the environment in mind. No harsh chemicals. Eco
                  approved products only.
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promise;
