import React from 'react'
import SkillCard from '../components/SkillCard.jsx'

const Skills = () => {
  return (
    <section id="skills" className="mt-20 md:mt-40 md:ml-20 md:mr-20 md:mb-40">
        <h1 className="text-2xl mb-2 md:text-4xl font-semibold md:font-bold text-center md:mb-8 ">My Technical Expertise</h1>
        <p className="mb-3 md:mb-15 text-wrap md:text-lg/8 md:tracking-wide text-center">As an aspiring web developer, I utilize a modern and efficient technology stack to build robust and engaging user experiences. My core focus is on delivering highly performant, responsive, and maintainable code bases.</p>

        <div className="grid grid-cols-4 p-3 md:grid-cols-6 align-center md:gap-y-20 md:place-items-center">
            <SkillCard name="HTML" logo = "\src\assets\html.webp" color="red"/>
            <SkillCard name="CSS" logo = "\src\assets\css.jpg" color="blue"/>
            <SkillCard name="JavaScript" logo = "\src\assets\js.jpeg" color="yellow"/>
            <SkillCard name="React" logo = "\src\assets\react.svg" color="cyan"/>
            <SkillCard name="TailwindCSS" logo = "\src\assets\tailwind.jpg" color="teal"/>
            <SkillCard name="Github" logo = "\src\assets\githubicon.png" color="black"/>

          <div className="grid grid-cols-2 col-span-2 md:col-span-6 md:grid-cols-2 md:gap-4 md:place-items-center">
            <SkillCard name="git" logo = "\src\assets\git.png" color="red"/>
            <SkillCard name="Firebase" logo = "\src\assets\firebase.webp" color="yellow"/>
          </div>

        </div>
    </section>
  )
}

export default Skills;