import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Switch from "../components/auth/Switch";
import SocialLogin from "../components/auth/SocialLogin";
import Divider from "../components/auth/Divider";
import Form from "../components/auth/Form";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");

  const isLogin = mode === "login";

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setMessage("");
    setShowPassword(false);
  };

  return (
    <main
      dir="rtl"
      className="flex min-h-screen flex-col items-center justify-center bg-[#f2f1e9] px-4 py-10 text-[#14251d] sm:px-6"
    >
      <motion.a
        href="/"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col items-center"
        aria-label="بازگشت به صفحه اصلی لوکسورا"
      >
        <svg
          viewBox="0 0 48 58"
          className="mb-2 h-12 w-10 text-[#14251d]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          <path d="M24 2 38 17 38 35 24 54 10 35 10 17Z" />
          <path d="M24 2V54M10 17 24 35 38 17" />
          <path d="M10 25 4 31 12 43 24 54 20 32Z" />
          <path d="M38 25 44 31 36 43 24 54 28 32Z" />
        </svg>

        <span className="text-xl font-medium tracking-[0.28em]">LUXORA</span>
        <span className="mt-1 text-[9px] tracking-[0.34em] text-[#71816b]">
          REAL ESTATE
        </span>
      </motion.a>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full max-w-[540px] rounded-2xl border border-[#dedfd5] bg-[#f7f6f0] p-5 shadow-[0_15px_45px_rgba(20,37,29,0.08)] sm:p-9 md:p-11"
      >
        <div className="flex rounded-full border border-[#dedfd5] bg-[#eeeee5] p-1">
          <button
            type="button"
            onClick={() => changeMode("register")}
            className={`flex-1 rounded-full py-3 text-2xl font-medium transition-all duration-300 ${
              !isLogin
                ? "bg-[#10251c] text-white shadow-sm"
                : "text-[#526057] hover:text-[#10251c]"
            }`}
          >
            ثبت‌نام
          </button>

          <button
            type="button"
            onClick={() => changeMode("login")}
            className={`flex-1 rounded-full py-3 text-2xl font-medium transition-all duration-300 ${
              isLogin
                ? "bg-[#10251c] text-white shadow-sm"
                : "text-[#526057] hover:text-[#10251c]"
            }`}
          >
            ورود
          </button>
        </div>
        <div className="mb-7 mt-8 text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-2xl font-semibold tracking-tight sm:text-[28px]">
                {isLogin ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}
              </h1>

              <p className="mt-3 text-sm leading-7 text-[#73786f]">
                {isLogin
                  ? "برای دسترسی به امکانات ویژه، وارد حساب کاربری خود شوید."
                  : "برای شروع، اطلاعات خود را وارد کنید."}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feedback */}
        {message && (
          <div
            role="status"
            className="mb-5 rounded-lg border border-[#d5dfcd] bg-[#e9eee4] px-4 py-3 text-sm leading-6 text-[#294a33]"
          >
            {message}
          </div>
        )}

        {/* Form */}
        <Form
          isLogin={isLogin}
          setMessage={setMessage}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />

        <Divider />
        <SocialLogin setMessage={setMessage} />
        <Switch isLogin={isLogin} changeMode={changeMode} />
      </motion.section>

      <div className="mt-8 flex items-center gap-4 text-[10px] tracking-[0.24em] text-[#8a9487]">
        <span className="h-px w-8 bg-[#c8cec2]" />
        LUXORA REAL ESTATE
        <span className="h-px w-8 bg-[#c8cec2]" />
      </div>
    </main>
  );
};

export default Auth;
