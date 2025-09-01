"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#53389E] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center ">
                <Image
                  className="w-full h-full object-cover rounded-xl"
                  src={logo}
                  alt="logo"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Untitled UI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                Home
              </a>

              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors duration-200 font-medium"
                >
                  <span>Products</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                    >
                      Product 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                    >
                      Product 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                    >
                      Product 3
                    </a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors duration-200 font-medium"
                >
                  <span>Resources</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                    >
                      Support
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/pricing"
                className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-purple-200 transition-colors duration-200 font-medium px-4 py-2">
              Log in
            </button>
            <button className="bg-[#7F56D9] text-white hover:bg-[#53389E] transition-colors duration-200 font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-lg">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-200 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#7F56D9] border-t border-purple-600">
          <div className="px-4 py-3 space-y-3">
            <a
              href="/"
              className="block text-white hover:text-purple-200 transition-colors duration-200 font-medium py-2"
            >
              Home
            </a>

            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full text-white hover:text-purple-200 transition-colors duration-200 font-medium py-2"
              >
                <span>Products</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="#"
                    className="block text-purple-200 hover:text-white transition-colors duration-200 py-1"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block text-purple-200 hover:text-white transition-colors duration-200 py-1"
                  >
                    Product 2
                  </a>
                  <a
                    href="#"
                    className="block text-purple-200 hover:text-white transition-colors duration-200 py-1"
                  >
                    Product 3
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full text-white hover:text-purple-200 transition-colors duration-200 font-medium py-2"
              >
                <span>Resources</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="#"
                    className="block text-purple-200 hover:text-white transition-colors duration-200 py-1"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="block text-purple-200 hover:text-white transition-colors duration-200 py-1"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block text-purple-200 hover:text-white transition-colors duration-200 py-1"
                  >
                    Support
                  </a>
                </div>
              )}
            </div>

            <a
              href="/pricing"
              className="block text-white hover:text-purple-200 transition-colors duration-200 font-medium py-2"
            >
              Pricing
            </a>

            <div className="pt-4 space-y-3">
              <button className="block w-full text-left text-white hover:text-purple-200 transition-colors duration-200 font-medium py-2">
                Log in
              </button>
              <button className="block w-full bg-[#7F56D9] text-white transition-colors duration-200 font-semibold px-6 py-2 rounded-lg shadow-md">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
