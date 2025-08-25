import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // icônes burger et close

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // navLinks se recrée seulement quand la fonction de traduction change
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
      setIsOpen(false); // ferme le menu en mobile
    }
  };

  // Toggle langue FR <-> EN
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
      <div className="w-full mx-auto flex items-center bg-sky-900/80 backdrop-blur-md justify-between px-6 md:px-40 py-4 shadow-lg">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => handleScroll("home")}
            className="text-2xl md:text-3xl font-bold text-sky-400 hover:text-orange-500 transition-colors"
          >
            {t("logo")}
          </button>
        </motion.div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
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
            {i18n.language.toUpperCase()}
          </motion.button>
        </div>

        {/* Bouton Burger Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-semibold transition-colors"
          >
            {i18n.language.toUpperCase()}
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sky-400 hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-sky-900/95 backdrop-blur-md px-6 py-6 shadow-lg"
        >
          <ul className="flex flex-col space-y-4 font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleScroll(link.to)}
                  className={`w-full text-left transition-colors ${
                    activeSection === link.to
                      ? "text-orange-500"
                      : "hover:text-sky-200"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
