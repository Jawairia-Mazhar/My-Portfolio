import React from 'react'

const ProjectCard = ({title, image, description, role, tech, outcome}) => {
        const [hovered, setHovered] = React.useState(null);

  return (
    <div 
        className="relative ease-in-out overflow-hidden p-1 shadow-xl rounded-md w-110 h-90 cursor-pointer hover-shadow-2xl hover:scale-105 transition duration-300 flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        <p className="text-lg text-center">{title}</p>
        {!hovered && (
            <img className="w-110 h-75 mt-5 p-2" src={image} alt={title} />
        )} 
        
      {hovered && (
        <div className="absolute inset-0 bg-white p-4 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm mb-2">{description}</p>
          <p className="text-sm mb-2"><strong>Role:</strong> {role}</p>
          <p className="text-sm mb-2"><strong>Tech:</strong> {tech}</p>
          <p className="text-sm"><strong>Outcome:</strong> {outcome}</p>
        </div>   
        )}
    </div>         
  );
}

export default ProjectCard