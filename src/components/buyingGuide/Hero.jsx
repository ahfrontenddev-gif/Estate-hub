import { motion } from "motion/react";
import { fadeUp } from "../../data/apiBuyingGuide";

const Hero = ({}) => {
  return (
    <section className="relative border-b border-[#dedfd4] bg-[#f3f1e8] pt-[10rem]">
      <div className="mx-auto grid items-center gap-10 px-5 pb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 flex items-center gap-3 text-sm font-medium text-[#68785f] sm:text-base">
            <span className="h-px w-10 bg-[#87947c]" />
            <span>LUXORA / راهنمای خرید ملک</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.6] sm:text-5xl lg:text-6xl">
            راهنمای خرید ملک
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
