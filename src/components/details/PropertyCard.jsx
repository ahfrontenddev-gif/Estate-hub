import { FiArrowUpLeft, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => (
  <Link
    to={`/properties/${property.id}`}
    className="group block min-w-0 overflow-hidden rounded-xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="relative h-[22rem] overflow-hidden">
      <img
        src={property.images[0]}
        alt={property.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <span className="absolute right-4 top-4 rounded-full bg-[#101713]/85 px-4 py-2 text-[1.1rem] text-white">
        {property.type}
      </span>
    </div>

    <div className="space-y-5 p-5">
      <h3 className="truncate text-[1.5rem] font-medium text-[#17251d]">
        {property.title}
      </h3>

      <p className="flex items-center gap-2 text-[1.2rem] text-gray-500">
        <FiMapPin />
        {property.location}
      </p>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-[1.3rem] font-semibold text-[#314b38]">
          {property.price}
          <span className="mr-1 text-[1rem] font-normal">تومان</span>
        </span>

        <FiArrowUpLeft className="text-[1.8rem] transition group-hover:-translate-x-1 group-hover:translate-y-1" />
      </div>
    </div>
  </Link>
);


export default PropertyCard