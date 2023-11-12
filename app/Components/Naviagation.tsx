"use client";
import Link from "next/link";

const Naviagation: React.FC = () => {
  return (
    <div className="navbar bg-transparent shadow-lg mb-2">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Logo
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="#about"
              className="font-mono font-semibold hover:text-[#02aab0]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-mono font-semibold hover:text-[#02aab0]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-mono font-semibold hover:text-[#02aab0]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Naviagation;
