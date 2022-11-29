import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          url="https://twitter.com/codingsirius"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://twitter.com/codingsirius"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://twitter.com/codingsirius"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="/#contact">
        <motion.div
          initial={{ opacity: 0, x: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          {" "}
          {/* can't use the social icon with link element due to hydration problems */}
          {/* <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          /> */}
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
