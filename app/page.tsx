import Image from "next/image";
import Naviagation from "./Components/Naviagation";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-[#040D12] ">
      <div className="flex flex-col min-h-screen mx-20">
        <Naviagation />

        <div className="flex-1 pl-5 pr-5 flex justify-center ">
          <About />
        </div>

        <Footer />
      </div>
    </div>
  );
}
