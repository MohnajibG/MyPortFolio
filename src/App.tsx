import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
const sections = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "Contact", Component: Contact },
];

const App = () => {
  // const [hideHeader, setHideHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const main = document.querySelector("main");
      if (!main) return;

      const scrollTop = (main as HTMLElement).scrollTop;
      const scrollHeight = (main as HTMLElement).scrollHeight;
      const clientHeight = (main as HTMLElement).clientHeight;

      // Header disparaît si on a scrollé un peu
      // setHideHeader(scrollTop > 50);

      // Footer visible uniquement tout en bas
      setShowFooter(scrollTop + clientHeight >= scrollHeight - 10);
    };

    const main = document.querySelector("main");
    main?.addEventListener("scroll", handleScroll);

    return () => {
      main?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#021b36] to-[#032c58] text-white">
      {/* Header animé */}
      <header className="sticky top-0 bg-white z-50 shadow-md">
        <Navbar />
      </header>

      {/* Contenu scrollable avec snap */}
      <main className="flex-grow h-screen overflow-y-scroll snap-y snap-mandatory">
        {sections.map(({ id, Component }, index) => (
          <section
            key={id}
            id={id}
            className="snap-start  flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-5xl"
            >
              <Component />
            </motion.div>
          </section>
        ))}
      </main>

      {/* Footer animé */}
      <motion.footer
        initial={{ y: 100 }}
        animate={{ y: showFooter ? 0 : 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-auto"
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default App;
