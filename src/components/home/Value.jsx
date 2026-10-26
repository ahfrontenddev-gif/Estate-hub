import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";

const Value = ({ title, text }) => {
  return (
    <motion.div
      whileHover={{ x: -4 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <div className="flex items-center gap-[1rem]">
        <span className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#52684d]/10 text-[#52684d] transition-colors duration-300 group-hover:bg-[#52684d] group-hover:text-white">
          <FiCheck size={14} />
        </span>

        <h4 className="text-[1.7rem] font-medium">{title}</h4>
      </div>

      <p className="mt-[1.2rem] pr-[4rem] text-[1.4rem] leading-[1.8] text-black/45">
        {text}
      </p>
    </motion.div>
  );
};

export default Value;