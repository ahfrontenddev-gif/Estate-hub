const EmptyEstate = ({resetFilters}) => {
  return (
    <div className="flex min-h-[24rem] flex-col items-center justify-center border border-white/10 text-center">
      <h2 className="font-serif text-[2.4rem]">No properties found</h2>
      <p className="mt-[1rem] text-[1.3rem] text-white/50">
        Try adjusting your filters to find more properties.
      </p>
      <button
        type="button"
        onClick={resetFilters}
        className="mt-[2rem] bg-[#c5cbb0] px-[2rem] py-[1.2rem] text-[1.2rem] text-[#07140f] hover:bg-[#e0e4d3]"
      >
        Clear filters
      </button>
    </div>
  );
};

export default EmptyEstate;
