import {
  FiCheck,
  FiGitBranch,
  FiHome,
  FiMaximize2,
  FiTruck,
} from "react-icons/fi";
import { formatNumber, formatPrice } from "./api";

const comparisonRows = [
  {
    label: "قیمت ملک",
    icon: FiGitBranch,
    getValue: (property) => formatPrice(property.price),
    highlight: true,
  },
  {
    label: "قیمت هر متر",
    icon: FiMaximize2,
    getValue: (property) =>
      `${formatNumber(Math.round(property.price / property.area))} تومان`,
  },
  {
    label: "متراژ بنا",
    icon: FiMaximize2,
    getValue: (property) => `${formatNumber(property.area)} متر مربع`,
  },
  {
    label: "متراژ زمین",
    icon: FiHome,
    getValue: (property) => `${formatNumber(property.landArea)} متر مربع`,
  },
  {
    label: "تعداد اتاق خواب",
    icon: FiHome,
    getValue: (property) => formatNumber(property.bedrooms),
  },
  {
    label: "تعداد سرویس بهداشتی",
    icon: FiCheck,
    getValue: (property) => formatNumber(property.bathrooms),
  },
  {
    label: "پارکینگ",
    icon: FiTruck,
    getValue: (property) => formatNumber(property.parking),
  },
  {
    label: "سال ساخت",
    icon: FiCheck,
    getValue: (property) => property.year,
  },
  {
    label: "نوع ملک",
    icon: FiHome,
    getValue: (property) => property.type,
  },
];
export { comparisonRows };
