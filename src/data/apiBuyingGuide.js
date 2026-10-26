import {
  FiClipboard,
  FiDollarSign,
  FiEye,
  FiFileText,
  FiHeadphones,
  FiHome,
  FiKey,
  FiLock,
  FiMapPin,
  FiSearch,
  FiShield,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "نیازهای خود را مشخص کنید",
    description:
      "بودجه، متراژ، تعداد اتاق‌ها و امکانات موردنیاز خود را مشخص کنید تا جست‌وجوی هدفمندتری داشته باشید.",
    Icon: FiSearch,
  },
  {
    number: "02",
    title: "موقعیت ملک را بررسی کنید",
    description:
      "دسترسی‌ها، محله، امکانات اطراف و شرایط محیطی را بررسی کنید و پیش از انتخاب نهایی از ملک بازدید کنید.",
    Icon: FiMapPin,
  },
  {
    number: "03",
    title: "مدارک و شرایط معامله",
    description:
      "مالکیت، هویت طرفین، وضعیت حقوقی ملک و شرایط پرداخت را با دقت بررسی کنید.",
    Icon: FiFileText,
  },
  {
    number: "04",
    title: "معامله را نهایی کنید",
    description:
      "پس از بررسی مدارک و توافق بر شرایط، قرارداد را با رعایت مراحل قانونی تنظیم و تکمیل کنید.",
    Icon: FiKey,
  },
];

const checklist = [
  "تعیین بودجه و هزینه‌های جانبی",
  "بررسی موقعیت و دسترسی‌های ملک",
  "بازدید و بررسی وضعیت ساختمان",
  "احراز هویت مالک و بررسی مدارک",
  "مطالعه دقیق مفاد قرارداد",
  "بررسی شرایط پرداخت و انتقال مالکیت",
];

const benefits = [
  {
    title: "املاک منتخب",
    description: "گزینه‌های متناسب با نیاز شما",
    Icon: FiHome,
  },
  {
    title: "امنیت در معاملات",
    description: "فرایندی شفاف و مطمئن",
    Icon: FiShield,
  },
  {
    title: "پشتیبانی حرفه‌ای",
    description: "همراهی در مراحل خرید",
    Icon: FiHeadphones,
  },
];

const guideItems = [
  {
    title: "بودجه و هزینه‌ها",
    description: "هزینه‌های جانبی را پیش از انتخاب مشخص کنید.",
    Icon: FiDollarSign,
  },
  {
    title: "بازدید از ملک",
    description: "وضعیت ساختمان و امکانات را از نزدیک بررسی کنید.",
    Icon: FiEye,
  },
  {
    title: "بررسی اسناد",
    description: "مدارک مالکیت و مفاد قرارداد را با دقت بخوانید.",
    Icon: FiClipboard,
  },
  {
    title: "امنیت معامله",
    description: "در صورت نیاز از مشاور حقوقی معتبر کمک بگیرید.",
    Icon: FiLock,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
export { steps, checklist, benefits, guideItems, fadeUp };
