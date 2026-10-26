const PropertiesText = ({ start, end, filteredProperties }) => {
  return (
    <div
      dir="rtl"
      className="mb-[2.5rem] flex flex-col justify-between gap-[2rem] md:flex-row md:items-end"
    >
      <div>
        <span className="mb-[1rem] block text-[1rem] uppercase tracking-[0.24em] text-[#c5cbb0]/75">
          املاک لوکسورا
        </span>

        <h1 className="font-serif text-[3.8rem] leading-[1.05] tracking-[-0.04em] sm:text-[5rem] italic">
          املاک
        </h1>

        <p className="mt-[1.2rem] max-w-[42rem] text-[1.3rem] leading-[1.8] text-white/55">
          مجموعه‌ای منتخب از خانه‌های خاص و لوکس در محبوب‌ترین مناطق جهان.
        </p>
      </div>

      <p className="text-[1.2rem] text-white/60">
        نمایش {start} تا {end} از {filteredProperties.length} ملک
      </p>
    </div>
  );
};

export default PropertiesText;
