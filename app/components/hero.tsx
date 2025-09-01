import React from "react";
import Image from "next/image";
import hero from "@/app/images/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-[#53389E] w-11/12 mx-auto rounded-2xl mb-8">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-1 lg:order-1 text-white">
            <div className="px-10 md:px-7  lg:px-9 py-4">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight mb-6">
                Give us a shot
              </h2>

              <p className="text-sm sm:text-sm text-purple-100 mb-8 leading-relaxed">
                Join over 4,000+ startups already growing with Untitled.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-700 hover:bg-gray-100 transition-all duration-200 font-semibold px-4 py-3 rounded-lg">
                  Learn more
                </button>

                <button className="bg-[#7F56D9] hover:bg-[#6941C6] text-white transition-all duration-200 font-semibold px-4 py-3 rounded-lg">
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative w-ful h-64 sm:h-80 lg:h-64  overflow-hidden">
              <Image
                src={hero}
                alt="Team collaboration in modern office"
                fill
                className="object-cover h-full w-full rounded-tr-2xl rounded-br-2xl"
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
