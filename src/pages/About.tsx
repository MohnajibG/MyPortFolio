import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Panel from "../components/Panel";
import SectionTag from "../components/SectionTag";

const About = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section className="mx-auto w-full max-w-3xl px-2">
      <SectionTag index="01" path="/about" title={t("about.title")} />

      <Panel label="about.md" bodyClassName="p-6 md:p-8">
        <div className="space-y-6">
          {paragraphs.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
              <p className="text-justify leading-relaxed text-gray-200">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </Panel>
    </section>
  );
};

export default About;
