"use client"
import Link from "next/link";
import React,{ useState } from "react";

function Navbar() {
  const [navhover ,setNavhover] = useState(false)


  return (
    <nav
      onMouseEnter={() => setNavhover(true)}
      onMouseLeave={() => setNavhover(false)}
      className="absolute z-50 w-full transprent  hover:bg-theme-bg-light"
    >
      <div className="max-w-6xl m-auto">
        <div className="flex items-center py-5 px-10">
          <div className="flex-1 text-lg">
            <Link href="/">
              <img
                className="h-8 w-auto"
                src="https://devoxsoftware.com/wp-content/themes/main/assets/images/logo.svg"
                alt="Brand logo"
              />
            </Link>
          </div>
          <div className="flex-3">
            <ul className="grid grid-cols-7 gap-x-2 justify-center items-center">
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/experties">Experties</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/">Technology</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/industrial">Industries</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/carrer">Careers</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="px-5 py-2 font-theme-font text-sm  bg-purple-600 text-white rounded-2xl hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-slate-200 transition-color delay-250">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
