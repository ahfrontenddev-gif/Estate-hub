import { FiChevronDown, FiGrid, FiList } from "react-icons/fi";

const Toolbar = ({ sortBy, view, setView, setSortBy }) => {
  return (
    <div className="my-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-[#dedfd5] bg-[#f7f6f0] px-3 py-3 sm:px-4">
      <label className="relative flex items-center">
        <FiChevronDown
          className="pointer-events-none absolute left-3 text-[#56635a]"
          size={16}
        />

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          aria-label="مرتب‌سازی املاک"
          className="min-w-[17rem] cursor-pointer appearance-none rounded-md border border-[#dedfd5] bg-transparent py-3 pl-9 pr-4 text-[1.2rem] outline-none focus:border-[#526e58]"
        >
          <option value="newest">جدیدترین</option>
          <option value="price-low">قیمت: از کم به زیاد</option>
          <option value="price-high">قیمت: از زیاد به کم</option>
          <option value="area">بیشترین متراژ</option>
        </select>
      </label>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setView("grid")}
          aria-label="نمایش شبکه‌ای"
          aria-pressed={view === "grid"}
          className={`flex h-10 w-10 items-center justify-center rounded-md transition ${
            view === "grid"
              ? "bg-[#e2e5da] text-[#14251d]"
              : "text-[#8b9087] hover:bg-[#e9e9e1]"
          }`}
        >
          <FiGrid size={19} />
        </button>

        <button
          type="button"
          onClick={() => setView("list")}
          aria-label="نمایش فهرستی"
          aria-pressed={view === "list"}
          className={`flex h-10 w-10 items-center justify-center rounded-md transition ${
            view === "list"
              ? "bg-[#e2e5da] text-[#14251d]"
              : "text-[#8b9087] hover:bg-[#e9e9e1]"
          }`}
        >
          <FiList size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
