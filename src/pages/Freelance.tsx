import type { FC } from "react";
import { motion } from "framer-motion";
import comeup from "../../public/logos/comeup.jpg";

const Freelance: FC = () => {
  return (
    <section className="min-h-screen flex flex-col  justify-center px-6">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-2 md:mt-5 md:mb-20  md:ml-10 ml-2 flex items-center gap-3"
        style={{ color: "#00bcff" }}
      >
        <span className="w-12 h-1 bg-[#e17100] rounded"></span> Mes profils
        freelance
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-30"
      >
        {/* Carte Malt */}
        <a
          href="https://www.malt.fr/profile/najibguerchaoui"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center p-6 rounded-2xl overflow-hidden border border-white/20 group w-128 h-64 transition-transform transform hover:scale-105"
        >
          {/* Background flou */}
          <div
            className="absolute inset-0 bg-center bg-cover filter blur-xl brightness-50"
            style={{ backgroundImage: `url(/logos/malt.svg)` }}
          ></div>

          {/* Overlay pour contraste */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Contenu */}
          <img
            src="/logos/malt.svg"
            alt="Malt"
            className="w-20 h-20 mb-4 relative z-10 rounded-2xl"
          />
          <h3 className="text-xl font-semibold mb-2 relative z-10">Malt</h3>
          <p className="text-gray-300 text-center relative z-10">
            Découvrez mon profil Malt et mes missions réalisées.
          </p>
        </a>

        {/* Carte ComeUp */}
        <a
          href="https://comeup.com/fr/@mnajibguerchaoui"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center p-6 rounded-2xl overflow-hidden border border-white/20 group w-128 h-64 transition-transform transform hover:scale-105"
        >
          {/* Background flou */}
          <div
            className="absolute inset-0 bg-center bg-cover filter blur-xl brightness-50"
            style={{ backgroundImage: `url(${comeup})` }}
          ></div>

          {/* Overlay pour contraste */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Contenu */}
          <img
            src={comeup}
            alt="ComeUp"
            className="w-20 h-20 mb-4 relative z-10 rounded-2xl"
          />
          <h3 className="text-xl font-semibold mb-2 relative z-10">ComeUp</h3>
          <p className="text-gray-300 text-center relative z-10">
            Découvrez mon profil ComeUp et mes services proposés.
          </p>
        </a>
      </motion.div>
    </section>
  );
};

export default Freelance;
