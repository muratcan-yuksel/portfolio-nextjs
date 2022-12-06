import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky mx-10 top-2 flex flex-row items-center justify-between z-20 ">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />{" "}
        <SocialIcon
          url="https://dev.to/muratcanyuksel"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />{" "}
        <SocialIcon
          url="https://twitter.com/codingsirius"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />
      </motion.div>{" "}
      <Link href="/#contact">
        <div
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
          <p className="uppercase  underline underline-offset-4 text-sm text-gray-400">
            Get In Touch
          </p>
        </div>
      </Link>{" "}
    </header>
  );
};

export default Header;
