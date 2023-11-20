import Naviagation from "./Components/Navigation/Naviagation";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className="bg-[#040D12] ">
      <Naviagation />
      <div className="flex flex-col min-h-screen mx-8 md:mx-20">
        <div className="flex-1 pl-5 pr-5 flex flex-col justify-center ">
          <About />
          <Projects />
          <Contact />
        </div>

        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}
