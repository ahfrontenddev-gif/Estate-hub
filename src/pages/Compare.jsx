
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Empty from "../components/compare/Empty";
import Title from "../components/compare/Title";
import CartEstate from "../components/compare/CartEstate";
import ComparisonTable from "../components/compare/ComparisonTable";

import { comparisonRows } from "../data/apiCompare";
import { useGetPropertiesQuery } from "../data/apiProperty";

import {
  removeCompare,
  clearCompare,
  toggleCompare,
} from "../redux/compareSlice";

const toNumber = (value) => {
  if (value === null || value === undefined || value === "") return 0;

  const normalized = String(value)
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/[٬,،]/g, "")
    .replace(/[^\d.-]/g, "");

  return Number(normalized) || 0;
};

const formatNumber = (value) =>
  toNumber(value).toLocaleString("fa-IR");

const formatPrice = (value) =>
  `${formatNumber(value)} تومان`;

const Compare = () => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState("");

  const comparedIds = useSelector(
    (state) => state.compare.ids
  );

  const {
    data: properties = [],
    isLoading,
    isError,
    refetch,
  } = useGetPropertiesQuery();

  const comparedProperties = useMemo(
    () =>
      comparedIds
        .map((id) =>
          properties.find(
            (property) => String(property.id) === String(id)
          )
        )
        .filter(Boolean),
    [comparedIds, properties]
  );

  const availableProperties = useMemo(
    () =>
      properties.filter(
        (property) =>
          !comparedIds.some(
            (id) => String(id) === String(property.id)
          )
      ),
    [properties, comparedIds]
  );

  const addProperty = () => {
    if (!selectedId) return;

    if (comparedIds.length >= 3) {
      alert("حداکثر ۳ ملک قابل مقایسه است");
      return;
    }

    dispatch(toggleCompare(String(selectedId)));
    setSelectedId("");
  };

  const removeProperty = (id) => {
    dispatch(removeCompare(String(id)));
  };

  const handleClearComparison = () => {
    dispatch(clearCompare());
    setSelectedId("");
  };

  if (isLoading) {
    return (
      <main
        dir="rtl"
        className="flex min-h-[70vh] items-center justify-center bg-[#f2f1e9]"
      >
        <p className="text-lg text-[#526e58]">
          در حال دریافت اطلاعات املاک...
        </p>
      </main>
    );
  }

  if (isError) {
    return (
      <main
        dir="rtl"
        className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-[#f2f1e9]"
      >
        <p className="text-lg text-red-600">
          دریافت اطلاعات املاک با خطا مواجه شد.
        </p>

        <button
          onClick={refetch}
          className="rounded-md bg-[#14251d] px-6 py-3 text-white"
        >
          تلاش مجدد
        </button>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-[70vh] bg-[#f2f1e9] text-[#14251d]"
    >
      <div className="mx-auto w-full max-w-[160rem]">
        <Title
          comparedProperties={comparedProperties}
          clearComparison={handleClearComparison}
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
            <div className="flex flex-col gap-6">
              <Empty />

              {availableProperties.length > 0 && (
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
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Compare;
