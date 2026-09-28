import Link from "next/link";
import Reveal from "./Reveal";

const BENEFITS = [
  {
    icon: "🛡️",
    title: "Deter Crime",
    desc: "Visible cameras discourage break-ins, theft, and vandalism before they even happen.",
  },
  {
    icon: "📱",
    title: "Watch From Anywhere",
    desc: "View your home or store live on your phone — anytime, anywhere — using the Hik-Connect or DMSS app.",
  },
  {
    icon: "🌙",
    title: "Clear Night Vision",
    desc: "Built-in IR and smart light let you see sharp footage even in complete darkness.",
  },
  {
    icon: "🎥",
    title: "Recorded Evidence",
    desc: "Footage is saved on your DVR/NVR — ready for insurance claims or reporting incidents to the barangay or police.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Peace of Mind",
    desc: "Keep an eye on your family, staff, or property even when you're not there.",
  },
  {
    icon: "🔧",
    title: "Pro Installation & Support",
    desc: "Neat cabling, correct camera angles, phone app setup, and after-sales support — done right the first time.",
  },
];

export default function CctvBenefits() {
  return (
    <section id="cctv-benefits">
      <Reveal className="features-header">
        <div className="sec-label">Why Install CCTV?</div>
        <h2 className="sec-title">
          Protect What <span>Matters Most</span>
        </h2>
        <p className="sec-sub" style={{ margin: "10px auto 0", maxWidth: 520 }}>
          For homes, sari-sari stores, offices, and warehouses around Calamba
          and nearby Laguna areas.
        </p>
      </Reveal>
      <div className="features-grid">
        {BENEFITS.map((b, i) => (
          <Reveal className="feat-card" delay={i * 0.07} key={b.title}>
            <div className="feat-icon">{b.icon}</div>
            <div className="feat-title">{b.title}</div>
            <div className="feat-desc">{b.desc}</div>
          </Reveal>
        ))}
      </div>
      <Reveal className="cctv-cta">
        <div>
          <div className="cctv-cta-title">Free site survey &amp; quotation</div>
          <div className="cctv-cta-sub">
            We visit, check your area, and recommend the right number of
            cameras — no obligation.
          </div>
        </div>
        <Link href="/#contact" className="btn-primary">
          Book a Free Survey →
        </Link>
      </Reveal>
    </section>
  );
}
