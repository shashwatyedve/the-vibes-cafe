import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/the_vibes_cafe_?igsh=MWh2dzNod2t6a2JrcQ==" },
    { icon: FaWhatsapp, href: "https://wa.me/917899909622" },
    { icon: MdEmail, href: "mailto:basubiradar511@gmail.com" },
    { icon: FaMapMarkerAlt, href: "https://maps.app.goo.gl/fwN7ZdZo6Lgm72eP7?g_st=ac" },
  ];

  const contactDetails = [
    { icon: FaMapMarkerAlt, text: "Near Amreshwar College, Aurad 585326", href: "https://maps.app.goo.gl/fwN7ZdZo6Lgm72eP7?g_st=ac" },
    { icon: MdEmail, text: "basubiradar511@gmail.com", href: "mailto:basubiradar511@gmail.com" },
    { icon: FaWhatsapp, text: "+91 78999 09622", href: "https://wa.me/917899909622" },
  ];

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #2c1406 0%, #3d1a08 50%, #2c1406 100%)",
        borderTop: "1px solid rgba(196,123,43,0.25)",
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C47B2B, transparent)" }}
      />

      {/* Watermark */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='55' font-size='40' fill='%23C47B2B'%3E☕%3C/text%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow"
                style={{ background: "linear-gradient(135deg, #8B4513, #C47B2B)" }}
              >
                ☕
              </div>
              <span
                className="text-lg font-extrabold"
                style={{ color: "#f5e6d0", fontFamily: "Georgia, serif" }}
              >
                The Vibes Cafe
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#b89474" }}>
              Brewing Moments,<br />Creating Memories.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow"
                  style={{ background: "linear-gradient(135deg, #8B4513, #C47B2B)" }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#C47B2B" }}
            >
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-sm transition-colors duration-200 hover:opacity-80 inline-block"
                    style={{ color: "#c9a882" }}
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#C47B2B" }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              {contactDetails.map(({ icon: Icon, text, href }, i) => (
                <li key={i}>
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-0.5 text-sm flex-shrink-0" style={{ color: "#C47B2B" }}>
                      <Icon />
                    </span>
                    <span
                      className="text-sm leading-relaxed transition-colors duration-200 group-hover:opacity-75"
                      style={{ color: "#c9a882" }}
                    >
                      {text}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ background: "linear-gradient(to right, transparent, rgba(196,123,43,0.4), transparent)" }}
        />

        {/* Copyright */}
        <p className="text-center text-xs" style={{ color: "#7a5c42" }}>
          © 2026 The Vibes Cafe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;