import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-[#6F4E37] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center">

        {/* Left */}
        <p className="text-m text-black font-medium">
          Coffee • Food • Vibes
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">

          <p className="text-m text-black font-medium hidden md:block">
            Open Daily | 9:00 AM - 10:00 PM
          </p>

          <div className="flex gap-3">

            <a
              href="https://www.instagram.com/the_vibes_cafe_?igsh=MWh2dzNod2t6a2JrcQ=="
              className="w-9 h-9 rounded-full bg-[#f8ddca] text-black flex items-center justify-center hover:scale-110 hover:bg-[#5a3f2c] transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#f8ddca] text-black flex items-center justify-center hover:scale-110 hover:bg-[#5a3f2c] transition-all duration-300"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:thevibescafe@gmail.com"
              className="w-9 h-9 rounded-full bg-[#f8ddca] text-black flex items-center justify-center hover:scale-110 hover:bg-[#5a3f2c] transition-all duration-300"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;