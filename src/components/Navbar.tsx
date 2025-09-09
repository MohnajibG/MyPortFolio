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
      { to: "freelance", label: t("Freelance") },
      { to: "contact", label: t("navbar.contact") },
    ],
    [t]
  );

  // Détection section visible (desktop seulement)
  useEffect(() => {
    if (isOpen) return; // ⛔️ si menu mobile ouvert, ne pas relancer l'observer

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
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="w-full mx-auto flex items-center bg-sky-900/80 backdrop-blur-md justify-between px-6 md:px-40 py-4 shadow-lg">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-2xl md:text-3xl font-bold text-sky-400 hover:text-orange-500 transition-colors"
        >
          {t("logo")}
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx}>
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
              </li>
            ))}
          </ul>

          {/* Bouton langue */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2  border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-semibold transition-colors"
          >
            {i18n.language.toUpperCase()}
          </button>
        </div>

        {/* Bouton Burger Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-semibold transition-colors"
          >
            {i18n.language.toUpperCase()}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sky-400 hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 z-50 md:hidden bg-sky-900/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6"
          >
            <ul className="flex flex-col items-center space-y-6 font-semibold text-lg">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScroll(link.to)}
                    className={`transition-colors ${
                      activeSection === link.to
                        ? "text-orange-500"
                        : "text-white hover:text-sky-200"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Bouton langue */}
            <button
              onClick={toggleLanguage}
              className="mt-10 px-4 py-2 border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-semibold transition-colors"
            >
              {i18n.language.toUpperCase()}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
