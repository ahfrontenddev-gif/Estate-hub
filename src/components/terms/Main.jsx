import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiArrowUpLeft,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiHeadphones,
  FiMail,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";
import { fadeUp, sections } from "../../data/apiTerms";

const Main = () => {
  const tocItems = sections.map(({ id, number, title }) => ({
    id,
    number,
    title,
  }));
  return (
    <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-14 lg:px-16">
      <div className="min-w-0">
        <div className="mb-10 flex items-center gap-3">
          <FiFileText className="text-3xl text-[#71816a]" />

          <div>
            <h2 className="text-2xl font-bold leading-relaxed sm:text-3xl">
              مفاد و ضوابط استفاده
            </h2>

            <p className="mt-1 text-base leading-8 text-[#71816a] sm:text-lg">
              لطفاً هر بخش را با دقت مطالعه کنید.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#dedfd3]">
          {sections.map((section, index) => (
            <motion.article
              key={section.id}
              id={section.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: Math.min(index * 0.04, 0.2),
              }}
              className="scroll-mt-24 py-9 first:pt-2 sm:py-11"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8e7d7] text-lg font-semibold text-[#243b2e] sm:h-14 sm:w-14 sm:text-xl">
                  {section.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-bold leading-relaxed sm:text-3xl">
                    {section.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    {section.text.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-9 text-[#596a61] sm:text-lg sm:leading-10"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#dedfd3] bg-white/50 p-5 sm:p-7">
          <div className="flex items-start gap-3 sm:gap-4">
            <FiCheckCircle className="mt-1 shrink-0 text-2xl text-[#71816a]" />

            <div>
              <h3 className="text-lg font-bold sm:text-xl">نکته مهم</h3>

              <p className="mt-3 text-base leading-9 text-[#596a61] sm:text-lg sm:leading-10">
                این متن یک نمونه اولیه برای وب‌سایت است و جایگزین مشاوره حقوقی
                نیست. پیش از انتشار عمومی، آن را با خدمات واقعی لوکسورا و قوانین
                قابل اجرای محل فعالیت خود تطبیق دهید.
              </p>
            </div>
          </div>
        </div>
      </div>

      <aside className="self-start lg:sticky lg:top-24">
        <div className="rounded-2xl border border-[#e4e3d8] bg-[#eeeee4] p-5 sm:p-7">
          <h2 className="text-2xl font-bold">فهرست مطالب</h2>

          <div className="mt-5 h-px bg-[#d2d4c5]" />

          <nav aria-label="فهرست شرایط و قوانین" className="mt-3 space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="group flex w-full items-center gap-3 rounded-lg px-2 py-3 text-right transition-colors hover:bg-white/70"
              >
                <span className="text-base text-[#87917e]">{item.number}</span>

                <span className="flex-1 text-base font-medium leading-8 text-[#344b3e] sm:text-lg">
                  {item.title}
                </span>

                <FiArrowUpLeft className="shrink-0 text-lg opacity-0 transition-all group-hover:translate-x-[-2px] group-hover:opacity-100" />
              </button>
            ))}
          </nav>

          <div className="my-5 h-px bg-[#d2d4c5]" />

          <div className="rounded-xl bg-[#14251d] p-5 text-white sm:p-6">
            <FiHeadphones className="text-4xl text-[#c6d4a5]" />

            <h3 className="mt-4 text-xl font-bold">نیاز به راهنمایی دارید؟</h3>

            <p className="mt-3 text-base leading-9 text-white/75 sm:text-lg">
              اگر درباره شرایط استفاده از خدمات ما سؤالی دارید، با تیم پشتیبانی
              لوکسورا در ارتباط باشید.
            </p>

            <div className="mt-5 space-y-5">
              <a
                href="tel:+982100000000"
                className="flex items-center gap-3 text-base leading-8 transition-colors hover:text-[#c6d4a5] sm:text-lg"
              >
                <FiPhone className="shrink-0 text-xl text-[#c6d4a5]" />
                <span>شماره تماس پشتیبانی</span>
              </a>

              <a
                href="mailto:info@luxora.com"
                className="flex items-center gap-3 text-base leading-8 transition-colors hover:text-[#c6d4a5] sm:text-lg"
              >
                <FiMail className="shrink-0 text-xl text-[#c6d4a5]" />
                <span>info@luxora.com</span>
              </a>

              <a
                href="/contact"
                className="flex items-center gap-3 text-base leading-8 transition-colors hover:text-[#c6d4a5] sm:text-lg"
              >
                <FiMessageCircle className="shrink-0 text-xl text-[#c6d4a5]" />
                <span>صفحه تماس با ما</span>
              </a>
            </div>

            <a
              href="/contact"
              className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-[#f8f7f1] px-4 py-4 text-base font-semibold !text-[#172b22] transition-colors hover:bg-[#c6d4a5] sm:text-lg"
            >
              ارتباط با پشتیبانی
              <FiArrowLeft className="text-xl" />
            </a>
          </div>

          <div className="mt-5 flex items-start gap-3 px-1 text-base leading-8 text-[#71816a]">
            <FiClock className="mt-1 shrink-0 text-xl" />

            <p>
              پیشنهاد می‌کنیم هنگام استفاده از خدمات، نسخه به‌روز این صفحه را
              بررسی کنید.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Main;
