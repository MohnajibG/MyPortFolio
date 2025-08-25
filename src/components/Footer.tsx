const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md text-gray-300 py-8  ">
      {/* Copyright */}
      <p className="text-sm text-center ">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#00bcff]">
          Mohammed Najib Guerchaoui
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
