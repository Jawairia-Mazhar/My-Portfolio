import React from 'react';
import SkillCard from '../components/SkillCard.jsx';
import htmlIcon from '../assets/html.webp';
import cssIcon from '../assets/css.jpg';
import jsIcon from '../assets/js.jpeg';
import reactIcon from '../assets/react.svg';
import tailwindIcon from '../assets/tailwind.jpg';
import githubIcon from '../assets/githubicon.png';
import gitIcon from '../assets/git.png';
import firebaseIcon from '../assets/firebase.webp';
import netlifyIcon from "../assets/netlify.webp";

const Skills = () => {
  return (
    <section id="skills" className="mt-7 m-4 scroll-mt-24 md:mt-30 md:ml-20 md:mr-20 md:mb-40">
        <h1 className="text-2xl mb-2 md:text-4xl font-semibold md:font-bold text-center md:mb-8 ">My Technical Expertise</h1>
        <p className="mb-3 md:mb-15 text-wrap md:text-lg/8 md:tracking-wide text-center">As an aspiring web developer, I utilize a modern and efficient technology stack to build robust and engaging user experiences.My core focus is on delivering highly performant, responsive, and maintainable code bases.</p>
    
        <div className="grid grid-cols-4 p-3 gap-y-5 md:grid-cols-6 place-items-center align-center md:gap-y-20 md:place-items-center">
            <SkillCard name="HTML" logo = {htmlIcon} color="red"/>
            <SkillCard name="CSS" logo = {cssIcon} color="blue"/>
            <SkillCard name="JavaScript" logo = {jsIcon} color="yellow"/>
            <SkillCard name="React" logo = {reactIcon} color="cyan"/>
            <SkillCard name="TailwindCSS" logo = {tailwindIcon} color="teal"/>
            <SkillCard name="Github" logo = {githubIcon} color="black"/>
            <SkillCard name="git" logo = {gitIcon} color="red"/>
            <SkillCard name="Firebase" logo = {firebaseIcon} color="yellow"/>

          {/* <div className="grid grid-cols-2 col-span-4 gap-6 "> */}
            <SkillCard name="Netlify" logo = {netlifyIcon} color ="blue"/>
          
          {/* </div> */}
    
        </div>
    </section>
  )
}

export default Skills;