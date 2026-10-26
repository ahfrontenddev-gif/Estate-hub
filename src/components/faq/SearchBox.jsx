import { FiSearch } from "react-icons/fi";

const SearchBox = ({ search, setSearch, setOpenIndex }) => {
  return (
    <label className="mb-5 flex items-center gap-3 border border-[#d9ddd1] bg-white px-4 py-3.5 focus-within:border-[#7b8a70]">
      <FiSearch className="shrink-0 text-[#71816a]" size={21} />

      <input
        type="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setOpenIndex(-1);
        }}
        placeholder="جست‌وجو در سوالات..."
        className="w-full bg-transparent text-base outline-none placeholder:text-[#969d93] sm:text-lg"
      />
    </label>
  );
};

export default SearchBox;
