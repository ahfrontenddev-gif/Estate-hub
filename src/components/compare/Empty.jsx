import {motion} from "motion/react"
import { FiArrowUpLeft, FiGitBranch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto flex max-w-[55rem] flex-col items-center py-24 text-center sm:py-32"
    >
      <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[#e3e6dc] text-[#607b63]">
        <FiGitBranch size={38} />
      </div>

      <h2 className="text-[2rem] font-semibold">
        هنوز ملکی برای مقایسه انتخاب نکرده‌اید.
      </h2>

      <p className="mt-4 max-w-[42rem] text-[1.3rem] leading-9 text-[#777d73]">
        از میان املاک موجود انتخاب کنید و قیمت، متراژ و امکانات آن‌ها را کنار هم
        بررسی کنید.
      </p>

      <Link
        to="/properties"
        className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#10251c] px-7 py-4 text-[1.25rem] !text-white transition hover:bg-[#294535]"
      >
        مشاهده املاک
        <FiArrowUpLeft size={18} />
      </Link>
    </motion.section>
  );
};

export default Empty;
