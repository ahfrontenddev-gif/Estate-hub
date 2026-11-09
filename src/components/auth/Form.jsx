
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";

import FromRow from "./FromRow";
import Remember from "./Remember";
import ForgetPassword from "./ForgetPassword";

import { useRegisterMutation, useLazyLoginQuery } from "../../data/apiAuth";
import { setCredentials } from "../../redux/authSlice";

const Form = ({ isLogin, showPassword, setShowPassword, setMessage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { isLoading: isRegistering }] = useRegisterMutation();

  const [login, { isLoading: isLoggingIn }] = useLazyLoginQuery();

  const isLoading = isRegistering || isLoggingIn;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && !form.name.trim()) {
      setMessage("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }

    if (!form.email.trim()) {
      setMessage("لطفاً ایمیل خود را وارد کنید.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("رمز عبور باید حداقل ۸ کاراکتر داشته باشد.");
      return;
    }

    try {
      if (isLogin) {
        const users = await login({
          email: form.email.trim(),
          password: form.password,
        }).unwrap();

        if (!users || users.length === 0) {
          setMessage("ایمیل یا رمز عبور اشتباه است.");
          return;
        }

        dispatch(setCredentials(users[0]));

        setMessage("با موفقیت وارد شدید.");
      } else {
        const newUser = await register({
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
        }).unwrap();

        dispatch(setCredentials(newUser));

        setMessage("ثبت‌نام با موفقیت انجام شد.");
      }

      setForm({
        name: "",
        email: "",
        password: "",
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("مشکلی در ارتباط با سرور رخ داد.");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#d8d9ce] bg-transparent py-4 pl-4 pr-12 text-xl text-[#10251c] outline-none transition duration-300 placeholder:text-[#999d92] focus:border-[#526e58] focus:ring-2 focus:ring-[#526e58]/10";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <AnimatePresence initial={false}>
        {!isLogin && (
          <FromRow
            key="name-field"
            id="name-field"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            icon={FiUser}
            label="نام و نام خانوادگی"
            labelId="name"
          >
            <input
              id="auth-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required={!isLogin}
              placeholder="نام خود را وارد کنید"
              className={inputClass}
            />
          </FromRow>
        )}
      </AnimatePresence>

      <FromRow id="email-field" icon={FiMail} label="ایمیل" labelId="email">
        <input
          id="auth-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="example@email.com"
          className={inputClass}
        />
      </FromRow>

      <FromRow
        id="password-field"
        icon={FiLock}
        label="رمز عبور"
        labelId="password"
      >
        <input
          id="auth-password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete={isLogin ? "current-password" : "new-password"}
          value={form.password}
          onChange={handleChange}
          required
          minLength={8}
          placeholder="حداقل ۸ کاراکتر"
          className={inputClass}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#657267] transition hover:text-[#10251c] focus:outline-none focus:ring-2 focus:ring-[#526e58]/30"
        >
          {showPassword ? <FiEyeOff size={19} /> : <FiEye size={19} />}
        </button>
      </FromRow>

      <AnimatePresence initial={false}>
        {isLogin && (
          <motion.div
            key="login-options"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm"
          >
            <Remember
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
            />

            <ForgetPassword setMessage={setMessage} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#10251c] px-5 py-4 text-xl font-medium text-white transition-colors duration-300 hover:bg-[#263f30] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>
          {isLoading
            ? "لطفاً صبر کنید..."
            : isLogin
              ? "ورود به حساب کاربری"
              : "ایجاد حساب کاربری"}
        </span>

        {!isLoading && <FiArrowLeft size={18} />}
      </motion.button>
    </motion.form>
  );
};

export default Form;
