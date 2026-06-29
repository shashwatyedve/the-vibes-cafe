import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Trimmed to 5 options only
const celebrationTypes = [
  "Birthday Celebration",
  "Anniversary Celebration",
  "Private Theatre",
  "Kitty Party",
  "Other",
];

// Pure-white background on all inputs
const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#D4B896] bg-white text-[#2C1A0E] placeholder-[#B8956A] focus:outline-none focus:ring-2 focus:ring-[#C17817] focus:border-transparent transition-all duration-300 text-sm font-medium";

const errorClass = "text-[#C17817] text-xs mt-1 font-medium";

// guests field removed from initialForm
const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  celebrationType: "",
  date: "",
  time: "",
  specialRequests: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// Decorative background
// ─────────────────────────────────────────────────────────────────────────────
function FloatingDeco() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C17817]/10 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[#8B4513]/10 blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-[#C17817]/8 blur-3xl" />
      {/* Coffee ring watermarks */}
      <div className="absolute top-48 right-12 w-32 h-32 rounded-full border-4 border-[#C17817]/10 opacity-60" />
      <div className="absolute top-44 right-8 w-20 h-20 rounded-full border-2 border-[#C17817]/8 opacity-50" />
      <div className="absolute bottom-64 left-10 w-24 h-24 rounded-full border-4 border-[#8B4513]/10 opacity-50" />
      <div className="absolute bottom-60 left-14 w-14 h-14 rounded-full border-2 border-[#8B4513]/8 opacity-40" />
      {/* Leaf */}
      <svg className="absolute top-1/4 left-6 opacity-10 text-[#8B4513]" width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
        <ellipse cx="20" cy="30" rx="12" ry="28" transform="rotate(-20 20 30)" />
        <line x1="20" y1="2" x2="20" y2="58" stroke="#FFF8F0" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-1/4 right-8 opacity-10 text-[#C17817]" width="36" height="54" viewBox="0 0 36 54" fill="currentColor">
        <ellipse cx="18" cy="27" rx="11" ry="25" transform="rotate(15 18 27)" />
        <line x1="18" y1="2" x2="18" y2="52" stroke="#FFF8F0" strokeWidth="1.5" />
      </svg>
      {/* Bean */}
      <svg className="absolute top-2/3 left-1/3 opacity-[0.08] text-[#2C1A0E]" width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
        <ellipse cx="14" cy="10" rx="13" ry="9" />
        <path d="M14 2 Q8 10 14 18" stroke="#F5EFE6" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Success Modal
// ─────────────────────────────────────────────────────────────────────────────
function SuccessModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-[#2C1A0E]/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-[#FFF8F0] rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-[#D4B896]"
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#C17817] to-[#8B4513] flex items-center justify-center shadow-lg text-2xl">
            🎉
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#2C1A0E] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Reservation Request Sent!
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#C17817] to-[#8B4513] mx-auto mb-4 rounded-full" />
            <p className="text-[#6B4226] text-sm leading-relaxed mb-2">
              Thank you for choosing <span className="font-semibold text-[#2C1A0E]">The Vibes Cafe</span>.
            </p>
            <p className="text-[#6B4226] text-sm leading-relaxed mb-8">
              Our team will contact you shortly to confirm your celebration and make it truly unforgettable.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C17817] to-[#8B4513] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:from-[#8B4513] hover:to-[#C17817] transition-all duration-300"
            >
              Done
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ReservationPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.celebrationType) e.celebrationType = "Please select a celebration type.";
    if (!form.date) e.date = "Please select a preferred date.";
    if (!form.time) e.time = "Please select a preferred time.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] font-sans relative">
      <FloatingDeco />

      {/* ── Hero ──
          pt-20 clears the fixed global Navbar (~80 px), matching Contact.jsx */}
      <section className="pt-35 pb-14 px-4 text-center relative">
        

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-[#2C1A0E] leading-tight mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ fontFamily: "Georgia, 'Palatino', serif" }}
        >
          Reservation{" "}
          {/* <span style={{ color: "#C47B2B" }}>With Us</span> */}
        </motion.h1>

        <motion.p
          className="text-[#6B4226] text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Celebrate your special moments at The Vibes Cafe.
          Reserve your celebration today and let us create unforgettable memories.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="w-16 h-px" style={{ background: "linear-gradient(to right, transparent, #C47B2B)" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#C47B2B" }} />
          <div className="w-16 h-px" style={{ background: "linear-gradient(to left, transparent, #C47B2B)" }} />
        </motion.div>
      </section>

      {/* ── Form ── */}
      <section className="pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="rounded-3xl shadow-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.90) 0%, rgba(249,237,220,0.82) 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(196,123,43,0.18)",
            }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {/* Top accent strip */}
            <div
              className="h-1.5"
              style={{ background: "linear-gradient(to right, #C47B2B, #8B4513, #C47B2B)" }}
            />

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow"
                  style={{ background: "linear-gradient(135deg, #8B4513, #C47B2B)" }}
                >
                  ✦
                </div>
                <h2
                  className="text-xl font-bold text-[#2C1A0E]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Event Reservation Details
                </h2>
              </div>

              <form onSubmit={handleSubmit} noValidate>

                {/* Row 1: Full Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
                    <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                      Full Name <span style={{ color: "#C47B2B" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                    {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={6}>
                    <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                      Email Address <span style={{ color: "#C47B2B" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </motion.div>
                </div>

                {/* Row 2: Phone + Celebration Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={7}>
                    <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                      Phone Number <span style={{ color: "#C47B2B" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                    {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={8}>
                    <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                      Celebration Type <span style={{ color: "#C47B2B" }}>*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="celebrationType"
                        value={form.celebrationType}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="">Select occasion</option>
                        {celebrationTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#C47B2B" }}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.celebrationType && <p className={errorClass}>{errors.celebrationType}</p>}
                  </motion.div>
                </div>

                {/* Row 3: Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={9}>
                    <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                      Preferred Date <span style={{ color: "#C47B2B" }}>*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`${inputClass} cursor-pointer`}
                    />
                    {errors.date && <p className={errorClass}>{errors.date}</p>}
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={10}>
                    <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                      Preferred Time <span style={{ color: "#C47B2B" }}>*</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    />
                    {errors.time && <p className={errorClass}>{errors.time}</p>}
                  </motion.div>
                </div>

                {/* Row 4: Special Requests */}
                <motion.div className="mb-8" variants={fadeUp} initial="hidden" animate="visible" custom={11}>
                  <label className="block text-xs font-bold text-[#6B4226] uppercase tracking-wider mb-1.5">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={form.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about decorations, cake, music, surprises or any special requests..."
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={12}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.025, boxShadow: "0 8px 30px rgba(139,69,19,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 380 }}
                    className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-widest uppercase shadow-lg relative overflow-hidden group"
                    style={{ background: "linear-gradient(135deg, #8B4513 0%, #C47B2B 100%)" }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>✦</span>
                      Reserve Celebration
                      <span>✦</span>
                    </span>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(135deg, #C47B2B 0%, #8B4513 100%)" }}
                    />
                  </motion.button>

                  <p className="text-center text-xs mt-4" style={{ color: "#9c7a5e" }}>
                    We'll confirm your reservation within 24 hours via call or email.
                  </p>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      
      {submitted && <SuccessModal onClose={handleCloseModal} />}
    </div>
  );
}