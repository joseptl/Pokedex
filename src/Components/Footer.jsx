import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="autor">
        <p>Pastor 2021</p>
      </div>
      <div className="contact-section-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/espanol/joseptl"
        >
          <i className="fab fa-free-code-camp"></i>
          <span>FCC</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jose-pastor-torin-lucena-b24231207"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/jptlDev?s=08"
        >
          <i className="fab fa-twitter"></i>
          <span>Twitter</span>
        </a>
      </div>
    </footer>
  );
}
