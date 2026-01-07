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
    <nav className="fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3
                      bg-white/10 backdrop-blur-xl rounded-b-2xl border border-white/20
                      shadow-indigo-500/40">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-500 glow">Ahmed Ebeedy</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-semibold hover:text-indigo-400 transition-colors ${
                    isActive ? "text-indigo-500 glow" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col gap-4 px-6 pb-4 text-center
                    bg-white/10 backdrop-blur-xl rounded-b-2xl border border-white/20
                    shadow-indigo-500/40 overflow-hidden
                    transition-all duration-300 ease-out
                    ${mobileOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block py-2 font-semibold text-lg ${
                  isActive ? "text-indigo-500 glow" : "text-gray-200"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
