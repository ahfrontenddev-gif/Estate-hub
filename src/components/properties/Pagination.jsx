import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({page,totalPages,setPage}) => {
  return (
    <nav
      aria-label="Property pages"
      className="mt-[4rem] flex items-center justify-center gap-[0.8rem]"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => setPage((current) => Math.max(1, current - 1))}
        className="flex size-[3.8rem] items-center justify-center text-[1.8rem] text-white/65 hover:text-[#c5cbb0] disabled:opacity-25"
      >
        <FiChevronLeft />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (number) => (
          <button
            key={number}
            type="button"
            aria-current={page === number ? "page" : undefined}
            onClick={() => setPage(number)}
            className={`size-[3.6rem] rounded-full border text-[1.2rem] transition-colors ${
              page === number
                ? "border-[#c5cbb0] bg-[#c5cbb0] text-[#07140f]"
                : "border-white/15 text-white/60 hover:border-[#c5cbb0]"
            }`}
          >
            {number}
          </button>
        ),
      )}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
        className="flex size-[3.8rem] items-center justify-center text-[1.8rem] text-white/65 hover:text-[#c5cbb0] disabled:opacity-25"
      >
        <FiChevronRight />
      </button>
    </nav>
  );
};

export default Pagination;
