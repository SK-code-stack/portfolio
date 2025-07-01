import React from 'react';
import useTheme from '../Context/Theme';
import { motion } from 'framer-motion'; 
import { containerVariants, itemVariants } from '../variants';
import { projectpage } from "../data"; 


export default function ProjectPage() {
  const { darkMode } = useTheme();
  const projects = projectpage;

  

  return (
    <div className="mb-16 pt-20 -mt-20 transition-all duration-1000">


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
            className="myanimation h-full p-1 rounded-xl"
          >
            <div className="flex flex-col  bg-custom-mylight text-custom-mydark dark:bg-custom-myblack dark:text-custom-mylight rounded-lg overflow-hidden myshadow hover:scale-105 transition-all duration-1000 h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="flex flex-col justify-between text-center flex-grow p-4">
                <div>
                  <h1 className="text-xl font-bold mb-2">{project.title}</h1>
                  <p className="text-xs font-bold mb-3">{project.des}</p>
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
                <div className="flex justify-center">
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
          </motion.div>
        ))}
      </motion.div>


    </div>
  );
}