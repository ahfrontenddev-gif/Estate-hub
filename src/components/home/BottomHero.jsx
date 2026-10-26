import { motion } from "motion/react";
import { FiArrowDownLeft } from "react-icons/fi";

const BottomHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      className="mt-[7rem] flex flex-col justify-between gap-[3rem] border-t border-white/15 pt-[2.5rem] sm:flex-row sm:items-end lg:mt-[4rem]"
    >
      <div className="flex items-center gap-[2rem]">
        <span className="h-[0.1rem] w-[5rem] bg-white/35" />
        <span className="mr-[1rem] text-[1.2rem] text-white/45">
          انتخابی متفاوت، برای آینده‌ای بهتر
        </span>
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("footer")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="flex items-center gap-[1rem] self-start text-[1.3rem] text-white/70 transition-colors hover:text-[#c6d4a5] sm:self-auto"
      >
        <FiArrowDownLeft size={18} />
        <span>به پایین بروید</span>
      </button>
    </motion.div>
  );
};

export default BottomHero;