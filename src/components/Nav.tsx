import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-indigo-700 tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="bg-indigo-100 text-indigo-700 rounded-full px-2 py-1 text-lg mr-2">🍽️</span>
          RecipeFinder
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#toprecipes"
            className="px-4 py-2 rounded-full text-indigo-800 hover:bg-indigo-100 hover:text-indigo-700 font-medium transition"
            onClick={(e) => handleNavClick(e, "#toprecipes")}
          >
            Top Recipes
          </a>
          <a
            href="#recipes"
            className="px-4 py-2 rounded-full text-indigo-800 hover:bg-indigo-100 hover:text-indigo-700 font-medium transition"
            onClick={(e) => handleNavClick(e, "#recipes")}
          >
            Recipes
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-full text-indigo-800 hover:bg-indigo-100 hover:text-indigo-700 font-medium transition"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-indigo-800 hover:bg-indigo-100 hover:text-indigo-700 font-medium transition"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </a>
          <a
            href="#signup"
            className="ml-4 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-2 rounded-full font-semibold shadow transition"
            onClick={(e) => handleNavClick(e, "#signup")}
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-indigo-700"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t shadow px-4 py-6 flex flex-col gap-4 items-center text-center rounded-b-2xl">
          <a
            href="#toprecipes"
            className="text-indigo-800 font-medium px-4 py-2 rounded-full hover:bg-indigo-100 transition"
            onClick={(e) => handleNavClick(e, "#toprecipes")}
          >
            Top Recipes
          </a>
          <a
            href="#recipes"
            className="text-indigo-800 font-medium px-4 py-2 rounded-full hover:bg-indigo-100 transition"
            onClick={(e) => handleNavClick(e, "#recipes")}
          >
            Recipes
          </a>
          <a
            href="#about"
            className="text-indigo-800 font-medium px-4 py-2 rounded-full hover:bg-indigo-100 transition"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-indigo-800 font-medium px-4 py-2 rounded-full hover:bg-indigo-100 transition"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </a>
          <a
            href="#signup"
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-2 rounded-full font-semibold shadow transition"
            onClick={(e) => handleNavClick(e, "#signup")}
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
