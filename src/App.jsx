import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import './index.css'
export default function App() {
  return (
    <>
      <div className="bg-black font-heading min-h-screen">
        <Navbar />
        <Hero />
        <Projects/>
        <AboutMe />
      </div>
    </>
  );
}
