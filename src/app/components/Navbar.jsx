"use client";
import Link from "next/link";
import Button from "/src/app/components/atoms/Button/index.jsx";
import Search from "/src/app/components/atoms/Button/searchButton.jsx";
import CSR1 from "/src/app/components/atoms/carousel.jsx";

const Navbar = () => {
  return (
    <>
      <div className="relative h-64 bg-contain">
        <CSR1 />
        <nav className="absolute top-0 w-full h-24 shadow-xl bg-full overflow-hidden">
          <div className=" flex justify-between items-center h-full w-full">
            <Link href="/">
              <div className="float-left pl-20 flex">
                <img width="92" height="68" src="/full_logo.svg" />
              </div>
            </Link>
            <div>
              <ul className="flex mt-7">
                <Link href="/about">
                  <li className="ml-10 uppercase transition ease-in-out delay-100 text-sm font-bold text-yellow-500 hover: hover:scale-125 duration-300">
                    TRENDING
                  </li>
                </Link>
                <Link href="/videos">
                  <li className="ml-10 uppercase transition ease-in-out delay-150  text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    VIDEOS
                  </li>
                </Link>
                <Link href="/stories">
                  <li className="ml-10 uppercase transition ease-in-out delay-150  text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    STORIES
                  </li>
                </Link>
                <Link href="/quiz">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    QUIZZES
                  </li>
                </Link>
                <Link href="/meme">
                  <li className="ml-10 uppercase transition ease-in-out delay-150  text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    MEMES
                  </li>
                </Link>
                <Link href="/spotlight">
                  <li className="ml-10 uppercase transition ease-in-out delay-150 text-sm font-bold text-yellow-500 hover:-translate-y-1 hover:scale-125 duration-300">
                    SPOTLIGHT
                  </li>
                </Link>
              </ul>
            </div>
            <Search />
            <div className="mt-5 mr-6 ">
              <Link href="/login">
                <Button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  LOGIN
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  SIGNUP
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
