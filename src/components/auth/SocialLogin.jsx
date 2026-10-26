const SocialLogin = ({setMessage}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() =>
          setMessage("ورود با گوگل هنوز به سرویس احراز هویت متصل نشده است.")
        }
        className="flex items-center justify-center gap-2 rounded-lg border border-[#d8d9ce] px-3 py-3.5 text-xl transition hover:border-[#526e58] hover:bg-white/50 sm:text-sm"
      >
        <span className="font-bold text-xl text-[#4285F4]">G</span>
        ادامه با گوگل
      </button>

      <button
        type="button"
        onClick={() =>
          setMessage("ورود با اپل هنوز به سرویس احراز هویت متصل نشده است.")
        }
        className="flex items-center justify-center gap-2 rounded-lg border border-[#d8d9ce] px-3 py-3.5 text-xl transition hover:border-[#526e58] hover:bg-white/50 sm:text-sm"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
          aria-hidden="true"
        >
          <path d="M16.37 12.25c.02 2.08 1.82 2.77 1.84 2.78-.02.05-.29 1.02-.95 2.03-.57.87-1.17 1.74-2.1 1.76-.91.02-1.2-.57-2.24-.57-1.04 0-1.36.55-2.22.59-.89.03-1.57-.94-2.15-1.8-1.18-1.71-2.08-4.83-.87-6.93.6-1.04 1.68-1.7 2.85-1.72.89-.02 1.73.61 2.27.61.54 0 1.55-.75 2.61-.64.44.02 1.68.18 2.47 1.34-.06.04-1.48.86-1.51 2.55ZM14.66 6.91c.47-.57.79-1.36.7-2.15-.68.03-1.5.45-1.99 1.02-.44.51-.82 1.32-.72 2.1.76.06 1.54-.39 2.01-.97Z" />
        </svg>
        ادامه با اپل
      </button>
    </div>
  );
};

export default SocialLogin;
