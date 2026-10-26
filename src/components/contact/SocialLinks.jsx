import { FiInstagram, FiLinkedin } from "react-icons/fi";

const SocialLinks = () => {
  <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
    <span className="ml-2 text-2xl text-white/50">ما را دنبال کنید</span>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="flex p-2 h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#c6d4a5] hover:bg-[#c6d4a5] hover:text-[#10251c]"
    >
      <FiInstagram size={17} />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="flex p-2 h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#c6d4a5] hover:bg-[#c6d4a5] hover:text-[#10251c]"
    >
      <FiLinkedin size={17} />
    </a>
  </div>;
};

export default SocialLinks;
