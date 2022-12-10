import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { urlFor } from "../lib/client";
const Skills = ({ data }) => {
  return (
    <div className="h-screen  flex flex-col overflow-y-scroll ">
      <h3 className=" uppercase my-10 tracking-[20px] text-gray-500 text-2xl text-center">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center 2xl:px-52">
        {console.log(data)}
        {data.map((skill) =>
          //had to do this because of a bug in sanity
          //deletes the invisible NextJS skill
          skill._id != "a3bfdc4c-a557-409f-9fe2-ff00928a1ace" ? (
            <Skill key={skill._id} skill={skill} />
          ) : null
        )}
        {/* <img src={urlFor(data[0].image).width(200).url()} />{" "} */}
      </div>
    </div>
  );
};

export default Skills;
