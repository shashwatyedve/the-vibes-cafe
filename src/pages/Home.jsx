import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Floating Particle ────────────────────────────────────────────────────────
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: style.size,
        height: style.size,
        left: style.left,
        top: style.top,
        background: "radial-gradient(circle, rgba(111,78,55,0.18) 0%, rgba(111,78,55,0) 70%)",
      }}
      animate={{
        y: [0, -style.travel, 0],
        opacity: [0, style.opacity, 0],
        scale: [0.6, 1.2, 0.6],
      }}
      transition={{
        duration: style.duration,
        delay: style.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Coffee Bean SVG Background Pattern ──────────────────────────────────────
function BeanPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="bean" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <ellipse cx="30" cy="30" rx="10" ry="16" fill="#6F4E37" transform="rotate(-30 30 30)" />
          <line
            x1="30" y1="16" x2="30" y2="44"
            stroke="#F8F4E9" strokeWidth="1.5"
            transform="rotate(-30 30 30)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bean)" />
    </svg>
  );
}

// ─── Floating Food Item Card ──────────────────────────────────────────────────
function FoodItem({ emoji, label, delay, rotateFrom, rotateTo }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer select-none"
      animate={{
        y: [0, -18, 0],
        rotate: [rotateFrom, rotateTo, rotateFrom],
      }}
      transition={{
        duration: 4.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.12 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-3xl"
        style={{
          width: 110,
          height: 110,
          background: "rgba(248,244,233,0.85)",
          boxShadow: "0 8px 40px rgba(111,78,55,0.18), 0 2px 8px rgba(111,78,55,0.10)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(111,78,55,0.12)",
        }}
        whileHover={{
          boxShadow: "0 16px 56px rgba(111,78,55,0.30), 0 4px 16px rgba(217,119,6,0.18)",
        }}
        transition={{ duration: 0.25 }}
      >
        <span style={{ fontSize: 52, lineHeight: 1 }}>{emoji}</span>
      </motion.div>
      <span
        className="text-sm font-semibold uppercase"
        style={{ color: "#6F4E37", letterSpacing: "0.12em" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── Right Logo Section ───────────────────────────────────────────────────────
function LogoSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
    >
      {/* Floating logo */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute rounded-full"
          style={{
            width: 240,
            height: 240,
            background:
              "radial-gradient(circle, rgba(217,119,6,0.14) 0%, rgba(111,78,55,0.10) 55%, rgba(248,244,233,0) 100%)",
          }}
        />
        {/* Logo circle */}
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: 200,
            height: 200,
            background:
              "linear-gradient(145deg, rgba(248,244,233,0.95) 0%, rgba(248,244,233,0.75) 100%)",
            boxShadow:
              "0 12px 60px rgba(111,78,55,0.20), 0 4px 16px rgba(111,78,55,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "2px solid rgba(111,78,55,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span style={{ fontSize: 80 }}>☕</span>
        </div>
      </motion.div>

      {/* Café name */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <p
          className="text-xs font-bold uppercase mb-1"
          style={{ color: "#D97706", letterSpacing: "0.25em" }}
        >
          Est. 2020
        </p>
        <h3
          className="text-2xl font-bold"
          style={{ color: "#3E2723", fontFamily: "'Georgia', serif", letterSpacing: "-0.01em" }}
        >
          The Vibes Café
        </h3>
        <p className="text-sm mt-1" style={{ color: "#6F4E37" }}>
          Mumbai, India
        </p>
      </motion.div>

      {/* Rating pill */}
      <motion.div
        className="mt-5 flex items-center gap-2 px-5 py-2 rounded-full"
        style={{
          background: "rgba(111,78,55,0.08)",
          border: "1px solid rgba(111,78,55,0.15)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span style={{ fontSize: 16 }}>⭐</span>
        <span className="text-sm font-semibold" style={{ color: "#3E2723" }}>
          4.9 · 2,400+ Reviews
        </span>
      </motion.div>
    </motion.div>
  );
}

// ─── Scroll Indicator ─────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
    >
      <span
        className="text-xs font-medium uppercase tracking-widest"
        style={{ color: "#6F4E37", opacity: 0.6 }}
      >
        Scroll
      </span>
      <motion.div
        className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
        style={{ border: "1.5px solid rgba(111,78,55,0.35)" }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#D97706" }}
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 60]);

  // Generate stable particles (memo not needed, these are bg decorations)
  const particles = Array.from({ length: 14 }, (_, i) => ({
    size: `${8 + ((i * 7) % 20)}px`,
    left: `${(i * 13 + 5) % 100}%`,
    top: `${(i * 17 + 10) % 100}%`,
    travel: 40 + ((i * 11) % 80),
    opacity: 0.15 + ((i * 3) % 50) / 100,
    duration: 5 + ((i * 7) % 4),
    delay: (i * 5) % 5,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#F8F4E9" }}
    >
      {/* ── Background: parallax glow ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(217,119,6,0.07) 0%, rgba(248,244,233,0) 70%)",
          y: bgY,
        }}
      />

      {/* ── Background: coffee bean pattern ── */}
      <BeanPattern />

      {/* ── Background: glow blob behind food items ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "37%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          height: 380,
          background:
            "radial-gradient(circle, rgba(217,119,6,0.10) 0%, rgba(248,244,233,0) 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Steam / aroma particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* ── 3-Column Grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-[40%_30%_30%] gap-10 lg:gap-6 items-center min-h-screen">

        {/* ── LEFT: Headline + CTAs ── */}
        <motion.div
          className="flex flex-col gap-6 order-2 lg:order-1"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold uppercase"
            style={{
              background: "rgba(217,119,6,0.12)",
              border: "1px solid rgba(217,119,6,0.30)",
              color: "#D97706",
              letterSpacing: "0.18em",
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span>☕</span>
            <span>Coffee · Food · Vibes</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-bold leading-[1.08]"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              color: "#3E2723",
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Where Great Coffee Meets{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D97706 0%, #6F4E37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Great Vibes
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base lg:text-lg leading-relaxed max-w-md"
            style={{ color: "#6F4E37", opacity: 0.85 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Freshly brewed coffee, handcrafted pizzas, juicy burgers, and unforgettable moments — all in one cozy corner of the city.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { value: "50+",  label: "Menu Items"   },
              { value: "10K+", label: "Happy Guests"  },
              { value: "4.9★", label: "Rating"        },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xl font-bold" style={{ color: "#3E2723" }}>
                  {s.value}
                </span>
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "#6F4E37", opacity: 0.7 }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-white"
              style={{
                background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                boxShadow: "0 4px 20px rgba(217,119,6,0.35)",
                border: "none",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(217,119,6,0.50)" }}
              whileTap={{ scale: 0.97 }}
            >
              Order Online
            </motion.button>

            <motion.button
              className="px-8 py-3.5 rounded-full text-sm font-bold tracking-wide"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(111,78,55,0.40)",
                color: "#3E2723",
              }}
              whileHover={{
                scale: 1.04,
                background: "rgba(111,78,55,0.06)",
                borderColor: "rgba(111,78,55,0.70)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Menu
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── CENTER: Floating Food Showcase ── */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8 order-1 lg:order-2 py-8"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          <FoodItem emoji="☕" label="Coffee" delay={0}   rotateFrom={-3} rotateTo={3}  />
          <FoodItem emoji="🍕" label="Pizza"  delay={0.8} rotateFrom={2}  rotateTo={-2} />
          <FoodItem emoji="🍔" label="Burger" delay={1.6} rotateFrom={-2} rotateTo={4}  />
        </motion.div>

        {/* ── RIGHT: Logo ── */}
        <div className="order-3 hidden sm:flex items-center justify-center">
          <LogoSection />
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <ScrollIndicator />

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(248,244,233,0) 0%, rgba(248,244,233,0.7) 100%)",
        }}
      />

      {/* ── Reduced motion accessibility ── */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
