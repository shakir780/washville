"use client";
import Image from "next/image";
import { BsClockHistory } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/dryCleaningLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <div className="relative">
      <div className="bg-white  lg:max-w-5xl lg:mx-auto pt-10 ">
        <div className="flex md:flex-row relative flex-col justify-between px-2 lg:px-0 items-center">
          <div className="relative items-center self-center w-[100px] mr-28 lg:mr-0">
            <Image src={Logo} alt="logo w-full" />
            <div className="flex flex-col absolute top-7 left-20">
              <span className=" text-lg md:text-3xl  font-bold">
                Wash<span className="text-blue-600">ville</span>
              </span>
              <span className="text-[8px] font-bold opacity-60 uppercase">
                laundry City
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl lg:text-3xl text-blue-600">
                <BsClockHistory />
              </span>
              <div className="flex-col flex">
                <span className="text-blue-600">Open Hours</span>
                <span className="text-black font-bold text-sm">
                  8.00-18.00 Mon-Sat
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl lg:text-3xl text-blue-600">
                <FaPhoneAlt />
              </span>
              <div className="flex-col flex">
                <span className="text-blue-600">Contact us</span>
                <span className="text-black font-bold text-sm">
                  0 (800) 127-578
                </span>
              </div>
            </div>

            <a
              href="/schedule"
              className="bg-red-600 md:ml-4 cursor-pointer hover:opacity-95 text-white px-5 py-5"
            >
              <span className="font-bold">Schedule A Pickup</span>
            </a>
          </div>
          <div
            onClick={() => setOpenMobileNav(true)}
            className="absolute cursor-pointer md:hidden inline-block right-8 top-0"
          >
            <span className="text-2xl">
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
        <hr className="mt-6" />
        <div className="md:flex gap-2 justify-evenly w-full py-5 hidden">
          <a href={"/"} className="cursor-pointer">
            Home
          </a>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Services
          </Link>
          <Link to="pricing" className="cursor-pointer">
            Pricing
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <a href="schedule" className="cursor-pointer">
            Contacts
          </a>
        </div>
      </div>
      {openMobileNav && <MobileNav setOpenMobileNav={setOpenMobileNav} />}
    </div>
  );
};

export default Navbar;
