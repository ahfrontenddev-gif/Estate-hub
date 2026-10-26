import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { FiHeart, FiTrash2 } from "react-icons/fi";
import EmptyFavorite from "../components/favorites/EmptyFavorite";
import AddFavorite from "../components/favorites/AddFavorite";
import Toolbar from "../components/favorites/Toolbar";
import PropertyItem from "../components/favorites/PropertyItem";
import { properties } from "../data/apiProperty";
import { formatNumber } from "../data/api";


const Favorites = () => {
  const [favorites, setFavorites] = useState(properties);
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");

  const sortedFavorites = useMemo(() => {
    const result = [...favorites];

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "area") {
      result.sort((a, b) => b.area - a.area);
    }

    return result;
  }, [favorites, sortBy]);

  const removeFavorite = (id) => {
    setFavorites((current) => current.filter((property) => property.id !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <main dir="rtl" className="min-h-[70vh] bg-[#f2f1e9] text-[#14251d]">
      <div className="mx-auto w-full max-w-[160rem]">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-between gap-5 p-[2rem] border-b text-[#f2f1e9] bg-[#14251d] pt-[10rem] border-[#d9dbd0] pb-8 sm:flex-row sm:items-end"
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

          {favorites.length > 0 && (
            <button
              type="button"
              onClick={clearFavorites}
              className="flex w-fit items-center gap-2 text-[1.2rem] text-[#747b70] transition hover:text-red-700"
            >
              <FiTrash2 size={16} />
              حذف همه
            </button>
          )}
        </motion.section>

        {favorites.length > 0 ? (
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
                  ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 px-5 sm:px-12"
                  : "grid grid-cols-1 gap-5"
              }
            >
              <AnimatePresence mode="popLayout">
                {sortedFavorites.map((property) => (
                  <PropertyItem
                    key={property.id}
                    property={property}
                    onRemove={removeFavorite}
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
