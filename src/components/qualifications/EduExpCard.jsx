import React from "react";

const EduExpCard = ({ obj }) => {
  console.log(obj);
  if (obj.pos === "l") {
    return (
      <>
        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">{obj.name || obj.title}</h3>
            <span className="qualification__subtitle">
              {obj.percentage || obj.company}
            </span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt">{obj.duration}</i>
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="qualification__data">
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">{obj.name || obj.title}</h3>
            <span className="qualification__subtitle">
              {obj.percentage || obj.company}
            </span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt">{obj.duration}</i>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default EduExpCard;
