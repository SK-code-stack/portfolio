// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import useTheme from '../Context/Theme';
import { motion } from 'framer-motion'; 
import { containerVariants, itemVariants } from '../variants';
import api, { BASE_URL } from '../Api';

export default function Skills() {
  const { darkMode } = useTheme();
  const [skill, setSkills] = useState([]);

  useEffect(() => {
    api.get('/skill/')  // ✅ fixed: ensure trailing slash matches Django URL pattern
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.log("Fail to load skills data...", err);
      });
  }, []);

  return (
    <div className='pt-20 -mt-24 mb-8 z-50 h-full' id='skills'>
      <h1
        className={`font-custom bg-gradient-to-b text-5xl flex justify-center ${
          darkMode ? 'from-zinc-200 via-zinc-400 to-zinc-50' : 'from-zinc-300 via-zinc-900 to-zinc-300'
        } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}
      >
        Tech
        <p className='color_animate'>&nbsp;Stack</p>
      </h1>

      <div className="h-auto py-16 flex items-center justify-center">
        <div className="w-[70%] mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {skill.length > 0 && skill.map(({ name, icon }, index) => (
              <motion.div
                key={index}
                className="bg-custom-mylight dark:bg-custom-myblack px-4 py-2 rounded-md myshadow flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-1000"
                variants={itemVariants}
              >
                <img src={`${BASE_URL}${icon}`} alt={name} className="h-6" />
                <h1 className="text-sm text-custom-myblack dark:text-custom-mylight">{name}</h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
