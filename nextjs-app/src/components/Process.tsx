import Reveal from "./Reveal";

const STEPS = [
  {
    icon: "📞",
    num: 1,
    title: "Contact Us",
    desc: "Message us on Facebook, Instagram, Threads, or TikTok — or call 0924-367-2984 and tell us your device and the problem.",
  },
  {
    icon: "🔍",
    num: 2,
    title: "Free Diagnosis",
    desc: "We inspect your device and give you an honest quote — no surprises, no pressure to proceed.",
  },
  {
    icon: "🔧",
    num: 3,
    title: "Repair",
    desc: "We use quality parts and professional tools to fix your device right the first time.",
  },
  {
    icon: "✅",
    num: 4,
    title: "Pick Up",
    desc: "Device tested, cleaned, and ready. Pick it up in person or request delivery to your address.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="process-inner">
        <Reveal className="process-header">
          <div className="sec-label">How It Works</div>
          <h2 className="sec-title">
            Simple <span>4-Step Process</span>
          </h2>
          <p
            className="sec-sub"
            style={{ margin: "10px auto 0", maxWidth: 440 }}
          >
            Getting your device fixed has never been easier.
          </p>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal className="step" delay={i * 0.1} key={s.num}>
              <div className="step-circle">
                {s.icon} <span className="step-num">{s.num}</span>
              </div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
