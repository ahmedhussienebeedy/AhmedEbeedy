import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import mylogo from "../../assets/images/mylogo.png";
import {  AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "*", path: "/Notfound" },


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
 <>
  
    <AnimatePresence>
  {mobileOpen && (
    <motion.ul
      key="mobileMenu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden flex flex-col gap-4 px-6 pb-4 text-center
                 bg-white/10 backdrop-blur-xl rounded-b-2xl"
    >
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `block py-2 font-semibold text-lg ${
                isActive ? "text-indigo-500" : "text-gray-200"
              }`
            }
            onClick={() => setMobileOpen(false)}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>

    
 </>
  );
}
