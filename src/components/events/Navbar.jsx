import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
FaShoppingCart,
FaBars,
FaTimes,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const navLinks = [
"Home",
"About",
"Menu",
"Gallery",
"Contact",
];

return ( 
<nav className="fixed top-12 left-0 w-full z-40 bg-amber-50 backdrop-blur-md shadow-md"> 
<div className="max-w-7xl mx-auto px-4 lg:px-6 py-1">

    {/* Main Navbar */}
    <div className="flex items-center justify-between">

      {/* Logo Section */}
      <div className="flex items-center gap-3">

        {/* <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 border-[#6F4E37] overflow-hidden flex items-center justify-center">
          <img
            src={logo}
            alt="The Vibes Cafe"
            className="w-full h-full object-cover scale-150"
          />
        </div> */}

        <div>
          <h3 className="text-xl lg:text-4xl font-bold text-[#7C3F00]">
            The Vibes Cafe
          </h3>
        </div>

      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10 text-xl font-medium text-gray-700">

        {navLinks.map((item) => (
          <li
            key={item}
            className="relative group cursor-pointer"
          >
            <Link
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase()}`
              }
              className="hover:text-[#7C3F00] transition"
            >
              {item}
            </Link>

            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#7C3F00] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}

      </ul>

      {/* Desktop Button */}
      <Link
        to="/order-online"
        className="hidden lg:flex items-center gap-3 bg-[#C45A00] hover:bg-[#a94d00] text-white px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <FaShoppingCart />
        Order Online
      </Link>

      {/* Hamburger Button */}
      <button
        className="lg:hidden text-2xl text-[#7C3F00]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </div>

    {/* Mobile Menu */}
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-96 mt-4" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col items-center gap-5 py-5 bg-white rounded-xl shadow-lg">

        {navLinks.map((item) => (
          <li key={item}>
            <Link
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase()}`
              }
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-[#7C3F00]"
            >
              {item}
            </Link>
          </li>
        ))}

       <Link
        to="/order-online"
        className="flex items-center gap-3 bg-[#C45A00] hover:bg-[#a94d00] text-white px-5 py-3 rounded-full text-lg font-medium transition-all duration-300"
        onClick={() => setMenuOpen(false)}
       >
        <FaShoppingCart />
        Order Online
       </Link>
        
      </ul>
    </div>

  </div>
</nav>


);
};

export default Navbar;
