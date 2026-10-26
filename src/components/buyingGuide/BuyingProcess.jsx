import {motion} from "motion/react";
import { fadeUp, steps } from "../../data/apiBuyingGuide";

const BuyingProcess = () => {
  return (
    <section
      id="buying-process"
      className="bg-[#fbfaf6] py-20"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#68785f] sm:text-base">
            THE BUYING PROCESS
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-6xl">
            از جست‌وجو تا خرید
          </h2>

          <p className="mt-4 text-base leading-9 text-[#68736c] sm:text-2xl">
            هر مرحله را با دقت پیش ببرید تا انتخاب نهایی با نیازها و شرایط شما
            هماهنگ باشد.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {steps.map(({ number, title, description, Icon }, index) => (
            <motion.article
              key={number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="relative border-t border-[#d7dbd0] pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-medium text-[#75856c] sm:text-3xl">
                  {number}
                </span>

                <span className="flex p-3 h-14 w-14 items-center justify-center rounded-full bg-[#e8e9dc] sm:h-16 sm:w-16">
                  <Icon size={27} strokeWidth={1.7} />
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold leading-9 sm:text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-base leading-9 text-[#69736c] sm:text-lg sm:leading-10">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingProcess;
