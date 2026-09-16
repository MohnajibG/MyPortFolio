import { motion } from "framer-motion";

interface SectionTagProps {
  index: string;
  path: string;
  title: string;
  align?: "left" | "center";
}

const SectionTag = ({ index, path, title, align = "left" }: SectionTagProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : ""}`}
  >
    <div
      className={`flex items-center gap-3 font-mono text-xs md:text-sm tracking-widest text-brand-cyan/70 uppercase ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="text-brand-amber">{index}</span>
      <span className="h-px w-10 bg-gradient-to-r from-brand-cyan/70 to-transparent" />
      <span>{path}</span>
    </div>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
      {title}
    </h2>
  </motion.div>
);

export default SectionTag;
