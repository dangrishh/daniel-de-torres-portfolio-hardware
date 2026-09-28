"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Reveal from "./Reveal";

interface Slide {
  src: string;
  label: string;
  icon: string;
}

const SLIDES: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?w=700&q=80",
    label: "Cellphone Repair",
    icon: "📱",
  },
  {
    src: "https://images.unsplash.com/photo-1544281679-a59fb2359715?w=700&q=80",
    label: "Laptop Repair",
    icon: "💻",
  },
  {
    src: "https://images.unsplash.com/photo-1591238372338-22d30c883a86?w=700&q=80",
    label: "Computer Repair",
    icon: "🖥️",
  },
  {
    src: "https://images.unsplash.com/photo-1589935447067-5531094415d1?w=700&q=80",
    label: "CCTV Installation",
    icon: "📷",
  },
  {
    src: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?w=700&q=80",
    label: "Mobile App Development",
    icon: "📲",
  },
  {
    src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=700&q=80",
    label: "Website & Software",
    icon: "🌐",
  },
];

const SLIDE_MS = 3500;

export default function Hero() {
  const [slides, setSlides] = useState<Slide[]>(SLIDES);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, "site", "media"));
        if (!snap.exists() || cancelled) return;
        const data = snap.data();
        if (data.hero) {
          setSlides([
            { src: data.hero, label: "DTech Solutions", icon: "🔧" },
            ...SLIDES,
          ]);
        }
      } catch (err) {
        console.warn("Site media: using default hero images", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[active];

  return (
    <section id="hero">
      <Reveal className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span> Phone · Laptop · PC · CCTV
          · Web
        </div>
        <h1 className="hero-h1">
          <span className="line-plain">Any Gadget Problem?</span>
          <span className="line-grad">Ipa-Fix mo na!</span>
        </h1>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            🔧 View Services
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Us →
          </a>
        </div>
      </Reveal>
      <Reveal className="hero-right" delay={0.2}>
        <div className="phone-mock-wrap">
          <div className="phone-glow"></div>
          <div className="phone-img-wrap">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={`hero-slide${i === active ? " active" : ""}`}
                aria-hidden={i !== active}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  sizes="280px"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="hero-slide-label" key={current.label}>
              <span>{current.icon}</span> {current.label}
            </div>
            <div className="hero-slide-dots">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`hero-slide-dot${i === active ? " active" : ""}`}
                  aria-label={`Show ${slide.label}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
          <div className="chip chip-1">
            <div className="chip-icon">⭐</div>
            <div>
              <div className="chip-label">Rating</div>
              <div className="chip-val">4.9 / 5.0</div>
            </div>
          </div>
          <div className="chip chip-2">
            <div className="chip-icon">✅</div>
            <div>
              <div className="chip-label">Repaired</div>
              <div className="chip-val">500+ Devices</div>
            </div>
          </div>
          <div className="chip chip-3">
            <div className="chip-icon">⚡</div>
            <div>
              <div className="chip-label">Turnaround</div>
              <div className="chip-val">Same Day</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
