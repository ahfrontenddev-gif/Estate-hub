import { useMemo, useState } from "react";

import Empty from "../components/compare/Empty";
import Title from "../components/compare/Title";
import CartEstate from "../components/compare/CartEstate";
import ComparisonTable from "../components/compare/ComparisonTable";

import { properties } from "../data/apiProperty";
import { comparisonRows } from "../data/apiCompare";
import { formatNumber, formatPrice } from "../data/api";

const Compare = () => {
  const [comparedIds, setComparedIds] = useState(["1", "2", "3"]);
  const [selectedId, setSelectedId] = useState("");

  const comparedProperties = useMemo(
    () =>
      comparedIds
        .map((id) =>
          properties.find(
            (property) => String(property.id) === String(id),
          ),
        )
        .filter(Boolean),
    [comparedIds],
  );

  const availableProperties = properties.filter(
    (property) =>
      !comparedIds.some(
        (id) => String(id) === String(property.id),
      ),
  );

  const addProperty = () => {
    if (!selectedId) return;

    if (comparedIds.some((id) => String(id) === String(selectedId))) {
      setSelectedId("");
      return;
    }

    if (comparedIds.length >= 3) return;

    const exists = initialFavorites.some(
      (property) => String(property.id) === String(selectedId),
    );

    if (!exists) return;

    setComparedIds((current) => [...current, String(selectedId)]);
    setSelectedId("");
  };

  const removeProperty = (id) => {
    setComparedIds((current) =>
      current.filter((item) => String(item) !== String(id)),
    );
  };

  const clearComparison = () => {
    setComparedIds([]);
    setSelectedId("");
  };

  return (
    <main
      dir="rtl"
      className="min-h-[70vh] bg-[#f2f1e9] text-[#14251d]"
    >
      <div className="mx-auto w-full max-w-[160rem]">
        <Title
          comparedProperties={comparedProperties}
          clearComparison={clearComparison}
        />

        <div className="w-full sm:px-8 lg:px-12">
          {comparedProperties.length > 0 ? (
            <>
              <CartEstate
                setSelectedId={setSelectedId}
                selectedId={selectedId}
                removeProperty={removeProperty}
                formatPrice={formatPrice}
                formatNumber={formatNumber}
                comparedProperties={comparedProperties}
                addProperty={addProperty}
                availableProperties={availableProperties}
              />

              <ComparisonTable
                comparedProperties={comparedProperties}
                comparisonRows={comparisonRows}
              />
            </>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </main>
  );
};

export default Compare;
