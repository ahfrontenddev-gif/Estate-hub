const ForgetPassword = ({setMessage}) => {
  return (
    <button
      type="button"
      onClick={() =>
        setMessage("بازیابی رمز عبور پس از اتصال سرویس احراز هویت فعال می‌شود.")
      }
      className="text-[#294a33] underline underline-offset-4 transition hover:text-[#71816b]"
    >
      رمز عبور را فراموش کرده‌اید؟
    </button>
  );
};

export default ForgetPassword;
