import { motion } from "motion/react";
import { benefits, fadeUp } from "../../data/apiBuyingGuide";
import { FiArrowLeft } from "react-icons/fi";
import Magnetic from "../animate/Magnetic";
import { Link } from "react-router-dom";

const Final = () => {
  return (
    <section className="relative overflow-hidden bg-[#e2e6e3]">
      <div className="pointer-events-none absolute -left-16 top-0 h-full w-1/3 bg-gradient-to-r from-transparent to-white/30" />

      <div className="relative mx-auto grid max-w-[1500px] gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-20 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#68785f] sm:text-base">
            FIND YOUR PLACE
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            حالا وقت پیدا کردن خانه مناسب شماست.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-9 text-[#5c6a61] sm:text-lg sm:leading-10">
            املاک موجود را بررسی کنید و گزینه‌های موردنظرتان را با دقت مقایسه
            کنید.
          </p>

          <div className="w-fit">
            <Magnetic>
              <Link to="/properties">
                <h6 className="mt-8  flex items-center gap-4 rounded-sm bg-[#14251d] px-7 py-4 text-base font-medium text-white transition duration-300 hover:bg-[#314638] sm:text-lg">
                  مشاهده املاک
                  <FiArrowLeft size={21} />
                </h6>
              </Link>
            </Magnetic>
          </div>
        </motion.div>

        <div className="grid gap-0 border-y border-[#c5cec6] sm:grid-cols-3 sm:border-y-0">
          {benefits.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className={`py-6 sm:px-5 sm:py-8 ${
                index !== 0
                  ? "border-t border-[#c5cec6] sm:border-r sm:border-t-0"
                  : ""
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center text-[#23392b]">
                <Icon size={29} strokeWidth={1.5} />
              </span>

              <h3 className="mt-4 text-lg font-bold leading-8 sm:text-xl">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-8 text-[#657168] sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Final;
