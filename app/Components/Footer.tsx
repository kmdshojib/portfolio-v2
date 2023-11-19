import React from "react";
import Link from "next/link";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiHashnode } from "react-icons/si";
import { FaGithub, FaYoutube } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="footer items-center p-4  text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p className="font-mono text-sm md:text-base">
          Copyright © 2023 - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          href="https://www.linkedin.com/in/kamruzaman-shojib/"
          target="_blank"
        >
          <SlSocialLinkedin
            size={24}
            className="hover:text-[#0A66C2] cursor-pointer"
          />
        </Link>

        <Link href="http://github.com/kmdshojib" target="_blank">
          <FaGithub size={24} className="hover:text-[#e2e4e4] cursor-pointer" />
        </Link>
        <Link href="https://kmdshojib.hashnode.dev/" target="_blank">
          <SiHashnode
            size={24}
            className="hover:text-[#0A66C2] cursor-pointer"
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UC7udBVHgWpYuTG4MW1zCCzQ" target="_blank">
          <FaYoutube
            size={24}
            className="hover:text-[#FF0000] cursor-pointer"
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
