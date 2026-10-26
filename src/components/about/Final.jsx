import { motion } from "motion/react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Magnetic from "../animate/Magnetic";

const Final = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto flex max-w-[160rem] flex-col items-start justify-between gap-7 bg-[#e7e9df] px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14"
    >
      <div>
        <p className="mb-3 text-[1.1rem] text-[#71816b]">
          قدم بعدی را با هم برداریم
        </p>

        <h2 className="text-[2.2rem] font-semibold leading-[1.7] sm:text-[2.8rem]">
          خانه‌ای متناسب با رؤیای شما،
          <span className="block">از همین‌جا شروع می‌شود.</span>
        </h2>

        <p className="mt-3 max-w-[60rem] text-[1.25rem] leading-8 text-[#73796e]">
          برای پیدا کردن ملک مناسب، با تیم لوکسورا در ارتباط باشید.
        </p>
      </div>

      <Magnetic>
        {" "}
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-4 rounded-md bg-[#10251c] px-7 py-4 text-[1.25rem] !text-white transition hover:bg-[#294535]"
        >
          درخواست مشاوره
          <FiArrowLeft size={17} />
        </Link>
      </Magnetic>
    </motion.div>
  );
};

export default Final;
