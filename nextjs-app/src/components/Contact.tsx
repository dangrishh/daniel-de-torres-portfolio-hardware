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
          Mayroon kang sira na gadget? Ipa-fix mo na sa amin — mabilis, mura,
          at maaasahan. Message or call us anytime.
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
              href="https://web.facebook.com/dnldtrrs"
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
                <div className="c-lbl">Location</div>
                <div className="c-val">Pansol, Calamba City, Laguna, Philippines</div>
              </div>
            </div>
            <p className="c-note">
              Walk-ins welcome. For faster service, message us your device
              model and the problem before you drop by. Home service and CCTV
              site visits available around Calamba and nearby Laguna areas.
            </p>
            <div className="c-social-row">
              <span className="c-social-lbl">Also on</span>
              <div className="c-social-pills">
                <a
                  className="c-social-pill"
                  href="https://www.instagram.com/dnldtrrs"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="c-social-ico">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.37a4.49 4.49 0 1 1 0 8.98 4.49 4.49 0 0 1 0-8.98Zm0 7.4a2.91 2.91 0 1 0 0-5.82 2.91 2.91 0 0 0 0 5.82Zm5.72-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
                    </svg>
                  </span>
                  Instagram
                </a>
                <a
                  className="c-social-pill"
                  href="https://www.threads.com/@dnldtrrs"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="c-social-ico">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16.36 11.13c-.1-.05-.2-.09-.3-.13-.18-3.29-1.98-5.18-5-5.2h-.04c-1.81 0-3.31.77-4.24 2.17l1.66 1.14c.7-1.05 1.79-1.28 2.58-1.28h.03c.98 0 1.72.29 2.2.85.35.41.58.98.7 1.7a12.6 12.6 0 0 0-2.83-.14c-2.85.17-4.68 1.83-4.56 4.15.06 1.17.65 2.18 1.65 2.85.85.56 1.94.84 3.07.78 1.5-.08 2.67-.65 3.49-1.69.62-.79 1.01-1.81 1.19-3.1.72.44 1.26 1.01 1.55 1.7.5 1.18.53 3.12-1.05 4.7-1.39 1.38-3.06 1.98-5.58 2-2.8-.02-4.91-.92-6.28-2.66C3.32 17.35 2.66 15.1 2.64 12c.02-3.1.68-5.35 1.96-6.97C5.97 3.29 8.08 2.39 10.88 2.37c2.82.02 4.97.92 6.39 2.68.7.86 1.22 1.95 1.57 3.22l1.94-.52c-.42-1.56-1.09-2.91-2-4.03C16.96 1.5 14.3.35 10.89.33h-.01C7.48.35 4.85 1.5 3.06 3.75 1.48 5.76.66 8.55.64 12v.01c.02 3.44.84 6.24 2.42 8.24 1.79 2.25 4.42 3.4 7.83 3.42h.01c3.03-.02 5.17-.81 6.93-2.57 2.3-2.3 2.23-5.18 1.47-6.95-.54-1.27-1.58-2.3-3-3.02Zm-5.2 5.98c-1.25.07-2.55-.49-2.61-1.66-.05-.87.61-1.84 2.68-1.96.24-.01.47-.02.7-.02.75 0 1.46.07 2.1.21-.24 2.98-1.64 3.37-2.87 3.43Z" />
                    </svg>
                  </span>
                  Threads
                </a>
                <a
                  className="c-social-pill"
                  href="https://www.tiktok.com/@dnl.dtrrs"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="c-social-ico">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.67 5.67 0 0 0-.77-.05A5.68 5.68 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38v-3.1a4.28 4.28 0 0 1-3.24-1.47Z" />
                    </svg>
                  </span>
                  TikTok
                </a>
              </div>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1975543566235!2d121.17579647483211!3d14.225551187998844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63f7e92aeb7d%3A0xd1c3e1b96c7b6cc3!2sPansol%2C%20Calamba%2C%20Laguna%2C%20Philippines!5e0!3m2!1sen!2sph!4v1734743000000!5m2!1sen!2sph"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DTech Solutions location"
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
