import { Swiper, SwiperSlide } from "swiper/react";
import HeroBg from "../assets/Hero.jpg";
import HeroBg2 from "../assets/HeroBg2.jpg";
import HeroBg3 from "../assets/HeroBg3.jpg";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Hero = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const ref = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };
  console.log(currentSlide);
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={1300}
      onSlideChange={handleSlideChange}
    >
      <SwiperSlide>
        <div
          className="h-[500px] relative"
          style={{
            backgroundColor: "yellow",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBg.src})`,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={
                currentSlide === 0
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <div className="flex flex-col gap-6">
                <span className="text-4xl md:text-6xl text-white font-bold leading-[50px]">
                  Let us handle your <br /> Dry Cleaning & Laundry
                </span>
                <span className="text-white px-4 text-xl">
                  Washville is a service you can trust. Our attendants are
                  highly <br /> trained and your satisfaction is always
                  guaranteed.
                </span>
              </div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  currentSlide === 0
                    ? { y: 0, opacity: 1 }
                    : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-700 mt-20 px-12 py-4 w-fit"
              >
                <span className="text-white font-bold text-lg">Learn More</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[500px] relative"
          style={{
            backgroundColor: "yellow",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBg2.src})`,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={
                currentSlide === 1
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <span className="text-4xl md:text-6xl text-white font-bold leading-[65px]">
                Wash, Dry & Fold
              </span>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  currentSlide === 1
                    ? { y: 0, opacity: 1 }
                    : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-700 mt-20 px-12 py-4 w-fit"
              >
                <span className="text-white font-bold text-lg">Learn More</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[500px] relative"
          style={{
            backgroundColor: "yellow",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBg3.src})`,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={
                currentSlide === 2
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <span className="text-4xl md:text-6xl text-white font-bold leading-[65px]">
                Laundry and Dry <br />
                Cleaning services
              </span>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  currentSlide === 2
                    ? { y: 0, opacity: 1 }
                    : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-700 mt-20 px-12 py-4 w-fit"
              >
                <span className="text-white font-bold text-lg">Learn More</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
