import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500">Projet introuvable ❌</div>
    );
  }

  return (
    <article className="relative min-h-screen flex items-center justify-center text-white px-6 py-16">
      {/* Background flou et gris */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale blur-lg opacity-30"
        style={{
          backgroundImage: `url(${project.image || "/images/default-bg.jpg"})`,
        }}
      ></div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenu animé */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl text-center space-y-6 bg-black/30 backdrop-blur-md rounded-xl p-8 shadow-lg"
      >
        {/* Titre & Description */}
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-200">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="bg-white/20 text-sm px-3 py-1 rounded-full shadow"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4 justify-center mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/40 rounded-full text-sm font-medium shadow-xl transition"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/40 rounded-full text-sm font-medium shadow-xl transition"
            >
              Démo
            </a>
          )}
        </div>

        {/* Détails */}
        {project.details && (
          <p className="mt-6 text-gray-300 leading-relaxed">
            {project.details}
          </p>
        )}

        {/* Retour */}
        <Link
          to="/projects"
          className="inline-block mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white shadow-md transition"
        >
          ← Retour aux projets
        </Link>
      </motion.div>
    </article>
  );
};

export default ProjectDetail;
