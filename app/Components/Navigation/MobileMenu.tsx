import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Logo from "./Logo";

const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to track drawer open/close
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
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={handleDrawerToggle}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className={`btn  border-none drawer-button ${
              scrolled ? "bg-transparent" : "bg-[#040D12]"
            }`}
          >
            <GiHamburgerMenu size={20} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={handleDrawerToggle}
          ></label>
          <div className="menu p-5 w-80 min-h-full bg-[#040D12] text-base-content">
            {/* Sidebar content here */}
            <div
              onClick={() => {
                scrollToTop();
              }}
            >
              <Logo />
            </div>
            <div className="mt-5 flex flex-col">
              <div
                className="font-mono font-semibold hover:text-[#02aab0] text-lg mb-5"
                onClick={() => {
                  scrollToTop();
                }}
              >
                About
              </div>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                className="font-mono font-semibold hover:text-[#02aab0] text-lg mb-5"
                onClick={() => {
                  handleDrawerToggle();
                }}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                className="font-mono font-semibold hover:text-[#02aab0] text-lg mb-5"
                onClick={() => {
                  handleDrawerToggle();
                }}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
