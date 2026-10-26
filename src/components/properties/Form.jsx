import FilterSelect from "./FilterSelect";
import { FiSearch } from "react-icons/fi";

const Form = ({ filters, setFilters, setAppliedFilters, setPage }) => {
  const applyFilters = (event) => {
    event?.preventDefault();
    setAppliedFilters({ ...filters });
    setPage(1);
  };
  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };
  return (
    <form
      onSubmit={applyFilters}
      className="grid grid-cols-1 border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_auto]"
    >
      <label className="flex min-w-0 items-center gap-[1rem] border-b border-white/10 px-[1.5rem] sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-l">
        <FiSearch className="shrink-0 text-[1.7rem] text-white/60" />
        <input
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          placeholder="جستجوی ملک یا موقعیت مکانی..."
          className="min-w-0 flex-1 bg-transparent py-[1.8rem] text-[1.2rem] text-white outline-none placeholder:text-white/35"
        />
      </label>
      <FilterSelect
        label="نوع ملک"
        value={filters.type}
        onChange={(v) => updateFilter("type", v)}
        options={[
          { value: "All", label: "همه انواع" },
          { value: "Villa", label: "ویلا" },
          { value: "House", label: "خانه" },
          { value: "Apartment", label: "آپارتمان" },
          { value: "Penthouse", label: "پنت‌هاوس" },
        ]}
      />

      <FilterSelect
        label="موقعیت مکانی"
        value={filters.location}
        onChange={(v) => updateFilter("location", v)}
        options={[
          { value: "All", label: "همه موقعیت‌ها" },
          { value: "tehran", label: "تهران" },
          { value: "mashad", label: "مشهد" },
          { value: "tabriz", label: "تبریز" },
          { value: "yazd", label: "یزد" },
          { value: "karag", label: "کرج" },
        ]}
      />

      <FilterSelect
        label="محدوده قیمت"
        value={filters.price}
        onChange={(v) => updateFilter("price", v)}
        options={[
          { value: "All", label: "همه قیمت‌ها" },
          { value: "1", label: "کمتر از ۳ میلیارد دلار" },
          { value: "2", label: "۳ تا ۲۵ میلیارد دلار" },
          { value: "3", label: "بیشتر از ۲۵ میلیارد دلار" },
        ]}
      />

      <FilterSelect
        label="تعداد اتاق خواب"
        value={filters.bedrooms}
        onChange={(v) => updateFilter("bedrooms", v)}
        options={[
          { value: "All", label: "فرقی نمی‌کند" },
          { value: "2", label: "۲ اتاق خواب به بالا" },
          { value: "3", label: "۳ اتاق خواب به بالا" },
          { value: "4", label: "۴ اتاق خواب به بالا" },
          { value: "5", label: "۵ اتاق خواب به بالا" },
        ]}
      />
      <button
        type="submit"
        className="m-[0.5rem] flex items-center justify-center gap-[0.8rem] bg-[#c5cbb0] px-[2rem] py-[1.4rem] text-[1.2rem] font-medium text-[#101a14] transition-colors hover:bg-[#e0e4d3]"
      >
        اعمال فیلترها
      </button>
    </form>
  );
};

export default Form;
