const selectClass =
  "w-full appearance-none bg-transparent text-[1.2rem] text-[#e8e9df] outline-none cursor-pointer";

function FilterSelect({ label, value, onChange, options }) {
  
  return (
    <label className="flex min-w-0 flex-col justify-center gap-[0.8rem] border-b border-white/10 px-[1.5rem] py-[1.5rem] sm:border-b-0 sm:border-l">
      <span className="text-[1.1rem] text-white/45">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectClass}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#07140f] text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterSelect