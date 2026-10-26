import {motion} from "motion/react";
import { fadeUp } from "../../data/apiTerms";
import { FiShield } from "react-icons/fi";

const Intro = () => {
  return (
    <section className="relative border-b border-[#dedfd3] pt-[10rem]">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 pb-10">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <h1 className="text-4xl font-bold leading-[1.5] tracking-tight sm:text-5xl lg:text-6xl">
            شرایط و قوانین
          </h1>

        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="flex items-center gap-4 border-r border-[#71816a] pr-5 lg:mr-auto"
        >
          <FiShield className="shrink-0 text-4xl text-[#71816a]" />

          <div>
            <p className="text-lg font-semibold">شفافیت، اصل همکاری ماست</p>

            <p className="mt-2 text-base leading-8 text-[#71816a]">
              آخرین به‌روزرسانی: ۱۱ اکتبر ۲۰۲۶
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
