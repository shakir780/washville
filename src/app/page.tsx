"use client";
import Blog from "@/components/Blog";
import Customers from "@/components/Customers";
import DiscoverMore from "@/components/DiscoverMore";
import Featured from "@/components/Featured";
import FeaturedServices from "@/components/FeaturedServcies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MobileApps from "@/components/MobileApps";
import Navbar from "@/components/Navbar";
import NewsLetterSub from "@/components/NewsLetterSub";
import Price from "@/components/Price";
import Promise from "@/components/Promise";
import { Services } from "@/components/Services";
import Specials from "@/components/Specials";

export default function page() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <HowItWorks />
      <FeaturedServices />
      <MobileApps />
      <Price />
      <DiscoverMore />
      <Customers />
      <Promise />
      <Specials />
      <Blog />
      <NewsLetterSub />
      <Footer />
    </div>
  );
}
