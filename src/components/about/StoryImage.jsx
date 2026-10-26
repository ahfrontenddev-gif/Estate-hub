import {motion} from "motion/react";
import { FiPlay } from "react-icons/fi";

const StoryImage = ({setIsVideoOpen}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative min-w-0"
    >
      <div className="aspect-[1.25/1] overflow-hidden bg-[#e5e4d9]">
        <img
          src="/images/properties/property-2-3.jfif"
          alt="فضای داخلی مدرن و آرامش‌بخش"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>

      <button
        type="button"
        onClick={() => setIsVideoOpen(true)}
        className="absolute bottom-0 right-0 flex min-h-[11rem] w-[15rem] flex-col items-center justify-center bg-[#10251c] p-5 text-right text-white transition hover:bg-[#294535] sm:w-[18rem]"
      >
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 p-2">
          <FiPlay size={17} />
        </span>
        <span className="mt-2 text-[1.5rem] text-white/60">مشاهده ویدئو</span>
      </button>
    </motion.div>
  );
};

export default StoryImage;
