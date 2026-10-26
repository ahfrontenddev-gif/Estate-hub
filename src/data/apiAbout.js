import { FiAward, FiHeart, FiHome, FiKey, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";

const values = [
  {
    id: "01",
    icon: FiHeart,
    title: "همراهی",
    description:
      "از اولین مشاوره تا انتخاب نهایی، در تمام مسیر کنار شما هستیم.",
  },
  {
    id: "02",
    icon: FiUsers,
    title: "تخصص",
    description:
      "با شناخت دقیق بازار، انتخاب‌هایی آگاهانه و مطمئن را تجربه کنید.",
  },
  {
    id: "03",
    icon: FiAward,
    title: "کیفیت",
    description:
      "هر ملک با دقت انتخاب می‌شود تا استانداردهای زندگی شما را ارتقا دهد.",
  },
  {
    id: "04",
    icon: FiShield,
    title: "اعتماد",
    description: "شفافیت و صداقت، پایه تمام ارتباطات و همکاری‌های ماست.",
  },
];
const statistics = [
  { number: "۵۰۰+", label: "ملک منتخب", icon: FiHome },
  { number: "۳۰۰+", label: "مشتری راضی", icon: FiHeart },
  { number: "۱۰+", label: "سال تجربه", icon: FiTrendingUp },
  { number: "۲۰+", label: "منطقه تحت پوشش", icon: FiKey },
];

export { values, statistics };
