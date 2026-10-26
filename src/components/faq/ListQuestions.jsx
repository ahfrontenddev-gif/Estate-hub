import {AnimatePresence, motion} from "motion/react";
import { FiChevronDown } from "react-icons/fi";

const ListQuestions = ({filteredFaqs,openIndex,setOpenIndex}) => {
  return (
    <div className="space-y-3">
      {filteredFaqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`border transition-colors duration-300 ${
              isOpen
                ? "border-[#cbd1c2] bg-[#f4f3eb]"
                : "border-[#dedfd5] bg-transparent hover:bg-[#f4f3eb]"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-5 text-right sm:px-6 sm:py-6"
            >
              <span className="text-base font-medium leading-8 sm:text-lg sm:leading-9">
                {faq.question}
              </span>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                  isOpen ? "rotate-180 bg-[#dfe5d5]" : "bg-transparent"
                }`}
              >
                <FiChevronDown size={22} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-[#dedfd5] px-4 py-5 text-base leading-9 text-[#657168] sm:px-6 sm:py-6 sm:text-lg sm:leading-10">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {filteredFaqs.length === 0 && (
        <div className="border border-dashed border-[#cbd1c2] px-5 py-10 text-center">
          <p className="text-lg font-medium">سوالی پیدا نشد</p>
          <p className="mt-2 text-base leading-8 text-[#657168]">
            عبارت دیگری را جست‌وجو کنید یا با ما در ارتباط باشید.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListQuestions;
