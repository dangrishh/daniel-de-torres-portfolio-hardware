import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    initials: "MR",
    name: "Maria R.",
    loc: "📍 Calamba City",
    quote:
      "Fixed my cracked phone screen in less than an hour. Very affordable and the result was perfect. Will definitely come back!",
  },
  {
    initials: "JL",
    name: "Joel L.",
    loc: "📍 Los Baños, Laguna",
    quote:
      "My laptop was so slow and full of viruses. After the reformat and SSD upgrade it feels brand new! Very professional and honest.",
  },
  {
    initials: "AC",
    name: "Ana C.",
    loc: "📍 Pansol, Calamba",
    quote:
      "Had 4 CCTV cameras installed at our house. Very neat installation and the remote viewing works flawlessly. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <Reveal className="test-header">
        <div className="sec-label">Customer Reviews</div>
        <h2 className="sec-title">
          What Our <span>Customers Say</span>
        </h2>
      </Reveal>
      <div className="test-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal className="test-card" delay={i * 0.1} key={t.name}>
            <div className="test-stars">★★★★★</div>
            <p className="test-quote">&quot;{t.quote}&quot;</p>
            <div className="test-author">
              <div className="test-ava">{t.initials}</div>
              <div>
                <div className="test-name">{t.name}</div>
                <div className="test-loc">{t.loc}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
