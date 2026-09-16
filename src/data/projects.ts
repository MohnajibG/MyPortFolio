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
      "Application de gestion de tâches en Kanban (drag & drop, Firebase Auth/Firestore), couplée à un agent d'automatisation qui surveille des annonces immobilières et notifie les correspondances en temps réel.",
    image: "/images/togoApp.png",
    link: "https://todoliste-app.netlify.app/",
    github: "https://github.com/MohnajibG/todoliste",
    type: "Fullstack App",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Firebase",
      "dnd-kit",
      "Playwright",
      "GitHub Actions",
    ],
    demo: "https://todoliste-app.netlify.app/todos",
    details:
      "Au-delà du Kanban classique (catégories personnalisables, drag & drop via dnd-kit, authentification Firebase), le projet embarque un module séparé d'agent de veille immobilière : scraping éthique (flux RSS + Playwright, sans contournement de CAPTCHA ni rotation de proxy) des annonces LeBonCoin et SeLoger, exécuté toutes les 30 minutes via GitHub Actions. Il croise les critères de recherche de chaque utilisateur stockés dans Firestore, déduplique les résultats et déclenche des notifications push via Firebase Cloud Messaging — un processus totalement indépendant du bundle React.",
  },
  {
    id: "chesschain",
    title: "ChessChain",
    logo: "/logos/chesschain-logo.png",
    category: "Web3",
    description:
      "Jeu d'échecs en ligne avec mise réelle en stablecoin (USDC/USDT) : escrow non-custodial et règlement sécurisé par double signature EIP-712, sur une architecture microservices avec matchmaking temps réel.",
    image: "/images/chesschain.png",
    github: "https://github.com/MohnajibG/ChessChain-microservices",
    type: "Multiservices",
    technologies: [
      "React",
      "TypeScript",
      "Solidity",
      "Hardhat",
      "OpenZeppelin",
      "wagmi / viem",
      "Socket.io",
      "Express",
      "MongoDB",
      "Docker",
    ],
    details:
      "Le smart contract (Solidity, OpenZeppelin, déployé sur Sepolia) verrouille la mise des deux joueurs à la création de partie (10/25/50 USDC ou USDT, 2% de frais protocolaires) et enregistre le hash de chaque position FEN jouée. La victoire se règle par double signature EIP-712 hors-chaîne, vérifiée on-chain par le contrat avant de libérer les fonds ; en cas de refus de co-signature, une fenêtre de contestation optimiste de 10 minutes permet de trancher le litige. Le backend (Express 5 + Socket.io + MongoDB change streams) gère uniquement le matchmaking et l'authentification par signature de wallet — la logique d'échecs reste côté client (chess.js), le contrat ne gérant que l'argent. Le frontend React propose 3 modes de jeu (IA, Web3 avec mise, entraînement libre), un plateau Chessground et une vue 3D via react-three/fiber.",
  },
  {
    id: "mytroc",
    title: "MyTROC",
    logo: "/logos/mytroc-logo.png",
    category: "Web3",
    description:
      "Application décentralisée permettant à deux wallets de s'échanger des tokens ERC-20 de façon atomique et trustless, via un smart contract d'escrow façon « chèque » numérique on-chain.",
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
      "wagmi / viem",
      "Reown AppKit",
      "OpenZeppelin",
    ],
    details:
      "MyTROC (mission réalisée pour NextGen Waves) repose sur un contrat OtcEscrow déployé sur Base : openTrade verrouille le token de l'initiateur et désigne nommément la contrepartie autorisée, depositCounterpartyFunds verrouille le token en retour, puis executeTrade exécute le swap atomique des deux dépôts — cancelTrade reste possible selon des règles strictes (avant expiration côté initiateur, avant dépôt côté contrepartie). Le contrat s'appuie sur ReentrancyGuard et SafeERC20 (OpenZeppelin) et prélève des frais protocolaires définis on-chain. Côté UX, la même donnée on-chain adapte l'interface : bouton actif pour la contrepartie désignée, message de refus pour toute autre adresse connectée. Connexion wallet via Reown AppKit (WalletConnect) et wagmi/viem.",
  },

  {
    id: "ucwaves",
    title: "UCWaves",
    logo: "/logos/ucwaves-logo.png",
    category: "Web3",
    description:
      "Développement d'une DApp Web3 pour NextGen Waves : plateforme de partage d'opinions décentralisée sur Base, avec burn/mint de tokens (TOX/TOY/TON), swaps via Uniswap V3 et connexion wallet multi-provider par Reown AppKit. Backend Node.js/MongoDB avec suivi on-chain des transactions.",
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
      "Ethers.js",
      "Reown AppKit",
      "WalletConnect",
      "Uniswap V3",
      "Alchemy SDK",
    ],
    demo: "https://ucWaves.com",
    details:
      "UC Waves permet le burn et le mint de trois tokens custom (TOX/TOY/TON) avec suivi des statistiques globales (totalBurned, totalX1Minted via des checkpoints on-chain), ainsi qu'un dashboard analytics (Recharts, export CSV, filtres par date). La connexion wallet passe par Reown AppKit (adapter Ethers, réseau Base Sepolia) via les hooks useAppKitAccount/useAppKit/useAppKitProvider, avec support multi-provider (MetaMask, WalletConnect, Coinbase). Le backend Express suit les transactions on-chain via l'Alchemy SDK et Ethers.js. Le site inclut aussi des pages documentaires (tokenomics, roadmap, whitepaper via react-pdf) et un blog.",
  },
  {
    id: "sook",
    title: "SOOK!",
    logo: "/logos/sook-logo.png",
    category: "Fullstack",
    description:
      "Marketplace C2C de revente de vêtements entre particuliers (type Vinted) : publication d'annonces avec upload d'images, paiement Stripe intégré et authentification email + Google OAuth.",
    image: "/images/sook.png",
    link: "https://sooki.netlify.app",
    github: "https://github.com/MohnajibG/Forentend-SOOK", // frontend
    type: "Fullstack App",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Passport / Google OAuth",
      "Cloudinary",
      "Stripe",
    ],
    demo: "https://sooki.netlify.app",
    details:
      "SOOK permet la création, l'édition et la suppression d'annonces avec validation serveur, l'upload multi-images vers Cloudinary (preview, validation MIME) et un paiement Stripe de bout en bout où le montant est recalculé côté serveur depuis le panier réel pour éviter toute manipulation côté client. L'authentification combine email/mot de passe et Google OAuth (Passport). La recherche s'appuie sur des requêtes MongoDB (titre, description, marque) avec pagination et tri, et les annonces sont organisées par marque, ville, couleur, taille et état.",
  },
  {
    id: "anfalek",
    title: "AnfaleK",
    category: "Fullstack",
    description:
      "Application complète de gestion pour salon de coiffure/beauté : site vitrine public avec prise de rendez-vous en ligne et back-office multi-rôles (admin/caissier/employé) avec caisse enregistreuse intégrée.",
    github: "https://github.com/MohnajibG/ANFELK",
    type: "Fullstack App",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Express",
      "MongoDB",
      "JWT",
      "Zod",
      "Cloudinary",
      "Playwright",
    ],
    details:
      "Le parcours de réservation est accessible sans connexion : sélection du service et de l'employé, calcul des disponibilités réelles, création du rendez-vous. Le back-office propose 3 espaces dédiés selon le rôle (admin/caissier/employé), un calendrier RDV (vues jour/semaine/mois) avec récurrence et liste d'attente, un module de caisse (ouverture/fermeture de session, panier, sélecteur client) et une gestion clients avec score de fiabilité. L'API (Express 5, MongoDB, JWT + cookies, validation Zod) est couverte par des tests Jest, et le frontend par des tests end-to-end Playwright.",
  },
  {
    id: "flowdesk",
    title: "Flowdesk",
    category: "Fullstack",
    description:
      "Version générique et réutilisable du projet AnfaleK : un template SaaS « white-label » pour n'importe quel commerce fonctionnant par rendez-vous (institut, cabinet, atelier...).",
    github: "https://github.com/MohnajibG/salon-pos-template",
    type: "Template SaaS",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Express",
      "MongoDB",
      "JWT",
      "Zod",
      "Jest",
      "Playwright",
    ],
    details:
      "Le README documente explicitement le travail de généricisation par rapport à AnfaleK : devise centralisée, libellés de spécialité neutres, table de correspondance marque → fichier pour repositionner le template sur un nouveau client. On y retrouve les mêmes briques (rendez-vous, caisse, employés/services/catégories, clients, dépenses, dashboard analytics), mais avec un calendrier RDV et des graphiques SVG développés en interne, sans dépendance externe, et une réconciliation cash/carte manuelle en caisse plutôt qu'une passerelle de paiement en ligne.",
  },
  {
    id: "ecorenov",
    title: "Global EcoRénov'",
    category: "Vitrine",
    description:
      "Site vitrine pour une entreprise de rénovation énergétique (pompes à chaleur, isolation, VMC), avec accompagnement MaPrimeRénov'/CEE, demande d'audit gratuit et visionneuse PDF intégrée.",
    link: "https://www.global-ecorenov.fr/",
    demo: "https://www.global-ecorenov.fr/",
    type: "Vitrine",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "React Router",
      "Framer Motion",
      "react-pdf",
      "EmailJS",
      "GitHub Actions",
    ],
    details:
      "Chaque produit affiche sa fiche d'éligibilité selon la logique de cumul des aides (MaPrimeRénov' + CEE). Le guide MaPrimeRénov' se consulte via une visionneuse PDF maison (react-pdf/pdfjs, worker auto-hébergé, pagination clavier, responsive). Le site est un SPA 100% statique (sans backend), avec SEO complet par page (meta/OG/Twitter dynamiques, sitemap, robots.txt), un formulaire de contact protégé par honeypot anti-spam, une gestion des cookies RGPD par catégories (essentiels/analytics/marketing) et un déploiement automatisé par GitHub Actions vers un hébergement OVH.",
  },
  {
    id: "prospection",
    title: "Prospection",
    category: "B2B",
    description:
      "Outil de prospection B2B qui interroge le répertoire SIRENE (INSEE) pour repérer les restaurants et traiteurs nouvellement créés, puis enrichit chaque lead avec téléphone et site web.",
    github: "https://github.com/MohnajibG/prospection",
    type: "Outil B2B",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "API SIRENE",
      "API Adresse",
      "Overpass API",
    ],
    details:
      "La recherche interroge l'API SIRENE (codes NAF restauration par défaut, filtrable par département et fenêtre de création, ou directement par SIRET). Quand SIRENE ne fournit pas de contact, l'outil géocode l'adresse via l'API Adresse (data.gouv.fr) puis recoupe la position avec l'API Overpass (OpenStreetMap) par proximité géographique et similarité de nom pour retrouver téléphone et site web. Les leads qualifiés s'exportent en Excel/CSV, avec des filtres persistés en localStorage. Le backend Express est entièrement stateless — pas de base de données, uniquement un rôle de proxy/enrichissement.",
  },
];
