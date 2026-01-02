import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import mylogo from "../../assets/images/mylogo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl
                     rounded-2xl border border-white/10
                     bg-white/5 backdrop-blur-xl
                     shadow-lg shadow-indigo-500/10"
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={mylogo}
                alt="Ahmed Ebeedy"
                className="w-9 h-9 rounded-full shadow-md"
              />
              <span className="font-bold text-indigo-500 tracking-wide">
                Ahmed Ebeedy
              </span>
            </NavLink>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition ${
                        isActive ? "text-indigo-500" : "text-gray-200"
                      }`
                    }
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full
                                     scale-x-0 bg-indigo-500 rounded-full
                                     transition-transform duration-300
                                     origin-left group-hover:scale-x-100" />
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex flex-col w-6 h-6 justify-between items-center group"
              >
                <span
                  className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white rounded transition duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden flex flex-col gap-4 px-6 pb-4 text-center bg-white/10 backdrop-blur-xl rounded-b-2xl"
              >
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 font-semibold text-lg ${
                          isActive ? "text-indigo-500" : "text-gray-200"
                        }`
                      }
                      onClick={() => setMobileOpen(false)} // close menu on click
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
