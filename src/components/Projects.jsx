import { projects } from "@/lib/myProjects";
import { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const rotations = [-12, 12, -11, 11, -10, 10];
  const colors = ["#22D3EE", "#A855F7", "#EC4899", "#67E8F9", "#8B5CF6"];
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },

    show: (index) => ({
      opacity: 1,
      y: index * 100,
      scale: 1 - index * 0.04,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-x-hidden flex flex-col justify-center pb-32"
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute -bottom-5 rounded-2xl blur-[1px] animate-particle"
            style={{
              left: `${Math.random() * 100}%`,

              background: colors[Math.floor(Math.random() * colors.length)],
              width: `${2 + Math.random() * 8}px`,
              height: `${2 + Math.random() * 8}px`,

              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 10}s`,

              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="w-full relative min-h-screen">
        {/* Heading */}
        <div>
          <h1 className="text-5xl text-white text-center tracking-widest leading-relaxed font-cormorant font-bold">
            Projects
          </h1>
          <div className="w-32 h-px justify-self-center bg-linear-[to_right,transparent,rgba(34,211,238,0.6),rgba(168,85,247,0.6),transparent]" />
        </div>

        {/* Main container */}
        <div className="my-2 w-full min-h-full relative flex justify-around gap-8 px-12 items-center">
          {/* Left container */}
          <div className="w-1/2 min-h-screen flex justify-center items-center flex-col">
            <h1 className="text-7xl font-semibold text-white leading-relaxed font-cormorant tracking-wide">
              Featured{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #22D3EE, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 24px rgba(34,211,238,0.3))",
                }}
              >
                Work
              </span>
            </h1>
            <p className="text-white/60 leading-relaxed text-lg max-w-sm">
              A collection of immersive web experiences, premium interfaces, and
              scalable full-stack applications.
            </p>
            <p className="mt-2.5 text-white/60 leading-relaxed text-sm max-w-sm tracking-widest">
              Hover over any card and have a crazy interaction! <br />
              Click on the card to visit the website.
            </p>
          </div>

          {/* Right Container */}
          <div className="w-1/2 min-h-screen flex justify-start items-center flex-col">
            <motion.div
              initial="hidden"
              animate="show"
              className="w-3/4 min-h-screen flex justify-center items-start"
            >
              {projects.map((project, index) => {
                const rotatingFactor = rotations[index % rotations.length];
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 300,
                      rotate: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: index * 100,
                      rotate: rotatingFactor,
                      scale: 1 - index * 0.04,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.02,
                      zIndex: 999,
                      y: 0,
                    }}
                    className="cursor-pointer absolute"
                  >
                    <a href={project.live} target="_blank">
                      <ProjectCard
                        title={project.title}
                        short_desc={project.short_desc}
                        description={project.desc}
                        image={project.image}
                        github={project.github}
                        tech={project.tech}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
