import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#0c0c0c",
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <p>© {new Date().getFullYear()} Nubrix Solutions</p>

      <p>Building the future with AI, Cloud, and Mobile Technology.</p>
    </footer>
  );
}

export default Footer;
