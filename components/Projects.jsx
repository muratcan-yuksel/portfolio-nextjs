import React from "react";
import pic from "../assets/pp.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Projects = ({ data }) => {
  const projects = [1, 2, 3, 4, 5];
  console.log(data);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" pt-24 mb-10 md:mb-0  md:pt-0 md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-scroll snap-x snap-mandatory z-20   scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50">
        {/* projects */}
        {data.map((project, index) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* I added the style tag myself, should be changed later */}
              <Image
                style={{ objectFit: "contain" }}
                alt=""
                src={urlFor(project.image).url()}
                width={500}
                height={200}
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7Ab0A]">
                  {" "}
                  Case study {index + 1} of {data.length}:{" "}
                </span>{" "}
                {project.title}
              </h4>
              <p className=" text-md md:text-lg text-center md:text-left">
                {project.summary}
              </p>
              <div className="flex justify-evenly">
                <Link target={"_blank"} href={project.linkToBuild}>
                  <button className="heroButton">Live Demo </button>
                </Link>{" "}
                <Link href={project.linkToCode}>
                  <button className="heroButton">Source Code </button>
                </Link>{" "}
                {project.linkToArticle && (
                  <Link href={project.linkToArticle}>
                    <button className="heroButton">Relevant Article </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* this skew class tilts the background color div below */}
      <div className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
