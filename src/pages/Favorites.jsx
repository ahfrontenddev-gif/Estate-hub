
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import EmptyFavorite from "../components/favorites/EmptyFavorite";
import AddFavorite from "../components/favorites/AddFavorite";
import Toolbar from "../components/favorites/Toolbar";
import PropertyItem from "../components/favorites/PropertyItem";

import { useGetPropertiesQuery } from "../data/apiProperty";
import { formatNumber } from "../data/api";

const toNumber = (value) => {
  if (value === null || value === undefined) return 0;

  const normalized = String(value)
    .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    .replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    .replace(/[,،٬\s]/g, "")
    .replace(/[^\d.-]/g, "");

  return Number(normalized) || 0;
};

const Favorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.ids);

  const {
    data: estates = [],
    isLoading,
    isError,
  } = useGetPropertiesQuery();

  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");

  const sortedFavorites = useMemo(() => {
    const favoriteEstates = estates.filter((estate) =>
      favorites.some(
        (favorite) => String(favorite) === String(estate.id)
      )
    );

    const result = [...favoriteEstates];

    if (sortBy === "price-low") {
      result.sort(
        (a, b) => toNumber(a.price) - toNumber(b.price)
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => toNumber(b.price) - toNumber(a.price)
      );
    }

    if (sortBy === "area") {
      result.sort(
        (a, b) => toNumber(b.area) - toNumber(a.area)
      );
    }

    return result;
  }, [estates, favorites, sortBy]);

  if (isLoading) {
    return (
      <p className="p-10 text-center" dir="rtl">
        در حال بارگیری علاقه‌مندی‌ها...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="p-10 text-center text-red-600" dir="rtl">
        دریافت اطلاعات املاک با خطا مواجه شد.
      </p>
    );
  }

  return (
    <main dir="rtl" className="min-h-[70vh] bg-[#f2f1e9] text-[#14251d]">
      <div className="mx-auto w-full max-w-[160rem]">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-between gap-5 border-b border-[#d9dbd0] bg-[#14251d] p-[2rem] pt-[10rem] pb-8 text-[#f2f1e9] sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-3 flex items-center gap-2 text-[1.1rem] text-[#858a7f]">
              <Link to="/" className="transition hover:text-[#526e58]">
                خانه
              </Link>
              <span>/</span>
              <span>علاقه‌مندی‌ها</span>
            </div>

            <h1 className="flex items-center gap-3 text-[2.5rem] font-semibold tracking-tight sm:text-[3.2rem]">
              علاقه‌مندی‌های من
              <FiHeart className="shrink-0 text-[#526e58]" size={27} />
            </h1>

            <p className="mt-3 text-[1.3rem] text-[#777d73]">
              {formatNumber(favorites.length)} ملک در لیست علاقه‌مندی‌های شما
            </p>
          </div>

          {sortedFavorites.length > 0 && (
            <button
              type="button"
              className="flex w-fit items-center gap-2 text-[1.2rem] text-[#747b70] transition hover:text-red-700"
            >
              <FiTrash2 size={16} />
              حذف همه
            </button>
          )}
        </motion.section>

        {sortedFavorites.length > 0 ? (
          <>
            <Toolbar
              sortBy={sortBy}
              view={view}
              setView={setView}
              setSortBy={setSortBy}
            />

            <motion.div
              layout
              className={
                view === "grid"
                  ? "grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-12 lg:grid-cols-3 xl:gap-6"
                  : "grid grid-cols-1 gap-5"
              }
            >
              <AnimatePresence mode="popLayout">
                {sortedFavorites.map((property) => (
                  <PropertyItem
                    key={property.id}
                    property={property}
                    view={view}
                    formatNumber={formatNumber}
                  />
                ))}
              </AnimatePresence>

              {view === "grid" && <AddFavorite />}
            </motion.div>
          </>
        ) : (
          <EmptyFavorite />
        )}
      </div>
    </main>
  );
};

export default Favorites;
