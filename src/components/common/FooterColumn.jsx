import { FiChevronLeft } from "react-icons/fi";
import {motion} from "motion/react"
import FooterTitle from "./FooterTitle";
import { Link } from "react-router-dom";
const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>

      <ul className="flex flex-col gap-[1rem]">
        {links.map((link, index) => (
          <motion.li
            key={`${title}-${link.title}-${index}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
          >
            <Link
              to={link.href}
              className="group flex items-center justify-between border-b border-white/[0.06] pb-[0.8rem] text-[1.3rem] text-white/55 transition-colors duration-300 hover:text-white"
            >
              <span>{link.title}</span>

              <FiChevronLeft
                size={14}
                className="translate-x-[0.3rem] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default FooterColumn