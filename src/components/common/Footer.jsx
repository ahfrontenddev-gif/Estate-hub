import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiYoutube,
} from "react-icons/fi";
import Reveal from "../animate/Reveal";
import FooterColumn from "./FooterColumn";
import FooterTitle from "./FooterTitle";
import ContactItem from "./ContactItem";
import { Link } from "react-router-dom";
import Magnetic from "../animate/Magnetic";

const navLinks = [
  { title: "خانه", href: "/" },
  { title: "املاک", href: "/properties" },
  { title: "درباره ما", href: "/about" },
  { title: "خدمات ما", href: "/services" },
  { title: "تماس با ما", href: "/contact" },
];

const supportLinks = [
  { title: "راهنمای خرید", href: "/guide" },
  { title: "سوالات متداول", href: "/faq" },
  { title: "شرایط و قوانین", href: "/terms" },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      dir="rtl"
      className="overflow-hidden bg-[#07100d] text-white"
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="group relative min-h-[28rem] overflow-hidden sm:min-h-[32rem]"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d] via-black/20 to-black/30" />

        <div className="relative mx-auto flex min-h-[28rem] max-w-[140rem] items-center px-[2rem] py-[4rem] sm:min-h-[32rem] sm:px-[3.2rem] lg:px-[4rem]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[56rem]"
          >
            <span className="mb-[1.5rem] block text-[1.3rem] text-[#b5c9a9]">
              املاک لوکس
            </span>

            <h2 className="text-[3.6rem] font-light leading-[1.25] sm:text-[4.8rem] lg:text-[6rem]">
              خانه رویایی‌تان را
              <br />
              <span className="text-[#b5c9a9]">پیدا کنید.</span>
            </h2>

            <p className="mt-[1.8rem] max-w-[46rem] text-[1.4rem] leading-[1.9] text-white/60 sm:text-[1.5rem]">
              مجموعه‌ای از خاص‌ترین و لوکس‌ترین املاک را برای سبک زندگی متفاوت
              کشف کنید.
            </p>
            <div className="w-fit">
              <Magnetic>
                <Link to="/properties">
                  <motion.h6
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group/link  mt-[2.4rem] inline-flex items-center gap-[1.2rem] rounded-full border border-white/30 px-[1.8rem] py-[0.8rem] transition-colors duration-300 hover:border-[#b5c9a9] hover:bg-[#b5c9a9] hover:text-[#07100d]"
                  >
                    <span className="text-[1.3rem]">مشاهده املاک</span>

                    <span className="flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-full border border-white/30 transition-transform duration-300 group-hover/link:-translate-x-[0.3rem]">
                      <FiArrowLeft size={17} />
                    </span>
                  </motion.h6>
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[140rem] px-[2rem] py-[4rem] sm:px-[3.2rem] sm:py-[5rem] lg:px-[4rem]">
          <div className="grid grid-cols-1 gap-[3.5rem] sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-[4rem]">
            <Reveal y={25}>
              <div className="sm:col-span-2 lg:col-span-1">
                <Link href="/" className="inline-block">
                  <h3 className="font-serif text-[3.4rem] tracking-wide">
                    LUXORA
                  </h3>

                  <span className="mt-[0.2rem] block text-[0.9rem] tracking-[0.3em] text-[#b5c9a9]">
                    PREMIUM REAL ESTATE
                  </span>
                </Link>

                <h4 className="mt-[2.4rem] max-w-[32rem] text-[2.1rem] font-light leading-[1.7]">
                  سبک زندگی بهتر،
                  <br />
                  با انتخاب‌های خاص.
                </h4>

                <p className="mt-[1.2rem] max-w-[39rem] text-[1.3rem] leading-[1.9] text-white/50">
                  در لوکسورا، ما فقط ملک نمی‌فروشیم؛ ما به شما کمک می‌کنیم
                  خانه‌ای را پیدا کنید که با سبک زندگی شما هماهنگ باشد.
                </p>

                <form
                  onSubmit={(event) => event.preventDefault()}
                  className="mt-[2rem] flex max-w-[40rem] items-center rounded-full border border-white/20 p-[0.4rem]"
                >
                  <FiMail
                    size={17}
                    className="mr-[1.2rem] shrink-0 text-white/40"
                  />

                  <input
                    type="email"
                    aria-label="ایمیل"
                    placeholder="ایمیل خود را وارد کنید..."
                    className="min-w-0 flex-1 bg-transparent px-[1rem] py-[0.9rem] text-[1.3rem] text-white outline-none placeholder:text-white/30"
                  />

                  <motion.button
                    type="submit"
                    aria-label="ثبت ایمیل"
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex h-[3.8rem] w-[3.8rem] shrink-0 items-center justify-center rounded-full bg-[#b5c9a9] text-[#07100d]"
                  >
                    <FiSend size={16} />
                  </motion.button>
                </form>

                <div className="mt-[2rem] flex items-center gap-[1.8rem] text-white/50">
                  {[
                    { icon: FiInstagram, label: "Instagram" },
                    { icon: FiLinkedin, label: "LinkedIn" },
                    { icon: FiYoutube, label: "YouTube" },
                    { icon: FiSend, label: "Telegram" },
                  ].map(({ icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href="#"
                      aria-label={label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="transition-colors hover:text-[#b5c9a9]"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={25}>
              <FooterColumn title="لینک‌های سریع" links={navLinks} />
            </Reveal>
            <Reveal delay={0.2} y={25}>
              <FooterColumn title="پشتیبانی" links={supportLinks} />
            </Reveal>

            <Reveal delay={0.3} y={25}>
              <div>
                <FooterTitle>تماس با ما</FooterTitle>

                <div className="space-y-[1.8rem]">
                  <ContactItem
                    icon={<FiMapPin size={18} />}
                    title="آدرس"
                    text="تهران، خیابان ولیعصر، ساختمان لوکسورا، طبقه ۵"
                  />

                  <ContactItem
                    icon={<FiPhone size={18} />}
                    title="تلفن"
                    text="+98 21 1234 5678"
                  />

                  <ContactItem
                    icon={<FiMail size={18} />}
                    title="ایمیل"
                    text="info@luxora.ir"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[140rem] flex-col-reverse gap-[1.6rem] px-[2rem] py-[1.8rem] sm:flex-row sm:items-center sm:justify-between sm:px-[3.2rem] lg:px-[4rem]">
          <p dir="ltr" className="text-[1.1rem] text-white/40">
            © 2026 Luxora. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-[1rem] text-[1.2rem] text-white/40 sm:gap-[1.4rem]">
            <span className="mr-[0.6rem] hidden font-serif text-[1.8rem] tracking-wide text-white sm:block">
              LUXORA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
