import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const Final = () => {
  return (
    <section className="bg-[#14251d] text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-16">
        <div>
          <p className="text-sm tracking-[0.2em] text-[#c6d4a5]">
            LUXORA REAL ESTATE
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-relaxed sm:text-3xl">
            با اطمینان بیشتر تصمیم بگیرید.
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-9 text-white/70 sm:text-lg">
            برای دریافت اطلاعات بیشتر درباره خدمات، قوانین یا فرایند خرید ملک،
            با ما در تماس باشید.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-4 rounded-lg bg-[#f8f7f1] px-6 py-4 text-base font-semibold !text-[#172b22] transition-colors hover:bg-[#c6d4a5] sm:text-lg"
        >
          تماس با ما
          <FiArrowLeft className="text-xl" />
        </a>
      </div>
    </section>
  );
};

export default Final;
