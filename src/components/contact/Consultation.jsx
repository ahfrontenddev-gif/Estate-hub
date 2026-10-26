import { motion } from "motion/react";
import { FiArrowUpLeft, FiCheck, FiClock, FiSend } from "react-icons/fi";

const Consultation = ({ submitted, handleSubmit, form, handleChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="order-2"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-white/50 bg-[#f7f6f0] p-5 shadow-2xl shadow-black/20 sm:p-8 lg:p-9">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-medium tracking-wider text-[#71816b]">
              LUXORA REAL ESTATE
            </span>

            <h2 className="mt-3 text-2xl font-medium sm:text-4xl">
              درخواست مشاوره
            </h2>

            <p className="mt-3 text-xs leading-6 text-[#73786f] sm:text-xl">
              اطلاعات خود را وارد کنید تا با شما تماس بگیریم.
            </p>
          </div>

          <div className="flex h-12 w-12 p-2 shrink-0 items-center justify-center rounded-xl bg-[#e6eadd] text-[#526e58]">
            <FiSend size={21} />
          </div>
        </div>

        {submitted && (
          <div
            role="status"
            className="mb-5 flex items-center gap-3 rounded-xl border border-[#cbd9c2] bg-[#e8eee2] p-4 text-sm leading-6 text-[#294a33]"
          >
            <FiCheck className="shrink-0" size={20} />
            درخواست شما ثبت نمایشی شد. برای ارسال واقعی، باید API پروژه را متصل
            کنیم.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-xl font-medium text-[#454d43]"
            >
              نام و نام خانوادگی
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="نام خود را وارد کنید"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#dedfd5] bg-white/70 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a49a] focus:border-[#526e58] focus:ring-2 focus:ring-[#526e58]/10"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-xl font-medium text-[#454d43]"
              >
                شماره تماس
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="۰۹۱۲..."
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#dedfd5] bg-white/70 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a49a] focus:border-[#526e58] focus:ring-2 focus:ring-[#526e58]/10"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xl font-medium text-[#454d43]"
              >
                ایمیل
                <span className="mr-1 text-[#9b9e94]">(اختیاری)</span>
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#dedfd5] bg-white/70 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a1a49a] focus:border-[#526e58] focus:ring-2 focus:ring-[#526e58]/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-xl font-medium text-[#454d43]"
            >
              موضوع درخواست
            </label>

            <select
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-[#dedfd5] bg-white/70 px-4 py-3.5 text-sm outline-none transition focus:border-[#526e58] focus:ring-2 focus:ring-[#526e58]/10"
            >
              <option>مشاوره خرید ملک</option>
              <option>مشاوره فروش ملک</option>
              <option>سرمایه‌گذاری در املاک</option>
              <option>مشاوره اجاره ملک</option>
              <option>سایر موارد</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-xl font-medium text-[#454d43]"
            >
              توضیحات
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="چطور می‌توانیم به شما کمک کنیم؟"
              value={form.message}
              onChange={handleChange}
              className="w-full resize-y rounded-lg border border-[#dedfd5] bg-white/70 px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-[#a1a49a] focus:border-[#526e58] focus:ring-2 focus:ring-[#526e58]/10"
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#10251c] px-5 py-4 text-2xl font-medium text-white transition duration-300 hover:bg-[#263f30] focus:outline-none focus:ring-2 focus:ring-[#526e58] focus:ring-offset-2"
          >
            <span>ارسال درخواست</span>

            <FiArrowUpLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </button>

          <p className="text-center text-[1rem] sm:text-[11px] leading-6 text-[#85897f]">
            اطلاعات شما صرفاً برای پیگیری درخواست استفاده می‌شود.
          </p>
        </form>
      </div>

      {/* Working hours */}
      <div className="mt-5 flex items-center justify-center gap-2 text-xl text-white/60">
        <FiClock size={15} />
        <span>شنبه تا پنجشنبه، ساعت ۹ تا ۱۸</span>
      </div>
    </motion.div>
  );
};

export default Consultation;
