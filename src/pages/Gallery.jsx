import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

import img1  from "../assets/images/img1.jpeg";
import img2  from "../assets/images/img2.jpeg";
import img3  from "../assets/images/img3.jpeg";
import img4  from "../assets/images/img4.jpeg";
import img5  from "../assets/images/img5.jpeg";
import img6  from "../assets/images/img6.jpeg";
import img7  from "../assets/images/img7.jpeg";
import img8  from "../assets/images/img8.jpeg";
import img9  from "../assets/images/img9.jpeg";
import img10 from "../assets/images/img10.jpeg";
import img11 from "../assets/images/img11.jpeg";

// ─── DATA ────────────────────────────────────────────────────────────────────

const galleryItems = [
  { id: 1,  src: img1,  title: "Morning Brew",      category: "Coffee"    },
  { id: 2,  src: img2,  title: "Artisan Pizza",     category: "Food"      },
  { id: 3,  src: img3,  title: "Cozy Corner",       category: "Ambience"  },
  { id: 4,  src: img4,  title: "Latte Art",         category: "Coffee"    },
  { id: 5,  src: img5,  title: "Happy Moments",     category: "Customers" },
  { id: 6,  src: img6,  title: "Loaded Burger",     category: "Food"      },
  { id: 7,  src: img7,  title: "Golden Hour Vibes", category: "Ambience"  },
  { id: 8,  src: img8,  title: "Cold Brew Session", category: "Coffee"    },
  { id: 9,  src: img9,  title: "Friends & Food",    category: "Customers" },
  { id: 10, src: img10, title: "Crispy Delights",   category: "Food"      },
  { id: 11, src: img11, title: "Warm Interiors",    category: "Ambience"  },
];

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

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

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

function GalleryCard({ item, index }) {
  return (
    <motion.div
      className="gallery-card"
      custom={index}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      layout
    >
      <img src={item.src} alt={item.title} loading="lazy" />
    </motion.div>
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
  return (
    <div className="gallery-page">
      <HeroSection />

      <section className="gallery-grid-section">
        <motion.div className="gallery-grid" layout>
          <AnimatePresence>
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* <CTASection /> */}
      <Footer />
    </div>
  );
}