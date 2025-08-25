import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  type: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "chesschain",
      title: "ChessChain – Jeu d'échecs Web3",
      description:
        "Développement d’une application Web3 avec React et TypeScript permettant à deux joueurs de s’affronter aux échecs en misant des tokens USDC. Intégration de RainbowKit/Wagmi pour la connexion wallet, gestion temps réel avec Socket.io, logique d’échecs via Chess.js et interactions on-chain avec Ethers.js.",
      link: "#",
      github: "https://github.com/MohnajibG/ChessChain-microservices",
      type: "Web3",
    },
    {
      id: "mytroc",
      title: "MyTROC – Application d’échange de tokens",
      description:
        "Développement d’une interface Web3 avec React et TypeScript permettant aux utilisateurs de créer, utiliser ou annuler des échanges de tokens. Intégration de WalletConnect, animations avec Framer Motion, et logique conditionnelle basée sur l’adresse utilisateur.",
      link: "#",
      github: "#",
      type: "Web3",
    },
    {
      id: "ucwaves",
      title: "UCWaves – Développement Fullstack Web3",
      description:
        "Développement complet d'une DApp Web3 et d'une extension Chrome UC Wallet (type MetaMask). Intégration AppKit, WalletConnect, Stripe, Uniswap V3 et Smart Wallet. Backend Node.js/MongoDB + FastAPI avec suivi des transactions on-chain et notifications admin.",
      link: "#",
      github: "#",
      type: "Web3",
    },
    {
      id: "sook",
      title: "SOOK! – Projet Personnel Fullstack",
      description:
        "Création d’une plateforme de marché en ligne. Backend en Node.js/Express avec API REST sécurisée, MongoDB et authentification. Frontend en React + TypeScript avec formulaires validés, navigation via React Router et intégration avec Axios. Déploiement : Backend sur Northflank, Frontend sur Netlify.",
      link: "https://sooki.netlify.app",
      github: "https://github.com/MohnajibG/Forentend-SOOK",
      type: "Fullstack",
    },
  ];

  return (
    <section className="section">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 flex items-center gap-3 ml-40"
        style={{ color: "#00bcff" }}
      >
        <span className="w-12 h-1 bg-[#e17100] rounded"></span>
        My Projects
      </motion.h2>

      {/* Liste des projets */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-6 md:px-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
