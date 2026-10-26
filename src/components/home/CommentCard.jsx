import { motion } from "motion/react";
import { FiStar } from "react-icons/fi";

const CommentCard = ({ comment, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group flex h-full min-h-[36rem] flex-col justify-between rounded-[0.2rem] border border-black/10 bg-[#f7f5f0] p-[2.4rem] transition-shadow duration-500 hover:border-[#52684d]/30 hover:shadow-[0_2rem_6rem_rgba(0,0,0,0.08)] sm:p-[2.8rem] lg:p-[2.4rem] xl:p-[2.8rem]"
    >
      <div>
        <span className="font-serif text-[6rem] leading-none text-[#52684d]/25">
          “
        </span>

        <p className="mt-[0.4rem] text-[1.4rem] leading-[2] text-black/65 sm:text-[1.5rem]">
          {comment.comment}
        </p>
      </div>

      <div className="mt-[3rem]">
        <div className="mb-[2.4rem] flex items-center gap-[0.4rem]">
          {[1, 2, 3, 4, 5].map((star) => (
            <FiStar
              key={star}
              size={14}
              className="fill-[#9b6b2d] text-[#9b6b2d]"
            />
          ))}
        </div>

        <div className="flex items-center gap-[1.2rem] border-t border-black/10 pt-[2rem]">
          <div className="h-[4.4rem] w-[4.4rem] shrink-0 overflow-hidden rounded-full">
            <motion.img
              src={comment.image}
              alt={comment.name}
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[1.4rem] font-medium">
              {comment.name}
            </h3>

            <p className="mt-[0.5rem] text-[1.1rem] leading-[1.8] text-black/40">
              {comment.role} · {comment.location}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CommentCard;