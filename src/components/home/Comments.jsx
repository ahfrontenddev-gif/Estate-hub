import { useRef } from "react";
import { motion } from "motion/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CommentCard from "./CommentCard";
import Reveal from "../animate/Reveal";
import { comments } from "../../data/apiComments";

const Comments = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".comment-slide");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 16;

    container.scrollBy({
      left: direction === "next" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section dir="rtl" className="overflow-hidden bg-[#f1eee7] text-[#101613]">
      <div className="mx-auto max-w-[140rem] px-[2rem] py-[8rem] sm:px-[3.2rem] sm:py-[9rem] lg:px-[4rem] lg:py-[12rem]">
        <Reveal>
          <div className="mb-[4rem] flex flex-col gap-[3rem] md:mb-[5rem] md:flex-row md:items-end md:justify-between lg:mb-[6rem]">
            <div>
              <div className="mb-[2rem] flex items-center gap-[1.2rem]">
                <span className="text-[1.1rem] text-[#52684d]">05</span>

                <span className="h-px w-[4rem] bg-[#52684d]" />

                <span className="text-[1.2rem] tracking-[0.15em] text-[#52684d]">
                  نظرات مشتریان
                </span>
              </div>

              <h2 className="text-[3.8rem] font-light leading-[1.3] sm:text-[5rem] lg:text-[6.4rem]">
                آنچه مشتریان
                <br />
                <span className="text-[#52684d]">ما می‌گویند</span>
              </h2>
            </div>

            <div className="max-w-[33rem]">
              <p className="text-[1.4rem] leading-[2] text-black/55 sm:text-[1.5rem]">
                اعتماد شما، بزرگ‌ترین سرمایه ماست. تجربه مشتریان لوکسورا را
                بخوانید و با اطمینان بیشتری انتخاب کنید.
              </p>

              <button
                type="button"
                onClick={() => scroll("next")}
                className="group mt-[2.4rem] flex items-center gap-[1.2rem] text-[1.4rem]"
              >
                <span>مشاهده نظرات</span>

                <span className="flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full border border-black/20 transition-colors duration-300 group-hover:bg-[#101613] group-hover:text-white">
                  <FiArrowLeft size={15} />
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-[1.6rem] overflow-x-auto scroll-smooth pb-[1.5rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className="comment-slide w-[28rem] shrink-0 snap-start sm:w-[32rem] lg:w-[calc((100%-4.8rem)/4)]"
            >
              <CommentCard comment={comment} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-[2.5rem] flex items-center justify-between border-t border-black/10 pt-[2.4rem]">
          <div className="flex items-center gap-[0.8rem]">
            <span className="text-[1.3rem] text-black/50">۰۱</span>
            <span className="h-px w-[4.8rem] bg-black/20" />
            <span className="text-[1.3rem] text-black/50">
              {String(comments.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-[0.8rem]">
            <motion.button
              type="button"
              aria-label="نظر قبلی"
              onClick={() => scroll("prev")}
              whileTap={{ scale: 0.9 }}
              className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-black/15 transition-colors duration-300 hover:bg-[#101613] hover:text-white"
            >
              <FiArrowRight size={17} />
            </motion.button>

            <motion.button
              type="button"
              aria-label="نظر بعدی"
              onClick={() => scroll("next")}
              whileTap={{ scale: 0.9 }}
              className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-black/15 transition-colors duration-300 hover:bg-[#101613] hover:text-white"
            >
              <FiArrowLeft size={17} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
