import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="section">
      {/* Titre and logo */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-5 ml-6  md:mt-60 md:mb-14  flex items-center gap-3 md:ml-20"
        style={{ color: "#00bcff" }}
      >
        <span className="w-12 h-1 bg-[#e17100] rounded"></span>
        My Projects
      </motion.h2>

      {/* Liste des projets */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-6 md:px-10">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
