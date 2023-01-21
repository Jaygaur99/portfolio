import React from "react";
import "./contact.css";
import { contactData } from "../../data/data";

const Contact = () => {
  const contactCard = contactData.map((obj) => (
    <div className="contact__card" id={obj.id}>
      <i className={`bx ${obj.iconClass} contact__card-icon`}></i>

      <h3 className="contact__card-title">{obj.name}</h3>
      <span className="contact__card-data">{obj.text}</span>

      <a href={obj.link} className="contact__button">
        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  ));

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">{contactCard}</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
