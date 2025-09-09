import { motion } from "framer-motion";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Freelance from "./pages/freelance";

const sections = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "freelance", Component: Freelance },
  { id: "contact", Component: Contact },
];

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const main = document.querySelector("main");
      if (!main) return;
      // (on ne gère plus le footer)
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
      <Navbar />

      {/* Contenu scrollable avec snap */}
      <main
        className="flex-grow h-screen overflow-y-scroll snap-y 
      snap-proximity my-10"
      >
        {sections.map(({ id, Component }, index) => (
          <section
            key={id}
            id={id}
            className="snap-start flex items-center justify-center px-6 my-20"
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
    </div>
  );
};

export default App;
