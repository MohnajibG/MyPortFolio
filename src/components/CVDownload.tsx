import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CVDownload = () => {
  return (
    <section className="section text-center ">
      {/* <h2 className="text-3xl font-bold mb-8 text-[#00bcff]">Mon CV</h2> */}

      <div className="flex justify-center gap-6">
        {/* CV Français */}
        <motion.a
          href="/cv_fr.pdf"
          download="CV_MohammedNajib_FR.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition-colors"
          style={{ backgroundColor: "#e17100" }}
        >
          <Download size={18} />
          CV FR
        </motion.a>

        {/* CV Anglais */}
        <motion.a
          href="/cv_en.pdf"
          download="CV_MohammedNajib_EN.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition-colors"
          style={{ backgroundColor: "#00bcff" }}
        >
          <Download size={18} />
          CV EN
        </motion.a>
      </div>
    </section>
  );
};

export default CVDownload;
