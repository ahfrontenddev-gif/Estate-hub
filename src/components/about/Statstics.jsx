import { motion } from "motion/react";

const Statstics = ({ statistics }) => {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-40 h-[38rem] w-[38rem] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 -top-24 h-[28rem] w-[28rem] rounded-full border border-white/[0.06]"
      />
      <div className="relative mx-auto grid max-w-[160rem] grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#9eaf8a]" />
            <span className="text-[1.1rem] text-[#bdc9ad]">
              آمار و دستاوردها
            </span>
          </div>

          <h2 className="max-w-[55rem] text-[2.7rem] font-medium leading-[1.7] sm:text-[3.4rem]">
            اعتماد شما،
            <span className="block text-[#c6d4a5]">بزرگ‌ترین سرمایه ماست.</span>
          </h2>

          <p className="mt-5 max-w-[58rem] text-[1.3rem] leading-[2.5] text-white/65">
            تلاش می‌کنیم با شناخت بهتر نیازهای مشتریان، انتخاب‌های دقیق‌تر و
            خدماتی قابل اعتماد ارائه دهیم. برای ما، هر همکاری فرصتی برای ساختن
            یک تجربه ارزشمند است.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-x-8">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="border-r border-white/15 pr-4 sm:pr-6"
              >
                <Icon
                  size={21}
                  strokeWidth={1.3}
                  className="mb-4 text-[#c6d4a5]"
                />

                <p
                  dir="rtl"
                  className="text-[2.5rem] font-semibold tracking-tight sm:text-[3.1rem]"
                >
                  {item.number}
                </p>

                <p className="mt-2 text-[1.2rem] text-white/65">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Statstics;
