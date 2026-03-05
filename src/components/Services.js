import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        <div className="card">
          <h3>Artificial Intelligence</h3>
          <p>
            Build intelligent solutions that automate processes and unlock new
            possibilities for modern businesses.
          </p>
        </div>

        <div className="card">
          <h3>Cloud Technology</h3>
          <p>
            Secure and scalable cloud infrastructure that powers tomorrow’s
            enterprises.
          </p>
        </div>

        <div className="card">
          <h3>Mobile App Development</h3>
          <p>
            Build powerful mobile experiences that connect your business with
            users everywhere.
          </p>
        </div>

        <div className="card">
          <h3>Web Development</h3>
          <p>
            Modern websites and digital platforms designed for performance,
            scalability, and growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
