import Image from "next/image";
import Navbar from "./components/Navbar";
import News from "./components/news";
import Footer from "./components/footer";
// import Login from "./components/Login/login";
// import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between ">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      {/* <Navbar /> */}
      <News />
      {/* <Footer /> */}
    </main>
  );
}
