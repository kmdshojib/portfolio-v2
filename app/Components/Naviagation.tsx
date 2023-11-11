"use client";
import Link from "next/link";

const Naviagation: React.FC = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#about" className="font-mono">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Naviagation;
