import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiDroplet,
  FiHeart,
  FiHome,
  FiMapPin,
  FiMaximize2,
  FiPhone,
  FiTruck,
} from "react-icons/fi";
import IconBox from "./IconBox";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Hero = ({
  property,
  activeImage,
  isFavorite,
  previousImage,
  nextImage,
  agent,
  setActiveImage,
  setIsFavorite,
  setIsGalleryOpen,
}) => {
  return (
    <section className="bg-[#0c1510] px-5 pb-12 pt-10 text-white sm:px-8 lg:px-16 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-[160rem]">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-[1.2rem] text-white/45">
          <Link to="/" className="transition hover:text-[#c6d4a5]">
            خانه
          </Link>
          <FiChevronLeft />
          <Link to="/properties" className="transition hover:text-[#c6d4a5]">
            املاک
          </Link>
          <FiChevronLeft />
          <span className="text-white/80">جزئیات ملک</span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-7"
          >
            <div className="relative h-[30rem] overflow-hidden rounded-2xl sm:h-[42rem] lg:h-[53rem]">
              <img
                src={property.images[activeImage]}
                alt={property.title}
                className="h-full w-full cursor-zoom-in object-cover"
                onClick={() => setIsGalleryOpen(true)}
              />

              <span className="absolute right-5 top-5 rounded-full bg-[#101713]/80 px-4 py-2 text-[1.2rem]">
                {property.type}
              </span>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                aria-label="افزودن به علاقه‌مندی‌ها"
                className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#101713]/80 transition hover:bg-[#314b38]"
              >
                <FiHeart
                  className={`text-[2rem] ${
                    isFavorite ? "fill-red-400 text-red-400" : ""
                  }`}
                />
              </button>

              <div className="absolute bottom-5 right-5 rounded-lg bg-black/60 px-4 py-2 text-[1.2rem]">
                {activeImage + 1} / {property.images.length}
              </div>

              <button
                onClick={previousImage}
                aria-label="تصویر قبلی"
                className="absolute bottom-5 left-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#17251d] transition hover:bg-[#c6d4a5]"
              >
                <FiArrowRight className="text-[2rem]" />
              </button>

              <button
                onClick={nextImage}
                aria-label="تصویر بعدی"
                className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#17251d] transition hover:bg-[#c6d4a5]"
              >
                <FiArrowLeft className="text-[2rem]" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3">
              {property.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-[8rem] overflow-hidden rounded-lg border-2 transition sm:h-[11rem] ${
                    activeImage === index
                      ? "border-[#c6d4a5]"
                      : "border-transparent opacity-65 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`تصویر ${index + 1} ملک`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex min-w-0 flex-col justify-center lg:col-span-5"
          >
            <span className="mb-5 text-[1.2rem] tracking-[0.25em] text-[#c6d4a5]">
              LUXORA EXCLUSIVE
            </span>

            <h1 className="max-w-[60rem] text-[3rem] font-medium leading-[1.7] sm:text-[4rem] lg:text-[4.8rem]">
              {property.title}
            </h1>

            <p className="mt-4 flex items-center gap-2 text-[1.4rem] text-white/55">
              <FiMapPin className="text-[#c6d4a5]" />
              {property.location}
            </p>

            <div className="mt-10 border-b border-white/10 pb-8">
              <span className="mb-3 block text-[1.3rem] text-white/45">
                قیمت پیشنهادی
              </span>

              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-[2.7rem] font-medium text-[#c6d4a5] sm:text-[3.4rem]">
                  {property.price}
                </span>
                <span className="text-[1.3rem] text-white/60">تومان</span>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-y-5 sm:grid-cols-4">
              <IconBox
                icon={FiMaximize2}
                value={property.area}
                label="زیربنا، متر"
              />
              <IconBox
                icon={FiHome}
                value={property.bedrooms}
                label="اتاق خواب"
              />
              <IconBox
                icon={FiDroplet}
                value={property.bathrooms}
                label="سرویس بهداشتی"
              />
              <IconBox
                icon={FiTruck}
                value={property.parking}
                label="پارکینگ"
              />
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="#visit-form"
                className="flex min-h-[5rem] items-center justify-center gap-3 rounded-lg bg-[#c6d4a5] px-5 text-[1.35rem] font-medium text-[#142018] transition hover:bg-[#d8e3bd]"
              >
                <FiCalendar />
                درخواست بازدید
              </a>

              <a
                href={`tel:${agent.phone}`}
                className="flex min-h-[5rem] items-center justify-center gap-3 rounded-lg border border-white/25 px-5 text-[1.35rem] transition hover:border-[#c6d4a5] hover:text-[#c6d4a5]"
              >
                <FiPhone />
                تماس با مشاور
              </a>
            </div>

            <p className="mt-6 text-[1.2rem] leading-8 text-white/40">
              برای اطلاع از شرایط خرید و هماهنگی بازدید، با مشاور اختصاصی این
              ملک در ارتباط باشید.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
