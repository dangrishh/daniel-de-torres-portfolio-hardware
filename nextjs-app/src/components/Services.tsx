"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { ServiceKey } from "@/lib/types";
import Reveal from "./Reveal";

interface ServiceDef {
  key: ServiceKey;
  badge: string;
  emoji: string;
  name: string;
  defaultImg: string;
  gallery: string[];
  alt: string;
  tagline: string;
  highlights: string[];
  items: string[];
}

const SERVICES: ServiceDef[] = [
  {
    key: "cellphone",
    badge: "📱 Cellphone",
    emoji: "📱",
    name: "Cellphone Repair",
    defaultImg:
      "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?w=1200&q=80",
      "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?w=1200&q=80",
      "https://images.unsplash.com/photo-1746005514011-ea00280f3b6e?w=1200&q=80",
    ],
    alt: "Cellphone repair",
    tagline: "Cracked screen? Won't charge? Consider it fixed.",
    highlights: ["Screen", "Battery", "Charging", "Motherboard"],
    items: [
      "LCD / Screen Replacement",
      "Battery Replacement",
      "Charging Port & Pin Repair",
      "Camera Repair",
      "Speaker, Earpiece & Mic",
      "Power / Volume Button",
      "Water Damage Cleaning",
      "Software & Firmware Flashing",
      "Motherboard Repair (Any Issue)",
    ],
  },
  {
    key: "laptop",
    badge: "💻 Laptop",
    emoji: "💻",
    name: "Laptop Repair",
    defaultImg:
      "https://images.unsplash.com/photo-1544281679-a59fb2359715?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544281679-a59fb2359715?w=1200&q=80",
      "https://images.unsplash.com/photo-1721333089073-215a56fd710c?w=1200&q=80",
      "https://images.unsplash.com/photo-1705494833979-9377fbdee229?w=1200&q=80",
    ],
    alt: "Laptop repair",
    tagline: "Slow, overheating, or won't turn on? We've got you.",
    highlights: [
      "Reformat",
      "SSD / RAM",
      "Cleaning",
      "Motherboard",
    ],
    items: [
      "Reformat & OS Reinstall",
      "Deep Cleaning & Repaste",
      "SSD & RAM Upgrade",
      "Laptop Screen Replacement",
      "Keyboard & Battery Replacement",
      "Malware / Virus Removal",
      "Activate Windows & MS Office",
      "Install Any Software",
      "Motherboard Repair (Any Issue)",
    ],
  },
  {
    key: "computer",
    badge: "🖥️ Computer",
    emoji: "🖥️",
    name: "Computer Repair",
    defaultImg:
      "https://images.unsplash.com/photo-1591238372338-22d30c883a86?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591238372338-22d30c883a86?w=1200&q=80",
      "https://images.unsplash.com/photo-1728299178576-3cf10b17132a?w=1200&q=80",
      "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?w=1200&q=80",
    ],
    alt: "Desktop computer repair",
    tagline: "No display? Won't boot? Or ready for a dream build?",
    highlights: [
      "No Display",
      "PC Build",
      "Data Recovery",
      "Motherboard",
    ],
    items: [
      "Desktop PC Troubleshooting",
      "Custom PC Build & Assembly",
      "Hardware Upgrade & Replacement",
      "No Display / No Boot Fix",
      "Reformat & OS Installation",
      "Cleaning & Thermal Paste",
      "Printer & Peripheral Setup",
      "Data Backup & Recovery",
      "Motherboard Repair (Any Issue)",
    ],
  },
  {
    key: "cctv",
    badge: "📷 CCTV",
    emoji: "📷",
    name: "CCTV Services",
    defaultImg:
      "https://images.unsplash.com/photo-1589935447067-5531094415d1?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589935447067-5531094415d1?w=1200&q=80",
      "https://images.unsplash.com/photo-1650172452637-8a1c183f2524?w=1200&q=80",
      "https://images.unsplash.com/photo-1692371051298-639282a01549?w=1200&q=80",
    ],
    alt: "CCTV installation",
    tagline: "Watch your home or store from anywhere, 24/7.",
    highlights: [
      "Installation",
      "View on Phone",
      "DVR / NVR",
      "Maintenance",
    ],
    items: [
      "CCTV Installation",
      "CCTV Maintenance",
      "Camera Positioning & Setup",
      "DVR / NVR Configuration",
      "Remote Viewing Setup",
      "Cable Management",
      "System Upgrade & Repair",
      "CCTV Services & More",
    ],
  },
  {
    key: "webdev",
    badge: "🌐 Web & Mobile",
    emoji: "🌐",
    name: "Web & Mobile Development",
    defaultImg:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1200&q=80",
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    ],
    alt: "Web and mobile app development",
    tagline: "Take your business online with a website or app.",
    highlights: [
      "Website",
      "Mobile App",
      "Online Store",
      "UI / UX",
    ],
    items: [
      "Website Design & Development",
      "Mobile App Development",
      "E-Commerce Solutions",
      "UI / UX Design",
      "API Integration",
      "Custom Software Solutions",
      "Website Maintenance & Support",
      "Hosting & Domain Setup",
    ],
  },
];

