interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  type: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link || project.github || "#"}
      target="_blank"
      rel="noreferrer"
      className="block w-full sm:w-[45%] lg:w-[40%] p-6 rounded-lg bg-white/5 border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <div>
        <h2 className="text-xl font-bold mb-6 text-orange-400">
          {project.title}
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed text-justify">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            project.type === "Web3"
              ? "bg-purple-600/30 text-purple-300"
              : "bg-blue-600/30 text-blue-300"
          }`}
        >
          {project.type}
        </span>

        <div className="flex gap-2">
          {project.link && (
            <span className="button-primary text-sm px-4 py-2">Demo</span>
          )}
          {project.github && (
            <span className="button-secondary text-sm px-4 py-2">Code</span>
          )}
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
