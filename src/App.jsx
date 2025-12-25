import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function Layout() {
  return (
    <class>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </class>
  );
}

export default function App() {
  return (
    <Router className="min-h-screen w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/skills" element={<Layout />} />
        <Route path="/projects" element={<Layout />} />
        <Route path="/contact" element={<Layout />} />
      </Routes>
    </Router>
  );
}
