"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  SUPPLY_BRANDS,
  SUPPLY_CATEGORIES,
  SUPPLY_ITEMS,
  type SupplyBrand,
  type SupplyCategory,
  type SupplyItem,
} from "@/lib/supplyData";

type BrandFilter = "All" | SupplyBrand;
type CategoryFilter = "All" | SupplyCategory;

export default function SupplyCatalog() {
  const [brand, setBrand] = useState<BrandFilter>("All");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [activeItem, setActiveItem] = useState<SupplyItem | null>(null);

  const items = useMemo(() => {
    return SUPPLY_ITEMS.filter((item) => {
      if (brand !== "All" && item.brand !== brand) return false;
      if (category !== "All" && item.category !== category) return false;
      return true;
    });
  }, [brand, category]);

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <div className="supply-layout">
      <aside className="supply-sidebar">
        <div className="supply-filter-group">
          <div className="supply-filter-title">Brand</div>
          <div className="supply-filter-list">
            <button
              className={`supply-filter-btn${brand === "All" ? " active" : ""}`}
              onClick={() => setBrand("All")}
            >
              All Brands
            </button>
            {SUPPLY_BRANDS.map((b) => (
              <button
                key={b}
                className={`supply-filter-btn${brand === b ? " active" : ""}`}
                onClick={() => setBrand(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        <div className="supply-filter-group">
          <div className="supply-filter-title">Category</div>
          <div className="supply-filter-list">
            <button
              className={`supply-filter-btn${category === "All" ? " active" : ""}`}
              onClick={() => setCategory("All")}
            >
              All Categories
            </button>
            {SUPPLY_CATEGORIES.map((c) => (
              <button
                key={c}
                className={`supply-filter-btn${category === c ? " active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="supply-sidebar-note">
          Prices are not listed online — message us with the model you need
          and we&apos;ll send a quote.
        </div>
      </aside>
      <div className="supply-grid">
        {items.length === 0 && (
          <p className="supply-empty">No items match those filters.</p>
        )}
        {items.map((item) => (
          <div className="supply-card" key={item.id}>
            <button
              type="button"
              className="supply-card-img"
              onClick={() => setActiveItem(item)}
              aria-label={`View larger photo of ${item.name}`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
              />
              <span className="supply-card-img-zoom">🔍 View photo</span>
            </button>
            <div className="supply-card-top">
              <span className="supply-brand-badge">{item.brand}</span>
              <span className="supply-category-badge">{item.category}</span>
            </div>
            <div className="supply-card-model">{item.model}</div>
            <div className="supply-card-name">{item.name}</div>
            <ul className="supply-specs">
              {item.specs.map((spec) => (
                <li key={spec.label}>
                  <span className="supply-spec-label">{spec.label}</span>
                  <span className="supply-spec-value">{spec.value}</span>
                </li>
              ))}
            </ul>
            <Link href="/#contact" className="supply-card-cta">
              Inquire for Pricing →
            </Link>
          </div>
        ))}
      </div>

      {activeItem && (
        <div
          className="supply-modal-backdrop"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="supply-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="supply-modal-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="supply-modal-img">
              <Image
                src={activeItem.image}
                alt={activeItem.name}
                fill
                sizes="(max-width: 640px) 90vw, 560px"
                priority
              />
            </div>
            <div className="supply-modal-info">
              <div className="supply-card-top">
                <span className="supply-brand-badge">{activeItem.brand}</span>
                <span className="supply-category-badge">
                  {activeItem.category}
                </span>
              </div>
              <div className="supply-card-model">{activeItem.model}</div>
              <div className="supply-card-name">{activeItem.name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
