import { HashLink } from 'react-router-hash-link';
import React from 'react';
import logo from '../assets/JMIcon.png';

export default function Navbar() {
  return (
    <nav className="flex p-1 md:p-4 md:justify-between justify-between shadow-md bg-white sticky top-0 z-50 items-center w-full">
      <HashLink smooth to="#hero" className="mr-4">
        <img src={logo} alt="logo" className="w-12 h-12 items-start" />
      </HashLink>

      <ul className="flex mr-5 md:gap-12 gap-4 md:mr-140 ">
        <HashLink smooth to="#hero" className="navlink hover:font-bold hover:text-teal-300">Home</HashLink>
        <HashLink smooth to="#skills" className="navlink hover:text-teal-300 hover:font-bold">Skills</HashLink>
        <HashLink smooth to="#projects" className="navlink hover:font-bold hover:text-teal-300">Projects</HashLink>
        <HashLink smooth to="#contact" className="navlink hover:font-bold hover:text-teal-300">Contact</HashLink>
      </ul>
    </nav>
  );
}
