import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section>
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-5 ml-6 flex items-center gap-3"
        style={{ color: "#00bcff" }}
      >
        <span className="w-12 h-1 bg-[#e17100] rounded"></span>
        {t("about.title")}
      </motion.h2>
      <div
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 
                   p-5 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
        >
          {/* Paragraphes traduits */}
          {paragraphs.map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-200 leading-relaxed text-justify text-lg space-y-4 mb-4"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
