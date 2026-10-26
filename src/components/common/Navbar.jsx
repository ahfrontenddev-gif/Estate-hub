import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import NavDesc from "./NavDesc";
import NavActions from "./NavActions";
import Habergur from "./Habergur";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        dir="rtl"
        className={`
          fixed inset-x-0 top-0 z-50
          text-white
          transition-all duration-500
          ${
            isScrolled
              ? "bg-[#07100d]/95 shadow-[0_1rem_4rem_rgba(0,0,0,0.15)] backdrop-blur-xl"
              : "bg-[#07100da7]"
          }
        `}
      >
        <div
          className="
            mx-auto flex h-[8rem] max-w-[140rem]
            items-center justify-between
            px-[2.4rem]
            sm:px-[3.2rem]
            lg:px-[4rem]
          "
        >
          <Logo closeMenu={closeMenu} />
          <NavDesc />
          <NavActions />
          <button
            type="button"
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              relative z-[100]
              flex h-[4.8rem] w-[4.8rem]
              items-center justify-center
              rounded-full
              border border-white/15
              text-white
              transition-all duration-300
              hover:bg-white/10
              lg:hidden
            "
          >
            {isMenuOpen ? (
              <FiX size={22} strokeWidth={1.4} />
            ) : (
              <FiMenu size={22} strokeWidth={1.4} />
            )}
          </button>
          <Habergur isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
