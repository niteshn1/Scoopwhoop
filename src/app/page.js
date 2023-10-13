import Image from "next/image";
import Navbar from "./components/Navbar";
import News from "./components/news";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between ">
      {/* <Navbar /> */}
      {/* <News /> */}
      <Footer />
    </main>
  );
}
