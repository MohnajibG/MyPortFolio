import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import Cv from "../components/CVDownload";
import Panel from "../components/Panel";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  // On caste explicitement en tableau de chaînes
  const techs: string[] = t("home.techs", { returnObjects: true }) as string[];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-12 px-4 md:flex-row md:gap-16 md:px-8">
      {/* Colonne gauche : Texte */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <Panel label="whoami.sh">
          <p className="mb-4 font-mono text-xs text-white/40">
            <span className="text-brand-amber">~/portfolio</span> $ whoami
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-brand-cyan md:text-5xl">
            {t("home.name")}
          </h1>
          <h2 className="mt-2 font-mono text-lg font-medium text-brand-amber md:text-xl">
            {t("home.role")}
          </h2>

          <div className="mt-8 mb-8">
            <Cv />
          </div>

          {/* Liste des techno */}
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
              >
                #{tech.toLowerCase().replace(/[.\s]/g, "")}
              </motion.span>
            ))}
          </div>
        </Panel>
      </motion.div>

      {/* Colonne droite : Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm"
      >
        <Panel label="profile.png" bodyClassName="p-2">
          <img
            src={profileImg}
            alt={t("home.alt")}
            className="h-72 w-full rounded-lg object-cover md:h-96"
          />
        </Panel>
      </motion.div>
    </section>
  );
};

export default Home;
