import { FiHeart, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoGitCompareOutline } from "react-icons/io5";

const NavActions = () => {
  return (
    <div className=" items-center gap-[1rem] flex max-lg:mr-auto max-lg:ml-[3rem]">
      <NavLink
        to="/compare"
        aria-label="مقایسه"
        className="
                flex h-[4.4rem] w-[4.4rem]
                items-center justify-center
                rounded-full
                border border-white/10
                text-white/70
                transition-all duration-300
                hover:border-white/25
                hover:bg-white/10
                hover:text-white
              "
      >
        <IoGitCompareOutline size={18} strokeWidth={1.4} />
      </NavLink>

      <NavLink
        to="/favorites"
        aria-label="علاقه‌مندی‌ها"
        className="
                flex h-[4.4rem] w-[4.4rem]
                items-center justify-center
                rounded-full
                border border-white/10
                text-white/70
                transition-all duration-300
                hover:border-white/25
                hover:bg-white/10
                hover:text-white
              "
      >
        <FiHeart size={18} strokeWidth={1.4} />
      </NavLink>

      <NavLink
        to="/auth"
        aria-label="ورود"
        className="
                flex h-[4.4rem] w-[4.4rem]
                items-center justify-center
                rounded-full
                bg-[#b5c9a9]
                text-[#07100d]
                transition-all duration-300
                hover:bg-white
              "
      >
        <FiUser size={18} strokeWidth={1.4} />
      </NavLink>
    </div>
  );
};

export default NavActions;
