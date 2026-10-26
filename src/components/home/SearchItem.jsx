import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const SearchItem = ({ title, value }) => {
  return (
    <button
      className="
        group
        flex
        h-[6.5rem]
        flex-1
        items-center
        justify-between
        border-b
        border-white/10
        px-[2rem]
        text-right

        transition-colors
        duration-300
        hover:bg-white/[0.05]

        sm:border-b-0
        sm:border-l
      "
    >
      <div>
        <span className="block text-[1.1rem] text-white/45">{title}</span>

        <span className="mt-[0.6rem] block text-[1.3rem] text-white">
          {value}
        </span>
      </div>

      <FiChevronDown
        size={15}
        className="
          text-white/40
          transition-transform
          duration-300
          group-hover:translate-y-[0.2rem]
        "
      />
    </button>
  );
};

export default SearchItem