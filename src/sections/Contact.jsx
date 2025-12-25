import React from 'react'
import gmailIcon from '../assets/gmail.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/githubicon.png';  

const Contact = () => {
  return (
    <section id="contact">
        <h1 className="text-2xl mb-8 md:text-4xl font-bold text-center md:mb-12">Contact Me</h1>
        <div className='grid grid-cols-3 place-items-center'>
        {/* Gmail */}
        <div className="flex gap-2 md:gap-4 mb-6">
          <img src={gmailIcon} alt="gmail"
          className="w-8 h-8 md:w-10 md:h-10"/>
          <a href="mailto:Jawairiamazhar21@gmail.com" target="_blank" className="p-2 hover:font-bold hover:text-red-600">Gmail</a>
        </div>
        {/* LinkedIn */}
        <div className="flex gap-2 md:gap-4 mb-6">
          <img src={linkedinIcon} alt="linkedin" className="w-8 h-8 md:w-10 md:h-10" />
          <a href="https://www.linkedin.com/in/jawairiamazhar21/" target="_blank" className="p-2 hover:font-bold hover:text-blue-600">LinkedIn</a>
        </div>
        {/* Github */}
        <div className="flex gap-2 md:gap-4 mb-6">
          <img src={githubIcon} alt="github" className="w-8 h-8 md:w-10 md:h-10" />
          <a href="https://github.com/Jawairia-Mazhar" target="_blank" className="p-2 hover:font-bold">Github</a>
        </div>
        </div>
      </section>
  )
}

export default Contact