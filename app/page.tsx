import Image from "next/image";
import Naviagation from "./Components/Naviagation";
import About from "./Components/About";

export default function Home() {
  return (
    <div className="bg-[#000C24] min-h-screen">
      <Naviagation />
      <div className="pl-5 pr-5">
        <About />
      </div>
    </div>
  );
}
