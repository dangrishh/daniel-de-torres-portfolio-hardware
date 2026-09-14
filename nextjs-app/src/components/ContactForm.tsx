"use client";

import { useState } from "react";

const BRAND_OPTIONS = [
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
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [brand, setBrand] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const selectedBrand = (
      form.elements.namedItem("device") as HTMLSelectElement
    ).value;
    const otherBrand = form.elements.namedItem(
      "deviceOther",
    ) as HTMLInputElement | null;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      facebook: (form.elements.namedItem("facebook") as HTMLInputElement)
        .value,
      device:
        selectedBrand === "Other" && otherBrand
          ? otherBrand.value
          : selectedBrand,
      concern: (form.elements.namedItem("concern") as HTMLTextAreaElement)
        .value,
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("sent");
      form.reset();
      setBrand("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            maxLength={80}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-phone">Contact Number</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            placeholder="09XX-XXX-XXXX"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={120}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-facebook">Facebook Profile (optional)</label>
          <input
            id="cf-facebook"
            name="facebook"
            type="text"
            maxLength={150}
            placeholder="facebook.com/yourprofile"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="cf-device">
          Model / Brand of Cellphone, CCTV, Laptop or PC
        </label>
        <select
          id="cf-device"
          name="device"
          required
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled>
            Select a brand
          </option>
          {BRAND_OPTIONS.map((b) => (
            <option value={b} key={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      {brand === "Other" && (
        <div className="form-group">
          <label htmlFor="cf-device-other">Please specify the brand</label>
          <input
            id="cf-device-other"
            name="deviceOther"
            type="text"
            required
            maxLength={120}
            placeholder="e.g. TP-Link, Cherry Mobile, Wortmann..."
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="cf-concern">Concern</label>
        <textarea
          id="cf-concern"
          name="concern"
          required
          maxLength={1000}
          rows={5}
          placeholder="Tell us what's wrong with your device..."
        />
      </div>
      <button
        type="submit"
        className="btn-primary form-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="form-status success">
          Thanks! Your message was sent — we&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error">{errorMsg}</p>
      )}
    </form>
  );
}
