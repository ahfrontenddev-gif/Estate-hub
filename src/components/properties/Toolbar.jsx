import { FiX } from "react-icons/fi";

const Toolbar = ({ sort, setSort, setPage, resetFilters }) => {
  return (
    <div className="mt-[1.8rem] flex flex-wrap items-center justify-between gap-[1.5rem]">
      <button
        type="button"
        onClick={resetFilters}
        className="flex items-center gap-[0.7rem] text-[1.2rem] text-white/45 transition-colors hover:text-[#c5cbb0]"
      >
        <FiX />
        حذف فیلتر
      </button>

      <label className="flex items-center gap-[1rem] text-[1.2rem] text-white/50">
        مرتب‌سازی
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="border border-white/15 bg-[#07140f] px-[1.2rem] py-[0.9rem] text-[1.2rem] text-white outline-none"
        >
          <option value="newest">جدیدترین</option>
          <option value="price-low">قیمت: از کم به زیاد</option>
          <option value="price-high">قیمت: از زیاد به کم</option>
        </select>
      </label>
    </div>
  );
};

export default Toolbar;
