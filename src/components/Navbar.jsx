import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        flex justify-center
        transition-all duration-500 ease-in-out
        ${scrolled ? "pt-4" : "pt-0"}
      `}
    >
      <div
        className={`
          w-[92%] max-w-7xl
          flex items-center justify-between
          transition-all duration-500 ease-in-out

          ${
            scrolled
              ? `
                rounded-3xl
                bg-black/30
                backdrop-blur-xl
                border border-white/30
                px-8 py-4
                shadow-2xl
                scale-[0.97]
              `
              : `
                rounded-none
                bg-transparent
                border border-transparent
                px-10 py-6
                scale-100
              `
          }
        `}
      >
        <h1 className="text-2xl font-black text-white">Ravi Mohan</h1>

        <div className="flex font-heading gap-8 text-white">
          <a
            href="#"
            className="relative text-white after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-linear-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior : "smooth" })}
            className="relative cursor-pointer text-white after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-linear-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
          <a
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior : "smooth" })}
            className="relative text-white after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 cursor-pointer after:bg-linear-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
