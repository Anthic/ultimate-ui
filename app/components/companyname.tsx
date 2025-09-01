import React from "react";
import Image from "next/image";
import logo1 from "@/app/images/logo1.png";
import logo2 from "@/app/images/logo2.png";
import logo3 from "@/app/images/logo3.png";
import logo4 from "@/app/images/logo4.png";
import logo5 from "@/app/images/logo5.png";
import logo6 from "@/app/images/logo6.png";
const CompanyName = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-md font-[#475467] text-center py-3">
        Join 4,000+ companies already growing
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#F9FAFB]">
            <Image
              src={logo1}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#101828]">Boltshift</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#F9FAFB]">
            <Image
              src={logo2}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#101828]">Lightbox</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#F9FAFB]">
            <Image
              src={logo3}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#101828]">FeatherDev</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#F9FAFB]">
            <Image
              src={logo4}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#101828]">Spherule</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#F9FAFB]">
            <Image
              src={logo5}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#101828]">GlobalBang</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#F9FAFB]">
            <Image
              src={logo6}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#101828]">Nietzche</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyName;
