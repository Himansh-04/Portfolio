import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/proj9.png";
import proj2 from "../assets/images/proj11.png";
import proj3 from "../assets/images/proj12.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Gaming Hub",
    desc: "An online platform for gamers to explore, review, and connect over trending games with user authentication and dynamic content.",
    devstack: "React.js, Typescript, Chakra UI",
    link: "https://gaming-hub-mauve.vercel.app/", // Add live link
    git: "https://github.com/Himansh-04/Gaming-hub",  // Add GitHub link
    src: proj1,
    type: "frontend (React + TypeScript)",
  },
  {
    title: "AI Code Reviewer",
    desc: "AI-powered code reviewer that highlights improvements and gives feedback using Google Gemini GPT-based models integrated with a MERN backend.",
    devstack: "React, Node.js, Express, Google Gemini",
    // link: "#", // Add live link
    // git: "#",  // Add GitHub link
    src: proj2,
    type: "fullstack",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio to showcase projects, skills, and contact details built with modern UI animations and responsive design.",
    devstack: "React, Tailwind, Framer Motion",
    link: "https://portfolio-seven-pied.vercel.app/", // Add live link
     git: "https://github.com/Himansh-04/Portfolio",  // Add GitHub link
    src: proj3,
    type: "frontend",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-rgb(255,[110,199)] bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] text-transparent bg-clip-text">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-[rgb(255,110,199)]">
                    0{index + 1}
                  </span>
                  <FiChevronDown 
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] text-transparent bg-clip-text font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="bg-gradient-to-r from-[#FF6EC7] to-[#FFD6EC] text-transparent bg-clip-text font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-[#FF6EC7] hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
