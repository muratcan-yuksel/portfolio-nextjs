import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = ({ data }) => {
  //sort data by date
  let sortedData = data.sort(
    (a, b) => new Date(b.dateStarted) - new Date(a.dateStarted)
  );
  console.log(sortedData);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex my-10 justify-center items-center"
      >
        <div className="flex flex-col max-w-full items-center  ">
          <h3 className=" upercase tracking-[20px] text-gray-500 text-2xl text-center">
            Experience
          </h3>

          {/* <div className="max-w-full flex flex-col"> */}
          <div className="w-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50">
            {/* <ExperienceCard data={data} />
            <ExperienceCard data={data} />
          <ExperienceCard data={data} /> */}
            {sortedData.map((experience) => (
              <ExperienceCard key={experience._id} data={experience} />
            ))}
          </div>
          {/* </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
