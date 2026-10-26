import { useState } from "react";
import { motion } from "motion/react";
import { FiArrowLeft, FiPlay } from "react-icons/fi";
import Value from "./Value";
import Modal from "./Modal";
import Reveal from "../animate/Reveal";
import { valuesAbout as values } from "../../data/apiHome";
import { Link } from "react-router-dom";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        id="featured-properties"
        dir="rtl"
        className="overflow-hidden bg-[#f1eee7] text-[#101613]"
      >
        <div className="mx-auto max-w-[140rem] px-[2.4rem] py-[8rem] sm:px-[3.2rem] sm:py-[10rem] lg:px-[4rem] lg:py-[14rem]">
          <Reveal>
            <div className="mb-[7rem] flex flex-col gap-[4rem] lg:mb-[10rem] lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[75rem]">
                <div className="mb-[2.4rem] flex items-center gap-[1.2rem]">
                  <span className="text-[1.1rem] font-medium tracking-[0.25em] text-[#52684d]">
                    03
                  </span>

                  <span className="h-px w-[4rem] bg-[#52684d]/40" />

                  <span className="text-[1.3rem] text-black/40">
                    درباره لوکسورا
                  </span>
                </div>

                <h2 className="inline-block text-[4.2rem] font-light leading-[1.25] tracking-tight sm:text-[5.2rem] lg:text-[6.8rem] xl:text-[7.8rem]">
                  جایی که
                  <br />
                  <span className="inline-block font-serif italic text-[#52684d]">
                    خانه
                  </span>{" "}
                  معنای
                  <span className="mr-[0.1rem] inline-block font-serif italic">
                    دیگری
                  </span>
                  <br />
                  پیدا می‌کند.
                </h2>
              </div>

              <div className="max-w-[38rem]">
                <p className="text-[1.6rem] leading-[1.9] text-black/55 sm:text-[1.7rem]">
                  لوکسورا با هدف ایجاد تجربه‌ای متفاوت در دنیای املاک شکل گرفت؛
                  جایی که کیفیت، طراحی و اعتماد در کنار یکدیگر قرار می‌گیرند.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-[5rem] lg:grid-cols-[1.15fr_0.85fr] lg:gap-[8rem]">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[45rem] overflow-hidden sm:min-h-[55rem] lg:min-h-[65rem]"
            >
              <motion.img
                src="/images/properties/property-1-1.jpg"
                alt="خانه لوکس با معماری مدرن"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              <div className="absolute bottom-[3rem] right-[3rem] left-[3rem] flex items-end justify-between text-white">
                <div>
                  <span className="text-[1.1rem] tracking-[0.2em] text-white/60">
                    LUXORA
                  </span>

                  <p className="mt-[0.8rem] text-[1.8rem] font-light">
                    طراحی برای زندگی بهتر
                  </p>
                </div>

                <motion.button
                  type="button"
                  aria-label="مشاهده ویدیوی لوکسورا"
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#101613]"
                >
                  <FiPlay size={18} />
                </motion.button>
              </div>
            </motion.div>

            <Reveal delay={0.15} y={40}>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[1.2rem] text-[#52684d]">
                    داستان ما
                  </span>

                  <h3 className="mt-[2rem] max-w-[55rem] text-[3rem] font-light leading-[1.4] sm:text-[3.6rem] lg:text-[4.4rem]">
                    ما فقط ملک پیدا نمی‌کنیم،
                    <br />
                    <span className="font-serif italic text-[#52684d]">
                      سبک زندگی
                    </span>{" "}
                    پیدا می‌کنیم.
                  </h3>

                  <div className="mt-[3rem] max-w-[52rem] space-y-[2rem] text-[1.5rem] leading-[2] text-black/50 sm:text-[1.6rem]">
                    <p>
                      در لوکسورا، هر ملک داستان خاص خودش را دارد. ما تلاش
                      می‌کنیم این داستان را با نیازها، سلیقه و آینده شما هماهنگ
                      کنیم.
                    </p>

                    <p>
                      از اولین بازدید تا آخرین مرحله معامله، تیم ما در کنار
                      شماست تا تجربه‌ای ساده، شفاف و مطمئن داشته باشید.
                    </p>
                  </div>
                </div>

                <div className="mt-[6rem] border-t border-black/10 pt-[3rem]">
                  <div className="grid grid-cols-1 gap-[2.5rem] sm:grid-cols-2">
                    {values.map((value, index) => (
                      <Reveal key={value.title} delay={index * 0.08} y={20}>
                        <Value title={value.title} text={value.text} />
                      </Reveal>
                    ))}
                  </div>
                </div>

                <Link to="/about">
                  <motion.button
                    type="button"
                    whileHover={{ x: -4 }}
                    className="group mt-[5rem] flex w-fit items-center gap-[1.4rem] text-[1.4rem]"
                  >
                    <span className="relative">
                      بیشتر درباره ما
                      <span className="absolute -bottom-[0.5rem] right-0 h-px w-full origin-right bg-black/30 transition-transform duration-300 group-hover:scale-x-0" />
                    </span>

                    <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-black/15 transition-colors duration-300 group-hover:bg-[#101613] group-hover:text-white">
                      <FiArrowLeft size={17} />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {isVideoOpen && <Modal setIsVideoOpen={setIsVideoOpen} />}
    </>
  );
};

export default About;
