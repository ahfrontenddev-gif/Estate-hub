import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".property-slide");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;

    const gap = window.innerWidth >= 1024
      ? 24
      : window.innerWidth >= 640
        ? 20
        : 16;

    container.scrollBy({
      left: direction === "next"
        ? -(cardWidth + gap)
        : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section
      dir="rtl"
      className="overflow-hidden bg-[#080d0b] text-white"
    >
      <div
        className="
          mx-auto max-w-[140rem]
          px-[2.4rem] py-[8rem]
          sm:px-[3.2rem] sm:py-[9rem]
          lg:px-[4rem] lg:py-[12rem]
        "
      >
        <div
          className="
            mb-[5rem] flex flex-col gap-[3rem]
            lg:mb-[7rem] lg:flex-row
            lg:items-end lg:justify-between
          "
        >
          <div className="max-w-[70rem]">
            <div className="mb-[2.4rem] flex items-center gap-[1.2rem]">
              <span className="text-[1.1rem] font-medium tracking-[0.25em] text-[#b5c9a9]">
                02
              </span>

              <span className="h-px w-[4rem] bg-[#b5c9a9]/40" />

              <span className="text-[1.3rem] text-white/40">
                املاک ویژه
              </span>
            </div>

            <h2
              className="
                text-[4.2rem] font-light leading-[1.2] tracking-tight
                sm:text-[5.2rem]
                lg:text-[6.8rem]
                xl:text-[7.8rem]
              "
            >
              انتخابی از
              <br />
              <span className="font-serif italic text-[#b5c9a9]">
                بهترین املاک
              </span>
            </h2>
          </div>

          <div className="max-w-[36rem]">
            <p className="text-[1.5rem] leading-[1.9] text-white/40 sm:text-[1.6rem]">
              مجموعه‌ای از خاص‌ترین خانه‌ها و املاک لوکس که با دقت
              برای سبک‌های مختلف زندگی انتخاب شده‌اند.
            </p>

            <Link
              to="/properties"
              className="group mt-[2.5rem] inline-flex items-center gap-[1rem] text-[1.4rem]"
            >
              <span className="relative">
                مشاهده همه املاک
                <span
                  className="
                    absolute bottom-[-0.5rem] right-0
                    h-px w-full bg-white/30
                    transition-transform duration-300
                    group-hover:origin-left group-hover:scale-x-0
                  "
                />
              </span>

              <span
                className="
                  flex h-[3.8rem] w-[3.8rem] items-center justify-center
                  rounded-full border border-white/15
                  transition-all duration-300
                  group-hover:-translate-x-[0.4rem]
                  group-hover:bg-[#b5c9a9]
                  group-hover:text-[#080d0b]
                "
              >
                <FiArrowLeft size={15} />
              </span>
            </Link>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="
            -mx-[2.4rem] overflow-x-auto px-[2.4rem]
            sm:-mx-[3.2rem] sm:px-[3.2rem]
            lg:-mx-[4rem] lg:px-[4rem]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div
            className="
              flex w-max gap-[1.6rem]
              sm:gap-[2rem]
              lg:gap-[2.4rem]
            "
          >
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;

