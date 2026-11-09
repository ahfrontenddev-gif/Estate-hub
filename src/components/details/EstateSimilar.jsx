
import PropertyCard from "../properties/PropertyCard";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const EstateSimilar = ({ properties = [], property }) => {
  const similarProperties = properties
    .filter((item) => String(item.id) !== String(property?.id))
    .slice(0, 3);

  if (!similarProperties.length) return null;

  return (
    <section className="bg-[#eaece4] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[160rem]">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <span className="text-[1.2rem] tracking-[0.2em] text-[#71866c]">
              DISCOVER MORE
            </span>

            <h2 className="mt-3 text-[2.7rem] font-medium sm:text-[3.5rem]">
              املاک مشابه
            </h2>

            <p className="mt-3 text-[1.3rem] text-gray-500">
              انتخاب‌های بیشتر برای سبک زندگی شما
            </p>
          </div>

          <Link
            to="/properties"
            className="flex shrink-0 items-center gap-2 text-[1.3rem] transition hover:text-[#71866c]"
          >
            همه املاک
            <FiArrowLeft />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {similarProperties.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstateSimilar;
