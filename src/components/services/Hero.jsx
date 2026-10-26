import {motion} from "motion/react"
import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative !pt-[10rem] bg-[#10251c] px-6 pb-20 pt-24 text-[#f2f1e9] sm:px-10 sm:pb-28 sm:pt-32 lg:px-20 lg:pb-36">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#c6d4a5]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto grid max-w-[140rem] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-7 flex items-center gap-3 text-xs tracking-[0.25em] text-[#c6d4a5] sm:text-sm">
            <span className="h-px w-10 bg-[#c6d4a5]" />
            LUXORA SERVICES
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-[1.35] sm:text-6xl lg:text-8xl">
            خدماتی برای
            <br />
            <span className="text-[#c6d4a5]">انتخابی مطمئن‌تر.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl lg:justify-self-start"
        >
          <p className="text-base leading-9 text-white/65 sm:text-lg sm:leading-10">
            از اولین جست‌وجو تا نهایی شدن معامله، در کنار شما هستیم تا مسیر
            انتخاب ملک، روشن‌تر، ساده‌تر و متناسب با نیازهای شما باشد.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#c6d4a5] px-7 py-4 text-sm font-medium text-[#10251c] transition duration-300 hover:-translate-y-1 hover:bg-[#d6e2bd]"
          >
            درخواست مشاوره
            <FiArrowUpLeft size={19} />
          </Link>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-[140rem] grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
        <div>
          <p className="text-3xl text-[#c6d4a5] sm:text-4xl">01</p>
          <p className="mt-3 text-sm text-white/60">شناخت نیاز شما</p>
        </div>
        <div>
          <p className="text-3xl text-[#c6d4a5] sm:text-4xl">02</p>
          <p className="mt-3 text-sm text-white/60">انتخاب فرصت مناسب</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="text-3xl text-[#c6d4a5] sm:text-4xl">03</p>
          <p className="mt-3 text-sm text-white/60">همراهی تا تصمیم نهایی</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
