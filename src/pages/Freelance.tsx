import type { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Panel from "../components/Panel";
import SectionTag from "../components/SectionTag";
import Cta from "../components/Cta";

const profiles = [
  {
    id: "malt",
    name: "Malt",
    href: "https://www.malt.fr/profile/najibguerchaoui",
    logo: "/logos/malt.svg",
    descriptionKey: "freelance.malt",
  },
  {
    id: "mngdev",
    name: "mngdev.pro",
    href: "https://mngdev.pro/home",
    logo: "/logos/logomngdev.png",
    descriptionKey: "freelance.website",
  },
];

const Freelance: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <SectionTag index="03" path="/freelance" title={t("freelance.title")} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {profiles.map((profile, idx) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Panel label={`${profile.id}.profile`} className="h-full">
              <div className="flex h-full flex-col items-center gap-4 text-center">
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="h-16 w-16 rounded-2xl border border-white/15 object-cover"
                />
                <h3 className="text-xl font-semibold text-white">
                  {profile.name}
                </h3>
                <p className="flex-1 text-gray-300">{t(profile.descriptionKey)}</p>
                <Cta href={profile.href} target="_blank" variant="ghost">
                  {profile.name} →
                </Cta>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Freelance;
