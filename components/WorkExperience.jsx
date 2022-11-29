import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex "
      >
        <div className="max-w-full flex flex-col">
          <h3 className=" top-24 upercase tracking-[20px] text-gray-500 text-2xl text-center">
            Experience
          </h3>
          <div className="w-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
