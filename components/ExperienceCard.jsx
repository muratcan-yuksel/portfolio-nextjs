import React from "react";
import img from "../assets/pp.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import circle from "../assets/circle.svg";

const ExperienceCard = () => {
  return (
    <article className="flex overflow-y-scroll flex-col rounded-lg items-center  space-y-7 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-center"
          src={img}
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-center md:text-left">
          CEO of a COOL COMPANY
        </h4>
        <p className="font-bold text-2xl mt-1 text-center md:text-left">
          COOL COMPANY
        </p>
        <div className="flex space-x-2- my-2 justify-center md:justify-start">
          {/* tech used */}
          <Image className="h-10 w-10 rounded-full" alt="" src={circle} />
          <Image className="h-10 w-10 rounded-full" alt="" src={circle} />
          <Image className="h-10 w-10 rounded-full" alt="" src={circle} />
        </div>
        <p className="uppercase py-5 text-gray-300 text-center md:text-left">
          Started work...- Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-md ">
          <li>
            summary points summary points summary points summary points summary
            points summary points summary points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points summary points summary points
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
