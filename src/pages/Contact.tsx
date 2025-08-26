import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl w-full bg-gradient-to-br from-white/10 to-white/5 p-5 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
      >
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 flex items-center gap-3"
          style={{ color: "#00bcff" }}
        >
          <span className="w-12 h-1 bg-[#e17100] rounded"></span>
          {t("contact.title")}
        </motion.h2>

        <p className="text-center text-gray-300 mb-8">
          {t("contact.subtitle")}
        </p>

        {/* Formulaire */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t("contact.form.name")}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00bcff]"
          />
          <input
            type="email"
            placeholder={t("contact.form.email")}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00bcff]"
          />
          <textarea
            placeholder={t("contact.form.message")}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00bcff]"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg font-semibold shadow-lg transition-colors"
            style={{ backgroundColor: "#e17100", color: "#fff" }}
          >
            {t("contact.form.send")}
          </motion.button>
        </form>

        {/* Réseaux */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href="https://github.com/MohnajibG"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Github size={22} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/najib-guerchaoui/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Linkedin size={22} /> LinkedIn
          </a>
          <a
            href="mailto:ton.email@mail.com"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Mail size={22} /> {t("contact.links.email")}
          </a>
          <a
            href="tel:0658748308"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Phone size={22} /> {t("contact.links.phone")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
