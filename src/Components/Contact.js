import React, { useRef } from 'react';
import useTheme from '../Context/Theme';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; 
import { itemVariants, fadeUp } from '../variants';

export default function Contact() {
  const { darkMode } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xs2lsrt', 'template_py9pnxp', form.current, {
        publicKey: 'DdZc8Cy8xWxxI5XV8',
      })
      .then(
        () => {
          alert('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          alert('FAILED...');
        }
      );
  };

  return (
    <>
      <div className="mb-16 pt-20 -mt-20 h-dvh transition-all duration-1000" id="contact">
        <h1
          className={`mb-16 font-custom bg-gradient-to-b text-5xl flex justify-center ${
            darkMode
              ? 'from-zinc-200 via-zinc-400 to-zinc-50'
              : 'from-zinc-300 via-zinc-900 to-zinc-300'
          } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}
        >
          Contact<span className="color_animate">&nbsp;Us</span>
        </h1>

        <div className="bg-red p-2">
          <section className="relative w-full min-h-screen bg-custom-mylight dark:bg-custom-myblack text-custom-myblack dark:text-custom-mylight">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom-myblack dark:bg-custom-mylight h-32 w-full rounded-full"></div>

              {/* Social Media */}
              <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center ">

                {/* <!-- Social Media --> */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={itemVariants}
                  className="w-full md:w-1/2 p-5 md:px-0 mx-5"
                >
                  <motion.div
                    variants={itemVariants}
                    custom={0}
                    className="bg-custom-mylight dark:bg-custom-myblack myshadow border border-blue-600 w-full lg:w-1/2 h-full p-5 pt-8"
                  >
                    <h3 className="text-2xl font-custom mb-5">My Social Media</h3>

                    {/* List */}
                    <motion.div className="flex flex-col gap-3 font-custom">
                      <motion.a
                        href="https://github.com/SK-code-stack"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        custom={1}
                        className="flex items-center hover:text-white hover:bg-blue-600 p-2 transition-all duration-300 rounded"
                      >
                        <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        Github
                      </motion.a>

                      <motion.a
                        href="https://www.linkedin.com/in/salman-khan-cw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        custom={2}
                        className="flex items-center hover:text-white hover:bg-blue-600 p-2 transition-all duration-300 rounded"
                      >
                        <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"></path>
                        </svg>
                        LinkedIn
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>


              {/* Contact Form */}
              <motion.form
                  ref={form}
                  onSubmit={sendEmail}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={fadeUp}
                  className="w-full md:w-1/2 myshadow border border-blue-600 p-6 bg-custom-mylight dark:bg-custom-myblack font-custom"
                >
                  <motion.h2
                    variants={fadeUp}
                    custom={0}
                    className="text-2xl pb-3 font-custom"
                  >
                    Send Message
                  </motion.h2>

                  <div>
                    {/* Name */}
                    <motion.div variants={fadeUp} custom={1} className="flex flex-col mb-3">
                      <label htmlFor="name">Name</label>
                      <motion.input
                        name="user_name"
                        type="text"
                        id="name"
                        className="px-3 py-2 bg-gray-100 dark:bg-custom-myblack mt-1 myshadow focus:border-blue-600 focus:outline-none focus:bg-gray-200 focus:text-blue-600"
                        autoComplete="off"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={fadeUp} custom={2} className="flex flex-col mb-3">
                      <label htmlFor="email">Email</label>
                      <motion.input
                        name="user_email"
                        type="text"
                        id="email"
                        className="px-3 py-2 bg-gray-100 dark:bg-custom-myblack mt-1 myshadow focus:border-blue-600 focus:outline-none focus:bg-gray-200 focus:text-blue-600"
                        autoComplete="off"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={fadeUp} custom={3} className="flex flex-col mb-3">
                      <label htmlFor="message">Message</label>
                      <motion.textarea
                        name="message"
                        rows="4"
                        id="message"
                        className="px-3 py-2 bg-gray-100 dark:bg-custom-myblack mt-1 myshadow focus:border-blue-600 focus:outline-none focus:bg-gray-200 focus:text-blue-600"
                      ></motion.textarea>
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.div variants={fadeUp} custom={4} className="w-full pt-3">
                    <motion.input
                      type="submit"
                      value="Send"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-custom-mylight text-custom-myblack dark:bg-custom-myblack dark:text-custom-mylight myshadow px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-blue-600 hover:text-white text-xl cursor-pointer"
                    />
                  </motion.div>
            </motion.form>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}
