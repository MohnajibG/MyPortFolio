import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import SectionTag from "../components/SectionTag";
import { projects } from "../data/projects";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <SectionTag index="02" path="/projects" title={t("projects.title")} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
