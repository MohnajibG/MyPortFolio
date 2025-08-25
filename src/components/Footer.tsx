import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md text-gray-300 py-8  border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#00bcff]">
            Mohammed Najib Guerchaoui
          </span>{" "}
          — Tous droits réservés.
        </p>

        {/* Liens avec icônes */}
        <div className="flex gap-6">
          <a
            href="https://github.com/MohnajibG"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Github size={20} />{" "}
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/najib-guerchaoui/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Linkedin size={20} />{" "}
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:ton.email@mail.com"
            className="flex items-center gap-2 hover:text-[#e17100] transition-colors"
          >
            <Mail size={20} /> <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
