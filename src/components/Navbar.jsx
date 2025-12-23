import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav className="flex p-4 justify-between  shadow-md bg-white sticky top-0 z-50 items-center">
      <img src="src/assets/JMIcon.png" alt="logo" className="w-12 h-12 items-start" />
      <ul className="flex gap-6 mr-148">
        <HashLink smooth to="/#hero" className='hover:text-teal-400 hover:font-bold'>Home</HashLink>
        <HashLink smooth to="/skills#skills" className='hover:text-teal-400 hover:font-bold'>Skills</HashLink>
        <HashLink smooth to="/projects#projects" className='hover:text-teal-400 hover:font-bold'>Projects</HashLink>
        <HashLink smooth to="/contact#contact" className='hover:text-teal-400 hover:font-bold'>Contact</HashLink>
      </ul>
    </nav>
  );
}
