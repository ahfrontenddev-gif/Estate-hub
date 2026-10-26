import { useState } from "react";
import {
  FiArrowUpLeft,
} from "react-icons/fi";
import Hero from "../components/contact/Hero";
import {contactInfo} from "../data/apiContact"

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "مشاوره خرید ملک",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#f2f1e9] text-[#14251d]"
    >
      {/* Contact Hero */}
    <Hero contactInfo={contactInfo} form={form} handleChange={handleChange} handleSubmit={handleSubmit} submitted={submitted} />

      {/* Bottom CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-7 rounded-2xl border border-[#e0e1d7] bg-[#f8f7f1] p-7 sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div>
            <span className="text-xs font-medium tracking-wider text-[#71816b]">
              YOUR NEXT CHAPTER
            </span>

            <h2 className="mt-3 text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl">
              آماده‌اید خانه بعدی خود را پیدا کنید؟
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-8 text-[#73786f]">
              با راهنمایی کارشناسان لوکسورا، انتخابی متناسب با
              خواسته‌ها و سبک زندگی خود داشته باشید.
            </p>
          </div>

          <a
            href="/properties"
            className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#10251c] px-6 py-4 text-sm !text-white transition hover:bg-[#263f30]"
          >
            <span>مشاهده املاک</span>
            <FiArrowUpLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;