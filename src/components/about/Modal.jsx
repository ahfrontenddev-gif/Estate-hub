import { motion } from "motion/react";
import { FiX } from "react-icons/fi";

const Modal = ({setIsVideoOpen}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsVideoOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08120d]/90 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[90rem] overflow-hidden rounded-lg bg-[#10251c]"
      >
        <button
          type="button"
          onClick={() => setIsVideoOpen(false)}
          aria-label="بستن ویدئو"
          className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
        >
          <FiX size={21} />
        </button>

        <video
          className="aspect-video w-full bg-black object-contain"
          controls
          autoPlay
          playsInline
          src="/videos/luxora-tour.mp4"
        >
          مرورگر شما از پخش ویدئو پشتیبانی نمی‌کند.
        </video>

        <div className="px-5 py-4 text-white">
          <h3 className="text-[1.5rem] font-medium">داستان لوکسورا</h3>
          <p className="mt-2 text-[1.15rem] leading-7 text-white/60">
            روایت ما از انتخاب آگاهانه و تجربه‌ای متفاوت در دنیای املاک.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
