import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <Reveal className="contact-top">
        <div className="sec-label">Get In Touch</div>
        <h2 className="sec-title">
          Contact <span>Information</span>
        </h2>
        <p>
          Need a repair, a CCTV setup, or a new website or app? We&apos;ve
          got you covered. Message or call us anytime.
        </p>
      </Reveal>
      <div className="contact-grid">
        <Reveal className="c-info">
          <div className="c-info-title">Reach Us Here</div>
          <div className="c-items">
            <a className="c-row c-row--primary" href="tel:+639243672984">
              <div className="c-ico">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              </div>
              <div>
                <div className="c-lbl">Call or Viber</div>
                <div className="c-val">0924-367-2984</div>
              </div>
            </a>
            <a
              className="c-row c-row--primary"
              href="https://www.facebook.com/dnldtrrs"
              target="_blank"
              rel="noopener"
            >
              <div className="c-ico">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </div>
              <div>
                <div className="c-lbl">Message on Facebook</div>
                <div className="c-val">@dnldtrrs</div>
              </div>
            </a>
            <div className="c-row c-row--wide">
              <div className="c-ico">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </div>
              <div>
                <div className="c-lbl">Service Area</div>
                <div className="c-val">Calamba City &amp; nearby Laguna areas</div>
              </div>
            </div>
            <p className="c-note">
              No walk-in office yet — we come to you! Message us your device
              model and the problem, and we&apos;ll schedule a home service or
              CCTV site visit. Web and app projects are handled online.
            </p>
          </div>
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1975543566235!2d121.17579647483211!3d14.225551187998844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63f7e92aeb7d%3A0xd1c3e1b96c7b6cc3!2sPansol%2C%20Calamba%2C%20Laguna%2C%20Philippines!5e0!3m2!1sen!2sph!4v1734743000000!5m2!1sen!2sph"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DTech Solutions service area"
            ></iframe>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          <div className="c-info-title">Send Us a Message</div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
