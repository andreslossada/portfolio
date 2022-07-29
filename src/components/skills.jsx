import React from 'react';
import ReactIcon from '../assets/icons/react.svg';
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css3.svg';
import JsIcon from '../assets/icons/js.svg';
import GitIcon from '../assets/icons/git.svg';
const Skills = () => {
  return (
    <div className="flex justify-around  h-full items-center">
      <img src={HtmlIcon} className="w-1/6" alt="HtmlIcon " />
      <img src={CssIcon} className="w-1/6" alt="CssIcon" />
      <img src={JsIcon} className="w-1/6" alt="JsIcon" />
      <img src={ReactIcon} className="w-1/6" alt="React" />
      <img src={GitIcon} className="w-1/6" alt="React" />
    </div>
  );
};

export default Skills;
