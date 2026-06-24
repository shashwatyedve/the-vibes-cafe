import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/the_vibes_cafe_?igsh=MWh2dzNod2t6a2JrcQ==",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/91XXXXXXXXXX", // 🔧 Replace with real WhatsApp number
    label: "WhatsApp",
  },
  {
    icon: FaEnvelope,
    href: "mailto:thevibescafe@gmail.com",
    label: "Email us",
  },
];

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-[#6F4E37] border-b border-[#5a3f2c]">
      <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center">

        {/* Left */}
        <p className="text-sm text-[#f8ddca] font-medium tracking-wide">
          Coffee • Food • Vibes
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <p className="text-sm text-[#f8ddca] font-medium hidden md:block">
            Open Daily &nbsp;|&nbsp; 9:00 AM – 10:00 PM
          </p>

          <div className="flex gap-3" role="list" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                role="listitem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f8ddca] text-[#6F4E37] flex items-center justify-center hover:scale-110 hover:bg-[#5a3f2c] hover:text-[#f8ddca] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f8ddca] focus:ring-offset-2 focus:ring-offset-[#6F4E37]"
              >
                <Icon size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
