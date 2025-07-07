import React from 'react'
const Main = React.lazy(() => import('./Main'));
const About = React.lazy(() => import('./About'));
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));

export default function Home() {
  return (
    <>
    
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />


    </>

  )
}
