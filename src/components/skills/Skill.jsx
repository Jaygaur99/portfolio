import React from "react";
import "./skill.css";
import { skills } from "../../data/data";
import Card from "./Card";

const Skill = () => {
  return (
    <section className="skills section" id="skill">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical Level</span>

      <div className="skills__container container grid">
        <Card skills={skills} />
      </div>
    </section>
  );
};

export default Skill;
