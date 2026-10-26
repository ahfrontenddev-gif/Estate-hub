import {motion} from "motion/react";

const Services = ({containerVariants,services,itemVariants}) => {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-[140rem]">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-[#718366]">
              WHAT WE DO
            </p>
            <h2 className="text-3xl font-medium leading-relaxed sm:text-5xl">
              همه‌چیز از یک انتخاب
              <span className="text-[#718366]"> درست آغاز می‌شود.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#10251c]/65 sm:text-xl">
            خدمات ما برای همراهی در مراحل مختلف خرید، فروش و سرمایه‌گذاری در
            بازار املاک طراحی شده‌اند.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group flex min-h-[30rem] flex-col border border-[#10251c]/10 bg-[#f7f6f0] p-7 transition-colors duration-300 hover:border-[#718366]/60 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-[#10251c]/40">
                    / {service.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#10251c]/15 transition duration-300 group-hover:border-[#10251c] group-hover:bg-[#10251c] group-hover:text-[#c6d4a5]">
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-medium sm:text-5xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-[#10251c]/65 sm:text-2xl">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#10251c]/10 px-3 py-2 text-xl text-[#10251c]/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
