import { useState } from "react";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  image?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  details?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);

  if (!project) return null;

  return (
    <>
      {/* Carte projet */}
      <div
        className="w-full sm:w-[45%] lg:w-[40%] p-4 rounded-lg 
        h-60
                   bg-white/5 border border-white/10 shadow-lg 
                   hover:scale-[1.02] transition-transform duration-300 cursor-pointer
                   flex flex-col justify-between"
      >
        <h2 className="text-xl font-bold mb-2 text-orange-400">
          {project.title}
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 text-justify">
          {project.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              project.type === "DApp"
                ? "bg-purple-600/30 text-purple-300"
                : project.type === "Multiservices DApp"
                ? "bg-red-600/30 text-red-300"
                : project.type === "Fullstack DApp"
                ? "bg-green-600/30 text-green-300"
                : "bg-blue-600/30 text-blue-300"
            }`}
          >
            {project.type}
          </span>

          <button
            onClick={() => setOpen(true)}
            className="button-primary text-sm px-4 py-2"
          >
            Voir plus →
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✅ Background flouté + sombre */}
            {project.image && (
              <div
                className="absolute inset-0 bg-cover bg-center blur-lg brightness-50"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            )}

            {/* Contenu modal */}
            <div className="relative z-10 p-8 text-white space-y-6 bg-black/50 backdrop-blur-md rounded-xl">
              {/* Bouton fermer */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-2xl text-gray-300 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-justify">
                {project.title}
              </h2>
              <p className="text-gray-200 text-justify">
                {project.details || project.description}
              </p>

              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#460809]/50  hover:bg-[#460809]/90  px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Liens */}
              <div className="flex gap-4 mt-4 justify-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#002c22]/40 hover:bg-[#002c22]/20 rounded-full"
                  >
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#3c0366]/60 hover:bg-[#3c0366]/40 rounded-full"
                  >
                    Démo
                  </a>
                )}
              </div>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mt-4 rounded-md shadow-lg"
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
