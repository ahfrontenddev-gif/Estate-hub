import { checklist, guideItems } from "../../data/apiBuyingGuide";
import { FiCheckCircle, FiShield } from "react-icons/fi";

const Checklist = () => {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative overflow-hidden bg-[#14251d] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-6 h-56 w-56 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#c6d4a5] sm:text-base">
            BEFORE YOU BUY
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            این موارد را بررسی کنید.
          </h2>

          <p className="mt-5 text-base leading-9 text-white/75 sm:text-lg sm:leading-10">
            پیش از امضای قرارداد، این نکات را مرور کنید. بررسی دقیق جزئیات
            می‌تواند از بسیاری از مشکلات احتمالی جلوگیری کند.
          </p>

          <div className="mt-8 h-px w-full bg-white/20" />

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">
            {guideItems.map(({ title, description, Icon }) => (
              <div key={title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c6d4a5]/70 text-[#c6d4a5]">
                  <Icon size={23} strokeWidth={1.6} />
                </span>

                <h3 className="mt-4 text-base font-bold leading-8 sm:text-lg">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[#e9e9df] px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d6ddca]">
              <FiShield size={29} strokeWidth={1.6} />
            </span>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#68785f]">
                YOUR CHECKLIST
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-relaxed sm:text-3xl">
                چک‌لیست پیش از خرید
              </h3>
            </div>
          </div>

          <p className="mb-6 text-base leading-9 text-[#667168] sm:text-lg">
            قبل از تصمیم نهایی، این موارد را یکی‌یکی بررسی کنید.
          </p>

          <div className="divide-y divide-[#d2d6c9] border-y border-[#d2d6c9]">
            {checklist.map((item, index) => (
              <div key={item} className="flex items-start gap-4 py-4 sm:py-5">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#64765c] text-sm font-medium text-white">
                  <FiCheckCircle size={17} />
                </span>

                <div className="flex-1">
                  <p className="text-base leading-8 text-[#27392e] sm:text-lg">
                    {item}
                  </p>
                </div>

                <span className="pt-1 text-sm text-[#879184]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-r-2 border-[#829176] pr-5">
            <h4 className="text-lg font-bold leading-8 sm:text-xl">
              با آگاهی بیشتر تصمیم بگیرید
            </h4>

            <p className="mt-2 text-base leading-8 text-[#667168]">
              برای بررسی اسناد و شرایط قرارداد، در صورت نیاز از متخصص حقوقی یا
              کارشناس معتبر کمک بگیرید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
