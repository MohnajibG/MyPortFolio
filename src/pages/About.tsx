import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  // Liste des liens (mémorisée pour éviter de recréer l'array à chaque render)
  const navLinks = useMemo(
    () => [
      { to: "home", label: t("navbar.home") },
      { to: "about", label: t("navbar.about") },
      { to: "projects", label: t("navbar.projects") },
      { to: "contact", label: t("navbar.contact") },
    ],
    [t]
  );

  // Détection de la section visible
  useEffect(() => {
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
  }, [navLinks]);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle FR <-> EN
  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="w-full mx-auto flex items-center bg-sky-900/80 backdrop-blur-md justify-between px-10 md:px-40 py-4 shadow-lg">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => handleScroll("home")}
            className="text-2xl md:text-3xl font-bold text-sky-400 hover:text-orange-500 transition-colors"
          >
            {t("logo")}
          </button>
        </motion.div>

        {/* Menu + Bouton FR/EN */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4 md:space-x-8 font-semibold">
            {navLinks.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => handleScroll(link.to)}
                  className={`transition-colors ${
                    activeSection === link.to
                      ? "text-orange-500"
                      : "hover:text-sky-200"
                  }`}
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Bouton FR/EN */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-semibold transition-colors"
          >
            {i18n.language === "fr" ? "FR" : "EN"}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
