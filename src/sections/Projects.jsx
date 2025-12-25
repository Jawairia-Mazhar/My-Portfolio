import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className="mt-8 mb-10 scroll-mt-16 md:scroll-mt-24 md:mb-40 " id="projects">
      <h1 className="text-2xl md:text-4xl font-medium text-center mb-4 md:mb-12">My Work</h1>
      <div className='grid gap-y-6 md:grid-cols-3 place-items-center md:gap-y-20 md:place-items-center'>
          
           <ProjectCard
             title = "Coffee Shop Website" 
             image="src\assets\P1CoffeeWeb.png" alt="Coffee Shop Website"
             description="A modern, responsive landing page designed to showcase a café's menu and ambiance through an interactive user experience. It features smooth scrolling, a dynamic search overlay, and a mobile-optimized menu."
             role="UI/UX Design & Frontend Development."
             tech="HTML5, CSS3 (Custom Variables), JavaScript (ES6+)"
             outcome="Successfully delivered a high-performance site with optimized CTA (Call-to-Action) buttons and seamless mobile navigation."
             linkToWeb="https://jawairia-mazhar.github.io/Responsive-Coffee-Shop-Website"
          />

            {/* </div> */}
            <ProjectCard 
            title = "Travel Landing Page" 
            image="src\assets\P2Travel.png" className="md:w-110 md:h-75 object-cover"
            description="A dynamic, responsive travel landing page designed to inspire adventure through immersive visuals and interactive search tools. Built to provide a premium user experience across all devices."
            role="Layout design, component structuring"
            tech="HTML, CSS (Flexbox/Grid), JavaScript (ScrollReveal)"
            outcome="Mastered advance CSS positioning and practiced grid systems and dynamic content rendering."
            linkToWeb="https://endearing-pony-af6261.netlify.app/"
            />

            <ProjectCard 
            title = "Foodie Zone Web" 
            image="src\assets\P3Food.png"
            description="A dynamic food exploration interface featuring real-time category filtering and a responsive search system. Designed to provide a seamless menu browsing experience."
            role="Frontend Developer."
            tech="React, Tailwind CSS"
            outcome="Built reusable components, implemented efficient array filtering logic and dynamic UI updates based on user input."
            />
      </div>
    </section>

);
}

export default Projects