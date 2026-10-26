import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpLeft,
  FiHome,
} from "react-icons/fi";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f2f1e9] px-5 py-12 text-[#10251c] sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-10 flex flex-col items-center sm:top-12"
      >
        <Link
          to="/"
          aria-label="صفحه اصلی لوکسورا"
          className="text-center"
        >
          <span className="block text-[2.1rem] font-light tracking-[0.35em]">
            LUXORA
          </span>

          <span className="mt-1 block text-[1.1rem] tracking-[0.35em]">
            REAL ESTATE
          </span>
        </Link>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex w-full max-w-3xl flex-col items-center pt-20 text-center"
      >
        <h1
          dir="ltr"
          className="font-serif text-[11rem] font-normal leading-none tracking-[-0.08em] sm:text-[15rem] md:text-[18rem]"
        >
          404
        </h1>

        <h2 className="mt-8 text-[2.6rem] font-medium leading-relaxed sm:text-[3.2rem] md:text-[3.6rem]">
          این مسیر پیدا نشد
        </h2>

        <p className="mt-4 max-w-xl text-[1.7rem] leading-9 text-[#7b817b] sm:text-[1.9rem] sm:leading-10">
          صفحه‌ای که به دنبال آن هستید در دسترس نیست.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/"
            className="group flex min-h-[5.8rem] w-full items-center justify-center gap-3 rounded-xl bg-[#10251c] px-8 text-[1.6rem] !text-white transition-all duration-300 hover:bg-[#263e30] sm:w-auto sm:min-w-[28rem] sm:text-[1.7rem]"
          >
            <FiHome className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>بازگشت به صفحه اصلی</span>
          </Link>

          <Link
            to="/properties"
            className="group flex min-h-[5.8rem] w-full items-center justify-center gap-3 rounded-xl border border-[#819083] px-8 text-[1.6rem] transition-all duration-300 hover:border-[#10251c] hover:bg-[#e7e8df] sm:w-auto sm:min-w-[22rem] sm:text-[1.7rem]"
          >
            <span>مشاهده املاک</span>
            <FiArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-10 flex items-center gap-3 py-3 text-[1.6rem] text-[#526e58] transition-colors hover:text-[#10251c]"
        >
          <FiArrowUpLeft className="h-5 w-5" />
          <span>بازگشت به صفحه قبل</span>
        </button>
      </motion.section>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 flex items-center gap-5 sm:bottom-10"
        dir="ltr"
      >
        <span className="h-px w-10 bg-[#819083]" />

        <span className="text-[1.1rem] tracking-[0.25em] text-[#7b817b]">
          LUXORA REAL ESTATE
        </span>

        <span className="h-px w-10 bg-[#819083]" />
      </motion.div>
    </main>
  );
};

export default NotFound;
