import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Nubrix</h2>

      <p>
        Let’s build the future together. Reach out to discuss your project or
        collaboration.
      </p>

      <div className="contact-buttons">
        <a
          href="https://wa.me/917992300383"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-btn">
            <FaWhatsapp className="btn-icon" />
            WhatsApp Us
          </button>
        </a>

        <a href="tel:7992300383">
          <button className="call-btn">
            <FaPhone className="btn-icon" />
            Call Now
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
