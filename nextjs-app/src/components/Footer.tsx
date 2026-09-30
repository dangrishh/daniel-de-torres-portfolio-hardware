export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="foot-brand-wrap">
          <div className="foot-brand">
            <div className="logo">
              <div className="logo-text">
                D<span>Tech</span> Solutions
              </div>
            </div>
          </div>
          <p className="foot-desc">
            Your all-in-one tech partner in Calamba City, Laguna. Phone,
            laptop &amp; PC repair, CCTV, and web &amp; mobile development —
            professional, fast, and affordable.
          </p>
          <div className="foot-social">
            <a
              href="https://www.facebook.com/dnldtrrs"
              target="_blank"
              rel="noopener"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
              </svg>
            </a>
            <a href="tel:+639243672984" title="Call us" aria-label="Call us">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="foot-col">
          <div className="foot-col-title">Services</div>
          <ul>
            <li>
              <a href="#services">Cellphone Repair</a>
            </li>
            <li>
              <a href="#services">Laptop Repair</a>
            </li>
            <li>
              <a href="#services">Computer Repair</a>
            </li>
            <li>
              <a href="#services">CCTV Installation</a>
            </li>
            <li>
              <a href="#services">Web &amp; Mobile Development</a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-col-title">Company</div>
          <ul>
            <li>
              <a href="#features">About</a>
            </li>
            <li>
              <a href="#testimonials">Reviews</a>
            </li>
            <li>
              <a href="#process">How It Works</a>
            </li>
            <li>
              <a href="#work">Our Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-col-title">Contact</div>
          <ul>
            <li>
              <a href="tel:+639243672984">0924-367-2984</a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/dnldtrrs"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="#contact">Calamba City, Laguna</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="foot-copy">
          DTech Solutions by Daniel De Torres · All Rights Reserved © 2025
        </div>
        <div className="foot-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
