import React from "react";
import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 text-center text-4xl"
      >
        <span className="text-neutral-500"> Pro</span>jects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                width={220}
                height={220}
                src={project.image}
                alt="ProjectImage"
                className="mb-4 rounded-2xl"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-500">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1
                  text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-8">
        <a
          href="#hero-section"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-600 p-4 text-white hover:bg-pink-200 transition duration-300 transform hover:scale-110"
        >
          <FaArrowUp className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
