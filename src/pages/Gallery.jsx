import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery1.css";
// import Navbar from "./components/events/Navbar";
// import TopBar from "./components/events/TopBar";


// Image imports — place your actual images in src/assets/images/
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.jpeg";
import img10 from "../assets/images/img10.jpeg";
import img11 from "../assets/images/img11.jpeg";
// ─── DATA ────────────────────────────────────────────────────────────────────

const galleryItems = [
  { id: 1,  src: img1,  title: "Morning Brew",       category: "Coffee"    },
  { id: 2,  src: img2,  title: "Artisan Pizza",      category: "Food"      },
  { id: 3,  src: img3,  title: "Cozy Corner",        category: "Ambience"  },
  { id: 4,  src: img4,  title: "Latte Art",          category: "Coffee"    },
  { id: 5,  src: img5,  title: "Happy Moments",      category: "Customers" },
  { id: 6,  src: img6,  title: "Loaded Burger",      category: "Food"      },
  { id: 7,  src: img7,  title: "Golden Hour Vibes",  category: "Ambience"  },
  { id: 8,  src: img8,  title: "Cold Brew Session",  category: "Coffee"    },
  { id: 9,  src: img9,  title: "Friends & Food",     category: "Customers" },
  { id: 10, src: img10, title: "Crispy Delights",    category: "Food"      },
  { id: 11, src: img11, title: "Warm Interiors",     category: "Ambience"  }
];

const categories = ["All", "Coffee", "Food", "Ambience", "Customers"];

const navLinks = ["Home", "Reservation", "Menu", "Gallery", "Contact"];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const lightboxVariants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.3, ease: "easeOut" } },
  exit:    { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
};


function HeroSection() {
  return (
    <section className="gallery-hero">
      <motion.div
        className="gallery-hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.p className="gallery-hero-eyebrow" variants={fadeUp}>
          ✦ Moments & Memories ✦
        </motion.p>
        <motion.h1 className="gallery-hero-heading" variants={fadeUp}>
          Our Gallery
        </motion.h1>
        <motion.p className="gallery-hero-sub" variants={fadeUp}>
          Moments, flavors, and memories captured at The Vibes Cafe.
        </motion.p>
      </motion.div>
      <div className="gallery-hero-wave" aria-hidden="true" />
    </section>
  );
}

function FilterBar({ active, onSelect }) {
  return (
    <motion.div
      className="gallery-filters"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {categories.map((cat) => (
        <motion.button
          key={cat}
          className={`gallery-filter-btn${active === cat ? " active" : ""}`}
          onClick={() => onSelect(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
}

function GalleryCard({ item, index, onClick }) {
  return (
    <motion.div
      className="gallery-card"
      custom={index}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      layout
      onClick={() => onClick(item)}
    >
      <img src={item.src} alt={item.title} loading="lazy" />
      <div className="gallery-card-overlay">
        <div className="gallery-card-overlay-inner">
          <span className="gallery-card-category">{item.category}</span>
          <h3 className="gallery-card-title">{item.title}</h3>
          <div className="gallery-card-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const item = items[current];

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-box"
        variants={lightboxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={item.id}
            src={item.src}
            alt={item.title}
            className="lightbox-img"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.28 }}
          />
        </AnimatePresence>

        {/* Footer */}
        <div className="lightbox-footer">
          <div className="lightbox-info">
            <span className="lightbox-category">{item.category}</span>
            <span className="lightbox-title">{item.title}</span>
          </div>
          <div className="lightbox-counter">
            {current + 1} / {items.length}
          </div>
        </div>

        {/* Nav arrows */}
        <button className="lightbox-arrow left" onClick={prev} aria-label="Previous">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button className="lightbox-arrow right" onClick={next} aria-label="Next">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

function ShowcaseSection() {
  const stats = [
    { value: "50+",  label: "Menu Items"   },
    { value: "2K+",  label: "Happy Guests" },
    { value: "4 ★",  label: "Rating"       },
    { value: "EST.", label: "2020"          },
  ];

  return (
    <section className="gallery-showcase">
      <motion.div
        className="gallery-showcase-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
      >
        {/* Left: featured image */}
        <motion.div className="showcase-img-wrap" variants={fadeUp}>
          <img src={img3} alt="Cafe ambience" className="showcase-img" />
          <div className="showcase-badge">
            <span>EST.</span>
            <strong>2020</strong>
          </div>
        </motion.div>

        {/* Right: text + stats */}
        <div className="showcase-text">
          <motion.p className="showcase-eyebrow" variants={fadeUp}>✦ Why Visit Us ✦</motion.p>
          <motion.h2 className="showcase-heading" variants={fadeUp}>
            Experience The Vibes
          </motion.h2>
          <motion.p className="showcase-body" variants={fadeUp}>
            Step into a world where every cup tells a story. From hand-poured lattes
            to wood-fired pizzas and curated interiors — The Vibes Cafe is your cozy
            escape in the heart of Aurad, Karnataka.
          </motion.p>

          <motion.div className="showcase-stats" variants={fadeUp}>
            {stats.filter((_, i) => i < 3).map((s) => (
              <div className="showcase-stat" key={s.label}>
                <span className="showcase-stat-value">{s.value}</span>
                <span className="showcase-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.a href="/menu" className="showcase-btn" variants={fadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            View Our Menu
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="gallery-cta">
      <div className="gallery-cta-pattern" aria-hidden="true" />
      <motion.div
        className="gallery-cta-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
      >
        <motion.p className="cta-eyebrow" variants={fadeUp}>✦ Join Us ✦</motion.p>
        <motion.h2 className="cta-heading" variants={fadeUp}>
          Create Your Next Memory With Us
        </motion.h2>
        <motion.p className="cta-sub" variants={fadeUp}>
          Book a table and let us take care of the rest — good food, great vibes.
        </motion.p>
        <motion.a
          href="/reservation"
          className="cta-btn"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Reserve A Table
        </motion.a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gallery-footer">
      <p>© {new Date().getFullYear()} The Vibes Cafe · Aurad, Karnataka, India</p>
    </footer>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  const openLightbox  = (item) => setLightboxIndex(filtered.findIndex((i) => i.id === item.id));
  const closeLightbox = () => setLightboxIndex(null);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
    {/* <TopBar />
    <Navbar /> */}
    <div className="gallery-page">
      
      <HeroSection />

      {/* ── Grid section ── */}
      <section className="gallery-grid-section">
        <FilterBar active={activeFilter} onSelect={setActiveFilter} />

        <motion.div className="gallery-grid" layout>
          <AnimatePresence>
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onClick={openLightbox}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <ShowcaseSection />
      <CTASection />
      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            startIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
