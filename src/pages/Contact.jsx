import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// ── Reusable Contact Info Card ─────────────────────────────────────────────────
const ContactCard = ({ icon: Icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3 }}
    className="flex items-start gap-4 group cursor-pointer"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md text-lg"
      style={{ background: "linear-gradient(135deg, #8B4513 0%, #C47B2B 100%)" }}
    >
      <Icon />
    </motion.div>
    <div>
      <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#C47B2B" }}>
        {label}
      </p>
      <p
        className="text-sm leading-relaxed font-medium transition-colors duration-200 group-hover:opacity-80 whitespace-pre-line"
        style={{ color: "#3B2010" }}
      >
        {value}
      </p>
    </div>
  </motion.a>
);

// ── Social Icon Button ─────────────────────────────────────────────────────────
const SocialBtn = ({ icon: Icon, href, delay }) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md text-base"
    style={{ background: "linear-gradient(135deg, #8B4513 0%, #C47B2B 100%)" }}
  >
    <Icon />
  </motion.a>
);

// ── Success Toast ──────────────────────────────────────────────────────────────
const SuccessToast = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.35 }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #8B4513 0%, #C47B2B 100%)",
          color: "#fff",
          minWidth: 280,
        }}
      >
        <span className="text-xl">✓</span>
        <div>
          <p className="font-semibold text-sm">Message Sent!</p>
          <p className="text-xs opacity-80">We'll get back to you shortly.</p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ── Floating Input ─────────────────────────────────────────────────────────────
const FloatingInput = ({ label, type = "text", value, onChange, error, multiline, name }) => {
  const base =
    "w-full bg-white/60 border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 placeholder-transparent peer";
  const borderClass = error
    ? "border-red-400 focus:border-red-500"
    : "border-amber-200 focus:border-amber-500";
  const inputStyle = { color: "#3B2010" };

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`${base} ${borderClass} resize-none`}
          style={inputStyle}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={`${base} ${borderClass}`}
          style={inputStyle}
        />
      )}
      <label
        className="absolute left-4 -top-2.5 text-xs font-medium px-1 bg-white/90 rounded transition-all duration-200"
        style={{ color: error ? "#ef4444" : "#8B4513" }}
      >
        {label}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-red-500 pl-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// ── Footer ─────────────────────────────────────────────────────────────────────
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

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setShowToast(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <>
      <SuccessToast visible={showToast} />

      {/* pt-20 clears the fixed global Navbar (~80px) */}
      <div
        className="min-h-screen w-full pt-20"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, #f5ede0 0%, #f9f5ef 40%, #fdf9f4 100%)",
        }}
      >
        {/* Coffee-cup watermark */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' font-size='28' fill='%238B4513'%3E☕%3C/text%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "linear-gradient(135deg, #f5ede0, #f9e4c8)",
                color: "#8B4513",
                border: "1px solid #e8c99a",
              }}
            >
              Get In Touch
            </span>
            <h1
              className="text-3xl lg:text-4xl font-extrabold"
              style={{ color: "#3B2010", fontFamily: "Georgia, serif" }}
            >
              We'd Love to Hear From You
            </h1>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(249,237,220,0.80) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(196,123,43,0.18)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ background: "linear-gradient(135deg, #C47B2B, #8B4513)" }}
              />

              <h2
                className="text-2xl lg:text-3xl font-extrabold mb-2"
                style={{ color: "#3B2010", fontFamily: "Georgia, serif" }}
              >
                Contact Information
              </h2>
              <p className="text-sm mb-8" style={{ color: "#7a5c42" }}>
                We're always happy to connect.
              </p>

              <div className="space-y-7">
                <ContactCard
                  icon={FaMapMarkerAlt}
                  label="Location"
                  value={"Near Amreshwar College,\nAurad 585326"}
                  href="https://maps.app.goo.gl/fwN7ZdZo6Lgm72eP7?g_st=ac"
                  delay={0.2}
                />
                <ContactCard
                  icon={MdEmail}
                  label="Email"
                  value="basubiradar511@gmail.com"
                  href="mailto:basubiradar511@gmail.com"
                  delay={0.3}
                />
                <ContactCard
                  icon={FaWhatsapp}
                  label="WhatsApp"
                  value="+91 78999 09622"
                  href="https://wa.me/917899909622"
                  delay={0.4}
                />
              </div>

              <div
                className="my-8 h-px w-full"
                style={{ background: "linear-gradient(to right, transparent, #d4a96a, transparent)" }}
              />

              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#8B4513" }}
                >
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <SocialBtn
                    icon={FaInstagram}
                    href="https://www.instagram.com/the_vibes_cafe_?igsh=MWh2dzNod2t6a2JrcQ=="
                    delay={0.5}
                  />
                  <SocialBtn icon={FaWhatsapp} href="https://wa.me/917899909622" delay={0.55} />
                  <SocialBtn icon={MdEmail} href="mailto:basubiradar511@gmail.com" delay={0.6} />
                  <SocialBtn
                    icon={FaMapMarkerAlt}
                    href="https://maps.app.goo.gl/fwN7ZdZo6Lgm72eP7?g_st=ac"
                    delay={0.65}
                  />
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(249,241,230,0.85) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(196,123,43,0.18)",
              }}
            >
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-full opacity-10"
                style={{ background: "linear-gradient(135deg, #C47B2B, #8B4513)" }}
              />

              <p
                className="text-xs font-bold tracking-[0.22em] uppercase mb-2"
                style={{ color: "#C47B2B" }}
              >
                Send Us a Message
              </p>
              <h2
                className="text-2xl lg:text-3xl font-extrabold mb-8"
                style={{ color: "#3B2010", fontFamily: "Georgia, serif" }}
              >
                Have a Question?
              </h2>

              <div className="space-y-6">
                <FloatingInput
                  name="name"
                  label="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FloatingInput
                  name="email"
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FloatingInput
                  name="message"
                  label="Your Message"
                  multiline
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.025, boxShadow: "0 8px 30px rgba(139,69,19,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380 }}
                  className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-wide shadow-lg"
                  style={{ background: "linear-gradient(135deg, #8B4513 0%, #C47B2B 100%)" }}
                >
                  Send Message →
                </motion.button>

                <p className="text-center text-xs" style={{ color: "#9c7a5e" }}>
                  We typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
