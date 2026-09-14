"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Reveal from "./Reveal";

const DEFAULT_HERO_IMG =
  "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=560&q=80";

export default function Hero() {
  const [heroImg, setHeroImg] = useState(DEFAULT_HERO_IMG);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, "site", "media"));
        if (!snap.exists() || cancelled) return;
        const data = snap.data();
        if (data.hero) setHeroImg(data.hero);
      } catch (err) {
        console.warn("Site media: using default hero image", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="hero">
      <Reveal className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span> Phone · Laptop · PC · CCTV
        </div>
        <h1 className="hero-h1">
          <span className="line-plain">Any Gadget Problem?</span>
          <span className="line-grad">Ipa-Fix mo na!</span>
        </h1>
        <p className="hero-p">
          Professional repair services for cellphones, laptops, desktop
          computers, and CCTV systems in Calamba City, Laguna. Fast,
          affordable, and handled by a trusted technician: Daniel De Torres.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            🔧 View Services
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Us →
          </a>
        </div>
        <div className="hero-stats">
          <div className="h-stat">
            <div className="h-stat-num">500+</div>
            <div className="h-stat-label">Devices Fixed</div>
          </div>
          <div className="h-stat">
            <div className="h-stat-num">6+</div>
            <div className="h-stat-label">Years Experience</div>
          </div>
          <div className="h-stat">
            <div className="h-stat-num">24H</div>
            <div className="h-stat-label">Fast Turnaround</div>
          </div>
        </div>
      </Reveal>
      <Reveal className="hero-right" delay={0.2}>
        <div className="phone-mock-wrap">
          <div className="phone-glow"></div>
          <div className="phone-img-wrap">
            <Image
              src={heroImg}
              alt="Cellphone repair"
              fill
              sizes="280px"
              priority
            />
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
