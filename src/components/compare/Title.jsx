import {motion} from "motion/react"
import { FiGitBranch, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Title = ({comparedProperties,clearComparison}) => {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col justify-between px-5 pt-[10rem] bg-[#14251d] text-[#f2f1e9] gap-5 border-b border-[#d9dbd0] pb-8 sm:flex-row sm:items-end"
    >
      <div>
        <div className="mb-3 flex items-center gap-2 text-[1.1rem] text-[#858a7f]">
          <Link to="/" className="transition hover:text-[#526e58]">
            خانه
          </Link>
          <span>/</span>
          <span>مقایسه املاک</span>
        </div>

        <h1 className="flex items-center gap-3 text-[2.5rem] font-semibold tracking-tight sm:text-[3.2rem]">
          مقایسه املاک
          <FiGitBranch size={27} className="text-[#526e58]" />
        </h1>

        <p className="mt-3 text-[1.3rem] text-[#777d73]">
          مشخصات املاک موردنظرتان را کنار هم بررسی کنید.
        </p>
      </div>

      {comparedProperties.length > 0 && (
        <button
          type="button"
          onClick={clearComparison}
          className="flex w-fit items-center gap-2 text-[1.2rem] text-[#747b70] transition hover:text-red-700"
        >
          <FiTrash2 size={16} />
          پاک کردن مقایسه
        </button>
      )}
    </motion.section>
  );
};

export default Title;
