import React from 'react';
import useTheme from '../Context/Theme';
import { motion } from 'framer-motion'; 
import { containerVariants, itemVariants } from '../variants';


export default function Projects() {
  const { darkMode } = useTheme();
  
  // Project data array
  const projects = [
    {
      id: 1,
      title: "Learning Management System",
      des:"Web base learning management system where students can register themself in courses and access their dashboards. ",
      image: require("../images/projectimg/project_e.png"), 
      skills: ["HTML", "CSS", "JS", "PHP", "MYSQL"],
      githubLink: "https://sk-code-stack.github.io/Code-The-World/project_E/",
    },
    {
      id: 2,
      title: "Code Player",
      des:"Web base coding platform where user can write html, css, js and can see live output.",
      image: require("../images/projectimg/code player.png"), 
      skills: ["HTML", "CSS", "JS", "JQUERY"],
      githubLink: "https://sk-code-stack.github.io/Code-Player/",
    },
    {
      id: 3,
      title: "WebEase",
      des:"Web base platform that includes multiple utilities like typing speed test, pdf maker, QR code generator and many more.",
      image: require("../images/projectimg/webease.png"), 
      skills: ["REACT.JS", "TAILWIND CSS", "DJANGO"],
      githubLink: "https://github.com/SK-code-stack/web-ease",
    },
    {
      id: 4,
      title: "Chatting Up",
      des:"Android base live chatting application.",
      image: require("../images/projectimg/chatup.png"), 
      skills: ["KOTLIN", "XML", "FIREBASE"],
      githubLink: "https://github.com/SK-code-stack/ChatUp",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="mb-16 pt-20 -mt-20 transition-all duration-1000" id="projects">
        <h1
          className={`mb-16 font-custom bg-gradient-to-b text-5xl flex justify-center ${
            darkMode
              ? 'from-zinc-200 via-zinc-400 to-zinc-50'
              : 'from-zinc-300 via-zinc-900 to-zinc-300'
          } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}
        >
          My<h1 className="color_animate">&nbsp;Work</h1>
        </h1>
  
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="container p-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-1000"
        >
          {projects.map((project) => (
            <motion.div
              variants={itemVariants}
              key={project.id}
              className="myanimation p-1 rounded-lg"
            >
              <div className="bg-custom-mylight text-custom-mydark dark:bg-custom-myblack dark:text-custom-mylight h-full rounded-lg overflow-hidden myshadow hover:scale-105 font-custom transition-all duration-1000">
                <div className="projectCard p-4 h-full flex flex-col items-center text-center">
                  <div className="h-1/2 mb-4 overflow-hidden rounded-t-lg w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover mx-auto rounded-md"
                    />
                  </div>
                  <div className="h-1/2 flex flex-col justify-between items-center w-full px-2">
                    <div className="w-full">
                      <h1 className="text-xl font-bold mb-2 w-full">{project.title}</h1>
                      <p className="text-xs font-bold mb-2 w-full">{project.des}</p>
                      <div className="flex flex-wrap gap-2 mb-3 justify-center">
                        {project.skills.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 rounded text-xs myshadow transition-all duration-1000 ${
                              darkMode
                                ? 'bg-custom-myblack text-custom-mylight'
                                : 'bg-custom-mylight text-custom-myblack'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-custom-mylight text-custom-myblack dark:bg-custom-myblack dark:text-custom-mylight hover:bg-blue-600 dark:hover:bg-blue-600 px-2 py-1 rounded myshadow active:scale-95 transition-all duration-1000"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
  
        <div className="flex justify-center p-5">
          <a
            href="#project"
            className="bg-custom-mylight text-custom-myblack hover:bg-blue-600 dark:hover:bg-blue-600 dark:bg-custom-myblack dark:text-custom-mylight px-2 py-1 rounded myshadow active:scale-95 transition-all duration-1000"
          >
            see more
          </a>
        </div>
      </div>
    </>
  );
  
}