import React from 'react'
import useTheme from '../Context/Theme';
import salman from '../images/salman.png'
import { motion } from "framer-motion";
import { fadeUp } from '../variants';
export default function About() {
      const { darkMode } = useTheme();
    
  return (
    <><div className="mb-16 py-20 -mt-20  " id='about' >
         <h1 className={` font-custom  bg-gradient-to-b text-5xl flex justify-center ${
              darkMode ? 'from-zinc-200 via-zinc-400 to-zinc-50' : 'from-zinc-300 via-zinc-900 to-zinc-300'
            } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}>About<h1 className='color_animate '>&nbsp;Me</h1></h1>
        <div className="my-2 mt-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image section */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="imgdiv flex items-center justify-center order-1 md:order-2"
        >
        <img src={salman} alt="salman Khan" className="myimg h-3/4" />
        </motion.div>


        {/* Intro & Education */}
        <div className="flex flex-col justify-center space-y-8 order-2 md:order-1 text-center">
            {/* Intro */}
            <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={2}
            className='introeff'>
                    <p
        className={`text-3xl underline font-custom bg-gradient-to-b bg-clip-text text-transparent ${
            darkMode
            ? 'from-zinc-200 via-zinc-400 to-zinc-50'
            : 'from-zinc-300 via-zinc-900 to-zinc-300'
        }`}
                >Full Stack Developer</p>
            <p className="mt-4 text-xl text-custom-myblack dark:text-custom-mylight font-custom text-justify">
            Hi, I’m M. Salman Khan, a passionate full-stack developer with a focus on dynamic web applications. I specialize in React.js for creating responsive UIs, and work with the MERN stack, Django, and Laravel to build robust, scalable backends. Outside of coding, I enjoy exploring new ideas and keeping a healthy balance between work and life. Always eager to learn and grow in the ever-evolving world of web development.      </p>
            </motion.div>

            {/* Education */}
            <motion.div 
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={2}
            className='introeff'>
            <p
            className={`text-3xl underline font-custom bg-gradient-to-b bg-clip-text text-transparent ${
                darkMode
                ? 'from-zinc-200 via-zinc-400 to-zinc-50'
                : 'from-zinc-300 via-zinc-900 to-zinc-300'
            }`}
            >Education</p>
            <p className="mt-4 text-xl text-custom-myblack dark:text-custom-mylight font-custom text-justify">
            I hold a BS in Information Technology and have completed courses in Full Stack Web Development, Python Programming, and Graphic Designing—sharpening my skills in both development and design.
            </p> <br />
            </motion.div>
            <motion.div 
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={2}
            className="introeff">
            <p
            className={`text-3xl  underline font-custom bg-gradient-to-b bg-clip-text text-transparent ${
                darkMode
                ? 'from-zinc-200 via-zinc-400 to-zinc-50'
                : 'from-zinc-300 via-zinc-900 to-zinc-300'
            }`}
        
            >Languages</p>
            <p className="mt-4 text-xl text-custom-myblack dark:text-custom-mylight font-custom text-justify">
            I work with React.js, HTML, CSS, JavaScript, and Tailwind on the frontend, and use the MERN stack, Django, PHP, and Python on the backend. I'm a well-rounded developer, comfortable across the full stack.

            </p>
            </motion.div>
        </div>
        </div>
        </div>

    
    </>
  )
}
