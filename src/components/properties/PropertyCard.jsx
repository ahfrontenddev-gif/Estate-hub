
import {
  FiArrowUpLeft,
  FiHeart,
  FiHome,
  FiMapPin,
  FiMaximize2,
  FiTruck,
} from "react-icons/fi";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../../redux/favoriteSlice";
import { toggleCompare } from "../../redux/compareSlice";
import { IoGitCompareOutline } from "react-icons/io5";

const toEnglishNumber = (value) => {
  if (value === null || value === undefined || value === "") return 0;

  const normalized = String(value)
    .replace(/[۰-۹]/g, (digit) =>
      "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)
    )
    .replace(/[٠-٩]/g, (digit) =>
      "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
    )
    .replace(/[٬,،]/g, "")
    .replace(/[^\d.-]/g, "");

  return Number(normalized) || 0;
};

const formatNumber = (value) => {
  return toEnglishNumber(value).toLocaleString("fa-IR");
};

function PropertyCard({ property, featured = false }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.ids
  );

  const comparedIds = useSelector(
    (state) => state.compare.ids
  );

  const images = property.images
    ? property.images.split(",").map((img) => img.trim())
    : [];

  const imageUrl = images[0]
    ? images[0].startsWith("/")
      ? images[0]
      : `/${images[0]}`
    : null;

  const isFavorite = favorites.some(
    (id) => String(id) === String(property.id)
  );

  const isCompared = comparedIds.some(
    (id) => String(id) === String(property.id)
  );

  useEffect(() => {
    console.log("Updated Compared IDs:", comparedIds);
  }, [comparedIds]);

  const handleFavorite = () => {
    dispatch(toggleFavorite(String(property.id)));
  };

  const handleCompare = () => {
    if (!isCompared && comparedIds.length >= 3) {
      alert("حداکثر ۳ ملک را می‌توانید مقایسه کنید");
      return;
    }

    dispatch(toggleCompare(String(property.id)));
  };

  const price = toEnglishNumber(property.priceId);
  const area = toEnglishNumber(property.area);
  const bedrooms = toEnglishNumber(property.bedrooms);
  const parking = toEnglishNumber(property.parking);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group min-w-0 overflow-hidden rounded-lg border border-[#e1e2d9] bg-[#fbfaf6] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(16,35,26,0.09)]"
    >
      <div className="relative aspect-[1.5/1] overflow-hidden bg-[#e8e8df]">
        <Link
          data-cursor="view"
          to={`/properties/${property.id}`}
          aria-label={`مشاهده ${property.title}`}
          className="block h-full w-full"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={property.title}
              loading="lazy"
              onError={(e) => {
                console.error("Image not found:", imageUrl);
                e.currentTarget.style.display = "none";
              }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[#777d73]">
              تصویر موجود نیست
            </div>
          )}
        </Link>

        <span className="absolute right-3 top-3 rounded-md bg-[#10251c]/95 px-3 py-1.5 text-[1.1rem] text-[#f7f5ed]">
          {property.type}
        </span>

        <button
          type="button"
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? "حذف از علاقه‌مندی‌ها"
              : "افزودن به علاقه‌مندی‌ها"
          }
          className={`absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full p-2 transition-colors duration-300 ${
            isFavorite
              ? "bg-[#b7c99c] text-[#10251c]"
              : "bg-[#10251c] text-white hover:bg-[#b7c99c] hover:text-[#10251c]"
          }`}
        >
          <FiHeart
            size={19}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>

        <button
          type="button"
          onClick={handleCompare}
          aria-label={
            isCompared ? "حذف از مقایسه" : "افزودن به مقایسه"
          }
          className={`absolute left-14 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full p-2 transition-colors duration-300 ${
            isCompared
              ? "bg-[#b7c99c] text-[#10251c]"
              : "bg-[#10251c] text-white hover:bg-[#b7c99c] hover:text-[#10251c]"
          }`}
        >
          <IoGitCompareOutline size={18} />
        </button>
      </div>

      <div
        data-cursor="view"
        dir="rtl"
        className="flex min-w-0 flex-1 flex-col p-4 sm:p-5"
      >
        <Link to={`/properties/${property.id}`}>
          <h2 className="truncate text-[1.45rem] font-medium text-[#14251d] transition-colors group-hover:text-[#526e58]">
            {property.title}
          </h2>
        </Link>

        <div className="mt-3 flex items-center gap-1.5 text-[1.15rem] text-[#777d73]">
          <FiMapPin size={14} className="shrink-0" />
          <span className="truncate">
            {property.location}
          </span>
        </div>

        <p className="mt-5 whitespace-nowrap text-[1.35rem] font-semibold text-[#526e58]">
          {formatNumber(price)} تومان
        </p>

        <div className="mt-5 grid grid-cols-4 items-center border-t border-[#e8e8df] pt-4 text-[#56635a]">
          <div className="flex flex-col items-center gap-2">
            <FiTruck size={16} />
            <span className="text-[1.1rem]">
              {formatNumber(parking)}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FiHome size={16} />
            <span className="text-[1.1rem]">
              {formatNumber(bedrooms)}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FiMaximize2 size={16} />
            <span className="text-[1.1rem]">
              {formatNumber(area)} متر
            </span>
          </div>

          <Link
            to={`/properties/${property.id}`}
            aria-label="مشاهده جزئیات ملک"
            className="flex items-center justify-end text-[#14251d] transition-transform group-hover:-translate-x-1"
          >
            <FiArrowUpLeft size={20} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default PropertyCard;
