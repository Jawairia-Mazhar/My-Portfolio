import React from 'react'
import '../index.css'

const ProjectCard = ({title, image, description, role, tech, outcome, linkToWeb}) => {
        const [hovered, setHovered] = React.useState(null);

  return (
    <div 
        className="card relative ease-in-out justify-center overflow-hidden p-1 shadow-xl rounded-md w-[90%] h-80 md:w-110 md:h-90 cursor-pointer hover-shadow-2xl hover:scale-105 transition duration-300 flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
          <div className='card-inner'>
        <p className="md:text-lg text-center">{title}</p>
        {!hovered && (
          <div className='card-front'>
            <img className="w-full h-70 mt-2 md:w-110 md:h-75 md:mt-5 p-2" src={image} alt={title} />
          </div>
        )} 
        
      {hovered && (
        <div className="card-back absolute md:inset-0 bg-white md:p-4 flex flex-col justify-center items-center text-center ">
          <h2 className="md:text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm mb-2">{description}</p>
          <p className="text-sm mb-2"><strong>Role:</strong> {role}</p>
          <p className="text-sm mb-2"><strong>Tech:</strong> {tech}</p>
          <p className="text-sm"><strong>Outcome:</strong> {outcome}</p>
          <a href={linkToWeb} className="mt-2 text-blue-500 hover:font-bold hover:text-black" target="_blank">🔗Live Demo</a>
        </div>   
        )}
          </div>
    </div>         
  );
}

export default ProjectCard