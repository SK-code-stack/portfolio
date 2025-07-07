import {React, useEffect, useState} from 'react';
import useTheme from '../Context/Theme';
import api from '../Api';

export default function Main() {
  const { darkMode } = useTheme();
  const [file, setFile] = useState([])

  useEffect(() => {
    api.get("resume")
    .then((res) => {
      console.log("Resume API response:", res.data); 

      setFile(res.data)
    })
    .catch((err) => {
      console.log("fail to load resume")
    })
  },[])

  return (
    <>
  <div className="w-full overflow-hidden ">
  <div className="-mt-16 relative min-h-screen h-dvh w-full  flex items-center justify-center" id='home'>
        {/* Background effect */}
      <div
        className={`absolute top-1/2 left-1/2 z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          darkMode ? 'bg-[#060d359c]' : 'bg-[#a1b9eb59]'
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-20 mx-auto   flex max-w-full flex-col items-center justify-center px-3  md:max-w-4xl lg:max-w-5xl">
        {/* Promotional link */}


        {/* Hero text */}
        <h2
          className={`my-2 w-full py-px text-center text-4xl font-custom text-balance opacity-90 md:text-5xl lg:text-6xl ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}
        >
          <span 

          className=" md:text-nowrap">Let's turn ideas</span>
          <br className=" hidden md:block" /> into seamless
          <span
            className={` font-custom  bg-gradient-to-b  ${
              darkMode ? 'from-zinc-200 via-zinc-400 to-zinc-50' : 'from-zinc-300 via-zinc-900 to-zinc-300'
            } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}
          >
            {' '}
            Digital World
          </span>
        </h2>

        {/* Introduction */}
        <h1
          className={`relative z-20 mt-4 mb-7 flex flex-col items-center justify-center text-center text-xl sm:flex-row md:text-xl lg:mt-7 lg:text-2xl ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          <span className=" font-custom flex items-center justify-center">
            Hello, I'm  
          </span>
          <p className='color_animate text-3xl font-custom'>&nbsp;Salman Khan</p>
          <span className="leading-relaxed">&nbsp;a Full Stack Developer</span>
        </h1>

        {/* Buttons */}
        <a className="z-[100] mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-8 md:gap-10 animate-fadeInUp"
          href={`${file.file}`} download 
            target = "blank">
          <button
            className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10  py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3"
          >
            <button 
            className="z-10 px-3  text-black dark:text-white transition-colors duration-300 group-hover:text-black">Resume</button>
            <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </button>
   
        </a>
      </div>
  

    </div>
    <div
        className="-mt-20 curve_effect relative h-60 w-dvw  z-[19] transition-all duration-1000">
      <div className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden dt" >
        <div className="absolute bottom-[167px] left-1/2 h-[111px] w-[787px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[57px] du" >
        </div>
        <div className=" absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-custom-myblack  dark:bg-gradient-to-b dark:from-white to-transparent">
        </div>
        <div  className="absolute  right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.346820809248555/1] h-[956px] rounded-[100%]  bg-custom-mylight dark:bg-custom-myblack  dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dl" >
        </div>
      </div>
    </div>
    </div>
    
 
    </>
  );
}