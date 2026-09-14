import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Most repairs are done same-day or within 24 hours, and you'll get real-time updates throughout the process.",
  },
  {
    icon: "🔍",
    title: "Free Diagnosis",
    desc: "We check your device and give you an honest quote first. No fix, no charge — you decide before we start.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Transparent rates with no hidden fees. You'll know exactly what you're paying before any work begins.",
  },
  {
    icon: "🔒",
    title: "Data Safe & Private",
    desc: "Your photos, messages, and files stay private. We never access anything we don't need to for the repair.",
  },
  {
    icon: "🏠",
    title: "Home Service Available",
    desc: "Can't come to us? We go to you. On-site visits and CCTV installations within Calamba City and nearby Laguna areas.",
  },
  {
    icon: "📞",
    title: "7-Day Support",
    desc: "We're available seven days a week. Reach us on Facebook, Instagram, Threads, TikTok, or Viber — we respond fast.",
  },
];

export default function Features() {
  return (
    <section id="features">
      <Reveal className="features-header">
        <div className="sec-label">Why Choose Us</div>
        <h2 className="sec-title">
          Our <span>Featured Benefits</span>
        </h2>
        <p className="sec-sub" style={{ margin: "10px auto 0", maxWidth: 480 }}>
          Everything you need from a trusted gadget repair partner.
        </p>
      </Reveal>
      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <Reveal className="feat-card" delay={i * 0.07} key={f.title}>
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-title">{f.title}</div>
            <div className="feat-desc">{f.desc}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
