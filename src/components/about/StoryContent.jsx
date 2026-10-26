import {motion} from "motion/react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const StoryContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="py-3"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-[#829274]" />
        <span className="text-[1.1rem] text-[#71816b]">داستان ما</span>
      </div>

      <h2 className="text-[2.7rem] font-semibold leading-[1.7] sm:text-[3.5rem]">
        از یک ایده،
        <span className="block text-[#708569]">تا یک برند معتمد.</span>
      </h2>

      <p className="mt-6 text-[1.3rem] leading-[2.5] text-[#73796e]">
        لوکسورا با یک نگاه متفاوت به دنیای املاک شکل گرفته است؛ نگاهی که خانه را
        تنها یک ساختمان نمی‌بیند، بلکه آن را بخشی از تجربه زندگی، آسایش و آینده
        هر فرد می‌داند.
      </p>

      <p className="mt-4 text-[1.3rem] leading-[2.5] text-[#73796e]">
        باور داریم انتخاب ملک باید روشن، مطمئن و متناسب با نیازهای واقعی شما
        باشد. به همین دلیل، تلاش می‌کنیم از شناخت نیازها تا بررسی گزینه‌ها و
        تصمیم نهایی، همراهی قابل اعتماد باشیم.
      </p>

      <div className="mt-8 border-t border-[#dedfd5] pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5e8dd] text-[#607b63]">
            <FiCheck size={21} />
          </div>

          <div>
            <p className="text-[1.3rem] font-medium">
              انتخاب آگاهانه، تجربه‌ای مطمئن
            </p>
            <p className="mt-1 text-[1.15rem] text-[#7b8176]">
              کیفیت در جزئیات و تعهد در تمام مراحل
            </p>
          </div>
        </div>
      </div>

      <Link
        to="/properties"
        className="mt-8 inline-flex items-center gap-3 border-b border-[#87957c] pb-2 text-[1.25rem] font-medium transition hover:text-[#708569]"
      >
        کشف املاک لوکسورا
        <FiArrowLeft size={17} />
      </Link>
    </motion.div>
  );
};

export default StoryContent;
