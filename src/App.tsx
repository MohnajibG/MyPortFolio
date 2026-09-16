import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Freelance from "./pages/Freelance";

const sections = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "freelance", Component: Freelance },
  { id: "contact", Component: Contact },
];

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-abyss text-white">
      {/* Fond : gradient de base + grille blueprint + halos lumineux */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-brand-navy to-brand-navy-deep" />
      <div className="bg-blueprint pointer-events-none fixed inset-0 opacity-60" />
      <div className="pointer-events-none fixed -top-40 -left-40 h-96 w-96 rounded-full bg-brand-cyan/20 blur-[120px]" />
      <div className="pointer-events-none fixed -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-amber/15 blur-[120px]" />
      <div className="bg-grain" />

      <Navbar />

      <main className="app-scroll relative z-10 my-10 h-screen flex-grow snap-y snap-proximity overflow-y-scroll">
        {sections.map(({ id, Component }, index) => (
          <section
            key={id}
            id={id}
            className="my-20 flex snap-start items-center justify-center px-6"
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
