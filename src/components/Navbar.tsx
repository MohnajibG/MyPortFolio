import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Liens traduits
  const navLinks = useMemo(
    () => [
      { to: "home", label: t("navbar.home") },
      { to: "about", label: t("navbar.about") },
      { to: "projects", label: t("navbar.projects") },
      { to: "freelance", label: t("navbar.freelance") },
      { to: "contact", label: t("navbar.contact") },
    ],
    [t]
  );

  // Détection section visible (desktop seulement)
  useEffect(() => {
    if (isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.to);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks, isOpen]);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // ferme le menu mobile après clic
    }
  };

  // Toggle langue
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 shadow-[0_0_30px_-10px_rgba(0,188,255,0.35)] backdrop-blur-xl md:px-6">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-brand-cyan md:text-base"
        >
          <img
            src="/logos/logomngdev.png"
            alt="mngdevpro logo"
            className="h-8 w-8 rounded-full border border-white/15"
          />
          <span className="hidden sm:inline">{t("logo")}</span>
        </button>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                activeSection === link.to
                  ? "text-brand-abyss"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {activeSection === link.to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-brand-cyan"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Bouton langue */}
          <button
            onClick={toggleLanguage}
            className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs font-semibold text-brand-cyan transition-colors hover:border-brand-cyan hover:bg-brand-cyan/10"
          >
            {i18n.language.toUpperCase()}
          </button>

          {/* Bouton Burger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-cyan transition-colors hover:text-brand-amber md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-brand-abyss md:hidden"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <li key={link.to} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-brand-amber">
                    0{idx + 1}
                  </span>
                  <button
                    onClick={() => handleScroll(link.to)}
                    className={`text-2xl font-semibold transition-colors ${
                      activeSection === link.to
                        ? "text-brand-cyan"
                        : "text-white hover:text-brand-cyan"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
