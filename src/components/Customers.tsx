import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Customer1 from "../assets/customer1.jpg";
import Customer2 from "../assets/customer2.jpg";
import Customer3 from "../assets/customer3.jpg";
import Customer4 from "../assets/customer4.jpg";
import Customer5 from "../assets/customer5.jpg";
import Customer6 from "../assets/customer6.jpg";
import Customer7 from "../assets/customer7.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useInView, motion } from "framer-motion";
const testimonials = [
  {
    imageSrc: Customer1,
    name: "Letitia Harold",
    role: "Housekeeper",
    text: "“It matters when you can trust completely and get the best possible result. Your service is always immediate and impeccable.”",
  },
  {
    imageSrc: Customer2,
    name: "John Doe",
    role: "Teacher",
    text: "“Excellent service with a smile. My clothes always look brand new after every visit.”",
  },
  {
    imageSrc: Customer3,
    name: "Jane Smith",
    role: "Nurse",
    text: "“Reliable and efficient. The best dry cleaning service in town!”",
  },
  {
    imageSrc: Customer4,

    name: "Michael Brown",
    role: "Engineer",
    text: "“High-quality service and friendly staff. I highly recommend them!”",
  },
  {
    imageSrc: Customer5,

    name: "Emily Davis",
    role: "Designer",
    text: "“Professional and timely service. They always exceed my expectations.”",
  },
  {
    imageSrc: Customer6,

    name: "David Wilson",
    role: "Chef",
    text: "“Great value for money. My suits are always perfectly cleaned.”",
  },
  {
    imageSrc: Customer7,
    name: "Sophia Martinez",
    role: "Entrepreneur",
    text: "“The best dry cleaning experience I have ever had. They really care about their customers.”",
  },
];
interface TestimonialProps {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  text: string;
}
const Testimonial = ({ imageSrc, name, role, text }: TestimonialProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <motion.div
      id="testimonials"
      ref={ref}
      initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
      animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white w-[300px] flex flex-col h-[300px] shadow-lg rounded-lg"
    >
      <div className="flex px-2 mr-20 justify-center gap-4 py-6">
        <Image
          src={imageSrc}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <span className="text-red-600 font-semibold">{name}</span>
          <span className="uppercase text-gray-400 text-xs">{role}</span>
        </div>
      </div>
      <p className="px-4 leading-[2rem] opacity-90">{text}</p>
    </motion.div>
  );
};

const Customers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<any>(null);
  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesPerView based on screen width
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1000) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial slidesPerView
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
      animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-fit pb-10 bg-[#EEEBE5]"
    >
      <div className="flex justify-center items-center py-14 ">
        <span className="lg:text-4xl tracking-[0.7rem] text-center uppercase ">
          Join Thousands <br /> Happy Customers
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`flex    ${
            slidesPerView < 3 ? "max-w-2xl" : "max-w-5xl"
          } ${
            slidesPerView < 2 && "px-[52px]"
          } mx-auto  gap-4 justify-center items-center`}
        >
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            navigation={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonial
                  imageSrc={testimonial.imageSrc}
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-2 text-3xl pt-10 items-center">
          <span
            onClick={goPrev}
            className="cursor-pointer hover:opacity-40 transition-all"
          >
            <CiCircleChevLeft />
          </span>
          <span
            onClick={goNext}
            className="cursor-pointer hover:opacity-40 transition-all"
          >
            <CiCircleChevRight />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Customers;
