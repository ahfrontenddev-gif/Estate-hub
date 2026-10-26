import {motion} from "motion/react"

const Values = ({values}) => {
  return (
    <div className="mx-auto grid max-w-[160rem] grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.5fr] lg:items-center lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#829274]" />
          <span className="text-[1.1rem] text-[#71816b]">ارزش‌های ما</span>
        </div>

        <h2 className="text-[2.6rem] font-semibold leading-[1.7] sm:text-[3.2rem]">
          آنچه ما را
          <span className="block">متفاوت می‌کند.</span>
        </h2>

        <p className="mt-5 max-w-[43rem] text-[1.3rem] leading-[2.4] text-[#73796e]">
          رابطه‌ای ماندگار با مشتریان، از انتخاب‌های دقیق و تعهد به ارزش‌هایی
          شکل می‌گیرد که در تمام مراحل کار به آن‌ها پایبندیم.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.article
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group border border-[#d9dcd1] bg-[#f7f6f0] p-6 transition duration-300 hover:border-[#aab59f] hover:bg-[#fbfaf6] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={28}
                  strokeWidth={1.3}
                  className="text-[#647c62] transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  dir="ltr"
                  className="text-[1.1rem] tracking-widest text-[#a0a596]"
                >
                  {value.id}
                </span>
              </div>

              <h3 className="mt-7 text-[1.7rem] font-medium">{value.title}</h3>

              <p className="mt-3 text-[1.2rem] leading-[2.2] text-[#73796e]">
                {value.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
