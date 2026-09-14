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
  alt: string;
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
    alt: "Cellphone repair",
    items: [
      "LCD / Screen Replacement",
      "Battery Replacement",
      "Charging Port & Pin Repair",
      "Camera Repair",
      "Speaker, Earpiece & Mic",
      "Power / Volume Button",
      "Water Damage Cleaning",
      "Software & Firmware Flashing",
    ],
  },
  {
    key: "laptop",
    badge: "💻 Laptop",
    emoji: "💻",
    name: "Laptop Repair",
    defaultImg:
      "https://images.unsplash.com/photo-1544281679-a59fb2359715?w=700&q=80",
    alt: "Laptop repair",
    items: [
      "Reformat & OS Reinstall",
      "Deep Cleaning & Repaste",
      "SSD & RAM Upgrade",
      "Laptop Screen Replacement",
      "Keyboard & Battery Replacement",
      "Malware / Virus Removal",
      "Activate Windows & MS Office",
      "Install Any Software",
    ],
  },
  {
    key: "computer",
    badge: "🖥️ Computer",
    emoji: "🖥️",
    name: "Computer Repair",
    defaultImg:
      "https://images.unsplash.com/photo-1591238372338-22d30c883a86?w=700&q=80",
    alt: "Desktop computer repair",
    items: [
      "Desktop PC Troubleshooting",
      "Custom PC Build & Assembly",
      "Hardware Upgrade & Replacement",
      "No Display / No Boot Fix",
      "Reformat & OS Installation",
      "Cleaning & Thermal Paste",
      "Printer & Peripheral Setup",
      "Data Backup & Recovery",
    ],
  },
  {
    key: "cctv",
    badge: "📷 CCTV",
    emoji: "📷",
    name: "CCTV Services",
    defaultImg:
      "https://images.unsplash.com/photo-1589935447067-5531094415d1?w=700&q=80",
    alt: "CCTV installation",
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

  return (
    <section id="services">
      <div className="services-inner">
        <Reveal className="services-header">
          <div className="sec-label">What We Fix</div>
          <h2 className="sec-title">
            Our <span>Repair Services</span>
          </h2>
          <p className="sec-sub">
            Four areas. One trusted technician. Your device is in good hands.
          </p>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <Reveal className="svc-card" delay={i * 0.08} key={svc.key}>
              <div className="svc-card-img">
                <Image
                  src={overrides[svc.key] || svc.defaultImg}
                  alt={svc.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="svc-card-img-overlay"></div>
                <div className="svc-badge">{svc.badge}</div>
                <div className="svc-icon-big">{svc.emoji}</div>
              </div>
              <div className="svc-body">
                <div className="svc-name">{svc.name}</div>
                <ul className="svc-list">
                  {svc.items.map((item) => (
                    <li key={item}>
                      <span className="svc-check">●</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="svc-btn">
                  Contact Us →
                </a>
              </div>
            </Reveal>
          ))}
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
    </section>
  );
}
