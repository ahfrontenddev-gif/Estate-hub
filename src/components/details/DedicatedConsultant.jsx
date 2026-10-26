import { FiCalendar, FiMail, FiPhone } from "react-icons/fi";

const DedicatedConsultant = ({ agent, handleSubmit, form, setForm }) => {
  return (
    <aside className="min-w-0 lg:col-span-5">
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
        <span className="text-[1.2rem] text-gray-500">مشاور اختصاصی ملک</span>

        <div className="mt-5 flex items-center gap-5">
          <img
            src={agent.image}
            alt={agent.name}
            className="h-20 w-20 rounded-full bg-[#e4e8df] object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div>
            <h3 className="text-[1.8rem] font-medium">{agent.name}</h3>
            <p className="mt-2 text-[1.2rem] text-gray-500">{agent.role}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4 border-b border-black/10 pb-7">
          <a
            href={`tel:${agent.phone}`}
            className="flex items-center gap-4 text-[1.3rem] text-gray-600 transition hover:text-[#49634d]"
          >
            <FiPhone className="text-[1.8rem]" />
            {agent.phone}
          </a>

          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-4 text-[1.3rem] text-gray-600 transition hover:text-[#49634d]"
          >
            <FiMail className="text-[1.8rem]" />
            {agent.email}
          </a>
        </div>

        <form id="visit-form" onSubmit={handleSubmit} className="mt-7">
          <h3 className="text-[1.8rem] font-medium">درخواست بازدید از ملک</h3>

          <div className="mt-5 space-y-4">
            <input
              type="text"
              required
              minLength={2}
              placeholder="نام و نام خانوادگی"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className="h-[5rem] w-full rounded-lg border border-black/10 bg-[#fafaf7] px-4 text-[1.3rem] outline-none transition placeholder:text-gray-400 focus:border-[#71866c]"
            />

            <input
              type="tel"
              required
              pattern="[0-9۰-۹٠-٩+\-\s]{8,20}"
              placeholder="شماره تماس"
              value={form.phone}
              onChange={(event) =>
                setForm({ ...form, phone: event.target.value })
              }
              className="h-[5rem] w-full rounded-lg border border-black/10 bg-[#fafaf7] px-4 text-[1.3rem] outline-none transition placeholder:text-gray-400 focus:border-[#71866c]"
            />

            <input
              type="date"
              value={form.date}
              onChange={(event) =>
                setForm({ ...form, date: event.target.value })
              }
              className="h-[5rem] w-full rounded-lg border border-black/10 bg-[#fafaf7] px-4 text-[1.3rem] outline-none transition focus:border-[#71866c]"
            />

            <button
              type="submit"
              className="flex h-[5rem] w-full items-center justify-center gap-3 rounded-lg bg-[#203a2b] text-[1.4rem] text-white transition hover:bg-[#365640]"
            >
              <FiCalendar />
              ثبت درخواست
            </button>
          </div>

          <p className="mt-4 text-[1.1rem] leading-7 text-gray-400">
            اطلاعات شما فقط برای هماهنگی بازدید استفاده خواهد شد.
          </p>
        </form>
      </div>
    </aside>
  );
};

export default DedicatedConsultant;
