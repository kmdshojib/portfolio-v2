"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

import "./navigation.css";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className={`navbar ${
        scrolled ? "bg-blurred fixed shadow-xl" : "bg-transparent"
      } shadow-xl mb-2`}
    >
      <div className="flex-1 mx-5 md:mx-14">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl"
          onClick={scrollToTop}
        >
          <Logo />
        </Link>
      </div>
      <div className="flex-none hidden md:block mr-20">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              className="font-mono font-semibold hover:text-[#02aab0]"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              className="font-mono font-semibold hover:text-[#02aab0]"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              className="font-mono font-semibold hover:text-[#02aab0]"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="block md:hidden mr-10">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navigation;
