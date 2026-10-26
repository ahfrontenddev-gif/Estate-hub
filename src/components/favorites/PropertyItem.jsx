import { motion } from "motion/react";
import {
  FiArrowUpLeft,
  FiHeart,
  FiHome,
  FiMapPin,
  FiMaximize2,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const PropertyItem = ({ property, onRemove, view, formatNumber }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={`group min-w-0 overflow-hidden rounded-lg border border-[#e1e2d9] bg-[#fbfaf6] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(16,35,26,0.09)] ${
        view === "list" ? "sm:flex" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#e8e8df]
             ${
               view === "list"
                 ? "aspect-[1.5/1] sm:aspect-auto sm:w-[34rem] sm:shrink-0"
                 : "aspect-[1.5/1]"
             }
        `}
      >
        <Link
          data-cursor="view"
          to={`/properties/${property.id}`}
          aria-label={`مشاهده ${property.title}`}
          className="block h-full w-full"
        >
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </Link>

        <span className="absolute right-3 top-3 rounded-md bg-[#10251c]/95 px-3 py-1.5 text-[1.1rem] text-[#f7f5ed]">
          {property.type}
        </span>

        <button
          data-cursor="default"
          type="button"
          onClick={() => onRemove(property.id)}
          aria-label="حذف از علاقه‌مندی‌ها"
          title="حذف از علاقه‌مندی‌ها"
          className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#10251c] p-2 text-[#d9e5bd] transition-colors duration-300 hover:bg-[#b7c99c] hover:text-[#10251c]"
        >
          <FiHeart size={19} fill="currentColor" />
        </button>
      </div>

      <div
        data-cursor="view"
        dir="rtl"
        className={`flex min-w-0 flex-1 flex-col p-4 sm:p-5 ${
          view === "list" ? "justify-center" : ""
        }`}
      >
        <Link to={`/properties/${property.id}`}>
          <h2 className="truncate text-[1.45rem] font-medium text-[#14251d] transition-colors group-hover:text-[#526e58]">
            {property.title}
          </h2>
        </Link>

        <div className="mt-3 flex items-center gap-1.5 text-[1.15rem] text-[#777d73]">
          <FiMapPin size={14} className="shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        <p className="mt-5 whitespace-nowrap text-[1.35rem] font-semibold text-[#526e58]">
          {formatNumber(property.price)} تومان
        </p>

        <div className="mt-5 grid grid-cols-4 items-center border-t border-[#e8e8df] pt-4 text-[#56635a]">
          <div className="flex flex-col items-center gap-2">
            <FiTruck size={16} />
            <span className="text-[1.1rem]">
              {formatNumber(property.parking)}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FiHome size={16} />
            <span className="text-[1.1rem]">
              {formatNumber(property.bedrooms)}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FiMaximize2 size={16} />
            <span className="text-[1.1rem]">
              {formatNumber(property.area)} متر
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
};

export default PropertyItem;
