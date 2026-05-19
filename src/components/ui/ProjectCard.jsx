import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({
  title,
  short_desc,
  description,
  image,
  github,
  tech = [],
}) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setShow(true)}
      onHoverEnd={() => setShow(false)}
      className="w-96 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl text-white overflow-hidden"
      animate={{
        width: show ? "40rem" : "24rem",
      }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="p-4 text-3xl font-black">{title}</h1>

      <img src={image} alt={title} className="h-72 w-full object-cover" />

      <div className="min-h-40 space-y-4 p-4">
        {!show ? (
          <p className="text-white/70">{short_desc}</p>
        ) : (
          <p className="text-lg text-white/70">{description}</p>
        )}
        {!show && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500 px-2"
          >
            GitHub
          </a>
        )}
        {show && (
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="flex gap-3">
              {tech.map((icon, index) => (
                <div
                  key={index}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                >
                  <img src={icon} className="h-7 w-7 object-contain" />
                </div>
              ))}
            </div>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 px-2"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
