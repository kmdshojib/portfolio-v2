import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-[#DDE8FF] text-3xl md:text-5xl font-mono font-black mb-3">
        Kamruzamn Shojib
      </h1>
      <p className="font-mono text-[#DDE8FF]">Front End Developer</p>
      {/* Social */}
      <div className="flex mt-3">
        <div>
          <AiFillLinkedin size={24} />
        </div>
        <div>
          <AiOutlineGithub size={24} />
        </div>
        <div>
          <FaHashnode size={24} />
        </div>
      </div>
    </div>
  );
};

export default About;
