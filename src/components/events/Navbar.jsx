import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// Co-located nav data — no more fragile toLowerCase() + ternary
const NAV_LINKS = [
  { label: "Home",    path: "/" },
  { label: "Reservation",   path: "/reservation" },
  { label: "Menu",    path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

// Matches TopBar h-12 (3rem / 48px) — change in one place if TopBar height changes
const TOP_BAR_HEIGHT = "top-12";

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const hamburgerRef              = useRef(null);
  const mobileMenuRef             = useRef(null);

  // Condense navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key; return focus to hamburger
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Shift focus into the mobile menu when it opens
  useEffect(() => {
    if (menuOpen) {
      const firstLink = mobileMenuRef.current?.querySelector("a");
      firstLink?.focus();
    }
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <nav
      className={`fixed ${TOP_BAR_HEIGHT} left-0 w-full z-40 bg-amber-50 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-1">

        {/* Main Navbar Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" aria-label="The Vibes Cafe — go to homepage">
            <h3 className="text-xl lg:text-4xl font-bold text-[#7C3F00]">
              The Vibes Cafe
            </h3>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-10 text-xl font-medium text-gray-700" role="list">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label} className="relative group" role="listitem">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition hover:text-[#7C3F00] focus:outline-none focus:text-[#7C3F00] ${
                      isActive ? "text-[#7C3F00] font-semibold" : ""
                    }`
                  }
                  end={path === "/"}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {/* Underline: full width when active OR on hover */}
                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#7C3F00] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/order-online"
            className="hidden lg:flex items-center gap-3 bg-[#C45A00] hover:bg-[#a94d00] text-white px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C45A00] focus:ring-offset-2"
          >
            <FaShoppingCart aria-hidden="true" />
            Order Online
          </Link>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className="lg:hidden text-2xl text-[#7C3F00] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#7C3F00]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="navigation"
          aria-label="Mobile navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 py-5 bg-amber-50 rounded-xl shadow-lg">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-lg font-medium transition hover:text-[#7C3F00] focus:outline-none focus:text-[#7C3F00] ${
                      isActive ? "text-[#7C3F00] font-semibold underline underline-offset-4" : "text-gray-700"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/order-online"
                onClick={closeMenu}
                className="flex items-center gap-3 bg-[#C45A00] hover:bg-[#a94d00] text-white px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C45A00] focus:ring-offset-2"
              >
                <FaShoppingCart aria-hidden="true" />
                Order Online
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
