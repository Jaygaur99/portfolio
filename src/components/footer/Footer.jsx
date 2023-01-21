import React from "react";
import "./footer.css";
import { socialLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jay</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skill" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <a
            href={socialLinks.github}
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href={socialLinks.linkedin}
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
