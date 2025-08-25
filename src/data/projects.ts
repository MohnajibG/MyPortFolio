export interface Project {
  id: string;
  title: string;
  category: "Web3" | "Frontend" | "Backend";
  description: string;
  image: string;
  link: string;
  github: string;
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
  },
  {
    id: "web3-2",
    title: "Extension Chrome Wallet",
    category: "Web3",
    description: "Un wallet crypto sous forme d’extension Chrome.",
    image: "/images/wallet.png",
    link: "https://demo-wallet.com",
    github: "https://github.com/tonprofil/chrome-wallet",
  },
  {
    id: "web3-3",
    title: "Interface Uniswap custom",
    category: "Web3",
    description: "Fork d’Uniswap avec un connecteur de wallet personnalisé.",
    image: "/images/uniswap.png",
    link: "https://demo-uniswap.com",
    github: "https://github.com/tonprofil/uniswap-fork",
  },
  {
    id: "frontend-1",
    title: "Portfolio V1",
    category: "Frontend",
    description: "Un site personnel moderne fait avec React + Tailwind.",
    image: "/images/portfolio.png",
    link: "https://tonportfolio.com",
    github: "https://github.com/tonprofil/portfolio-v1",
  },
  {
    id: "backend-1",
    title: "API Node.js pour Blog",
    category: "Backend",
    description: "API REST avec Node.js + MongoDB pour gérer un blog.",
    image: "/images/api-blog.png",
    link: "https://api-blog.com",
    github: "https://github.com/tonprofil/blog-api",
  },
];
