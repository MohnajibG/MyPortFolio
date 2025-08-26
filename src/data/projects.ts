export interface Project {
  id: string;
  title: string;
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
    id: "web3-1",
    title: "DApp de Staking",
    category: "Web3",
    description: "Application décentralisée pour staker des tokens ERC-20.",
    image: "/images/staking.png",
    link: "https://demo-staking.com",
    github: "https://github.com/tonprofil/staking-dapp",
    type: "",
  },
  {
    id: "web3-2",
    title: "Extension Chrome Wallet",
    category: "Web3",
    description: "Un wallet crypto sous forme d’extension Chrome.",
    image: "/images/wallet.png",
    link: "https://demo-wallet.com",
    github: "https://github.com/tonprofil/chrome-wallet",
    type: "",
  },
  {
    id: "web3-3",
    title: "Interface Uniswap custom",
    category: "Web3",
    description: "Fork d’Uniswap avec un connecteur de wallet personnalisé.",
    image: "/images/uniswap.png",
    link: "https://demo-uniswap.com",
    github: "https://github.com/tonprofil/uniswap-fork",
    type: "",
  },
  {
    id: "frontend-1",
    title: "Portfolio V1",
    category: "Frontend",
    description: "Un site personnel moderne fait avec React + Tailwind.",
    image: "/images/portfolio.png",
    link: "https://tonportfolio.com",
    github: "https://github.com/tonprofil/portfolio-v1",
    type: "",
  },
  {
    id: "backend-1",
    title: "API Node.js pour Blog",
    category: "Backend",
    description: "API REST avec Node.js + MongoDB pour gérer un blog.",
    image: "/images/api-blog.png",
    link: "https://api-blog.com",
    github: "https://github.com/tonprofil/blog-api",
    type: "",
  },
];
