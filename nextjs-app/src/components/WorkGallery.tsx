"use client";

import { useEffect, useRef, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { GalleryItem } from "@/lib/types";
import Reveal from "./Reveal";

export default function WorkGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const q = query(
          collection(db, "site", "media", "gallery"),
          orderBy("createdAt", "desc"),
        );
        const snaps = await getDocs(q);
        const loaded: GalleryItem[] = [];
        snaps.forEach((docSnap) => {
          const item = docSnap.data() as GalleryItem;
          if (item.active === false) return;
          loaded.push(item);
        });
        if (!cancelled) setItems(loaded);
      } catch (err) {
        console.warn("Site media: gallery unavailable", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) v.play().catch(() => {});
      else v.pause();
    });
  }, [index]);

  useEffect(() => {
    if (items.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length]);

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const startAutoplay = () => {
    stopAutoplay();
    if (items.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
  };

  if (items.length === 0) return null;

  const goTo = (i: number) => {
    setIndex(i);
    startAutoplay();
  };

  return (
    <section id="work">
      <Reveal className="work-header">
        <div className="sec-label">Our Work</div>
        <h2 className="sec-title">
          Recent <span>Repairs & Installs</span>
        </h2>
        <p className="sec-sub">
          A look at devices we&apos;ve fixed and CCTV systems we&apos;ve
          installed.
        </p>
      </Reveal>
      <Reveal
        className="work-carousel"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div
          className="work-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div className="work-slide" key={i}>
              <div className="work-slide-media">
                {item.type === "video" ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={item.url}
                    muted
                    loop
                    playsInline
                    autoPlay={i === 0}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.url}
                    alt={item.caption || "Our work"}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                )}
              </div>
              {item.caption && (
                <div className="work-caption">{item.caption}</div>
              )}
            </div>
          ))}
        </div>
        {items.length > 1 && (
          <>
            <button
              className="work-nav prev"
              aria-label="Previous slide"
              onClick={() => goTo((index - 1 + items.length) % items.length)}
            >
              ‹
            </button>
            <button
              className="work-nav next"
              aria-label="Next slide"
              onClick={() => goTo((index + 1) % items.length)}
            >
              ›
            </button>
          </>
        )}
      </Reveal>
      {items.length > 1 && (
        <div className="work-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`work-dot${i === index ? " active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
