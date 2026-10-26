import {motion} from "motion/react";

const Intro = () => {
  return (
    <section className="border-b border-[#dedfd4] bg-[#f1efe5] pt-[10rem]">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-5 pb-8 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-4xl font-bold leading-[1.6] sm:text-5xl lg:text-6xl">
            سوالات متداول
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-9 text-[#59675f] sm:text-2xl sm:leading-10">
            در این بخش به رایج‌ترین سوالات درباره خرید و فروش ملک، فرآیند
            معاملات، شرایط و خدمات لوکسورا پاسخ داده‌ایم.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
