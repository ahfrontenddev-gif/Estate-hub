import {motion} from "motion/react"
import { FiArrowUpLeft, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddFavorite = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-[30rem] flex-col items-center justify-center rounded-lg border border-[#e3e4db] bg-[#e9eae1] px-6 py-10 text-center"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4d9cb] text-[#627d65]">
        <FiHeart size={30} />
      </div>

      <h2 className="text-[1.6rem] font-medium">ملک بیشتری پیدا کنید</h2>

      <p className="mt-3 max-w-[25rem] text-[1.2rem] leading-8 text-[#777d73]">
        املاک موردعلاقه‌تان را به این فهرست اضافه کنید تا همیشه در دسترس شما
        باشند.
      </p>

      <Link
        to="/properties"
        className="mt-6 inline-flex items-center gap-3 rounded-md bg-[#10251c] px-6 py-3.5 text-[1.2rem] !text-white transition hover:bg-[#294535]"
      >
        مشاهده املاک
        <FiArrowUpLeft size={17} />
      </Link>
    </motion.div>
  );
};

export default AddFavorite;
