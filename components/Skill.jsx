import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import circle from "../assets/circle.svg";

const Skill = ({ directionLeft }) => {
  return (
    <div className=" cursor-pointer m-2 md:m-10">
      {/* this animation is problematic on mobile */}
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={circle}
          alt=""
          className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      {/* here I omit the skill percentage section, because it's stupid */}
    </div>
  );
};

export default Skill;
