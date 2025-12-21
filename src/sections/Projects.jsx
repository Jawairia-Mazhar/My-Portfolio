import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className="mb-40 " id="projects">
      <h1 className="text-4xl font-medium text-center mb-12">My Work</h1>
      <div className='grid grid-cols-3 align-center gap-y-20 place-items-center'>
            {/* <div 
            className="w-110 h-90 bg-cover border border-red-500 rounded-md shadow-xl hover:shadow-2xl transition duration-300" 
            style={{ backgroundImage: "url('src/assets/P1CoffeeWeb.png')" }}> */}
            {/* <div className="w-110 h-75 mt bg-cover"
            style={{ backgroundImage: "url('src/assets/P1CoffeeWeb.png')" }}> */}
                <ProjectCard
                    title = "Coffee Shop Website" 
                    image="src\assets\P1CoffeeWeb.png" alt="Coffee Shop Website" className="w-full h-full bg-cover"
                    description="A responsive coffee shop website designed to showcase the menu, location, and ambiance of the café. Built with HTML, CSS, and JavaScript to provide an engaging user experience."
                    role="UI/UX design, frontend development"
                    tech="React, Tailwind CSS"
                    outcome="Learned responsive layout and CTA optimization."
                />

            {/* </div> */}
            {/* </div> */}
            <ProjectCard 
            title = "Travel Landing Page" 
            image="src\assets\P2Travel.png" className="w-110 h-75 object-cover"
            description="A modern travel booking interface with destination highlights."
            role="Layout design, component structuring"
            tech="React, Tailwind CSS"
            outcome="Practiced grid systems and dynamic content rendering."
            />
            <ProjectCard 
            title = "Foodie Zone Web" 
            image="src\assets\P3Food.png"
            description="A food ordering interface with category filters and search."
            role="UI design, state handling"
            tech="React, Tailwind CSS"
            outcome="Built reusable components and learned filtering logic."
            />
      </div>
    </section>

);
}

export default Projects