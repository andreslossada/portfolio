import React from 'react';
import ReactIcon from '../assets/icons/react.svg';
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css3.svg';
import JsIcon from '../assets/icons/js.svg';
import GitIcon from '../assets/icons/git.svg';
const Skills = () => {
  return (
    <div className="h-full  grid grid-cols-2 place-items-center place-content-center lg:flex">
      <img src={ReactIcon} className="w-72 lg:w-52" alt="React" />
      <img src={HtmlIcon} className="w-36" alt="HtmlIcon " />
      <img src={CssIcon} className="w-36" alt="CssIcon" />
      <img src={JsIcon} className="w-36" alt="JsIcon" />
      <img src={GitIcon} className="w-36" alt="React" />
    </div>
  );
};

export default Skills;
