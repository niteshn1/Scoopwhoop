import Image from "next/image";
import Navbar from "./components/Navbar";
import News from "/src/app/components/organisms/news.jsx";
import Footer from "/src/app/components/Footer.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between bg-white ">
      <Navbar />
      <News />
      <Footer />
    </main>
  );
}
