import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav className="flex p-4 justify-between  shadow-md bg-white sticky top-0 z-50 items-center">
      <img src="src/assets/JMIcon.png" alt="logo" className="w-12 h-12 items-start" />
      <ul className="flex gap-6 mr-148">
        <HashLink smooth to="/#hero">Home</HashLink>
        <HashLink smooth to="/skills#skills">Skills</HashLink>
        <HashLink smooth to="/projects#projects">Projects</HashLink>
        <HashLink smooth to="/contact#contact">Contact</HashLink>
      </ul>
    </nav>
  );
}
