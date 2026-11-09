import {
  FiCheck,
  FiGitBranch,
  FiHome,
  FiMaximize2,
  FiTruck,
} from "react-icons/fi";

import { formatNumber, formatPrice } from "./api";

// تبدیل اعداد فارسی و عربی به عدد قابل محاسبه
const toNumber = (value) => {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  const normalized = String(value)
    .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    .replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    .replace(/[,،٬\s]/g, "")
    .replace(/[^\d.-]/g, "");

  return Number(normalized) || 0;
};

const comparisonRows = [
  {
    label: "قیمت ملک",
    icon: FiGitBranch,
    getValue: (property) => formatPrice(toNumber(property.price)),
    highlight: true,
  },
  {
    label: "قیمت هر متر",
    icon: FiMaximize2,
    getValue: (property) => {
      const price = toNumber(property.price);
      const area = toNumber(property.area);

      if (!price || !area) return "نامشخص";

      return `${formatNumber(Math.round(price / area))} تومان`;
    },
  },
  {
    label: "متراژ بنا",
    icon: FiMaximize2,
    getValue: (property) => {
      const area = toNumber(property.area);

      return area ? `${formatNumber(area)} متر مربع` : "نامشخص";
    },
  },
  {
    label: "متراژ زمین",
    icon: FiHome,
    getValue: (property) => {
      const landArea = toNumber(property.landArea);

      return landArea ? `${formatNumber(landArea)} متر مربع` : "نامشخص";
    },
  },
  {
    label: "تعداد اتاق خواب",
    icon: FiHome,
    getValue: (property) => formatNumber(toNumber(property.bedrooms)),
  },
  {
    label: "تعداد سرویس بهداشتی",
    icon: FiCheck,
    getValue: (property) => formatNumber(toNumber(property.bathrooms)),
  },
  {
    label: "پارکینگ",
    icon: FiTruck,
    getValue: (property) => formatNumber(toNumber(property.parking)),
  },
  {
    label: "سال ساخت",
    icon: FiCheck,
    getValue: (property) => property.year || "نامشخص",
  },
  {
    label: "نوع ملک",
    icon: FiHome,
    getValue: (property) => property.type || "نامشخص",
  },
];

export { comparisonRows };
