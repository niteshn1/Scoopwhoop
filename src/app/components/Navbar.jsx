"use client";
import Image from "next/image";
import Link from "next/link";

// import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import CSR1 from "/src/atoms/carousel.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [clicked, setClicked] = useState(false);
  const handleNav = () => {
    setOpen(menuOpen);
  };
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {/* <div className="rounded-full border border-gray-100 shadow-sm h-full relative"> */}
      {/* <CSR1 /> */}

      <div className="relative h-64 bg-contain border border-indigo-600">
        <CSR1 />
        <nav className="absolute top-0 w-full h-24 shadow-xl bg-transparent overflow-hidden">
          <div className=" flex justify-between items-center h-full w-full">
            <Link href="/">
              <div className="float-left pl-20 flex">
                <a>
                  <img width="92" height="68" src="/full_logo.svg" />
                </a>
              </div>
            </Link>
            <div>
              <ul className="hidden sm:flex">
                <Link href="/about">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 hover:border-b text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    TRENDING
                  </li>
                </Link>
                <Link href="/videos">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 hover:border-b text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    VIDEOS
                  </li>
                </Link>
                <Link href="/stories">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 hover:border-b text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    STORIES
                  </li>
                </Link>
                <Link href="/quiz">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 hover:border-b text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    QUIZZES
                  </li>
                </Link>
                <Link href="/meme">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 hover:border-b text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    MEMES
                  </li>
                </Link>
                <Link href="/spotlight">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 hover:border-b text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    SPOTLIGHT
                  </li>
                </Link>
                <Link href="/login">
                  <button
                    type="button"
                    class=" ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button
                    type="button"
                    class=" ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    SIGNUP
                  </button>
                </Link>
              </ul>
            </div>
            <button className="px-4 text-yellow-500  rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div>
              <div
                className="z-50 flex relative w-7 h-7 flex-col justify-between items-center"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {/* hamburger button
                <span
                  className={`h-1 w-full bg-yellow-500 rounded-lg transform transition duration-300 ease-in-out ${
                    open ? "rotate-180 translate-y-5" : ""
                  }`}
                />
                <span
                  className={`h-1 w-full bg-yellow-500 rounded-lg transition-all duration-300 ease-in-out ${
                    open ? "rotate-180 translate-y-4" : ""
                  }`}
                />
                <span
                  className={`h-1 w-full bg-yellow-500 rounded-lg transform transition duration-300 ease-in-out ${
                    open ? "-rotate-180 -translate-y-3" : ""
                  }`}
                /> */}
              </div>
            </div>
            {/* <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
              <AiOutlineMenu size={25} />
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
