import Image from "next/image";
import Logo from "../assets/dryCleaningLogo.png";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
interface MobileNavProps {
  setOpenMobileNav: (isOpen: boolean) => void;
}

const MobileNav = ({ setOpenMobileNav }: MobileNavProps) => {
  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;

      if (newWidth > 769) {
        setOpenMobileNav(false);
      }
    }

    // Attach the resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Detach the resize event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures that this effect only runs once after the initial render

  return (
    <div className="h-screen absolute z-50 w-full  py-10  top-0 bg-[#1E1D22]">
      <div className="flex relative justify-center items-center flex-col">
        <div className="relative items-center self-center w-[100px] mr-28 lg:mr-0">
          <Image src={Logo} alt="logo w-full" />
          <div className="flex flex-col absolute top-7 left-20">
            <span className="text-3xl  font-bold">
              Wash<span className="text-blue-600">ville</span>
            </span>
            <span className="text-[8px] font-bold text-white opacity-60 uppercase">
              laundry City
            </span>
          </div>
        </div>
        <div className="flex font-semibold text-lg w-full text-center   flex-col  gap-6 uppercase text-white">
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span className="">Home</span>
          </div>
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span>Features</span>
          </div>
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span>About</span>
          </div>
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span>Services</span>
          </div>
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span>Pricing</span>
          </div>
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span>Testimonials</span>
          </div>
          <div className="hover:bg-blue-500 cursor-pointer py-3 ">
            <span>Contacts</span>
          </div>
        </div>
        <div
          onClick={() => setOpenMobileNav(false)}
          className="absolute cursor-pointer md:hidden inline-block text-white right-8 top-0"
        >
          <span className="text-2xl">
            <IoMdClose />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
