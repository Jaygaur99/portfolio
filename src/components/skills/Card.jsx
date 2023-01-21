import React from "react";

const Card = ({ skills }) => {
  return (
    <>
      {Object.entries(skills).map(([sectionTitle, sectionSkills]) => (
        <div className="skills__content">
          <h3 className="skills__title">{sectionTitle}</h3>
          <div className="skills__box">
            {sectionSkills.map((skillArray) => (
              <div className="skills__group">
                {skillArray.map((skill) => (
                  <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills__name">{skill.name}</h3>
                      <span className="skills__level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
