import React from "react";
import { aboutData } from "../../data/data";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">{aboutData.experience}</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">{aboutData.completed}</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">{aboutData.support}</span>
      </div>
    </div>
  );
};

export default Info;
