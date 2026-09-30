"use client";

import { useState } from "react";

const SERVICE_GROUPS = [
  {
    label: "📱 Cellphone",
    options: [
      "iPhone",
      "Samsung",
      "Xiaomi / Redmi",
      "OPPO",
      "vivo",
      "realme",
      "Infinix",
      "HUAWEI",
    ],
  },
  {
    label: "💻 Laptop / PC",
    options: [
      "Acer",
      "ASUS",
      "Lenovo",
      "HP",
      "Dell",
      "MacBook",
      "Custom PC Build",
    ],
  },
  { label: "📷 CCTV", options: ["Hikvision", "Dahua"] },
  {
    label: "🌐 Web & Mobile Development",
    options: [
      "Website Development",
      "Mobile App Development",
      "E-Commerce / Online Store",
      "Custom Software / System",
      "UI / UX Design",
      "Website Maintenance / Hosting",
    ],
  },
];

const DEV_OPTIONS = SERVICE_GROUPS[3].options;

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
      facebook: (form.elements.namedItem("facebook") as HTMLInputElement).value,
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
          <input id="cf-name" name="name" type="text" required maxLength={80} />
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
        <label htmlFor="cf-device">What do you need help with?</label>
        <select
          id="cf-device"
          name="device"
          required
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled>
            Select a device brand or service
          </option>
          {SERVICE_GROUPS.map((group) => (
            <optgroup label={group.label} key={group.label}>
              {group.options.map((b) => (
                <option value={b} key={b}>
                  {b}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      {brand === "Other" && (
        <div className="form-group">
          <label htmlFor="cf-device-other">
            Please specify the brand or service
          </label>
          <input
            id="cf-device-other"
            name="deviceOther"
            type="text"
            required
            maxLength={120}
            placeholder="e.g. Cherry Mobile, TP-Link, POS system..."
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
          placeholder={
            DEV_OPTIONS.includes(brand)
              ? "Tell us about your project — what it's for, key features, and your timeline..."
              : "Tell us what's wrong with your device, or what you need..."
          }
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
      {status === "error" && <p className="form-status error">{errorMsg}</p>}
    </form>
  );
}
