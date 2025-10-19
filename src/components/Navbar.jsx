import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);

  const toggleAlif = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = ["home", "services", "products", "about", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActive(sections[i]);
          window.history.replaceState(null, "", `/#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sections = ["home", "services", "products", "about", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full px-4 py-2 z-50 flex items-center justify-between bg-white shadow-lg border-b border-gray-700/30">
      {/* 🔹 Left: Logo (click → scroll to Home) */}
      <div className="flex items-center space-x-3 md:flex">
        <HashLink smooth to="/#home" onClick={closeMenu}>
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer"
          />
        </HashLink>
      </div>

      {/* 🔹 Center: Brand Name (visible only on mobile) */}
      <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-center">
        <span className="text-xl font-[ClashDisplay] tracking-wide text-black md:hidden">
          New Taj Industry
        </span>
      </div>

      {/* 🔹 Desktop Brand + Menu */}
      <div className="hidden md:flex space-x-8 font-[ClashDisplay] text-lg items-center">
        <span className="text-xl font-[ClashDisplay] tracking-wide text-black mr-6">
          New Taj Industry
        </span>
        {sections.map((section) => (
          <HashLink
            key={section}
            smooth
            to={`/#${section}`}
            className={`hover:text-red-600 transition ${
              active === section ? "text-red-600 font-bold" : "text-gray-800"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </HashLink>
        ))}
      </div>

      {/* 🔹 Hamburger Toggle (Mobile Only) */}
      <div className="md:hidden flex items-center">
        <div
          onClick={toggleAlif}
          className="h-full mr-2 flex flex-col justify-center items-center cursor-pointer"
        >
          <span
            className={`font-[Aref] text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-45" : "rotate-90"
            }`}
          >
            ا
          </span>
          <span
            className={`font-[Aref] text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out ${
              isOpen ? "-rotate-45" : "rotate-90"
            }`}
          >
            ا
          </span>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed left-0 w-full h-[55vh] md:h-[60vh] bg-red-600 rounded-t-2xl transition-all duration-500 ease-in-out flex flex-col justify-between ${
          isOpen ? "bottom-0" : "-bottom-[80vh]"
        } md:hidden`}
      >
        <div className="p-8 text-white flex flex-col text-4xl font-[ClashDisplay] space-y-3">
          {sections.map((section) => (
            <HashLink
              key={section}
              smooth
              to={`/#${section}`}
              onClick={closeMenu}
              className={`text-left ${
                active === section ? "text-gray-900 font-bold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </HashLink>
          ))}
        </div>

        <div className="p-8 text-white text-xs">
          <a href="mailto:masoom8700@gmail.com" className="block">
            MASOOM8700@GMAIL.COM
          </a>
          <a
            href="https://Instagram.com/new_taj_industries_"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </nav>
  );
}
