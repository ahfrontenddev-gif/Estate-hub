import { motion } from "motion/react";
import { useState } from "react";
import { FiArrowUpLeft, FiHeart } from "react-icons/fi";

const PropertyCard = ({ property, index = 0 }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group w-[30rem] shrink-0 sm:w-[34rem] lg:w-[39rem] xl:w-[42rem]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[0.4rem] bg-[#101613]">
        <motion.img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full w-full object-cover overflow-hidden"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {property.new && (
          <span className="absolute right-[1.6rem] top-[1.6rem] rounded-full bg-[#b5c9a9] px-[1.3rem] py-[0.7rem] text-[1rem] font-medium text-[#080d0b]">
            جدید
          </span>
        )}

        <motion.button
          onClick={() => setFavorite((prev) => !prev)}
          type="button"
          aria-label="افزودن به علاقه‌مندی‌ها"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={` left-[1.6rem] top-[1.6rem] flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur-md transition-colors ${favorite ? "hover:text-[#10251c]" : ""} absolute`}
        >
          <FiHeart fill="currentColor" size={17} strokeWidth={1.4} />
        </motion.button>

        <motion.button
          type="button"
          aria-label="مشاهده ملک"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.08 }}
          className="absolute bottom-[1.6rem] left-[1.6rem] flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full bg-white text-[#080d0b] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <FiArrowUpLeft size={18} />
        </motion.button>
      </div>

      <div className="pt-[2rem]">
        <div className="flex items-start justify-between gap-[2rem]">
          <div>
            <h3 className="text-[2rem] font-light leading-[1.4] sm:text-[2.2rem]">
              {property.title}
            </h3>

            <p className="mt-[0.7rem] text-[1.3rem] text-white/35">
              {property.location}
            </p>
          </div>

          <span className="whitespace-nowrap pt-[0.5rem] text-[1.4rem] text-[#b5c9a9]">
            {property.price}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default PropertyCard;
