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

const NavDesc = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-[3.2rem]">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                      group relative block
                      py-[1rem]
                      text-[1.4rem]
                      font-light
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-[#b5c9a9]"
                          : "text-white/75 hover:text-white"
                      }
                    `
              }
            >
              {({ isActive }) => (
                <>
                  {item.title}
                  <span
                    className={`
                            absolute
                            bottom-[0.3rem]
                            right-0
                            h-px
                            bg-[#b5c9a9]
                            transition-all duration-300
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesc;
