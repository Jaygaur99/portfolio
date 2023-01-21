import React from "react";
import EduExpCard from "./EduExpCard";

const EduExp = ({ data }) => {
  let content = [];

  data.map((object) => {
    content.push(<EduExpCard obj={object} />);
  });

  return content;
};

export default EduExp;
