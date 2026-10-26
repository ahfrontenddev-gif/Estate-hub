import {motion} from "motion/react";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Final = () => {
  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-20 lg:pb-36">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-[140rem] overflow-hidden bg-[#dfe5d3] px-7 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full border border-[#10251c]/10 sm:h-96 sm:w-96" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-lg tracking-[0.2em] text-[#526e58]">
              YOUR NEXT CHAPTER
            </p>

            <h2 className="text-3xl font-medium leading-relaxed sm:text-5xl lg:text-6xl">
              برای انتخاب بعدی‌تان
              <br />
              از همین‌جا شروع کنید.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#10251c]/65 sm:text-2xl">
              درباره نیازها و اولویت‌هایتان با ما صحبت کنید تا مسیر مناسب‌تری
              برای شما پیدا کنیم.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#10251c] px-7 py-4 text-xl !text-white transition duration-300 hover:-translate-y-1 hover:bg-[#263e30]"
          >
            ارتباط با لوکسورا
            <FiArrowUpLeft size={19} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Final;
