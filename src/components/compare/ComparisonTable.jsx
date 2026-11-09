import { motion } from "motion/react";
import { FiArrowUpLeft, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const ComparisonTable = ({
  comparedProperties = [],
  comparisonRows = [],
}) => {
  const properties = Array.isArray(comparedProperties)
    ? comparedProperties.filter(Boolean)
    : [];

  const rows = Array.isArray(comparisonRows)
    ? comparisonRows
    : [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-14"
      dir="rtl"
    >
      <div className="mb-6">
        <h2 className="text-[2rem] font-semibold">
          مقایسه مشخصات
        </h2>

        <p className="mt-2 text-[1.2rem] text-[#777d73]">
          اطلاعات هر ملک را در یک نگاه بررسی کنید.
        </p>
      </div>

      {properties.length === 0 ? (
        <div className="rounded-lg border border-[#dedfd5] bg-[#fbfaf6] p-10 text-center text-[#777d73]">
          ملکی برای مقایسه انتخاب نشده است.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-[#dedfd5] bg-[#fbfaf6]">
          <table className="w-full border-collapse text-right sm:min-w-[68rem]">
            <thead>
              <tr className="bg-[#e9eae1]">
                <th className="w-[18rem] px-5 py-5 text-[1.25rem] font-medium text-[#526e58]">
                  مشخصات
                </th>

                {properties.map((property, index) => (
                  <th
                    key={property.id ?? index}
                    className="min-w-[16rem] border-r border-[#dedfd5] px-5 py-5 text-[1.2rem] font-medium"
                  >
                    {property.title || "بدون عنوان"}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => {
                if (!row) return null;

                const Icon = row.icon;

                return (
                  <tr
                    key={row.label ?? index}
                    className={`border-t border-[#e5e6dd] ${
                      index % 2 === 0
                        ? "bg-[#fbfaf6]"
                        : "bg-[#f5f4ed]"
                    }`}
                  >
                    <th className="px-5 py-5 text-[1.2rem] font-medium text-[#56635a]">
                      <span className="flex items-center gap-3">
                        {Icon && (
                          <Icon
                            size={17}
                            className="shrink-0 text-[#74866d]"
                          />
                        )}

                        {row.label || "مشخصات"}
                      </span>
                    </th>

                    {properties.map((property, propertyIndex) => {
                      let value = "—";

                      if (typeof row.getValue === "function") {
                        value = row.getValue(property) ?? "—";
                      }

                      return (
                        <td
                          key={property.id ?? propertyIndex}
                          className={`border-r border-[#e5e6dd] px-5 py-5 text-[1.2rem] ${
                            row.highlight
                              ? "font-semibold text-[#526e58]"
                              : "text-[#303d34]"
                          }`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}

              <tr className="border-t border-[#e5e6dd]">
                <th className="px-5 py-5 text-[1.2rem] font-medium text-[#56635a]">
                  امکانات
                </th>

                {properties.map((property, index) => {
                  const features = Array.isArray(property.features)
                    ? property.features
                    : [];

                  return (
                    <td
                      key={property.id ?? index}
                      className="border-r border-[#e5e6dd] px-5 py-5"
                    >
                      {features.length > 0 ? (
                        <ul className="space-y-3">
                          {features.map((feature, featureIndex) => (
                            <li
                              key={`${property.id ?? index}-${featureIndex}`}
                              className="flex items-center gap-2 text-[1.15rem] text-[#56635a]"
                            >
                              <FiCheck
                                size={15}
                                className="shrink-0 text-[#718d6b]"
                              />

                              {typeof feature === "string"
                                ? feature
                                : feature?.name ?? "—"}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-base text-[#999e94]">
                          اطلاعاتی ثبت نشده
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>

              <tr className="border-t border-[#e5e6dd]">
                <th className="px-5 py-5 text-[1.2rem] font-medium text-[#56635a]">
                  لینک ملک
                </th>

                {properties.map((property, index) => (
                  <td
                    key={property.id ?? index}
                    className="border-r border-[#e5e6dd] px-5 py-5"
                  >
                    <Link
                      to={`/properties/${property.id}`}
                      className="inline-flex items-center gap-2 text-[1.2rem] font-medium text-[#526e58] transition hover:text-[#14251d]"
                    >
                      مشاهده ملک
                      <FiArrowUpLeft size={16} />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </motion.section>
  );
};

export default ComparisonTable;
