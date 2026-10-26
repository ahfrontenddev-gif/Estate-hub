import { FiHeart, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    title: "صفحه اصلی",
    path: "/",
  },
  {
    title: "املاک",
    path: "/properties",
  },
  {
    title: "درباره ما",
    path: "/about",
  },
  {
    title: "خدمات",
    path: "/services",
  },
  {
    title: "تماس با ما",
    path: "/contact",
  },
];

const Habergur = ({ isMenuOpen, closeMenu }) => {
  return (
    <div
      dir="rtl"
      className={`
          fixed top-0 left-0 w-dvw h-dvh z-[99]
          bg-[#07100d]
          transition-all duration-500
          lg:hidden
          ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
    >
      <div className="flex flex-col px-[2.4rem] pb-[3rem] pt-[12rem] sm:px-[3.2rem]">
        <nav>
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li
                key={item.path}
                className="
                    border-b border-white/10
                    last:border-b-0
                  "
              >
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
                      flex items-center justify-between
                      py-[2.2rem]
                      text-[2.4rem]
                      font-light
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-[#b5c9a9]"
                          : "text-white/80 hover:text-white"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-[1.6rem]">
                        <span className="text-[1.1rem] text-white/25">
                          0{index + 1}
                        </span>

                        <span>{item.title}</span>
                      </div>

                      <span
                        className={`
                            h-[0.8rem] w-[0.8rem]
                            rounded-full
                            transition-all duration-300
                            ${isActive ? "bg-[#b5c9a9]" : "bg-white/10"}
                          `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <div className="mb-[3rem] h-px w-full bg-white/10" />

          <div className="flex items-center gap-[1.2rem]">
            <NavLink
              to="/favorites"
              onClick={closeMenu}
              className="
                  flex h-[5rem] flex-1
                  items-center justify-center
                  gap-[1rem]
                  rounded-full
                  border border-white/10
                  text-[1.4rem]
                  text-white/70
                  transition-all duration-300
                  hover:bg-white/10
                  hover:text-white
                "
            >
              <FiHeart size={18} strokeWidth={1.4} />
              علاقه‌مندی‌ها
            </NavLink>

            <NavLink
              to="/auth"
              onClick={closeMenu}
              className="
                  flex h-[5rem] flex-1
                  items-center justify-center
                  gap-[1rem]
                  rounded-full
                  bg-[#b5c9a9]
                  text-[1.4rem]
                  !text-[#07100d]
                  transition-all duration-300
                  hover:bg-white
                "
            >
              <FiUser size={18} strokeWidth={1.4} />
              ورود
            </NavLink>
          </div>

          <div className="mt-[3rem] flex items-center justify-between">
            <span className="text-[1.1rem] tracking-[0.2em] text-white/25">
              LUXORA
            </span>

            <span className="text-[1.2rem] text-white/25">REAL ESTATE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habergur;
