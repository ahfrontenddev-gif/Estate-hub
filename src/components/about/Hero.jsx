import { motion } from "motion/react";
import { FiArrowLeft, FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Magnetic from "../animate/Magnetic";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative  h-[32rem] overflow-hidden sm:h-[43rem] order-1 lg:h-[57rem] "
      >
        <img
          src="/images/properties/property-2-4.jfif"
          alt="معماری مدرن یکی از املاک منتخب لوکسورا"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101713]/65 via-transparent to-transparent" />

        <div
          dir="ltr"
          className="absolute bottom-7 left-7 text-white sm:bottom-10 sm:left-10"
        >
          <p className="text-[1.1rem] tracking-[0.35em]">LUXORA</p>
          <p className="mt-1 text-[0.9rem] tracking-[0.22em]">REAL ESTATE</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className=" flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 order-2 lg:px-12 xl:px-20"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-9 bg-[#829274]" />
          <span className="text-[1.15rem] tracking-wide text-[#71816b]">
            درباره لوکسورا
          </span>
        </div>

        <h1 className="max-w-[65rem] text-[2.7rem] font-semibold leading-[1.65] tracking-tight sm:text-[3.5rem] xl:text-[4.1rem]">
          ما فقط یک مشاور املاک نیستیم؛
          <span className="block text-[#708569]">
            همراه مسیر رویاهای شما هستیم.
          </span>
        </h1>

        <p className="mt-7 max-w-[60rem] text-[1.35rem] leading-[2.5] text-[#697268] sm:text-[1.4rem]">
          در لوکسورا، هدف ما فراتر از خرید و فروش ملک است. ما به دنبال ساختن
          تجربه‌ای متفاوت از انتخاب خانه هستیم؛ تجربه‌ای که در آن کیفیت، آرامش و
          اعتماد در کنار هم قرار می‌گیرند.
        </p>

        <p className="mt-4 max-w-[60rem] text-[1.3rem] leading-[2.4] text-[#697268]">
          از نخستین گفت‌وگو تا لحظه انتخاب، با شناخت بازار و توجه به جزئیات کمک
          می‌کنیم ملکی را پیدا کنید که با سبک زندگی و چشم‌انداز آینده شما هماهنگ
          باشد.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 rounded-md bg-[#10251c] px-6 py-4 text-[1.25rem] !text-white transition duration-300 hover:bg-[#2b4635]"
            >
              با ما در ارتباط باشید
              <FiArrowLeft size={17} />
            </Link>
          </Magnetic>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-[1.2rem] font-medium text-[#526e58] transition hover:text-[#14251d]"
          >
            مشاهده املاک
            <FiArrowUpLeft size={17} />
          </Link>
        </div>

        <div className="mt-10 border-r-2 border-[#a5b296] pr-4">
          <p className="text-[1.25rem] font-medium leading-8">
            انتخابی برای ماندگاری
          </p>
          <p className="mt-1 text-[1.2rem] leading-8 text-[#7b8176]">
            زیبایی در جزئیات است؛ کیفیت در انتخاب.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
