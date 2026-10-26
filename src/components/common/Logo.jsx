import { NavLink } from "react-router-dom";

const Logo = ({closeMenu}) => {
  return (
    <NavLink
      to="/"
      onClick={closeMenu}
      className="relative z-[60] flex flex-col"
    >
      <span className="text-[2.4rem] font-medium tracking-[0.18em]">
        LUXORA
      </span>

      <span className="mt-[-0.2rem] text-[0.9rem] tracking-[0.35em] text-white/40">
        REAL ESTATE
      </span>
    </NavLink>
  );
};

export default Logo;
