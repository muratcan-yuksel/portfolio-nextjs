import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../lib/client";

const Skill = ({ skill }) => {
  return (
    <div className=" cursor-pointer m-2 md:m-5 lg:m-7 flex flex-col items-center">
      {/* this animation is problematic on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.7 }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          src={urlFor(skill.image).url()}
          width={200}
          height={200}
          alt=""
          className="rounded-full border border-gray-500 object-contain w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      {/* here I omit the skill percentage section, because it's stupid */}
      <p className="my-2">{skill.title}</p>
    </div>
  );
};

export default Skill;
