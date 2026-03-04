import React from "react";
import "./../styles/main.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Nubrix</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>

      <button className="btn">Get Started</button>
    </nav>
  );
}

export default Navbar;
