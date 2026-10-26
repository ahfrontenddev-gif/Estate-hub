import {
  FiArrowLeft,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiShield,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Magnetic from "../animate/Magnetic";

const SupportPanel = () => {
  return (
    <aside className="relative h-fit overflow-hidden bg-[#e8e9df] px-6 py-8 sm:px-8 sm:py-10 lg:sticky lg:top-8">
      <div className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full border border-[#d1d8c9]" />

      <div className="relative">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d6decd]">
          <FiShield size={29} strokeWidth={1.6} />
        </span>

        <h2 className="mt-6 text-2xl font-bold leading-relaxed sm:text-4xl">
          سوال دیگری دارید؟
        </h2>

        <p className="mt-4 text-base leading-9 text-[#647066] sm:text-2xl">
          اگر سوال شما در میان موارد بالا نیست، از راه‌های زیر با ما در ارتباط
          باشید.
        </p>

        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 p-2 items-center justify-center rounded-full bg-[#14251d] text-white">
              <FiPhone size={19} />
            </span>

            <div>
              <p className="text-2xl font-medium" dir="ltr">
                شماره تماس شما
              </p>
              <p className="mt-1 text-xl leading-7 text-[#758076]">
                شماره تماس واقعی را اینجا قرار بده
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 p-2 items-center justify-center rounded-full bg-[#14251d] text-white">
              <FiMail size={19} />
            </span>

            <div>
              <p className="text-2xl font-medium" dir="ltr">
                info@luxora.com
              </p>
              <p className="mt-1 text-xl leading-7 text-[#758076]">
                برای ارسال سوال به ما ایمیل بزنید
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 p-2 items-center justify-center rounded-full bg-[#14251d] text-white">
              <FiMessageCircle size={19} />
            </span>

            <div>
              <p className="text-2xl font-medium">ارتباط با پشتیبانی</p>
              <p className="mt-1 text-xl leading-7 text-[#758076]">
                برای راهنمایی بیشتر پیام بفرستید
              </p>
            </div>
          </div>
        </div>

        <Magnetic>
          <Link
            to="/contact"
            className="mt-8 flex w-full items-center justify-center gap-4 bg-[#14251d] px-6 py-4 text-base font-medium !text-white transition hover:bg-[#304638] sm:text-lg"
          >
            ارسال پیام
            <FiArrowLeft size={20} />
          </Link>
        </Magnetic>
      </div>
    </aside>
  );
};

export default SupportPanel;
