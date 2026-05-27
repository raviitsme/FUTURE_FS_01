import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Cursor from "./components/ui/Cursor";
import './index.css'
export default function App() {
  return (
    <>
    <Cursor/>
      <div className="bg-black font-heading min-h-screen">
        <Navbar />
        <Hero />
        <Projects/>
        <AboutMe />
      </div>
    </>
  );
}
