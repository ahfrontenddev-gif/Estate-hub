const Switch = ({isLogin,changeMode}) => {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xl">
      <span className="text-[#73786f]">
        {isLogin ? "حساب کاربری ندارید؟" : "قبلاً ثبت‌ نام کرده‌اید؟"}
      </span>

      <button
        type="button"
        onClick={() => changeMode(isLogin ? "register" : "login")}
        className="font-medium text-[#294a33] underline underline-offset-4 transition hover:text-[#71816b]"
      >
        {isLogin ? "ثبت‌ نام کنید" : "وارد شوید"}
      </button>
    </div>
  );
};

export default Switch;
