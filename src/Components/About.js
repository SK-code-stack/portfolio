import React, { useEffect, useState } from 'react'
import useTheme from '../Context/Theme';
import salman from '../images/salman.png'
import { motion } from "framer-motion";
import { fadeUp } from '../variants';
import api, { BASE_URL } from '../Api';
export default function About() {
      const { darkMode } = useTheme();

      const [info, setInfo] = useState([])

      useEffect(() => {
        api.get("intro")
        .then((res) => {
            setInfo(res.data)
        })
        .catch((err) => {
            alert("Failed to load data")

        })
      },[])



    
  return (
    <><div className="mb-16 py-20 -mt-20  " id='about' >
         <h1 className={` font-custom  bg-gradient-to-b text-5xl flex justify-center ${
              darkMode ? 'from-zinc-200 via-zinc-400 to-zinc-50' : 'from-zinc-300 via-zinc-900 to-zinc-300'
            } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}>About<p className='color_animate '>&nbsp;Me</p></h1>
        <div className="my-2 mt-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image section */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="imgdiv flex items-center justify-center order-1 md:order-2"
        >
        <img src={`${BASE_URL}${info.profile}`} alt="salman Khan" className="myimg h-3/4" />
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
                >{info.selfIntroTitle}</p>
            <p className="mt-4 text-xl text-custom-myblack dark:text-custom-mylight font-custom text-justify">
            {info.selfIntro} </p>
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
            >{info.EducationTitle}</p>
            <p className="mt-4 text-xl text-custom-myblack dark:text-custom-mylight font-custom text-justify">
            {info.Education}
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
        
            >{info.LanguagesTitle}</p>
            <p className="mt-4 text-xl text-custom-myblack dark:text-custom-mylight font-custom text-justify">
            {info.Languages}

            </p>
            </motion.div>
        </div>
        </div>
        </div>

    
    </>
  )
}
