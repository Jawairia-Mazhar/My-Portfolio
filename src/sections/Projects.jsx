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
                    image="src\assets\P1CoffeeWeb.png" alt="Coffee Shop Website" className=""
                    description="A modern, responsive landing page designed to showcase a café's menu and ambiance through an interactive user experience. It features smooth scrolling, a dynamic search overlay, and a mobile-optimized menu."
                    role="UI/UX Design & Frontend Development."
                    tech="HTML5, CSS3 (Custom Variables), JavaScript (ES6+)"
                    outcome="Successfully delivered a high-performance site with optimized CTA (Call-to-Action) buttons and seamless mobile navigation."
                    linkToWeb="https://jawairia-mazhar.github.io/Responsive-Coffee-Shop-Website/"
                />

            {/* </div> */}
            {/* </div> */}
            <ProjectCard 
            title = "Travel Landing Page" 
            image="src\assets\P2Travel.png" className="w-110 h-75 object-cover"
            description="A dynamic, responsive travel landing page designed to inspire adventure through immersive visuals and interactive search tools. Built to provide a premium user experience across all devices."
            role="Layout design, component structuring"
            tech="HTML, CSS (Flexbox/Grid), JavaScript (ScrollReveal)"
            outcome="Mastered advance CSS positioning and practiced grid systems and dynamic content rendering."
            linkToWeb="https://endearing-pony-af6261.netlify.app/"

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