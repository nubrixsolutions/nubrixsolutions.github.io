import React from "react";

function TechStack() {
  const tech = [
    "React",
    "Node.js",
    "Artificial Intelligence",
    "Cloud Computing",
    "Mobile Apps",
    "Data Analytics",
  ];

  return (
    <section className="tech">
      <h2>Technology Stack</h2>

      <p>
        At Nubrix Solutions we leverage modern technologies to build scalable,
        secure and future-ready digital platforms.
      </p>

      <div className="tech-grid">
        {tech.map((item, index) => (
          <div className="tech-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
