import { faqs } from "../../data/apiFAQ";
import { useState } from "react";
import SupportPanel from "./SupportPanel";
import SearchBox from "./SearchBox";
import ListQuestions from "./ListQuestions";

const List = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );
  return (
    <section className="bg-[#fbfaf6]">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,1.8fr)_minmax(300px,0.9fr)] lg:gap-12 lg:px-20 lg:py-24">
        <div>
          <div className="mb-8">
            <p className="text-sm font-medium tracking-wide text-[#71816a] sm:text-base">
              سوالات عمومی
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-relaxed sm:text-4xl">
              پرسش‌های متداول درباره خرید ملک
            </h2>

            <p className="mt-4 text-base leading-9 text-[#657168] sm:text-lg">
              اگر پاسخ سوال خود را پیدا نکردید، می‌توانید با ما تماس بگیرید یا
              از طریق فرم ارتباط با ما سوال خود را ارسال کنید.
            </p>
          </div>

          <SearchBox
            search={search}
            setOpenIndex={setOpenIndex}
            setSearch={setSearch}
          />

          <ListQuestions filteredFaqs={filteredFaqs} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>

        <SupportPanel />
      </div>
    </section>
  );
};

export default List;
