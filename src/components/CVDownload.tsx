import { Download } from "lucide-react";
import Cta from "./Cta";

const CVDownload = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Cta
        href="/cv_fr.pdf"
        download="CV_MohammedNajib_FR.pdf"
        variant="solid"
      >
        <Download size={16} />
        CV FR
      </Cta>

      <Cta href="/cv_en.pdf" download="CV_MohammedNajib_EN.pdf" variant="ghost">
        <Download size={16} />
        CV EN
      </Cta>
    </div>
  );
};

export default CVDownload;
