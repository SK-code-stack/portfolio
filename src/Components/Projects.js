import React, { useEffect, useState } from 'react';
import useTheme from '../Context/Theme';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../variants';
import { Link } from 'react-router-dom';
import api, { BASE_URL } from '../Api';

export default function Projects() {
  const { darkMode } = useTheme();
  const [project, setProject] = useState([]);

  useEffect(() => {
    api.get('HomeProject')
      .then((res) => {
        setProject(res.data);
      })
      .catch(() => {
        console.log("Failed to load projects");
      });
  }, []);

  return (
    <div className="mb-16 pt-20 -mt-20 transition-all duration-1000" id="projects">
      <h1
        className={`mb-16 font-custom bg-gradient-to-b text-5xl flex justify-center ${
          darkMode
            ? 'from-zinc-200 via-zinc-400 to-zinc-50'
            : 'from-zinc-300 via-zinc-900 to-zinc-300'
        } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}
      >
        My<p className="color_animate">&nbsp;Work</p>
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container p-3 mx-auto grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr"
      >
        {project.map((project) => (
          <motion.div
            variants={itemVariants}
            key={project.id}
            className="myanimation h-full p-1 rounded-xl"
          >
            <div className="flex flex-col justify-between h-full bg-custom-mylight text-custom-mydark dark:bg-custom-myblack dark:text-custom-mylight p-4 rounded-lg myshadow hover:scale-105 font-custom transition-all duration-1000 overflow-hidden">
              
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-4">
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow text-center">
                <div className="mb-3">
                  <h1 className="text-xl font-bold mb-2">{project.title}</h1>
                  <p className="text-sm mb-2 line-clamp-3">{project.description}</p>
                </div>

                {/* Skills */}
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
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-custom-mylight text-custom-myblack dark:bg-custom-myblack dark:text-custom-mylight hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 px-3 py-1 rounded myshadow active:scale-95 transition-all duration-1000"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center p-5">
        <Link to="/ProjectPage" className="button font-custom transition-all duration-1000">
          See more
        </Link>
      </div>
    </div>
  );
}
