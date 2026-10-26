import { FiAward, FiHome, FiShield, FiUsers } from "react-icons/fi";
import { motion } from "motion/react";
import FeatureCard from "./FeatureCard";
import Reveal from "../animate/Reveal";
import { features } from "../../data/apiHome";

const Features = () => {
  return (
    <section dir="rtl" className="overflow-hidden bg-[#07100d] text-white">
      <div className="mx-auto max-w-[140rem] px-[2.4rem] py-[8rem] sm:px-[3.2rem] sm:py-[9rem] lg:px-[4rem] lg:py-[12rem]">
        <Reveal>
          <div className="mb-[6rem] flex flex-col gap-[4rem] lg:mb-[8rem] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[70rem]">
              <div className="mb-[2.4rem] flex items-center gap-[1.2rem]">
                <span className="text-[1.1rem] font-medium tracking-[0.25em] text-[#b5c9a9]">
                  04
                </span>

                <span className="h-px w-[4rem] bg-[#b5c9a9]/40" />

                <span className="text-[1.3rem] text-white/40">
                  چرا لوکسورا؟
                </span>
              </div>

              <h2 className="text-[4.2rem] font-light leading-[1.25] tracking-tight sm:text-[5.2rem] lg:text-[6.8rem] xl:text-[7.8rem]">
                بیشتر از یک
                <br />
                <span className="font-serif italic text-[#b5c9a9]">
                  انتخاب ملک
                </span>
              </h2>
            </div>

            <p className="max-w-[37rem] text-[1.6rem] leading-[1.9] text-white/45 sm:text-[1.7rem]">
              ما باور داریم انتخاب یک خانه فقط یک معامله نیست؛ بلکه انتخاب بخشی
              از سبک زندگی شماست.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
          className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
