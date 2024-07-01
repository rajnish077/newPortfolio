import React from "react";
import logo from "../assets/myLogo2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Navbar = () => {
  return (
    <>
      <nav
        id="hero-section"
        className="mb-20 flex items-center justify-between py-6"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-shrink-0 items-center cursor-pointer"
        >
          <img className="mx-2 w-14 " src={logo} alt="Logo" />
        </motion.div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/rajnishbhargav02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rajnish077"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/rajjniiixx/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/bugbounty02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
