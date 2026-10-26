import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiX } from "react-icons/fi";

const Modal = ({ setIsVideoOpen }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [setIsVideoOpen]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-[1.5rem] backdrop-blur-md sm:p-[3rem]"
        onClick={() => setIsVideoOpen(false)}
      >
        <motion.button
          type="button"
          aria-label="بستن ویدیو"
          onClick={() => setIsVideoOpen(false)}
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.15 }}
          className="absolute left-[2rem] top-[2rem] z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-black sm:left-[3rem] sm:top-[3rem]"
        >
          <FiX size={22} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full max-w-[110rem]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-[1.5rem] flex items-center justify-between text-white">
            <span className="font-serif text-[2rem] tracking-[0.15em]">
              LUXORA
            </span>

            <span className="text-[1.2rem] text-white/50">
              طراحی برای زندگی بهتر
            </span>
          </div>

          <video
            src="/videos/luxora-tour.mp4"
            controls
            autoPlay
            playsInline
            className="aspect-video max-h-[75vh] w-full bg-black object-contain"
          />

          <p className="mt-[1.5rem] text-center text-[1.2rem] text-white/40">
            تجربه‌ای متفاوت از دنیای املاک لوکس
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;