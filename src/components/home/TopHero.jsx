import { motion } from "motion/react";
import { FiArrowLeft } from "react-icons/fi";
import Magnetic from "../animate/Magnetic";
import { RiScrollToBottomLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const lineVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TopHero = () => {
  return (
    <div className="grid flex-1 items-center gap-[5rem] lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
            },
          },
        }}
        className="max-w-[75rem]"
      >
        <motion.div
          variants={lineVariants}
          className="mb-[2.5rem] flex items-center gap-[1.2rem]"
        >
          <span className="h-[0.1rem] w-[4rem] bg-[#c6d4a5]" />
          <span className="text-[1.2rem] font-medium tracking-[0.2rem] text-[#d0d9bc] sm:text-[1.4rem]">
            LUXORA REAL ESTATE
          </span>
        </motion.div>{" "}
        <motion.h1
          variants={lineVariants}
          className="text-[4.2rem] font-light leading-[1.45] tracking-[-0.15rem] sm:text-[5.8rem] lg:text-[7.2rem] xl:text-[8rem]"
        >
          خانه‌ای فراتر
          <br />
          از <span className="font-semibold text-[#c6d4a5]">انتظار</span>
          <br />
          <span className="text-white/85">برای زندگی بهتر.</span>
        </motion.h1>
        <motion.p
          variants={lineVariants}
          className="mt-[2.5rem] max-w-[48rem] text-[1.4rem] leading-[2.4] text-white/65 sm:text-[1.6rem]"
        >
          مجموعه‌ای از خاص‌ترین املاک، با نگاهی متفاوت به معماری، کیفیت و سبک
          زندگی. خانه‌ای را پیدا کنید که داستان شما را روایت می‌کند.
        </motion.p>
        <motion.div
          variants={lineVariants}
          className="mt-[3.5rem] flex flex-wrap items-center gap-[2rem]"
        >
          <Magnetic>
            <Link to="/properties">
            <motion.h6
              href="/properties"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex min-h-[5.5rem] items-center gap-[2.5rem] bg-[#c6d4a5] px-[2.5rem] text-[1.4rem] font-medium text-[#172017] transition-colors hover:!text-[#172017] hover:bg-white sm:px-[3rem]"
            >
              مشاهده املاک
              <span className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-[#172017] text-white transition-transform duration-300 group-hover:-translate-x-[0.4rem]">
                <FiArrowLeft size={17} />
              </span>
            </motion.h6></Link>
          </Magnetic>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("featured-properties")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-[1.2rem] text-[1.3rem] text-white/80 transition-colors hover:text-[#c6d4a5]"
          >
            <span className="flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border border-white/35 transition-all duration-300 group-hover:border-[#c6d4a5] group-hover:bg-[#c6d4a5]/10">
              <RiScrollToBottomLine className="scale-150" size={17} />
            </span>
            <span>اکتشاف لوکسورا</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden justify-self-start lg:block"
      >
        <div className="w-[24rem] !border-r-4 border-white/65 pr-[2rem]">
          <span className="text-[1.4rem] font-medium text-white/80">
            انتخابی برای ماندگاری
          </span>
          <p className="mt-[1.5rem] text-[1.7rem] leading-[2.2] text-white/90">
            زیبایی در جزئیات است؛
            <br />
            کیفیت در انتخاب.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TopHero;
