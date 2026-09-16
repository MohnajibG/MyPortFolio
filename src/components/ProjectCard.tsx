import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import type { Project } from "../data/projects";
import Panel from "./Panel";
import Cta from "./Cta";

const typeStyles: Record<string, string> = {
  DApp: "bg-purple-600/20 text-purple-300 border-purple-500/30",
  Multiservices: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
  Fullstack: "bg-red-600/20 text-red-300 border-red-500/30",
  "Fullstack DApp": "bg-green-600/20 text-green-300 border-green-500/30",
  Vitrine: "bg-teal-600/20 text-teal-300 border-teal-500/30",
  "Outil B2B": "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
  "Template SaaS": "bg-pink-600/20 text-pink-300 border-pink-500/30",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  if (!project) return null;

  const badgeStyle =
    typeStyles[project.type] ?? "bg-blue-600/20 text-blue-300 border-blue-500/30";

  return (
    <>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
        <Panel label={`${project.id}.tsx`} bodyClassName="p-0" className="h-full">
          <div className="flex h-full flex-col">
            {project.image && (
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-abyss via-brand-abyss/10 to-transparent" />
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="absolute bottom-2 left-3 h-10 w-10 rounded-full border border-white/20 object-cover shadow-lg"
                  />
                )}
              </div>
            )}

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>

              <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span
                  className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${badgeStyle}`}
                >
                  {project.type}
                </span>

                <Cta onClick={() => setOpen(true)} className="px-3 py-1.5 text-[11px]">
                  {t("projects.viewMore")}
                </Cta>
              </div>
            </div>
          </div>
        </Panel>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Panel label={`${project.id}.tsx`} bodyClassName="p-6 md:p-8">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-4 text-white/40 transition-colors hover:text-white"
                >
                  <X size={20} />
                </button>

                {project.image && (
                  <div className="mb-6 -mt-2 overflow-hidden rounded-lg border border-white/10">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="h-12 w-12 rounded-full border border-white/20 object-cover"
                    />
                  )}
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                </div>

                <p className="mt-5 leading-relaxed text-gray-200">
                  {project.details || project.description}
                </p>

                {project.technologies && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-brand-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github?.trim() && (
                    <Cta href={project.github} target="_blank" variant="ghost">
                      Code
                    </Cta>
                  )}
                  {project.demo?.trim() && (
                    <Cta href={project.demo} target="_blank" variant="solid">
                      Démo
                    </Cta>
                  )}
                </div>
              </Panel>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
