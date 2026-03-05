import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Our Projects</h2>

      <p>
        From AI platforms to cloud-native systems, we deliver solutions that
        transform businesses.
      </p>

      <div className="portfolio-grid">
        <div className="portfolio-card">
          <h3>AI Analytics Platform</h3>
          <p>Data driven insights for enterprise decision making.</p>
        </div>

        <div className="portfolio-card">
          <h3>Cloud Enterprise Suite</h3>
          <p>Secure and scalable enterprise infrastructure.</p>
        </div>

        <div className="portfolio-card">
          <h3>Mobile Commerce App</h3>
          <p>Next-generation mobile shopping experience.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
