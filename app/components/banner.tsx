import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import banner from "@/app/images/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#53389E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block text-purple-200 text-sm sm:text-base font-medium tracking-wide uppercase">
              Super. Simple. Banking.
            </span>
          </div>

          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block">Banking technology</span>
            <span className="block">that has your back.</span>
          </h1>

          <p className="text-md sm:text-lg md:text-2xl text-purple-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Simple, transparent banking. No hidden fees and free overdrafts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="flex items-center justify-center space-x-3 bg-white text-[#344054] hover:bg-purple-50 transition-all duration-200 font-semibold px-6 py-3 rounded-lg  transform hover:-translate-y-0.5 w-full sm:w-auto">
              <PlayCircleIcon className="w-6 h-6" />
              <span>Demo</span>
            </button>

            <button className="bg-[#7F56D9] hover:bg-[#53389E] text-white transition-all duration-200 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="relative w-full max-w-5xl">
          <Image
            src={banner}
            alt="Banking Dashboard Interface"
            width={1200}
            height={600}
            className="w-full h-auto object-cover "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
