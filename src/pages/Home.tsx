import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import Cv from "../components/CVDownload";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  // On caste explicitement en tableau de chaînes
  const techs: string[] = t("home.techs", { returnObjects: true }) as string[];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8 mb-100">
      {/* Colonne gauche : Texte */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" max-w-2xl bg-gradient-to-br from-white/10 to-white/5 
                   p-10 rounded-t-3xl md:rounded-l-4xl shadow-2xl backdrop-blur-md border border-white/10 mt-20"
      >
        {/* Nom et titre */}
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-center"
          style={{ color: "#00bcff" }}
        >
          {t("home.name")}
        </h1>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide text-center"
          style={{ color: "#e17100" }}
        >
          {t("home.role")}
        </h2>

        {/* Boutons de téléchargement du CV */}
        <div className="mb-8">
          <Cv />
        </div>

        {/* Liste des techno */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-10xl flex flex-wrap justify-center md:justify-start gap-3 hover:cursor-pointer"
        >
          {techs.map((tech, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-white/10 hover:bg-orange-400/40 rounded-full text-sm font-medium shadow-xl transition-transform"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Colonne droite : Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center"
      >
        <img
          src={profileImg}
          alt={t("home.alt")}
          className="max-w-3xl h-80 object-cover rounded-b-2xl  md:rounded-r-3xl shadow-4xl border-4 hover:scale-105 transition-transform duration-300"
          style={{ borderColor: "#00bcff" }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
