const Text = () => {
  return (
    <>
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-[#b5c9a9]" />
        <span className="text-xs font-medium tracking-[0.2em] text-[#c7d5bd] sm:text-sm">
          با لوکسورا در ارتباط باشید
        </span>
      </div>

      <h1 className="max-w-2xl text-4xl font-medium leading-[1.6] sm:text-5xl lg:text-6xl xl:text-7xl">
        برای مشاوره
        <br />
        <span className="text-[#c6d4a5]">در کنار شما هستیم.</span>
      </h1>

      <p className="mt-7 max-w-lg text-xl leading-8 text-white/65 sm:text-base sm:leading-9">
        برای انتخاب خانه‌ای متناسب با سبک زندگی‌تان، خرید یا فروش ملک و دریافت
        مشاوره تخصصی، کارشناسان لوکسورا همراه شما هستند.
      </p>
    </>
  );
};

export default Text;
