import React, { useState } from "react";
import "./header.css";
import { projectsRepo } from "../../data/data";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".header");
    if (this.scrollY >= 80) scrollUp.classList.add("scroll-header");
    else scrollUp.classList.remove("scroll-header");
  });

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Jay
        </a>
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skill" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href={projectsRepo} className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            <li className="nav__item" onClick={toggleTheme}>
              <a href="#" className="nav__link">
                {theme === "light" ? (
                  <i class="bx bx-moon toggle__icon"></i>
                ) : (
                  <i class="bx bx-sun toggle__icon"></i>
                )}
              </a>
            </li>

            {/* <li className="nav__item" onClick={toggleTheme}>
              <button className="nav__link">
                {theme === "light" ? (
                  <i class="bx bx-moon toggle__icon"></i>
                ) : (
                  <i class="bx bx-sun toggle__icon"></i>
                )}
              </button>
            </li> */}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
