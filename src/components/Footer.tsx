import Image from "next/image";
import {
  CiFacebook,
  CiInstagram,
  CiLocationOn,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFax,
  FaGoogle,
  FaLocationDot,
} from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import Logo from "../assets/dryCleaningLogo.png";
import { AiTwotoneMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#1A1E32] h-fit pb-16">
      <div className="grid    grid-cols-1  md:grid-cols-4  pt-16 px-16 md:px-4 gap-2  ">
        <div className="relative items-center self-center w-[100px] mr-28 lg:mr-0">
          <Image src={Logo} alt="logo w-full" />
          <div className="flex flex-col absolute top-7 left-20">
            <span className=" text-lg md:text-xl  font-bold text-white">
              Wash<span className="text-blue-600">ville</span>
            </span>
            <span className="text-[8px] font-bold text-gray-400  uppercase">
              laundry City
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-md uppercase">
              Services
            </span>
            <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
            <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
          </div>
          <div className="flex flex-col mt-6 gap-2 text-sm">
            <li className="text-white">Drop of Laundry</li>
            <li className="text-white">Free Pick-Up and Delivery</li>
            <li className="text-white">Eco-Friendly Products</li>
            <li className="text-white">Fast and High Quality</li>
            <li className="text-white">Self Service and Laundromat</li>
          </div>
        </div>
        <div className="md:pl-8 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-md  uppercase">
              Customer Care
            </span>
            <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
            <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <li className="text-white">Contact us</li>
            <li className="text-white">About Us</li>
            <li className="text-white">News & Articles</li>
            <li className="text-white">Privacy policy</li>
            <li className="text-white">Terms of use</li>
          </div>
        </div>
        <div className="md:pl-8 flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-2xl">
                Call Now for Services! <br /> 444-333-2211
              </span>
              <div className="flex text-blue-500 items-center font-bold gap-3">
                <span className=" text-lg">
                  <MdOutlineMail />
                </span>
                <span>Email Us</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-2xl">
                123, New Lenox <br /> Chicago, IL 60606
              </span>
              <div className="flex text-blue-500 items-center font-bold gap-3">
                <span className=" text-lg">
                  <CiLocationOn />
                </span>
                <span>Get Direction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10  text-gray-400" />
      <div className="py-4 md:px-16 flex flex-col gap-4 md:flex-row justify-between items-center">
        <span className="text-white text-sm px-4 text-center">
          Powered By Washville - DryCleaning © 2024
        </span>
        <div className="flex items-center justify-between gap-3 text-white text-2xl">
          <span>
            <FaCcVisa />
          </span>
          <span>
            <FaCcPaypal />
          </span>
          <span>
            <FaCcMastercard />
          </span>
          <span>
            <FaCcVisa />
          </span>
          <span>
            <FaCcAmex />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
