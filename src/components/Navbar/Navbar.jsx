import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* mobile menu */}
      <ul
        className={`
          md:hidden flex flex-col gap-4 px-6 pb-4 text-center
          bg-white/10 backdrop-blur-xl rounded-b-2xl
          transition-all duration-300 ease-out
          ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block py-2 font-semibold text-lg transition-colors
                 ${isActive ? "text-indigo-500" : "text-gray-200 hover:text-white"}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
