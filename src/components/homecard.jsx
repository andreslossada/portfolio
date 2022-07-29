import React from 'react';
import AndresImage from '../assets/imgs/portrait2.png';

export function Homecard() {
  return (
    <div className="flex justify-between  self-stretch text-white h-full ">
      <div className=" grid place-items-center w-3/5 text-left  ">
        <div className="p-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-white to-green-400 drop-shadow-lg ">
          <span className="text-7xl  typing">Hello.</span>
          <h1 className="text-7xl ">I am Andres</h1>
          <p className="text-4xl ">Frontend Developer</p>
        </div>
      </div>
      <div className=" w-2/5 h-full grid place-content-center">
        <img
          src={AndresImage}
          className=" object-cover h-96"
          alt="Andres"
          style={{ clipPath: 'polygon(0 0, 100% 0, 90% 80%, 50% 100%, 10% 80%)' }}
        />
      </div>
    </div>
  );
}
