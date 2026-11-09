
import { AnimatePresence } from "motion/react";
import {
  FiArrowUpLeft,
  FiHome,
  FiMapPin,
  FiMaximize2,
  FiTruck,
  FiX,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import EmptyEstate from "./EmptyEstate";

const toNumber = (value) => {
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

const formatNumberSafe = (value) =>
  toNumber(value).toLocaleString("fa-IR");

const formatPriceSafe = (value) =>
  `${formatNumberSafe(value)} تومان`;

const CartEstate = ({
  comparedProperties = [],
  removeProperty,
  availableProperties = [],
  selectedId,
  setSelectedId,
  addProperty,
}) => {
  return (
    <section className="mt-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-[1.7rem] font-medium">
          املاک انتخاب‌شده
        </h2>

        <span className="text-[1.2rem] text-[#777d73]">
          {formatNumberSafe(comparedProperties.length)} از ۳ ملک
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">

        <AnimatePresence mode="popLayout">
          {comparedProperties.map((property) => {
            const images = Array.isArray(property.images)
              ? property.images
              : typeof property.images === "string"
                ? property.images.split(",")
                : [];

            const imageUrl = images
              .map((image) => image.trim())
              .find(Boolean);

            return (
              <motion.article
                layout
                key={property.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="group min-w-0 overflow-hidden rounded-lg border border-[#e1e2d9] bg-[#fbfaf6] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(16,35,26,0.09)]"
              >
                <div className="relative aspect-[1.5/1] overflow-hidden bg-[#e8e8df]">
                  <Link
                    to={`/properties/${property.id}`}
                    className="block h-full w-full"
                    aria-label={`مشاهده ${property.title}`}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={property.title}
                        loading="lazy"
                        onError={(e) => {
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

                  <span className="absolute right-3 top-3 rounded-md bg-[#10251c]/95 px-3 py-1.5 text-[1.1rem] text-white">
                    {property.type}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeProperty(property.id)}
                    aria-label="حذف ملک از مقایسه"
                    title="حذف از مقایسه"
                    className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f0] text-[#14251d] transition hover:bg-red-100 hover:text-red-700"
                  >
                    <FiX size={19} />
                  </button>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="truncate text-[1.45rem] font-medium">
                    {property.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 text-[1.15rem] text-[#777d73]">
                    <FiMapPin size={14} className="shrink-0" />
                    <span className="truncate">
                      {property.location}
                    </span>
                  </div>

                  <p className="mt-5 whitespace-nowrap text-[1.35rem] font-semibold text-[#526e58]">
                    {formatPriceSafe(property.price)}
                  </p>

                  <div className="mt-5 grid grid-cols-3 items-center border-t border-[#e8e8df] pt-4 text-[#56635a]">
                    <div className="flex flex-col items-center gap-2">
                      <FiMaximize2 size={16} />
                      <span className="text-[1.1rem]">
                        {formatNumberSafe(property.area)} متر
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <FiHome size={16} />
                      <span className="text-[1.1rem]">
                        {formatNumberSafe(property.bedrooms)} خواب
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <FiTruck size={16} />
                      <span className="text-[1.1rem]">
                        {formatNumberSafe(property.parking)} پارکینگ
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/properties/${property.id}`}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#10251c] px-4 py-3.5 text-[1.2rem] !text-white transition hover:bg-[#294535]"
                  >
                    مشاهده جزئیات
                    <FiArrowUpLeft size={17} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>

        {comparedProperties.length < 3 && (
          <EmptyEstate
            addProperty={addProperty}
            availableProperties={availableProperties}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
      </div>
    </section>
  );
};

export default CartEstate;
