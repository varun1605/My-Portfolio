import react from "react";
import aws from "./utils/aws.png";
import javascript from "./utils/javascript.png";
import css from "./utils/css.png";
import reactjs from "./utils/reactjs.png";
import tailwind from "./utils/tailwind.png";
import html from "./utils/html.png";
const Skills = () => {
  return (
    <div>
      <div className="skill-class">
        <h1>My skills </h1>
      </div>
      <div className="skill-card-containers">
        <div className="skill-card">
          <img src={html}></img>
        </div>
        <div className="skill-card">
          <img src={css}></img>
        </div>
        <div className="skill-card">
          <img src={tailwind}></img>
        </div>
        <div className="skill-card">
          <img src={reactjs}></img>
        </div>
        <div className="skill-card">
          <img src={javascript}></img>
        </div>
        <div className="skill-card">
          <img src={aws}></img>
        </div>
        {/* <img src={css}></img>
        <img src={tailwind}></img>
        <img src={javascript}></img>
        <img src={reactjs}></img>
        <img src={aws}></img> */}
      </div>
    </div>
  );
};
export default Skills;
