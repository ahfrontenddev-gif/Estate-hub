import { motion } from "motion/react";
import { FiArrowUpLeft } from "react-icons/fi";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 35,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{ y: -5 }}
      className="group relative border-b border-white/10 p-[2.8rem] transition-colors duration-500 hover:bg-white/[0.03] sm:border-l sm:p-[3.2rem] lg:min-h-[36rem] lg:border-b-0 lg:p-[3.6rem]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[1.2rem] tracking-[0.2em] text-white/25">
          {feature.id}
        </span>

        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full border border-white/10 text-[#b5c9a9] transition-colors duration-500 group-hover:border-[#b5c9a9]/50 group-hover:bg-[#b5c9a9] group-hover:text-[#07100d]"
        >
          <Icon size={21} strokeWidth={1.4} />
        </motion.div>
      </div>

      <div className="mt-[6rem]">
        <h3 className="text-[2.2rem] font-medium leading-[1.4] sm:text-[2.4rem]">
          {feature.title}
        </h3>

        <p className="mt-[1.8rem] max-w-[27rem] text-[1.5rem] leading-[1.9] text-white/40 transition-colors duration-500 group-hover:text-white/60">
          {feature.description}
        </p>
      </div>

      <div className="mt-[4rem] flex items-center justify-between lg:absolute lg:bottom-[3.2rem] lg:left-[3.6rem] lg:right-[3.6rem] lg:mt-0">
        <motion.span
          initial={{ width: "4.8rem" }}
          whileHover={{ width: "8rem" }}
          className="h-px bg-white/10 transition-colors duration-500 group-hover:bg-[#b5c9a9]/50"
        />

        <motion.span
          whileHover={{ x: -4, y: -4 }}
          className="text-white/20 transition-colors duration-500 group-hover:text-[#b5c9a9]"
        >
          <FiArrowUpLeft size={19} />
        </motion.span>
      </div>
    </motion.article>
  );
};

export default FeatureCard;