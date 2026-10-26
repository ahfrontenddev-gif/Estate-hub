import { useMemo, useState } from "react";
import PropertiesText from "../components/properties/PropertiesText";
import Toolbar from "../components/properties/Toolbar";
import PropertyGrid from "../components/properties/PropertyGrid";
import EmptyEstate from "../components/properties/EmptyEstate";
import Pagination from "../components/properties/Pagination";
import Form from "../components/properties/Form";
import {properties} from "../data/apiProperty"
const initialFilters = {
  search: "",
  type: "All",
  location: "All",
  price: "All",
  bedrooms: "All",
};

export default function Properties() {
  const [filters, setFilters] = useState(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState(initialFilters);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const search = appliedFilters.search.trim().toLowerCase();

      const matchesSearch =
        !search ||
        property.title.toLowerCase().includes(search) ||
        property.location.toLowerCase().includes(search);

      const matchesType =
        appliedFilters.type === "All" || property.typeId === appliedFilters.type;

      const matchesLocation =
        appliedFilters.location === "All" ||
        property.location.includes(appliedFilters.location);

      const matchesBedrooms =
        appliedFilters.bedrooms === "All" ||
        property.bedrooms >= Number(appliedFilters.bedrooms);

      const matchesPrice =
        appliedFilters.price === "All" ||
        (appliedFilters.price === "1" && property.price < 3000000) ||
        (appliedFilters.price === "2" &&
          property.price >= 3000000 &&
          property.price <= 5000000) ||
        (appliedFilters.price === "3" && property.price > 5000000);

      return (
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesBedrooms &&
        matchesPrice
      );
    });


    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [appliedFilters, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProperties.length / itemsPerPage),
  );

  const visibleProperties = filteredProperties.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const resetFilters = () => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
    setSort("newest");
    setPage(1);
  };

  const start =     
    filteredProperties.length === 0 ? 0 : (page - 1) * itemsPerPage + 1;

  const end = Math.min(page * itemsPerPage, filteredProperties.length);

  return (
    <main className="min-h-screen bg-[#07140f] text-[#f2f0e8] pt-[8rem]">
      <section className="mx-auto max-w-[160rem] px-[2rem] pb-[7rem] pt-[4rem] sm:px-[4rem] lg:px-[6rem]">
        <PropertiesText
          start={start}
          end={end}
          filteredProperties={filteredProperties}
        />
        <Form
          filters={filters}
          setFilters={setFilters}
          setAppliedFilters={setAppliedFilters}
          setPage={setPage}
        />
        <Toolbar
          setPage={setPage}
          setSort={setSort}
          sort={sort}
          resetFilters={resetFilters}
        />
        <PropertyGrid visibleProperties={visibleProperties} page={page} />
        {visibleProperties.length === 0 && (
          <EmptyEstate resetFilters={resetFilters} />
        )}
        {filteredProperties.length > itemsPerPage && (
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </section>
    </main>
  );
}
