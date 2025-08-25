import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 
                   p-10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
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
          About Me
        </motion.h2>

        {/* Paragraphe */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-200 leading-relaxed text-justify text-lg space-y-4"
        >
          Développeur Web Fullstack spécialisé en{" "}
          <span className="text-[#e17100] font-semibold">
            JavaScript/TypeScript
          </span>{" "}
          (<span className="text-[#e17100] font-semibold">React</span>,{" "}
          <span className="text-[#e17100] font-semibold">Node.js</span>,{" "}
          <span className="text-[#e17100] font-semibold">MongoDB</span>), j’ai
          construit des projets complets allant d’API backend performantes à des
          interfaces interactives orientées utilisateur.
          <br />
          <br />
          Passionné par le{" "}
          <span className="text-[#00bcff] font-semibold">Web3</span>, j’ai
          développé des dApps, intégrations WalletConnect, systèmes de staking
          et extensions Chrome type MetaMask.
          <br />
          <br />
          Mon parcours atypique, avec plus de{" "}
          <span className="text-[#00bcff] font-semibold">
            10 ans d’expérience en management
          </span>{" "}
          et pilotage de centres de profit, m’apporte une forte capacité à gérer
          des projets complexes, à encadrer des équipes et à maintenir une
          exigence de qualité élevée.
          <br />
          <br />
          Rigoureux, autonome et orienté produit, je conçois des solutions
          modernes, sécurisées et scalables, tout en gardant une approche
          centrée sur
          <span className="text-[#e17100] font-semibold">
            {" "}
            l’expérience utilisateur
          </span>
          .
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
