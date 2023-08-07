import React from "react";
import { tech_stacks } from "../all data/tech_stacks";



const Experience = () => {
  const techs = tech_stacks;

  return (
    <div
      name="experience"
      className="w-full "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              onClick={()=>window.open(src)} 
              className={`  group  shadow-inner duration-500 py-6 cursor-pointer  ${style} rounded-tr-[90px] rounded-bl-[190px]`}
            >
            <div
            className={`shadow-inner animate-spin group-hover:rotate-[1080deg] group-hover:scale-105  hover:scale-105 duration-500 py-6 cursor-pointer  ${style} rounded-tr-[190px] rounded-bl-[90px]`}
            >
            <img src={src} alt={src} className={`w-20 mx-auto cursor-pointer  bg-transparent `} />
            <p className="mt-4">{title}</p>
            
            </div>
             
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
