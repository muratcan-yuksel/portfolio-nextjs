import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
const Skills = () => {
  return (
    <div className="h-screen  flex flex-col ">
      <h3 className=" uppercase my-10 tracking-[20px] text-gray-500 text-2xl text-center">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
