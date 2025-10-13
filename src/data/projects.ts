export interface Project {
  id: string;
  title: string;
  logo?: string;
  description: string;
  category: string;
  link?: string;
  github?: string;
  type: string;
  image?: string; // ✅ optionnel
  technologies?: string[]; // ✅ optionnel
  demo?: string; // ✅ optionnel
  details?: string; // ✅ optionnel
}

export const projects: Project[] = [
  {
    id: "todoapp",
    title: "TodoApp",
    logo: "/logos/todoApp-logo.png",
    category: "Fullstack",
    description:
      "Application de gestion de tâches avec authentification avec firebase, création, modification et suppression de tâches. Frontend React/TypeScript et backend par firebase.",
    image: "/images/togoApp.png",
    link: "https://todoliste-app.netlify.app/",
    github: " ttps://github.com/MohnajibG/ChessChain-microservices",
    type: "Fullstack App",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "firebase",
      "Netlify",
      "Northflank",
    ],
    demo: "https://todoliste-app.netlify.app/todos",
  },
  {
    id: "chesschain",
    title: "ChessChain",
    logo: "/logos/chesschain-logo.png",
    category: "Web3",
    description:
      "DApp permettant à deux joueurs de s’affronter aux échecs en misant des tokens USDC. Backend temps réel avec Socket.io, smart contracts Solidity déployés via Hardhat, intégration Ethers.js, et logique de jeu avec Chess.js.",
    image: "/images/chesschain.png",
    link: "https://demo-chesschain.com",
    github: "https://github.com/MohnajibG/ChessChain-microservices",
    type: "Multiservices",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Docker",
    ],
    demo: "https://demo-chesschain.com", // ⚠️ à compléter
    details:
      "ChessChain est une application Web3 innovante combinant un moteur d'échecs classique avec des enjeux blockchain. Les joueurs se connectent via wallet, placent des mises en USDC et jouent en temps réel. Le backend gère le matchmaking et la logique du jeu, tandis que les smart contracts sécurisent les transactions et mises en jeu.",
  },
  {
    id: "mytroc",
    title: "MyTROC",
    logo: "/logos/mytroc-logo.png",
    category: "Web3",
    description:
      "Application décentralisée permettant de créer, annuler ou récupérer des échanges de tokens ERC-20 via des smart contracts d'escrow.",
    image: "/images/mytroc.png",
    link: "https://demo-mytroc.com", // ⚠️ à remplacer par ton vrai lien déployé
    github: "https://github.com/MohnajibG/mytroc", // ⚠️ complète si tu veux
    type: "DApp",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "Ethers.js",
      "Smart Contracts",
      "WalletConnect",
    ],
    demo: " ",
    details:
      "MyTROC est une DApp Web3 permettant aux utilisateurs de réaliser des échanges sécurisés de tokens via un système d’escrow. Les utilisateurs peuvent créer un trade, l’annuler ou le récupérer selon les conditions définies dans le smart contract. L’application intègre un Smart Wallet et WalletConnect pour la connexion et gère l’UX via React, Tailwind et Framer Motion.",
  },

  {
    id: "ucwaves",
    title: "UCWaves",
    logo: "/logos/ucwaves-logo.png",
    category: "Web3",
    description:
      "Développement complet d'une DApp Web3 et d'une extension Chrome UC Wallet (type MetaMask). Intégration AppKit, WalletConnect, Stripe Onramp, Uniswap V3 et Smart Wallet. Backend Node.js/MongoDB + FastAPI avec suivi des transactions on-chain et notifications admin.",
    image: "/images/ucwaves.png",
    link: "https://ucWaves.com",
    github: "https://github.com/MohnajibG/",
    type: "Fullstack DApp",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "AppKit",
      "WalletConnect",
      "Stripe",
      "Uniswap V3",
      "Smart Contracts",
    ],
    demo: "https://ucWaves.com",
    details:
      "Projet réalisé pour NextGen Waves. UC Waves est une plateforme complète combinant une DApp Web3 et une extension Chrome type MetaMask. L'application permet l'achat de tokens via Stripe, l'intégration de Smart Wallets via AppKit, ainsi que le swap on-chain avec Uniswap V3. Le backend, développé en Node.js et MongoDB, assure le suivi des transactions et les notifications administratives, tandis que FastAPI gère certaines APIs spécialisées.",
  },
  {
    id: "sook",
    title: "SOOK!",
    logo: "/logos/sook-logo.png",
    category: "Fullstack",
    description:
      "SOOK est une plateforme de marché en ligne permettant aux utilisateurs de publier, rechercher et gérer des produits. Architecture complète avec frontend React/TypeScript et backend Node.js/MongoDB.",
    image: "/images/sook.png",
    link: "https://sooki.netlify.app",
    github: "https://github.com/MohnajibG/Forentend-SOOK", // frontend
    type: "Fullstack App",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Netlify",
      "Northflank",
    ],
    demo: "https://sooki.netlify.app",
    details:
      "Développement complet d’une marketplace avec React + Tailwind côté frontend et Node.js/Express + MongoDB côté backend. Déploiement du backend sur Northflank et du frontend sur Netlify. Fonctionnalités principales : gestion des annonces produits, authentification sécurisée, API REST, recherche et filtres avancés.",
  },
];
