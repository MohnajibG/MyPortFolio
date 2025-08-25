import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
  ];

  const [activeSection, setActiveSection] = useState("home");

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
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 mt-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 shadow-lg">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => handleScroll("home")}
            className="text-3xl font-bold text-sky-200 hover:text-sky-400 transition-colors"
          >
            MonPortfolio
          </button>
        </motion.div>

        {/* Menu */}
        <ul className="flex space-x-6 font-semibold">
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
                    : "hover:text-orange-200"
                }`}
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
