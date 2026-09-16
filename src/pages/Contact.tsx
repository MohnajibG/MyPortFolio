import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import Panel from "../components/Panel";
import SectionTag from "../components/SectionTag";
import Cta from "../components/Cta";

const chipClasses =
  "inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan";

const Contact = () => {
  const fromRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fromRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        fromRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert(t("contact.form.success"));
          fromRef.current?.reset();
        },
        () => {
          alert(t("contact.form.error"));
        }
      );
  };

  const fields = [
    { name: "user_name", type: "text", key: "contact.form.name" },
    { name: "user_email", type: "email", key: "contact.form.email" },
  ] as const;

  return (
    <section className="mx-auto w-full max-w-2xl px-2">
      <SectionTag index="04" path="/contact" title={t("contact.title")} />

      <Panel label="contact.tsx" bodyClassName="p-6 md:p-8">
        <p className="mb-8 text-center text-gray-300">
          {t("contact.subtitle")}
        </p>

        {/* Formulaire */}
        <form ref={fromRef} onSubmit={sendEmail} className="space-y-6">
          {fields.map((field) => (
            <div key={field.name} className="relative">
              <span className="pointer-events-none absolute top-3 left-0 font-mono text-brand-cyan/50">
                &gt;
              </span>
              <input
                type={field.type}
                name={field.name}
                placeholder={t(field.key)}
                className="w-full border-b border-white/15 bg-transparent py-3 pl-6 text-white placeholder-gray-500 transition-colors focus:border-brand-cyan focus:outline-none"
              />
            </div>
          ))}
          <div className="relative">
            <span className="pointer-events-none absolute top-3 left-0 font-mono text-brand-cyan/50">
              &gt;
            </span>
            <textarea
              name="message"
              placeholder={t("contact.form.message")}
              rows={4}
              className="w-full resize-none border-b border-white/15 bg-transparent py-3 pl-6 text-white placeholder-gray-500 transition-colors focus:border-brand-cyan focus:outline-none"
            ></textarea>
          </div>

          <Cta type="submit" variant="solid" className="w-full justify-center">
            {t("contact.form.send")}
          </Cta>
        </form>

        {/* Réseaux */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/MohnajibG"
            target="_blank"
            rel="noreferrer"
            className={chipClasses}
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/najib-guerchaoui/"
            target="_blank"
            rel="noreferrer"
            className={chipClasses}
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="mailto:mngdevpro@gmail.com" className={chipClasses}>
            <Mail size={18} /> {t("contact.links.email")}
          </a>
          <a href="tel:0658748308" className={chipClasses}>
            <Phone size={18} /> {t("contact.links.phone")}
          </a>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.malt.fr/profile/najibguerchaoui"
            target="_blank"
            rel="noreferrer"
            className={chipClasses}
          >
            <img
              src="/logos/malt.svg"
              alt="Malt"
              className="h-4 w-4 rounded-full"
            />
            Malt
          </a>
          <a
            href="https://mngdev.pro/home"
            target="_blank"
            rel="noreferrer"
            className={chipClasses}
          >
            <img
              src="/logos/logomngdev.png"
              alt="mngdev.pro"
              className="h-4 w-4 rounded-full"
            />
            mngdev.pro
          </a>
        </div>
      </Panel>
    </section>
  );
};

export default Contact;