const BRANDS = [
  "iPhone",
  "Samsung",
  "Xiaomi / Redmi",
  "OPPO",
  "vivo",
  "realme",
  "Infinix",
  "HUAWEI",
  "Acer",
  "ASUS",
  "Lenovo",
  "HP",
  "Dell",
  "MacBook",
  "Hikvision",
  "Dahua",
  "+ More",
];

export default function Services() {
  const [overrides, setOverrides] = useState<
    Partial<Record<ServiceKey, string>>
  >({});
  const [activeService, setActiveService] = useState<ServiceDef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedKey, setExpandedKey] = useState<ServiceKey | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, "site", "media"));
        if (!snap.exists() || cancelled) return;
        const data = snap.data();
        if (data.services) setOverrides(data.services);
      } catch (err) {
        console.warn("Site media: using default service images", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!activeService) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveService(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % activeService.gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex(
          (i) =>
            (i - 1 + activeService.gallery.length) %
            activeService.gallery.length,
        );
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeService]);

  function openGallery(svc: ServiceDef) {
    setActiveService(svc);
    setActiveIndex(0);
  }

  return (
    <section id="services">
      <div className="services-inner">
        <Reveal className="services-header">
          <div className="sec-label">What We Do</div>
          <h2 className="sec-title">
            How Can We <span>Help You Today?</span>
          </h2>
          <p className="sec-sub">
            Tap a photo to see our work. Message us — we reply fast!
          </p>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((svc, i) => {
            const expanded = expandedKey === svc.key;
            return (
              <Reveal className="svc-card" delay={i * 0.08} key={svc.key}>
                <button
                  type="button"
                  className="svc-card-img"
                  onClick={() => openGallery(svc)}
                  aria-label={`View ${svc.name} photos`}
                >
                  <Image
                    src={overrides[svc.key] || svc.defaultImg}
                    alt={svc.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="svc-card-img-overlay"></div>
                  <span className="svc-photos-pill">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-4.5-4.5L6 21" />
                    </svg>
                    {svc.gallery.length} Photos
                  </span>
                  <div className="svc-img-title">{svc.name}</div>
                </button>
                <div className="svc-body">
                  <p className="svc-tagline">{svc.tagline}</p>
                  <div className="svc-chips">
                    {svc.highlights.map((h) => (
                      <span className="svc-chip" key={h}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {h}
                      </span>
                    ))}
                  </div>
                  {expanded && (
                    <ul className="svc-list">
                      {svc.items.map((item) => (
                        <li key={item}>
                          <span className="svc-check" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="svc-actions">
                    <button
                      type="button"
                      className="svc-more"
                      aria-expanded={expanded}
                      onClick={() => setExpandedKey(expanded ? null : svc.key)}
                    >
                      {expanded ? "Show less" : `All ${svc.items.length} services`}
                      <svg
                        className={expanded ? "flip" : ""}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <a href="#contact" className="svc-btn">
                      Inquire
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Reveal className="brands-wrap">
        <div className="brands-title">Brands We Service</div>
        <div className="brands-list">
          {BRANDS.map((b) => (
            <div className="brand-pill" key={b}>
              {b}
            </div>
          ))}
        </div>
      </Reveal>

      {activeService && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveService(null)}
        >
          <div
            className="lightbox-box"
            role="dialog"
            aria-modal="true"
            aria-label={activeService.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveService(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="lightbox-img">
              <Image
                src={activeService.gallery[activeIndex]}
                alt={`${activeService.name} photo ${activeIndex + 1}`}
                fill
                sizes="(max-width: 640px) 90vw, 560px"
                priority
              />
              {activeService.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    className="work-nav prev"
                    aria-label="Previous photo"
                    onClick={() =>
                      setActiveIndex(
                        (i) =>
                          (i - 1 + activeService.gallery.length) %
                          activeService.gallery.length,
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="work-nav next"
                    aria-label="Next photo"
                    onClick={() =>
                      setActiveIndex(
                        (i) => (i + 1) % activeService.gallery.length,
                      )
                    }
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="lightbox-info">
              <div className="svc-name">{activeService.name}</div>
              {activeService.gallery.length > 1 && (
                <div className="lightbox-dots">
                  {activeService.gallery.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`work-dot${i === activeIndex ? " active" : ""}`}
                      aria-label={`Go to photo ${i + 1}`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
